import cspCreditModel from '../../oms/billing/cspCredit.model';

export default function cspCreditDb() {
  const getSumOfCreditsPerMonth = async () => {
    const result = await cspCreditModel.aggregate([
      {

      }
    ]);

    return result;
  };

  return {
    getSumOfCreditsPerMonth,
  };
};