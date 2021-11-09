class ArgumentError extends Error {}


class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}


const reportOverheating = (temperature) => {
  try {
    throw new Error()
  } catch (error) {
    if (temperature === null) {
      throw new Error(new ArgumentError())
    } else if (temperature > 500){
      throw new Error(new OverheatingError(temperature))
    }
  }
}

console.log(reportOverheating(null))