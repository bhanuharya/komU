const scriptURL = 'https://script.google.com/macros/s/AKfycbyxD31l8bh1uRdxkUrbXoDR8Is3WdYeBfZ_Zdym_8akSmglA4APtaTDSaHXMA37W-xFQQ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })