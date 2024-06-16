import { apiPost } from './axios';

function sendMessage(messageObj: any, messageText: any, token: any) {
  console.log(messageObj, messageText);
  return apiPost(
    'sendMessage',
    {
      chat_id: messageObj.chat.id,
      text: messageText,
      "reply_markup": {
        "inline_keyboard": [
          [
            { "text": "Botão 1", "callback_data": "botao1" }
          ],
          [
            { "text": "Botão 2", "callback_data": "botao2" }
          ],
          [
            { "text": "Botão 3", "callback_data": "botao3" }
          ]
        ]
      }
    },
    token,
  );
}

export function sendMessageV2(
  chat_id: any,
  messageText: any,
  reply_markup: any,
  token: any
) {
  console.log("chat_id")
  console.log(chat_id)
  return apiPost(
    'sendMessage',
    {
      chat_id: chat_id,
      text: messageText,
      reply_markup: reply_markup
    },
    token,
  );
}

export function handleMessage(messageObj: any, token: any) {
  const messageText = messageObj.text || '';

  if (messageText.charAt(0) === '/') {
    const command = messageText.substr(1);

    switch (command) {
      case 'start':
        return sendMessage(
          messageObj,
          '🙋🏻‍♂️🙋🏻‍♂️Hello! Welcome to the bot. Deseja acesso o canal 🏆🏆 VIP 🏆🏆 para ver os links do codigos de ouro?. Respondendo com "sim" ou "não"',
          token,
        );
      default:
        return sendMessage(messageObj, 'Command not found', token);
    }
  } else if (
    messageText == 'sim' ||
    messageText == 'Sim' ||
    messageText == 'si' ||
    messageText == 's' ||
    messageText == 'yes' ||
    messageText == 'y'
  ) {
    return sendMessage(
      messageObj,
      '🏆🏆 Link do grupo VIP: https://t.me/+24j_fA5-_R1jZTMx .Bons estudos 🏆🏆',
      token,
    );
  } else if (
    messageText == 'Não' ||
    messageText == 'Nao' ||
    messageText == 'N' ||
    messageText == 'n' ||
    messageText == 'não' ||
    messageText == 'nao'
  ) {
    return sendMessage(
      messageObj,
      '☕☕ Entendi, foi um prazer conversar conversar com você. Vou ali fazer um cafe. Até mais! ☕☕',
      token,
    );
  } else {
    return sendMessage(
      messageObj,
      '😪😪Não entendi seu comando:  #' +
      messageText +
      '#  . Tente novamente digitando 🔄🔄: /start',
      token,
    );
  }
}
