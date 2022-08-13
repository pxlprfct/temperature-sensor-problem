# Opvia Temperature Sensor Problem

A scientist is measuring temperature over time in a vessel. They don't trust the accuracy of the sensors so they decide to use 2 sensors to measure the temperature. This results in two sets of time-series measurements. The times of both sensors are not in-sync. These are stored in arrays in the following format:

```ts
const sensor_1_data = [..., {time: 10.020, temperature: 7.71}, {time: 10.070, temperature: 7.9}, ...];
const sensor_2_data = [..., {time: 10.019, temperature: 7.37}, {time: 10.029, temperature: 7.4}, ...];
```

Write a function in javascript that would generate a time-series of data that could be used to plot the average temperature value over time.

---

# What I did
## Data generation
- Created a generator to create some test data (`src/data/generate-data.ts`)

## Actual problem
- Found the point where the data overlaps
- Merged and sorted the data
- Graphed it

## General feedback
- 👎 The problem came without a test dataset
- 👎 The problem was a little vague(?)
    - I created a generator to create some test data, based on the examples given... but an 'average' of a sensor recording 5x as often as another isn't very useful.
- Unclear if the data was meant to carry on past where 1 sensor stopped recording.

## Issues
The final data is kinda jank. I could 'average' the data, but it's essentially just going to be the dataset that's recording significantly more often. I _could_ break the dataset into chunks of 'x' milliseconds, but it's still the same.

--- 

# Running the project

## Requirements
- Node/Bun
- npm/pnpm

## Installation
- `pnpm i`

## Scripts
- `pnpm run generate`
    - Creates fake datasets
- `pnpm run dev`
    - Runs the temperature sensor problem and graphs it
