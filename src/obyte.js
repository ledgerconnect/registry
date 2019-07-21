const client = require('../helpers/kbyte');
const { sendMessage } = require('../helpers/discord');

let lastState;
const address = 'FAB6TH7IRAVHDLK2AAWY5YBE6CEBUACF';
const params = { addresses: [address], last_ball_mci: 1000000000, amount: 1 };

const check = () => {
  client.requestAsync('light/pick_divisible_coins_for_amount', params).then(result => {
    const state = JSON.stringify(result);
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
}, 20 * 60 * 1000);

