const hello = document.getElementById("hello");
const languages = [
  "Olá",
  "Hello",
  "Ciao",
  "Salve",
  "مرحبا",
  "Здравейте",
  "您好",
  "Ahoj",
  "Hallo",
  "Bonjour",
  "Alohaʻoe",
];
let index = 0;

setInterval(() => {
  index = (index + 1) % languages.length;
  hello.textContent = languages[index];
}, 400);
