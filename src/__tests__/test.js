import Validator from '../index';

describe('true', () => {
    test.each([
        ['max666semenov'],
        ['Max-6-6-6-Se-me-nov'],
        ['Max-666_555-semenov'],
        ['max_6_6_6_semenov'],
        ['m-ax666semeno_v'],
        ['MaxSemenov'],
        ['max'],
        ['m666v'],
      ])('checking correct nicknames', (nickname) => {
        const valid = new Validator(nickname);
        expect(valid.validateUsername(nickname)).toBe(true);
      });
});

describe('false', () => {
    test.each([
        ['_max666semenov'],
        ['Max-6-6-6-Se-me-nov_'],
        ['Max-666555-semenov'],
        ['99max_6_6_6_semenov'],
        ['m-ax666semeno_v9'],
        ['-MaxSemenov-'],
        ['789'],
        ['m.666.v'],
      ])('checking for incorrect nicknames', (nickname) => {
        const valid = new Validator(nickname);
        expect(valid.validateUsername(nickname)).toBe(false);
      });
});