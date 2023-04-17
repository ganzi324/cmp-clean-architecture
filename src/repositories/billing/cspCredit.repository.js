export default function cspCreditRepository({ cspCreditDb }) {
  const getSumOfCreditsPerMonth = (year) => cspCreditDb.getSumOfCreditsPerMonth(year);
  const getMonthlySumOfCreditsPerMonth = (year) => cspCreditDb.getMonthlySumOfCreditsPerMonth(year);

  return {
    getSumOfCreditsPerMonth,
    getMonthlySumOfCreditsPerMonth
  };
};