'use strict';

{

  document.querySelector('button').addEventListener('click', () => {
    const colors = document.querySelectorAll('input');
    const selectedColors = [];

    colors.forEach(color => {
      if (color.checked === true) {
        selectedColors.push(color.value);
      }
    });

    const li = document.createElement('li');
    // li.textContent = selectedColors.join(',');
    li.textContent = selectedColors;
    document.querySelector('ul').appendChild(li);
  });
}
