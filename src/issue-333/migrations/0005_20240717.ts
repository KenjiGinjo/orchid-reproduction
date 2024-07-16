import { change } from '../script';

change(async (db) => {
  await db.createTable('activity', (t) => ({
    id: t.string().primaryKey(),
    createdAt: t.timestampNoTZ(),
    updatedAt: t.timestampNoTZ(),
    deletedAt: t.timestampNoTZ().nullable(),
    name: t.varchar(),
  }));
  await db.createTable('activity_member', (t) => ({
    id: t.string().primaryKey(),
    createdAt: t.timestampNoTZ(),
    updatedAt: t.timestampNoTZ(),
    deletedAt: t.timestampNoTZ().nullable(),
    name: t.varchar(),
    activityId: t.varchar(),
  }));
});
