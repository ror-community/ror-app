import { helper } from '@ember/component/helper';

export function decimalFormat(params) {
  const [number] = params;

  if (isNaN(number) || number === '') {
    return "";
  }

  return new Intl.NumberFormat().format(number);
}

export default helper(decimalFormat);
