const express = require('express');
import { handler, handler_new_member, handler_room_bot } from './controller/index';
import { PrismaClient } from '@prisma/client';
import zod from 'zod';

const PORT = process.env.PORT || 4047;

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.post('/webhook/:token', async (req: any, res: any) => {
  console.log('TOKEN');
  console.log(req?.params);
  console.log('POST req.body');
  console.log(req?.body);

  if (req.body?.message?.text && req.body?.message?.chat?.id > 0) {
    res.send(await handler(req));
  } else if (
    req?.body?.message?.chat?.id == -1002154396530 &&
    req?.body?.message?.text
  ) {
    res.send(await handler_room_bot(req));
  } else if (req.body?.message?.new_chat_member) {
    res.send(await handler_new_member(req));
  } else {
    res.send('Hello Post');
  }
});

app.get('/check', async (req: any, res: any) => {
  console.log('GET');
  // console.log(req);
  console.log(req?.body);
  res.send('OK');
});

app.delete('*', async (req: any, res:any) => {
  console.log('DELETE');
  // console.log(req);
  console.log(req?.body);
  res.send(await handler(req.body));
});

app.put('*', async (req: any, res: any) => {
  console.log('PUT');
  console.log(req?.body);
  res.send(await handler(req.body));
});

// prisma
app.get('/prisma/users', async (req: any, res: any) => {
  const users = await prisma.user.findMany();

  return res.json(users);
//   res.send('OK');
});

// prisma
app.post('/prisma/users', async (req: any, res: any) => {
const createUserSchema = zod.object({
    name: zod.string(),
    email: zod.string().email(),
  });

  const { name, email } = createUserSchema.parse(req.body);

  await prisma.user.create({
    data: {
      name,
      email,
    },
  });

  res.send("OK");
//   res.send('OK');
});


app.listen(PORT, function (err: any) {
  if (err) console.log(err);
  console.log(`Server is running on port ${PORT}`);
});
