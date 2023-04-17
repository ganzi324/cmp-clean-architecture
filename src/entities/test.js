import CspCredit from './CspCredit';



test('Csp Test', () => {
  expect(() => new CspCredit(1, 'cid', 'A001', 'reason', null, null)).toThrow();
  const credit = new CspCredit('id', 3, 'A001', 'reason');
  expect(credit.addCredit(3)).toBe(6);
  expect(credit.getCustomerId()).toBe('id');
  expect(credit.getCategory()).toBe('A001');
  expect(credit.callAddCredit(3)).toBe(9);
});