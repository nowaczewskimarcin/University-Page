(function () {
  // //--------------------------------------              ---------------------///////////////////////////////////
  // const Form = document.forms['form'];
  // console.log(Form.elements);

  ///////////////             W A L I D A C J A     F O R M U L A R Z A         ///////////////
  const inputName = document.getElementById('firstName')
  const ValidationInfo = document.querySelector(".validation-text")
  let errorMessages = new Set();

  const showErrorMessages = () => {
    ValidationInfo.innerHTML = '';
    errorMessages.forEach((message) => {
      console.log(message)
      const element = document.createElement('li')
      const node = document.createTextNode(message)
      element.appendChild(node)
      ValidationInfo.appendChild(element);
    })
  }

  // walidacja imienia
  inputName.addEventListener("input", e => {
    const val = inputName.value
    const regEx = /^[a-zA-Z ]{3,}$/g;
    const errorMessage = 'Imię powinno składać się z minimum 3 liter.';

    if (!regEx.test(val)) {
      errorMessages.add(errorMessage)
    } else {
      errorMessages = new Set([...errorMessages].filter((message) => message !== errorMessage))
    }
    showErrorMessages();
  });

  // walidacja nazwiska
  const LastName = document.getElementById('lastName')

  LastName.addEventListener("input", e => {
    const val = LastName.value
    const regEx = /^[a-zA-Z ]{3,}$/g;
    const errorMessage = 'Nazwisko powinno składać się z minimum 3 liter.';

    if (!regEx.test(val)) {
      errorMessages.add(errorMessage)
    } else {
      errorMessages = new Set([...errorMessages].filter((message) => message !== errorMessage))
    }
    showErrorMessages();
  });

  // walidacja emalia
  const inputEmail = document.getElementById('userEmail')

  inputEmail.addEventListener("input", e => {
    const errorMessage = 'Niepradiwłowy adres email.';
    const val = inputEmail.value
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regEx.test(val)) {
      errorMessages.add(errorMessage)
    } else {
      errorMessages = new Set([...errorMessages].filter((message) => message !== errorMessage))
    }
    showErrorMessages();
  });

  // walidacja wiadomosci uzytkownika
  const userMessage = document.getElementById('userMessage')

  userMessage.addEventListener("input", e => {
    const val = userMessage.value
    const regEx = /^[a-zA-Z ]{10,}$/g;
    const errorMessage = 'Wiadomość powinna zawierać minimum 10 znaków.';

    if (!regEx.test(val)) {
      errorMessages.add(errorMessage)
    } else {
      errorMessages = new Set([...errorMessages].filter((message) => message !== errorMessage))
    }
    showErrorMessages();
  });

  // walidacja zaznaczenia checkboxa i wyslanie formularza

  const checkBox = document.getElementById('checkBox')
  checkBox.addEventListener("change", e => {
    const errorMessage = 'Zaakceptuj regulamin przed wysłaniem formularza';
    console.log(checkBox.checked)
    if (!checkBox.checked) {
      errorMessages.add(errorMessage)
    } else {
      errorMessages = new Set([...errorMessages].filter((message) => message !== errorMessage))
    }
    showErrorMessages();
  });

  // wysylanie formularza

  form.addEventListener("submit", e => {
    e.preventDefault();
    if (errorMessages.length !== 0)
      console.log('wysłano formularz')
  });

})();

/////////////////// S L I D E R  /////////////////////////////////////////////

let slide = document.querySelectorAll('.slide');
var current = 0;

function cls() {
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = 'none';
  }
}

function next() {
  cls();
  if (current === slide.length - 1) current = -1;
  current++;

  slide[current].style.display = 'block';
  slide[current].style.opacity = 0.4;

  var x = 0.4;
  var intX = setInterval(function () {
    x += 0.1;
    slide[current].style.opacity = x;
    if (x >= 1) {
      clearInterval(intX);
      x = 0.4;
    }
  }, 100);

}

function prev() {
  cls();
  if (current === 0) current = slide.length;
  current--;

  slide[current].style.display = 'block';
  slide[current].style.opacity = 0.4;

  var x = 0.4;
  var intX = setInterval(function () {
    x += 0.1;
    slide[current].style.opacity = x;
    if (x >= 1) {
      clearInterval(intX);
      x = 0.4;
    }
  }, 100);
}

function start() {
  cls();
  slide[current].style.display = 'block';
}
start();