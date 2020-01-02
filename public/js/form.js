import { renderInput } from "./renderInput";

const mainForm = document.querySelector("#js-form");
const addBtn = document.querySelector("#js-button-add");
const formField = mainForm.querySelector("#js-fields-wrapper");

const MAX_INPUT_COUNT = 4;

const getAllInputs = () => {
  return mainForm.querySelectorAll('[data-role="input"]');
};

const getInputsValue = () => {
  return mainForm.querySelector('[data-role="input"]').value;
};

const catchNumberOfInputs = () => {
  return mainForm.querySelectorAll('[data-role="input"]').length;
};

const isInputValid = () => {
  const inputsValue = getInputsValue();
  const inputs = getAllInputs();
  inputs.forEach(() => {
    if (inputsValue === "") {
      return false;
    } else {
      console.log(inputsValue);
      return true;
    }
  });
  console.log(inputs);
};

const inputNumberCheck = (inputsNumber, maxInputsNumber) => {
  if (inputsNumber > maxInputsNumber) {
    addBtn.disabled = true;
  }
};

const addBtnHandler = inputsNumber => {
  const inputValid = isInputValid();
  console.log(typeof inputValid);
  if (inputValid === true) {
    inputNumberCheck(inputsNumber, MAX_INPUT_COUNT);
    formField.insertAdjacentHTML("beforeend", renderInput(inputsNumber));
  } else if (inputValid === false) {
    formField.insertAdjacentHTML(
      "beforeend",
      "<span>Input jest pusty! Uzupełnij go prosze.</span>"
    );
    addBtn.disabled = true;
  }
};

addBtn.addEventListener("click", () => {
  const numberOfInputs = catchNumberOfInputs();
  addBtnHandler(numberOfInputs);
});

//todo po zmianie w inpucie usunac wiadomosc
