import * as asciichart from "asciichart";
import { sensor_1_data, sensor_2_data } from "./data/sensors";
import { getLastTime } from "./utils/getLastSensorTime";

console.log("Sensor 1 data");
console.table(sensor_1_data);

console.log("Sensor 2 data");
console.table(sensor_2_data);

// luckily the data _starts_ in sync so we can use the first data point to start the time series
// we only need to workout where they fall out of sync

const lastTimeSensor1 = getLastTime(sensor_1_data);
const lastTimeSensor2 = getLastTime(sensor_2_data);

const smallerDataset =
  lastTimeSensor1 > lastTimeSensor2 ? sensor_2_data : sensor_1_data;

const largerDataset =
  lastTimeSensor1 > lastTimeSensor2 ? sensor_1_data : sensor_2_data;

const lastTimeBothDataSetsShare =
  lastTimeSensor1 > lastTimeSensor2 ? lastTimeSensor2 : lastTimeSensor1;

const mergedData = [
  ...largerDataset.filter(
    (measurement) => lastTimeBothDataSetsShare > measurement.time
  ),
  ...smallerDataset,
].sort((a, b) => a.time - b.time);

console.log("Merged datasets");
console.table(mergedData);

console.log(
  asciichart.plot(Object.values(mergedData).map((m) => m.temperature))
);
