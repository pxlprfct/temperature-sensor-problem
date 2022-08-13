import { Measurement } from "../types";

// sensor_1_data
// const START_TIME = 10.02;
// const TIME_INCREMENT = 0.05;
// const START_TEMPERATURE = 7.71;
// const TEMPERATURE_INCREMENT = 0.19;

// sensor_2_data
const START_TIME = 10.019;
const TIME_INCREMENT = 0.01;
const START_TEMPERATURE = 7.37;
const TEMPERATURE_INCREMENT = 0.1;

const NUMBER_OF_MEASUREMENTS = 99;

const format = (value: number): number => Number(value.toFixed(2));

const generateData = (): Measurement[] => {
  const measurements = [
    {
      time: START_TIME,
      temperature: START_TEMPERATURE,
    },
  ];

  for (let index = 0; index < NUMBER_OF_MEASUREMENTS; index++) {
    // technically cheating with the '!' here - but should be fine for the generation script
    const previous = measurements[index]!;

    measurements.push({
      time: format(TIME_INCREMENT + previous.time),
      temperature: format(TEMPERATURE_INCREMENT + previous.temperature),
    });
  }

  return measurements;
};

console.log(generateData());
