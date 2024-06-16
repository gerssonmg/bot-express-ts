import axios from 'axios';

const MY_TOKEN = '7249211535:AAHRMzpdnr3QToLjo4_A6uiwD7kt9LZJVfY';

const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}`;

export function apiGet(method: any, params: any, token: any) {
  const URL = `https://api.telegram.org/bot${token}`;

  console.log('GET TOKEN');
  console.log(token);

  console.log('params', params);
  return axios.get(`/${method}`, {
    baseURL: URL,
    params,
  });
}

export function apiPost(method: any, params: any, token: any) {

  const url = `${BASE_URL}/${method}`;


  return axios.post(url, params);

  // return axios({
  //   method: 'post',
  //   baseURL: BASE_URL,
  //   url: `/${method}`,
  //   params,
  // });
}

export function apiAddUserToGroup(chat_id: any, user_id: any) {
  console.log('addUserToGroup', chat_id, user_id);

  try {
    const url = `${BASE_URL}/addChatMember`;
    const params = {
      chat_id: chat_id,
      user_id: user_id,
    };

    return axios.post(url, params);
  } catch (error) {
    console.error('Erro ao adicionar membro:', error);
    return null;
  }

}

export function apiRemoveUserFromGroup(chat_id: any, user_id: any) {
  return axios({
    method: 'post',
    baseURL: BASE_URL,
    url: '/kickChatMember',
    params: {
      chat_id,
      user_id,
    },
  });
}
