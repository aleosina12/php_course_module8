const input = document.querySelector('input');

input.addEventListener('input', updateValue);

function updateValue(e) {
  console.log (e.target.value);
  //alert (e.target.value);
}