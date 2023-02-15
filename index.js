let input = '';

let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      input = eval(input);
      document.querySelector('.input-display').value = input;
    } else if (e.target.innerHTML == 'C') {
      input = '';
      document.querySelector('.input-display').value = input;
    } else {
      input = input + e.target.innerHTML;
      document.querySelector('.input-display').value = input;
    }

  })
})
