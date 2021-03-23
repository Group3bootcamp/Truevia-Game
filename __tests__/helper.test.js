const {format_date,format_plural,format_url} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2021-03-21 16:12:03');
  
    expect(format_date(date)).toBe('3/21/2021');
});