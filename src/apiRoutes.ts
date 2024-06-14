import express from 'express';
import {
  handler,
  handler_new_member,
  handler_room_bot,
} from './controller/index';
import prismaClient from './config/prismaConfig';
import zod from 'zod';

const router = express.Router();

router.post('/webhook/:token', async (req: any, res: any) => {
  console.log('TOKEN');
  console.log(req?.params);
  console.log('POST req.body');
  console.log(req?.body);

  if (req.body?.message?.text && req.body?.message?.chat?.id > 0) {
    try {
      res.send(await handler(req));
    } catch (error) {
      console.log('handler', error);
    }
  } else if (
    req?.body?.message?.chat?.id == -1002154396530 &&
    req?.body?.message?.text
  ) {
    try {
      res.send(await handler_room_bot(req));
    } catch (error) {
      console.log('handler_room_bot', error);
    }
  } else if (req.body?.message?.new_chat_member) {
    try {
      res.send(await handler_new_member(req));
    } catch (error) {
      console.log('handler_new_member', error);
    }
  } else {
    res.send('Hello Post');
  }
});

router.get('/check', async (req: any, res: any) => {
  console.log('GET');
  // console.log(req);
  console.log(req?.body);
  res.send('OK');
});

router.delete('*', async (req: any, res: any) => {
  console.log('DELETE');
  // console.log(req);
  console.log(req?.body);
  res.send(await handler(req.body));
});

router.put('*', async (req: any, res: any) => {
  console.log('PUT');
  console.log(req?.body);
  res.send(await handler(req.body));
});

// prisma
router.get('/prisma/users', async (req: any, res: any) => {
  const users = await prismaClient.user.findMany();

  return res.json(users);
});

router.post('/prisma/users', async (req: any, res: any) => {
  const createUserSchema = zod.object({
    name: zod.string(),
    email: zod.string().email(),
  });

  const { name, email } = createUserSchema.parse(req.body);

  await prismaClient.user.create({
    data: {
      name,
      email,
    },
  });

  res.send('OK');
});

router.get('/debug-sentry', function mainHandler(req, res) {
  throw new Error('My first Sentry error!');
});

export default router;
