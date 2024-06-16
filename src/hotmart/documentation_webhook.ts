const possiveisEventos = {
  ["CompraExpirda"]: {
    data: {
      product: {
        has_co_production: false,
        name: 'Produto test postback2',
        id: 0,
        ucode: 'fb056612-bcc6-4217-9e6d-2a5d1110ac2f'
      },
      commissions: [
        [Object
        ],
        [Object
        ]
      ],
      purchase: {
        offer: [Object
        ],
        order_date: 1511783344000,
        original_offer_price: [Object
        ],
        price: [Object
        ],
        checkout_country: [Object
        ],
        sckPaymentLink: 'sckPaymentLinkTest',
        order_bump: [Object
        ],
        payment: [Object
        ],
        approved_date: 1511783346000,
        full_price: [Object
        ],
        transaction: 'HP16015479281022',
        status: 'EXPIRED'
      },
      affiliates: [
        [Object
        ]
      ],
      producer: {
        name: 'Producer Test Name'
      },
      subscription: {
        subscriber: [Object
        ], plan: [Object
        ], status: 'ACTIVE'
      },
      buyer: {
        address: [Object
        ],
        name: 'Teste Comprador',
        checkout_phone: '99999999900',
        email: 'testeComprador271101postman15@example.com'
      }
    },
    hottok: 'eEaMuvZ3mioEEzpJH0PPHVFe9YBEhP5825287',
    id: '05043d93-ec0b-4320-9d65-7cad4b0462fc',
    creation_date: 1718550283482,
    event: 'PURCHASE_EXPIRED',
    version: '2.0.0'
  },
  ["CompraReembolsada"]: {
    data: {
      product: {
        has_co_production: false,
        name: 'Produto test postback2',
        id: 0,
        ucode: 'fb056612-bcc6-4217-9e6d-2a5d1110ac2f'
      },
      commissions: [[Object], [Object]],
      purchase: {
        offer: [Object],
        order_date: 1511783344000,
        original_offer_price: [Object],
        price: [Object],
        checkout_country: [Object],
        sckPaymentLink: 'sckPaymentLinkTest',
        order_bump: [Object],
        payment: [Object],
        approved_date: 1511783346000,
        full_price: [Object],
        transaction: 'HP16015479281022',
        status: 'REFUNDED'
      },
      affiliates: [[Object]],
      producer: { name: 'Producer Test Name' },
      subscription: { subscriber: [Object], plan: [Object], status: 'ACTIVE' },
      buyer: {
        address: [Object],
        name: 'Teste Comprador',
        checkout_phone: '99999999900',
        email: 'testeComprador271101postman15@example.com'
      }
    },
    hottok: 'eEaMuvZ3mioEEzpJH0PPHVFe9YBEhP5825287',
    id: '4b9b6410-809b-4b6f-ba5e-9668a51de3e9',
    creation_date: 1718550282152,
    event: 'PURCHASE_REFUNDED',
    version: '2.0.0'
  },
  ["CancelamentoDeAssinatura"]: {
    data: {
      date_next_charge: 1617105600000,
      product: { name: 'Product name com ç e á', id: 788921 },
      actual_recurrence_value: 64.9,
      subscriber: { code: '0000aaaa', name: 'User name', email: 'test@hotmart.com' },
      subscription: { id: 4148584, plan: [Object] },
      cancellation_date: 1609181285500
    },
    hottok: 'eEaMuvZ3mioEEzpJH0PPHVFe9YBEhP5825287',
    id: '1c30ae9a-4bb1-467d-816c-240d4025813a',
    creation_date: 1718550282213,
    event: 'SUBSCRIPTION_CANCELLATION',
    version: '2.0.0'
  },
  ["CompraAtrasada"]: {
    data: {
      product: {
        has_co_production: false,
        name: 'Produto test postback2',
        id: 0,
        ucode: 'fb056612-bcc6-4217-9e6d-2a5d1110ac2f'
      },
      commissions: [[Object], [Object]],
      purchase: {
        offer: [Object],
        order_date: 1511783344000,
        original_offer_price: [Object],
        price: [Object],
        checkout_country: [Object],
        sckPaymentLink: 'sckPaymentLinkTest',
        order_bump: [Object],
        payment: [Object],
        approved_date: 1511783346000,
        full_price: [Object],
        transaction: 'HP16015479281022',
        status: 'DELAYED'
      },
      affiliates: [[Object]],
      producer: { name: 'Producer Test Name' },
      subscription: { subscriber: [Object], plan: [Object], status: 'ACTIVE' },
      buyer: {
        address: [Object],
        name: 'Teste Comprador',
        checkout_phone: '99999999900',
        email: 'testeComprador271101postman15@example.com'
      }
    },
    hottok: 'eEaMuvZ3mioEEzpJH0PPHVFe9YBEhP5825287',
    id: 'b960f1cc-95fa-4e96-abc0-252ed7d2cc8e',
    creation_date: 1718550281943,
    event: 'PURCHASE_DELAYED',
    version: '2.0.0'
  },
  ["CompraAprovada"]: {
    data: {
      product: {
        has_co_production: false,
        name: 'Produto test postback2',
        id: 0,
        ucode: 'fb056612-bcc6-4217-9e6d-2a5d1110ac2f'
      },
      commissions: [[Object], [Object]],
      purchase: {
        offer: [Object],
        order_date: 1511783344000,
        original_offer_price: [Object],
        price: [Object],
        checkout_country: [Object],
        sckPaymentLink: 'sckPaymentLinkTest',
        order_bump: [Object],
        payment: [Object],
        approved_date: 1511783346000,
        full_price: [Object],
        transaction: 'HP16015479281022',
        status: 'APPROVED'
      },
      affiliates: [[Object]],
      producer: { name: 'Producer Test Name' },
      subscription: { subscriber: [Object], plan: [Object], status: 'ACTIVE' },
      buyer: {
        address: [Object],
        name: 'Teste Comprador',
        checkout_phone: '99999999900',
        email: 'testeComprador271101postman15@example.com'
      }
    },
    hottok: 'eEaMuvZ3mioEEzpJH0PPHVFe9YBEhP5825287',
    id: '3fe12a27-139c-4799-8eb8-41e954e4958f',
    creation_date: 1718550281764,
    event: 'PURCHASE_APPROVED',
    version: '2.0.0'
  },
  ["PedidoReembolso"]: {
    data: {
      product: {
        has_co_production: false,
        name: 'Produto test postback2',
        id: 0,
        ucode: 'fb056612-bcc6-4217-9e6d-2a5d1110ac2f'
      },
      commissions: [[Object], [Object]],
      purchase: {
        offer: [Object],
        order_date: 1511783344000,
        original_offer_price: [Object],
        price: [Object],
        checkout_country: [Object],
        sckPaymentLink: 'sckPaymentLinkTest',
        order_bump: [Object],
        payment: [Object],
        approved_date: 1511783346000,
        full_price: [Object],
        transaction: 'HP16015479281022',
        status: 'DISPUTE'
      },
      affiliates: [[Object]],
      producer: { name: 'Producer Test Name' },
      subscription: { subscriber: [Object], plan: [Object], status: 'ACTIVE' },
      buyer: {
        address: [Object],
        name: 'Teste Comprador',
        checkout_phone: '99999999900',
        email: 'testeComprador271101postman15@example.com'
      }
    },
    hottok: 'eEaMuvZ3mioEEzpJH0PPHVFe9YBEhP5825287',
    id: '586e110b-0367-409b-9605-4d9dfaa93a9f',
    creation_date: 1718550281713,
    event: 'PURCHASE_PROTEST',
    version: '2.0.0'
  },
  ["CompraCancelada"]: {
    data: {
      product: {
        has_co_production: false,
        name: 'Produto test postback2',
        id: 0,
        ucode: 'fb056612-bcc6-4217-9e6d-2a5d1110ac2f'
      },
      commissions: [[Object], [Object]],
      purchase: {
        offer: [Object],
        order_date: 1511783344000,
        original_offer_price: [Object],
        price: [Object],
        checkout_country: [Object],
        sckPaymentLink: 'sckPaymentLinkTest',
        order_bump: [Object],
        payment: [Object],
        approved_date: 1511783346000,
        full_price: [Object],
        transaction: 'HP16015479281022',
        status: 'CANCELED'
      },
      affiliates: [[Object]],
      producer: { name: 'Producer Test Name' },
      subscription: { subscriber: [Object], plan: [Object], status: 'ACTIVE' },
      buyer: {
        address: [Object],
        name: 'Teste Comprador',
        checkout_phone: '99999999900',
        email: 'testeComprador271101postman15@example.com'
      }
    },
    hottok: 'eEaMuvZ3mioEEzpJH0PPHVFe9YBEhP5825287',
    id: '31042a8c-b1ce-400b-b981-0c50da49f8a0',
    creation_date: 1718550281837,
    event: 'PURCHASE_CANCELED',
    version: '2.0.0'
  }
}