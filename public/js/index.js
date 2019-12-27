const addButton = document.getElementById("js-button-add");
const inputInForm = document.getElementById("js-input");
const deleteButton = document.getElementById("js-delete-button");
const fieldsWrapper = document.getElementById("js-fields-wrapper");
let inputArray = document.querySelectorAll("#js-input");

let indexPlus = 1;

const getMainFormFromDom = () => {
  return (mainForm = document.getElementById("js-form"));
};

const increaseIndex = () => {
  indexPlus++;
  //console.log(indexPlus);
  return indexPlus;
};
const renderInput = () => {
  return (innerHTML = `<div class="form__wrapper" id="js-form-input">
  <div class="form__field" id="js-field">
    <label class="form__label">Haslo ${indexPlus}</label>
    <input type="text" class="form__input" id="js-input" data-index=${indexPlus} />
  </div>
  <button type="button" class="btn__field" id="js-delete-button">
    <img src="/close.a5d26944.svg"" class="img--size" />
  </button>
  </div>`);
};

const renderValidationError = () => {
  return (innerHTML = `<span style="color: red;" id="js-error-span">Input jest pusty! Uzupełnij go prosze</span>`);
};

const getInputErrorElement = () => {
  return (inputErrorSpan = document.getElementById("js-error-span"));
};

const clearValidationError = () => {
  return (inputErrorSpan.innerHTML = "");
};

const getQuantityOfInputs = () => {
  getMainFormFromDom();
  return (inputsNumber = mainForm.querySelectorAll("input").length);
};

const getValueOfInputs = () => {
  getMainFormFromDom();
  return (inputsValue = mainForm.querySelector("input").value);
};

const inputsValidation = () => {
  inputArray.forEach(() => {
    getValueOfInputs();
    console.log(inputsValue);
    if (inputsValue === "") {
      fieldsWrapper.insertAdjacentHTML("beforeend", renderValidationError());
      addButton.disabled = true;
      return (isValid = false);
    } else {
      getInputErrorElement();
      if (inputErrorSpan) {
        fieldsWrapper.insertAdjacentHTML("beforeend", clearValidationError());
      }
      return (isValid = true);
    }
  });
};

const cursorMove = () => {
  inputInForm.focus();
};

const addBtnHandler = () => {
  inputsValidation();
  getQuantityOfInputs();
  if (inputsNumber >= 5) {
    addButton.disabled = true;
  }
  console.log(indexPlus);
  if (isValid == true) {
    increaseIndex();
    fieldsWrapper.insertAdjacentHTML("beforeend", renderInput(indexPlus));
    cursorMove();
  }
};
inputArray.forEach(() => {
  inputInForm.addEventListener("change", () => {
    addButton.disabled = false;
  });
});

addButton.addEventListener("click", addBtnHandler);
