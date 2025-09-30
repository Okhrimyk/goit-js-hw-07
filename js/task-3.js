const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output")
input.addEventListener("keydown", (event) => {
  const trimValue = output.textContent = event.currentTarget.value.trim();
    output.textContent = trimValue === "" ? "Anonymous" : trimValue;
} )