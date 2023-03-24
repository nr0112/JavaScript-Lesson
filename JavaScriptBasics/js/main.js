'use strict';

{
  function update() {
    // document.getElementById('target').textContent = 'Changed!';
    // document.querySelector('p').textContent = 'Changed!';
    // document.querySelectorAll('p')[1].textContent = 'Changed!';
    document.querySelectorAll('p').forEach((p, index) => {
      p.textContent = `${index}番めのpです！`;
    });
  }

  setTimeout(update, 1000);
}
