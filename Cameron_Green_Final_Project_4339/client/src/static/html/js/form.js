(function () {
  'use strict'

  window.addEventListener('load', function () {
    //Fetch all forms we want to apply custom validation to
    var forms = document.getElementsByClassName('needs-validation')

    //Check each input for validity
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  }, false)
}())