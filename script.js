// Alternativa al option en Población
const optionValues = document.querySelectorAll('.form__value');
const inputPopulation = document.getElementById('population');
const selectorText = document.querySelector('.selection');
const contentOptions = document.querySelector('.population__options');

selectorText.addEventListener('click', function () {
  contentOptions.classList.remove('hidden-element');
});

window.addEventListener('mouseup', function () {
  if (event.target != contentOptions) {
    contentOptions.classList.add('hidden-element');
  }
});

optionValues.forEach((option) => {
  option.addEventListener('click', function () {
    updateUI(selectorText, this);
    changeState(this);
    habitantes(this);
  });
});

function updateUI(selectorText, elementThis) {
  inputPopulation.value = elementThis.textContent.trim();
  selectorText.textContent = elementThis.textContent.trim();
  contentOptions.classList.add('hidden-element');
}
function changeState(elementThis) {
  if (elementThis.textContent.trim() != 'Seleccionar') {
    selectorText.classList.add('select_option');
  }
}

// De habitantes.
const numHabitantes = document.querySelector('.num_hab');
const porHabitantes = document.querySelector('.por_hab');
function habitantes(element) {
  const dataElement = element.getAttribute('data');
  let sumVal = 0;
  optionValues.forEach((value) => {
    sumVal += parseInt(value.getAttribute('data'));
  });
  console.log(dataElement);
  console.log(sumVal);
  numHabitantes.innerHTML = `${dataElement} habitantes`;
  porHabitantes.innerHTML = `${((dataElement * 100) / sumVal).toFixed(2)}% habitantes`;
}

// Para obtener los datos
function getForm() {
  event.preventDefault();
  try {
    const name = document.querySelector('#name').value;
    const firstName = document.querySelector('#first-name').value;
    const correo = document.querySelector('#correo').value;
    const population = document.querySelector('#population').value;
    const radio = document.querySelector('input[type="radio"]:checked').value;
    const textArea = document.querySelector('textarea').value;
    const novedades = document.querySelector('#novedades').checked;
    const termino = document.querySelector('#termino').checked;

    if (!name || !firstName || !correo || !population || !radio || !textArea) {
      throw new Error('Faltan datos en el formulario');
    }

    const formData = {
      name: name,
      firstName: firstName,
      correo: correo,
      population: population,
      radio: radio,
      textArea: textArea,
      novedades: novedades,
      termino: termino,
    };
    sendForm(formData);
  } catch (error) {
    console.error(error);
    alert('Por favor, complete todos los campos del formulario.');
  }
}

function sendForm(formData) {
  fetch('./send.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }
      return response.json();
    })
    .then((data) => {
      const tableBody = document.querySelector('#result');
      tableBody.innerHTML = '';

      data.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${item.nombre}</td>
          <td>${item.apellido}</td>
          <td>${item.email}</td>
          <td>${item.popular}</td>
          <td>${item.sexo}</td>
          <td>${item.description}</td>
          <td>${item.nove}</td>
          <td>${item.ter}</td>
        `;
        tableBody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
