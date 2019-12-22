const addButton = document.getElementById("js-button-add");
const mainForm = document.getElementById("js-form");
const inputInForm = document.getElementById("js-form-input");
const deleteButton = document.getElementById("js-delete-button");
const fieldsWrapper = document.getElementById("js-fields-wrapper");

let indexPlus;

const increaseIndex = () => {
  indexPlus += 2;
  //console.log(indexPlus);
  return indexPlus;
};
const renderInput = () => {
  return (innerHTML = fieldTemplate);
};

const fieldTemplate = `<div class="form__wrapper" id="js-form-input">
<div class="form__field">
  <label class="form__label">Haslo ${indexPlus}</label>
  <input type="text" class="form__input" id="js-input" data-index=${indexPlus} />
</div>
<button type="button" class="btn__field" id="js-delete-button">
  <img src="css/icon/close.svg" class="img--size" />
</button>
</div>`;
const addBtnHandler = () => {
  increaseIndex();
  console.log(indexPlus);
  fieldsWrapper.insertAdjacentHTML("beforeend", renderInput(indexPlus));
};

addButton.addEventListener("click", addBtnHandler);
