const sounds = [
  'cat',
  'dog',
  'hello',
  'hey',
  'girls',
  'friends',
  'pika',
  'tram',
  'wakey',
]

sounds.forEach((sound) => {
  const btn = document.createElement('button')
  btn.classList.add('btn')

  btn.innerText = sound

  document.getElementById('buttons').appendChild(btn)
})
