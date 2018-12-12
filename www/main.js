const mod = import('./hello_wasm');

const BUTTON_EL = document.querySelector('#btn');
const OUTPUT_EL = document.querySelector('#output');

let hw;
mod.then(wasm => {
  hw = wasm;
  BUTTON_EL.addEventListener('click', say_hello);
});

function say_hello() {
  let input = document.getElementById('name');
  if (!input || input.value == '') {
    updateMessage(hw.generate_greeting());
  } else {
    updateMessage(hw.generate_custom_greeting(input.value));
  }
}

function updateMessage(msg) {
  OUTPUT_EL.innerHTML = msg;
}
