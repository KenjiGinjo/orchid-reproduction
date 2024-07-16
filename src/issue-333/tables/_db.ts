import { orchidORM } from 'orchid-orm';
import { CONSTANT } from '../../utils';
import { TableActivity } from './activity';
import { TableActivityMember } from './activity-member';

export const db = orchidORM(
  {
    log: true,
    databaseURL: CONSTANT.DATABASE_URL,
  },
  {
    activity: TableActivity,
    activityMember: TableActivityMember,
  },
);
