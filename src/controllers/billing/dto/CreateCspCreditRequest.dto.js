export default function ({
  id = '',
  customerId = '',
  credit = 0,
  category = null,
  reason = '',
  startDate = null,
  endDate = null,
}) {
  return {
    id: id,
    customerId: customerId,
    credit: credit,
    category: category,
    reason: reason,
    startDate: startDate,
    endDate: endDate,
  };
};