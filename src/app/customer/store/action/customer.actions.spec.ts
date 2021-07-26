import * as fromCustomer from './customer.actions';

describe('stateCustomers', () => {
  it('should return an action', () => {
    expect(fromCustomer.stateCustomers().type).toBe('[Customer] State Customers');
  });
});
