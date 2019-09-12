const client = require('../helpers/kbyte');
const { sendMessage } = require('../helpers/discord');

let lastState;
const address = 'FAB6TH7IRAVHDLK2AAWY5YBE6CEBUACF';
const interval = process.env.OBYTE_INTERVAL || 30 * 60 * 1000;

const check = () => {
  client.requestAsync('light/get_balances', [address]).then(result => {
    const state = JSON.stringify(result[address]);
    if (lastState && lastState === state) {
      console.log('Oops, address is not posting');
      sendMessage(`Oops, nothing changed! <https://explorer.obyte.org/#${address}>`);
    } else {
      console.log('Great, address is posting');
    }
    lastState = state;
  });
};

check();
setInterval(() => {
  check();
}, interval);

