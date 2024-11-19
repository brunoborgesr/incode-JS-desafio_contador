let count = 0; 
let button1 = document.querySelector("#adicao");
let button2 = document.querySelector("#resetar");

function contador() {
  document.getElementById('contador').innerText = count;
}

button1.addEventListener("click", () => {
  count++;
  contador();
});

button2.addEventListener("click", () => {
  count = 0;
  contador();
});
