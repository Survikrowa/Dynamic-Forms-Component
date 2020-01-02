export const renderInput = dataIndex => {
  return `<div class="form__wrapper" data-role="formWrapper">
  <div class="form__field" data-role="formField">
    <label class="form__label">Haslo ${dataIndex + 1}</label>
    <input type="text" class="form__input" data-role="input" data-index=${dataIndex} />
  </div>
  <button type="button" class="btn__field" data-role="deleteBtn-${dataIndex +
    1}">
    <img src="/close.a5d26944.svg"" class="img--size" />
  </button>
  </div>`;
};
