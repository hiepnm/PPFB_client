import { schema } from 'normalizr';

// export const mekongtransaction = new schema.Entity('mekongTransactions', {}, { idAttribute: '_id' });
// export const walletTransaction = new schema.Entity('walletTransactions', {}, { idAttribute: 'transactionId' });
// export const arrayOfWalletTransactions = [walletTransaction];
export const user = new schema.Entity('user', {}, {idAttribute: '_id'});