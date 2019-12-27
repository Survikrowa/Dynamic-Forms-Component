const addButton = document.getElementById("js-button-add");
const mainForm = document.getElementById("js-form");
const inputInForm = document.getElementById("js-input");
const deleteButton = document.getElementById("js-delete-button");
const fieldsWrapper = document.getElementById("js-fields-wrapper");

let indexPlus = 1;

const increaseIndex = () => {
  indexPlus++;
  //console.log(indexPlus);
  return indexPlus;
};
const renderInput = () => {
  return (innerHTML = `<div class="form__wrapper" id="js-form-input">
  <div class="form__field">
    <label class="form__label">Haslo ${indexPlus}</label>
    <input type="text" class="form__input" id="js-input" data-index=${indexPlus} />
  </div>
  <button type="button" class="btn__field" id="js-delete-button">
    <img src="../css/icon/close.svg" class="img--size" />
  </button>
  </div>`);
};

const renderValidationError = () => {
  return (innerHTML = `<span style="color: red;">Input jest pusty! Uzupełnij go prosze</span>`);
};

const getQuantityOfInputs = () => {
  return (inputsNumber = mainForm.querySelectorAll("input").length);
};

const getValueOfInputs = () => {
  return (inputsValue = mainForm.querySelectorAll("input").value);
};

const inputValidation = () => {
  getValueOfInputs();
  console.log(inputsValue);
  if (inputsValue == undefined) {
    fieldsWrapper.insertAdjacentHTML("beforeend", renderValidationError());
    addButton.disabled = true;
    return (validate = false);
  } else {
    return (validate = true);
    fieldsWrapper.insertAdjacentHTML("beforeend", "<span></span>");
  }
};

// const cursorMove = () => {
//   inputInForm.focus();
//   inputInForm.setSelectionRange(input, 1);
// };

const addBtnHandler = () => {
  inputValidation();
  getQuantityOfInputs();
  if (inputsNumber >= 5) {
    addButton.disabled = true;
  }
  console.log(indexPlus);
  if (validate == true) {
    increaseIndex();
    fieldsWrapper.insertAdjacentHTML("beforeend", renderInput(indexPlus));
  }
};
inputInForm.addEventListener("change", () => {
  addButton.disabled = false;
});
addButton.addEventListener("click", addBtnHandler);
