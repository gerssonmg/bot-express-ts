import axios from 'axios';

const MY_TOKEN = '7249211535:AAHRMzpdnr3QToLjo4_A6uiwD7kt9LZJVfY';

const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}`;

function getAxiosInstance() {
  return {
    get(method, params, token) {
      const URL = `https://api.telegram.org/bot${token}`;

      console.log('GET TOKEN');
      console.log(token);

      console.log('params', params);
      return axios.get(`/${method}`, {
        baseURL: URL,
        params,
      });
    },
    post(method, params) {

      return axios({
        method: 'post',
        baseURL: BASE_URL,
        url: `/${method}`,
        params,
      });
    },
    addUserToGroup(chat_id, user_id) {
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

      // return axios.post('/addChatMember', {
      //   baseURL: BASE_URL,
      //   params: {
      //     chat_id,
      //     user_id,
      //   },
      // });
    },
    removeUserFromGroup(chat_id, user_id) {
      return axios({
        method: 'post',
        baseURL: BASE_URL,
        url: '/kickChatMember',
        params: {
          chat_id,
          user_id,
        },
      });
    },
  };
}


module.exports = { axiosInstance: getAxiosInstance() };
