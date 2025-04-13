# typescript-nextjs-vercel

### Docker Desctopのpostgresコンテナからターミナルでpostgresに接続する

```
psql -h localhost -p 5432 -U nextjs_app nextjs_app_local
```


### prismaでmigrateする
```
npx dotenv-cli -e .env.local -- npx prisma migrate dev --name init
```

npx dotenv-cli -e .env.local -- npm run dev
