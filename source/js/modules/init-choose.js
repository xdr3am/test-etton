const initChoose = () => {
  const fields = document.querySelectorAll('.form__file');
  Array.prototype.forEach.call(fields, function (input) {
    let label = input.nextElementSibling,
      labelVal = label.querySelector('.form__file-fake').innerText;

    input.addEventListener('change', function (e) {
      let countFiles = '';
      if (this.files && this.files.length >= 1)
        countFiles = this.files.length;

      if (countFiles)
        label.querySelector('.form__file-fake').innerText = 'File upload';
      else
        label.querySelector('.form__file-fake').innerText = labelVal;
    });
  });
};

export { initChoose };
