# orchid-reproduction

Reuseable repo for orchid issue reproduction

> This repo need [bun](https://bun.sh/) to run test.

> The default database url is: `postgresql://postgres:password@127.0.0.1:5432/orchid-reproduction`

## issue-333

https://github.com/romeerez/orchid-orm/issues/333

check the `issue-333` folder for more details.

```
bun run src/issue-333/script.ts migrate
bun test src/issue-333/issue.spec.ts --preload ./src/issue-327/test-setup.ts
```
