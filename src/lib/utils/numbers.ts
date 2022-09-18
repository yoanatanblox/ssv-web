// new functionality
import Decimal from 'decimal.js';

export const addNumber = (num1: any, num2: any): Decimal => {
  return new Decimal(num1).plus(num2);
};

export const multiplyNumber = (num1: any, num2: any): Decimal => {
  return new Decimal(num1).mul(num2);
};

export const toFixed = (num1: any) => {
  return new Decimal(num1);
};

export const compareNumbers = (num1: any, num2: any): boolean => {
  if (!num1 || !num2) return false;
  return new Decimal(num1).comparedTo(num2) === 0;
};

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

export const formatNumberToUi = (num?: number | string | Decimal, days?: boolean) => {
  // eslint-disable-next-line eqeqeq
  if (!num || num == 0 || Number.isNaN(num)) return days ? '0' : '0.0';
  let splitNumber = new Decimal(num).toFixed().split('.');
  if (splitNumber[1] && splitNumber[1].indexOf('9999') !== -1) {
    let precision = '';
    for (let i = 0; i < splitNumber[1].indexOf('9999') + 3; i += 1) {
      precision += '0';
    }
    precision = `0.${precision}1`;
    splitNumber = new Decimal(num).add(precision).toFixed(splitNumber[1].indexOf('9999') + 4).split('.');
  }
  if (splitNumber[1] && !days) {
    const number = splitNumber[0];
    let decimal = splitNumber[1];
    let deleteFromIndex = 0;
    let shouldContinue = true;
    let indexLoop = 0;
    while (deleteFromIndex === 0 || shouldContinue) {
      if (decimal) {
        if (decimal[indexLoop] !== '0') {
          deleteFromIndex = indexLoop + 2;
          shouldContinue = false;
        } else {
          indexLoop += 1;
        }
      } else {
        deleteFromIndex = indexLoop + 2;
        shouldContinue = false;
        indexLoop += 1;
      }
    }
    decimal = decimal.slice(0, deleteFromIndex);
    if (decimal.replace(/0+$/, '') === '') {
      decimal = '';
    } else {
      decimal = `.${decimal}`;
    }
    const final = `${number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}${decimal}`;
    return new Decimal(final).toFixed(Math.max(decimal.length - 1, 0)).toString();
  }
  return `${splitNumber[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
};

export const roundCryptoValueString = (desiredNumber: number, decimalPlaces: number = 18) => {
  if (desiredNumber === 0) return '0';
  const arr = desiredNumber.toString().split('.');
  const fraction = arr[1].substr(0, decimalPlaces);
  return `${arr[0]}.${fraction}`;
};

export const roundNumber = (num: number, rlength: number) => {
  // eslint-disable-next-line no-restricted-properties
  return Math.round(num * Math.pow(10, rlength)) / Math.pow(10, rlength);
};

export const formatNumberFromBeaconcha = (num: number) => {
  // eslint-disable-next-line no-bitwise
  return formatNumberToUi(num * 10 ** -9);
};
