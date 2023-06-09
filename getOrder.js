const { createMollieClient } = require('@mollie/api-client');
const { error } = require('console');
const mollieClient = createMollieClient({ apiKey: '' });

const order =  mollieClient.orders.get('ord_opxybe');

order.then(data=> {
    console.log(JSON.stringify(data, null, 2))
})
.catch(error=> {
    console.log(`error in getting the order ${error}`)
})