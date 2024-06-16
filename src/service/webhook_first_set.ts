const PRIVATE_MESSAGE = 'private';
const GROUP_MESSAGE = 'group';
const LEFT_CHAT_PARTICIPANT = 'left_chat_participant';
const NEW_CHAT_PARTICIPANT = 'new_chat_participant'
const FLOW_MESSAGE_NO_UNIDENTIFIED = 'new_message_no_unidentified'
const FLOW_GLOBAL_NO_UNIDENTIFIED = 'new_global_no_unidentified'
const CALLBACK_QUERY_CLICK_BTN = 'callback_query_click_btn';

export function handleTelegramUpdate(update: any) {
    const { message } = update;

    if (message) {
        if (message?.text && message.chat.type === 'private') {
            // Mensagem privada
            return PRIVATE_MESSAGE;
        } else if (message?.text && (message.chat.type === 'supergroup' || message.chat.type === 'group')) {
            return GROUP_MESSAGE;
        } else if (message?.left_chat_participant) {
            // Usuário saiu do grupo
            return LEFT_CHAT_PARTICIPANT;
        } else if (message?.new_chat_participant) {
            // Usuário entrou no grupo
            return NEW_CHAT_PARTICIPANT;
        } else {
            // Mensagem em grupo
            return FLOW_MESSAGE_NO_UNIDENTIFIED;
        }
    } else if (update?.callback_query) {
        return CALLBACK_QUERY_CLICK_BTN;
    } else {
        return FLOW_GLOBAL_NO_UNIDENTIFIED;
    }
}
