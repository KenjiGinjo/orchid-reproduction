import { test } from 'bun:test';
import { db } from './tables';

test('Error: invalid reference to FROM-clause entry for table "activity_member"', async () => {
  await db.activity.whereExists('members', (q) => q.where({ name: 'test' }));
});

test('Error: column activity_member.activityId does not exist"', async () => {
  await db.activity.whereExists(db.activityMember, (q) =>
    q.on('activity.id', 'activity_member.activityId').where({ name: 'test' }),
  );
});

test('type error"', async () => {
  // @ts-ignore
  await db.activity.whereExists(db.activityMember, (q) =>
    q.on('activity.id', 'activity_member.activity_id').where({ name: 'test' }),
  );
});
