// const { axiosInstance } = require('./axios');
import { axiosInstance } from './axios';

function sendMessage(messageObj, messageText, token) {
  console.log(messageObj, messageText);
  return axiosInstance.get(
    'sendMessage',
    {
      chat_id: messageObj.chat.id,
      text: messageText,
    },
    token,
  );
}

export function handleMessage(messageObj, token) {
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
    // return axiosInstance.addUserToGroup(-4253594186, messageObj.chat.id);
    return sendMessage(
      messageObj,
      '🏆🏆 Link do grupo VIP: https://t.me/+24j_fA5-_R1jZTMx .Bons estudos 🏆🏆',
      token,
    );
    // return sendMessage(
    //   messageObj,
    //   'Link: https://gist.github.com/gerssonmg/2912f4cc3e9d2cff68e3c38281b42c69 Não esqueça de se inscrever no meu canal: https://www.youtube.com/channel/UCNiJgzoC7f8QvzODJd4LSgA. Lembrando que em breve o conteudo vai de ouro para dimante, e precisa estar inscrivo para pegar essas joias heheeh :) . Use com moderacao e bons estudos'
    // );
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

// export function handleMessageWelCome(messageObj) {}
