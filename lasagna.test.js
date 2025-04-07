const {
    EXPECTED_MINUTES_IN_OVEN,
    remainingMinutesInOven,
    preparationTimeInMinutes,
    totalTimeInMinutes,
  } = require('./lasagna');
  
  test('EXPECTED_MINUTES_IN_OVEN is 40', () => {
    expect(EXPECTED_MINUTES_IN_OVEN).toBe(40);
  });
  
  test('remainingMinutesInOven returns correct value', () => {
    expect(remainingMinutesInOven(30)).toBe(10);
  });
  
  test('preparationTimeInMinutes returns correct value', () => {
    expect(preparationTimeInMinutes(2)).toBe(4);
  });
  
  test('totalTimeInMinutes returns correct value', () => {
    expect(totalTimeInMinutes(3, 20)).toBe(26);
  });
  