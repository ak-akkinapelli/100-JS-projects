const randcolour = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
};

document.getElementById("button1").onclick = () => {
  document.body.style.backgroundColor = randcolour();
};
