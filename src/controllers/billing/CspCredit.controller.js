export default function ({
  cspCreditService
}) {
  const createCspCredit = (createCspCreditRequestDTO) => {
    cspCreditService.createCspCredit(createCspCreditRequestDTO);
  };

  return Object.freeze({
    createCspCredit
  });
};