export const renderInput = dataIndex => {
  return `<div class="form__wrapper" data-role="formWrapper">
  <div class="form__field" data-role="formField">
    <label class="form__label" data-role="form-label">Haslo ${dataIndex +
      1}</label>
    <input type="text" class="form__input" data-role="input" data-index=${dataIndex +
      1} />
  </div>
  <button type="button" class="btn__field" data-role="deleteBtn">
  </button>
  </div>`;
};
