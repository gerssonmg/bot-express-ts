// const { handleMessage } = require('./lib/Telegram');
// const { axiosInstance } = require('./lib/axios');
import { handleMessage } from './lib/Telegram';
import { axiosInstance } from './lib/axios';
import { Request } from 'express';

export async function handler(req: Request) {
  const { body } = req;

  const { token } = req.params;

  console.log('AQUI');
  if (body) {
    const messageObj = body.message;
    await handleMessage(messageObj, token);
  }
}

export async function handler_new_member(req: Request) {
  const { body } = req;

  const { token } = req.params;

  console.log('AQUI');
  if (body) {
    const messageObj = req.body?.message;
    await axiosInstance.get(
      'sendMessage',
      {
        chat_id: messageObj.chat.id,
        text: `Seja bem-vindo(a) ao grupo, ${messageObj?.new_chat_member?.first_name}! 🚀🚀🚀`,
      },
      token,
    );
  }
}

export async function handler_room_bot(req: Request) {
  const { body } = req;

  const { token } = req.params;

  console.log('AQUI');
  if (body?.message?.message_id !== token.split(':')[0]) {
    if (
      token === '7249211535:AAHRMzpdnr3QToLjo4_A6uiwD7kt9LZJVfY' &&
      body.message.text === '724'
    ) {
      return;
    }

    if (token === '7249211535:AAHRMzpdnr3QToLjo4_A6uiwD7kt9LZJVfY' || true) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } else {
      if (body.message.text.split(':')[0] === 'loop') {
        const iterations = parseInt(body.message.text.split(':')[1]) || 3;
        const delay = parseInt(body.message.text.split(':')[2]) || 1000;
        for (let index = 0; index < iterations; index++) {
          console.log('INDEX', index, iterations, typeof iterations);
          await new Promise((resolve) => setTimeout(resolve, delay));
          await axiosInstance.get(
            'sendMessage',
            {
              chat_id: body.message.chat.id,
              text: `OI eu sou o ${token} 🚀🚀🚀 - ${index}`,
            },
            token,
          );
        }
        return;
      } else {
        await new Promise((resolve) => setTimeout(resolve, 5000));
      }
    }

    const messageObj = req.body?.message;
    await axiosInstance.get(
      'sendMessage',
      {
        chat_id: messageObj.chat.id,
        text: `OI eu sou o ${token} 🚀🚀🚀`,
      },
      token,
    );
  }
}

// module.exports = { handler, handler_new_member, handler_room_bot };
