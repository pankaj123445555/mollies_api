const { createMollieClient } = require('@mollie/api-client');

const mollieClient = createMollieClient({ apiKey: '' });

const payment = mollieClient.payments.create({
    amount: {
      currency: 'EUR',
      value: '10.00'
    },
    description: 'Order #12345',
    redirectUrl: 'https://webshop.example.org/order/12345/',
    webhookUrl: 'https://webshop.example.org/payments/webhook/',
    metadata: {
      order_id: '12345'
    }
  });

  payment.then(payment => {
    console.log('Payment created:', payment);
  }).catch(error => {
    console.error('Error creating payment:', error);
  });
  