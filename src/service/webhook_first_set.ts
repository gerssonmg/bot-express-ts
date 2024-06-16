import { sendMessageV2 } from "../controller/lib/Telegram";

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

function checkingDateUserPayment(email: String, number: String) {
    if (email === "ok@gmail.com") {
        return true;
    }
    return false;
}

export function getCommand(body: any, token: string) {

    const message_this_bot = getMessagesDB(token)
    if (body?.message?.text === "/start") {
        try {

            const { text, reply_markup } = message_this_bot["/start"]
            sendMessageV2(body?.message?.chat?.id, text, reply_markup, token)
        } catch (error) {
            console.log("error 0001")
        }
    } else if (body?.message?.text.startsWith("email=")) {

        const parts = body?.message?.text.split("::");
        const email = parts[0]?.split("=")[1]
        const number = parts[1]?.split("=")[1]

        const response_checking = checkingDateUserPayment(email, number)

        if (response_checking) {
            const { text, reply_markup } = message_this_bot["ok_payment_plan_vip_month"]
            sendMessageV2(body?.message?.chat?.id, text, reply_markup, token)
        } else {

            sendMessageV2(body?.message?.chat?.id, `Não identifiquei o pagamento para os dados: email=${email} e telefone=${number}.\nVerifique se preenche as informações corretas. Tente de novo ou aguarde alguns minutos para tentar novamente`, "", token)
        }


    }
    else if (body.callback_query) {
        try {
            const { callback_query } = body
            const chat_id = callback_query?.from?.id

            if (callback_query.data === "talk_support") {
                const tel_sup = "Entre em contato com: erles.suporte@gmail.com \nou \nTelefone: 21972178786"
                sendMessageV2(chat_id, tel_sup, "", token)
            } else if (callback_query.data === "plan_vip_month") {

                const { text, reply_markup } = message_this_bot["plan_vip_month"]

                sendMessageV2(chat_id, text, reply_markup, token)
            }
            else if (callback_query.data === "check_payment_plan_vip_month") {

                const { text, reply_markup } = message_this_bot["check_payment_plan_vip_month"]

                sendMessageV2(chat_id, text, reply_markup, token)
            }

        } catch (error) {
            console.log("error 0002")
        }

    } else {
        sendMessageV2(body?.message?.chat?.id, "Não entendi sua mensagem. Vamos começar de novo. Digite: /start", "", token)
    }
}

function getMessagesDB(token: string) {
    return {

        "/start": {
            text: "Olá, eu sou o bot do Erles! 🤖\n\nEscolha qual o plano você vai pagar.🚀\n\n🚀",
            reply_markup: {
                "inline_keyboard": [
                    [
                        {
                            "text": "Plano Vip Mensal",
                            "callback_data": "plan_vip_month"
                        }
                    ],
                    [
                        {
                            "text": "Verificar pagamento do Plano Vip Mensal",
                            "callback_data": "check_payment_plan_vip_month"
                        }
                    ],
                    [
                        {
                            "text": "Falar com Suport",
                            "callback_data": "talk_support"
                        }
                    ]
                ]
            }
        },
        "plan_vip_month": {
            text: "Pague nesse link: https://pay.hotmart.com/S76547979E?off=zltgw1it \nApos a plataforma confirmar o pagamento. Clique em Verificar pagamento",
            reply_markup: {
                "inline_keyboard": [
                    [
                        {
                            "text": "Verificar pagamento",
                            "callback_data": "check_payment_plan_vip_month"
                        }
                    ]
                ]
            }
        },
        "check_payment_plan_vip_month": {
            text: "Para que eu possa verificar seu pagamento informe seus dados. Atenção os dados devem esta exatamento no padrão a baixo: \n email=seu_email@gmail.com::telefone=38991002233\nAtenção para o separador '::' entre os dados. Substitua seu_email@gmail pelo seu email que usou na compra e 38991002233 pelo telefone que usou na compra",
            reply_markup: {}
        },
        "ok_payment_plan_vip_month": {
            text: "Parabens pela sua compra. Aqui esta o link de acesso ao seu grupo: 🏆🏆 Link do grupo VIP: https://t.me/+24j_fA5-_R1jZTMx . 🏆🏆 \n\nEsse e um grupo VIP o link de acesso deve ser usado apenas por você. Os usuarios no grupo são validados frequentemente, qualquer inconsistencia podem ser removidos. \n\nAproveite seu conteudo",
            reply_markup: {}
        },
    }
}

