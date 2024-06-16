Rodando o projeto a primeira vez:

`npm i`

`npx prisma generate`

Isso irá ler o seu arquivo schema.prisma, configurar o Prisma Client e gerar o código necessário para acessar o banco de dados PostgreSQL.


`npx prisma migrate dev`

Isso aplica todas as migrations que ainda não foram aplicadas ao seu banco de dados local. Certifique-se de que as migrations estejam corretamente definidas na pasta prisma/migrations.


`npx prisma studio`

Subindo docker:

docker run --name meu_postgres_nodejs_bot -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres


troubleshoot 

No deploy: 

ok. Localmente funcionou. Agora preciso resolver esse problema no deploy de produção:
Falha no deploy do render.com

Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "nodedeploy_pg_obe2", schema "public" at "dpg-cplnts6ehbks73cdnd50-a"
1 migration found in prisma/migrations
Error: P3009
migrate found failed migrations in the target database, new migrations will not be applied. Read more about how to resolve migration issues in a production database: https://pris.ly/d/migrate-resolve
The 20240614112002_create_users migration started at 2024-06-16 11:50:18.984562 UTC failed
==> Build failed 😞
==> Common ways to troubleshoot your deploy: https://docs.render.com/troubleshooting-deploys


