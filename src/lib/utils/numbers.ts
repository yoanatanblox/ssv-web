/**
 * Get maximum precision of float number.
 * @param numeric
 */
export const getPrecision = (numeric: number | string) => {
  let precision = 0;
  try {
    const numberParts = String(numeric).split(/[-+]/gi);
    if (numberParts.length < 2) {
      throw Error('Not scientific format');
    }
    precision = parseInt(numberParts[1], 10);
    precision += numberParts[0].replace(/[e.]/gi, '').length;
  } catch {
    if (!precision) {
      try {
        const numberParts = String(numeric).split('.');
        precision = numberParts[1].length + 1;
      } catch (error) {
        //
      }
    }
  }
  return precision;
};

/**
 * Format float number to maximum precision unlike regular floats does.
 * @param numeric
 */
export const formatFloatToMaxPrecision = (numeric: number | string) => {
  const floatNum = parseFloat(String(numeric));
  if (Number.isNaN(floatNum)) {
    return '0.0';
  }
  let floatString = floatNum.toFixed(getPrecision(numeric));
  if (floatString.endsWith('.0') || floatString.split('.').length < 2) {
    return floatString;
  }
  floatString = floatString.replace(/(0)+$/gi, '');
  if (floatString.endsWith('.')) {
    floatString = floatString.replace('.', '');
  }
  return floatString;
};

/**
 * Limit float number to limited precision
 * @param desiredNumber
 * @param decimalPlaces
 */
const MAX_CRYPTO_VALUE_PRECISION = 18;
export const roundCryptoValueString = (desiredNumber: number, decimalPlaces: number = MAX_CRYPTO_VALUE_PRECISION) => {
  const arr = desiredNumber.toString().split('.');
  if (arr.length === 1) {
    return desiredNumber;
  }
  let len = decimalPlaces;
  const totalDigits = arr[0].length + arr[1].length;
  if (totalDigits > MAX_CRYPTO_VALUE_PRECISION) {
    len = decimalPlaces - arr[0].length;
    console.debug(`Adjusted crypto value decimal precision to ${len} numbers instead of ${decimalPlaces}, because total digits is ${totalDigits}`);
    return '0';
  }
  const fraction = arr[1].substr(0, len);
  return `${arr[0]}.${fraction}`;
};
