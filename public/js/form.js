import { renderInput } from "./renderInput";

const mainForm = document.querySelector("#js-form");
const addBtn = document.querySelector("#js-button-add");
const submitBtn = document.querySelector('[data-role="submitButton"]');
const formWrapper = mainForm.querySelector("#js-fields-wrapper");

const MAX_INPUT_COUNT = 4;

const getFormField = () => {
  return mainForm.querySelectorAll('[data-role="formField"]');
};

const getAllInputs = () => {
  return mainForm.querySelectorAll('[data-role="input"]');
};

const getNumberOfInputs = () => {
  return mainForm.querySelectorAll('[data-role="input"]').length;
};

const checkValueOfInputs = allInputs => {
  return Array.from(allInputs).filter(input => input.value === "");
};

const inputValidation = allInputs => {
  const getEmptyInputs = checkValueOfInputs(allInputs);
  const errorMessage = `<span style="color: white;" data-role="validation-Error">Input jest pusty, proszę o uzupełnienie!</span>`;
  getEmptyInputs.forEach(emptyInput => {
    emptyInput.parentNode.insertAdjacentHTML("beforeend", errorMessage);
    addBtn.disabled = true;
  });
};
const areInputsCorrect = inputs => {
  return !checkValueOfInputs(inputs).length;
};
const canAdd = (inputsNumber, maxInputsNumber) => {
  if (inputsNumber > maxInputsNumber) {
    return false;
  } else {
    return true;
  }
};

const deleteErrors = () => {
  const formFields = getFormField();
  formFields.forEach(formField => {
    const errorMessage = formField.querySelector(
      '[data-role="validation-Error"]'
    );
    if (errorMessage) {
      formField.removeChild(errorMessage);
    }
  });
};

const addEventListenersToInputs = () => {
  const allInputs = getAllInputs();
  allInputs.forEach(inputs => {
    inputs.addEventListener("input", () => {
      addBtn.disabled = false;
      deleteErrors();
    });
  });
};

const updateLabelNumber = () => {
  const labels = mainForm.querySelectorAll(".form__label");
  labels.forEach((label, index) => {
    label.textContent = "Haslo " + parseInt(index + 1);
  });
};

const deleteBtn = allInputs => {
  const deleteButtons = mainForm.querySelectorAll('[data-role="deleteBtn"]');
  deleteButtons.forEach(deleteButton => {
    if (deleteButton) {
      deleteButton.addEventListener("click", e => {
        if (e.target.parentNode.classList.contains("form__wrapper")) {
          e.target.parentNode.remove();
          addBtn.disabled = false;
          updateLabelNumber();
        }
      });
    }
  });
};

const addBtnHandler = inputsNumber => {
  const allInputs = getAllInputs();
  inputValidation(allInputs);
  const isNumberOfInputsCorrect = canAdd(inputsNumber, MAX_INPUT_COUNT);
  if (areInputsCorrect(allInputs)) {
    formWrapper.insertAdjacentHTML("beforeend", renderInput(inputsNumber));
    deleteErrors();
    deleteBtn(inputsNumber);
    if (isNumberOfInputsCorrect === true) {
      addEventListenersToInputs();
    }
  }
};

const submitBtnHandler = () => {
  const allInputs = getAllInputs();
  inputValidation(allInputs);
  if (areInputsCorrect(allInputs)) {
    deleteErrors();
    let newUrl = new URL(document.URL);

    let inputsValues = [];
    allInputs.forEach(input => inputsValues.push(input.value));
    window.location.href = newUrl.origin + "?phrases=" + inputsValues.join(";");
  }
};

addBtn.addEventListener("click", () => {
  const numberOfInputs = getNumberOfInputs();
  addBtnHandler(numberOfInputs);
  const currentElement = formWrapper.lastElementChild;
  currentElement.querySelector(".form__input").focus();
});

submitBtn.addEventListener("click", e => {
  e.preventDefault();
  submitBtnHandler();
});
