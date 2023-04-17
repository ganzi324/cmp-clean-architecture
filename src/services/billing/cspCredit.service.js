export default ({ cspCreditRepository }) => {
  const createCspCredit = (CreateCspCreditDTO) => {
    const {
      customerId,
      credit,
      category,
      reason,
      startDate,
      endDate
    } = CreateCspCreditDTO;

    cspCreditRepository.createCspCredit(CreateCspCredit);
  };

  return {
    createCspCredit
  };
};