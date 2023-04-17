Object.prototype.checkType = function (target, type) {
  return Object.prototype.toString.call(target).slice(8, -1) === type;
};

class CspCredit {
  #id;
  #customerId;
  #credit;
  #category = null;
  #reason = '';
  #startDate = null;
  #endDate = null;

  constructor(
    id,
    customerId,
    credit,
    category,
    reason,
    startDate,
    endDate,
  ) {
    if (!Object.checkType(id, 'String')) {
      throw new Error('Type is not valid');
    }

    if (!Object.checkType(customerId, 'String')) {
      throw new Error('Type is not valid');
    }

    if (!Object.checkType(credit, 'Number')) {
      throw new Error('Type is not valid');
    }

    if (!Object.checkType(category, 'String')) {
      throw new Error('Type is not valid');
    }

    if (!Object.checkType(reason, 'String')) {
      throw new Error('Type is not valid');
    }

    if (!Object.checkType(startDate, 'String')) {
      throw new Error('Type is not valid');
    }

    if (!Object.checkType(endDate, 'String')) {
      throw new Error('Type is not valid');
    }

    this.id = id;
    this.customerId = customerId;
    this.credit = credit;
    this.category = category;
    this.reason = reason;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  get id() {
    return this.#id;
  }

  get customerId() {
    return this.#customerId;
  }

  get credit() {
    return this.#credit;
  }

  get category() {
    return this.#category;
  }

  get reason() {
    return this.#reason;
  }

  get startDate() {
    return this.#startDate;
  }

  get endDate() {
    return this.#endDate;
  }

  modify(cspCredit) {

  }

}

export default CspCredit;