const forms = document.querySelectorAll('form');

forms.forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    const body = {};

    formData.append('form', form.classList.value);
    formData.forEach((val, field) => {
      body[field] = val;
    });

    const URL = 'https://jsonplaceholder.typicode.com/posts';

    fetch(URL, {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json ; charset=UTF-8',
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then(() => {
        console.log('Данные отправлены');
      })
      .catch(error => {
        console.log(`Данные отправлены с ошибкой ${error.message}`);
      })
      .finally(() => {
        form.reset();
      });
  })})