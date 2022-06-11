import { convertPLNToUSD } from './../convertPLNtoUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });

  it('shoute return NaN when text input', () => {
    expect(convertPLNToUSD('6')).toBeNaN();
    expect(convertPLNToUSD('hello')).toBeNaN();
    expect(convertPLNToUSD('test')).toBeNaN();
  });

  it('shoute return NaN when missing argument', () => {
    expect(convertPLNToUSD()).toBeNaN();
    expect(convertPLNToUSD()).toBeNaN();
    expect(convertPLNToUSD()).toBeNaN();
  });

  it('shoute return error when arguemnt is not string and not a number', () => {
    expect(convertPLNToUSD({})).toBe('error');
    expect(convertPLNToUSD([])).toBe('error');
    expect(convertPLNToUSD(null)).toBe('error');
  });

  it('shoute return zero when arguemnt is lower than 0', () => {
    expect(convertPLNToUSD(-1)).toBe(0);
    expect(convertPLNToUSD(-28)).toBe(0);
    expect(convertPLNToUSD(-19291)).toBe(0);
  });
});