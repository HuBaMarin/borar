const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
const showButton = document.getElementById("showButton");

let count = 0;

addButton.addEventListener("click", () => {
  count++;
  console.log(count);
});

removeButton.addEventListener("click", () => {
  if (count > 0) {
    count--;
    console.log(count);
  }
});

showButton.addEventListener("click", () => {
  console.log(`Count: ${count}`);
});