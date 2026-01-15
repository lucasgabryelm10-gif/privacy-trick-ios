document.querySelectorAll('.toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
});

document.querySelectorAll('.item').forEach(item => {
  const range = item.querySelector('input');
  const value = item.querySelector('span');

  range.addEventListener('input', () => {
    value.textContent = range.value;
  });
});
