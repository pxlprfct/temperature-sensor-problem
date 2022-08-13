import { Sensors } from "~/types";

export const getLastTime = (sensorData: Sensors) =>
  sensorData.at(sensorData.length - 1)?.time!;
