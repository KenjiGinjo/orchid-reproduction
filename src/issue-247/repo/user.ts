import { createRepo } from 'orchid-orm';
import { db } from '../tables';

export const user = createRepo(db.user, {
  queryMethods: {
    whereActive: (q) => {
      return q.where({ active: true });
    },
  },
});
