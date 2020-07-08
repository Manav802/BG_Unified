const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: 'd325995d',
  apiSecret: 'yHKAabAbGkC9eUSp',
});

const from = 'Vonage APIs';
const to = '916283032071';
const text = 'Hello from Vonage SMS API';

nexmo.message.sendSms(from, to, text);