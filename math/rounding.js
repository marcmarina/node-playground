export function roundToDecimal(value, decimalPlaces) {
  const factor = 10 ** decimalPlaces;

  return Math.round(value * factor) / factor;
}

export function roundToOrderOfMagnitude(number) {
  const orderOfMagnitude = Math.floor(Math.log10(number));

  const factor = 10 ** orderOfMagnitude;

  return Math.round(number / factor) * factor;
}
