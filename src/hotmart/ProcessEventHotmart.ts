import prismaClient from "../config/prismaConfig";

export async function processEvent(event: any) {
    try {
        // Persistir evento no banco de dados usando Prisma
        const eventoSalvo = await prismaClient.hotmartEvent.create({
            data: {
                eventBody: event,
                eventBodyId: event?.id || "",
                eventBodyEvent: event?.event || "",
                eventBodyCreationDate: new Date(event?.creation_date) || "",
                eventBodyVersion: event?.version || "",
                eventBodySubscriberEmail: event?.data?.subscriber?.email || "",
                eventBodyBuyerEmail: event?.data?.buyer?.email || "",
                eventBodyBuyerCheckoutPhone: event?.data?.buyer?.checkout_phone || "",
                eventBodyProductId: event?.data?.product?.id || null,
                eventBodyProductName: event?.data?.product?.name || ""
            },
        });

        console.log(`Evento ${event.event} salvo no banco de dados:`);
    } catch (error) {
        console.error('Erro ao salvar evento no banco de dados:', error);
    }

    switch (event.event) {
        case 'PURCHASE_EXPIRED':
            console.log('Compra expirada:', event.data);
            // Lógica para processar compra expirada
            break;
        case 'PURCHASE_REFUNDED':
            console.log('Compra reembolsada:', event.data);
            // Lógica para processar compra reembolsada
            break;
        case 'SUBSCRIPTION_CANCELLATION':
            console.log('Cancelamento de assinatura:', event.data);
            // Lógica para processar cancelamento de assinatura
            break;
        case 'PURCHASE_DELAYED':
            console.log('Compra atrasada:', event.data);
            // Lógica para processar compra atrasada
            break;
        case 'PURCHASE_APPROVED':
            console.log('Compra aprovada:', event.data);
            // Lógica para processar compra aprovada
            break;
        case 'PURCHASE_PROTEST':
            console.log('Pedido de reembolso:', event.data);
            // Lógica para processar pedido de reembolso
            break;
        case 'PURCHASE_CANCELED':
            console.log('Compra cancelada:', event.data);
            // Lógica para processar compra cancelada
            break;
        default:
            console.log('event desconhecido:', event.event);
            // Lógica para lidar com events desconhecidos
            break;
    }
}