//la parte del sign up
const signupForm = document.querySelector('.loginForm')
signupForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = document.querySelector('#username').value
  const email = document.querySelector('#email').value
  const password = document.querySelector('#password').value


  const Users = JSON.parse(localStorage.getItem('users')) || []
  const isUserRegistered = Users.find(user => user.email.password === user.email.password)





  //Si es un usuario registrado nso manda la alerta y redirecciona a la misma pagina asi recarga
  if (!isUserRegistered) {
    alert("Ese usuario ya está en uso")

    window.location.href = '../pages/login.html'
  }
  //Si obtiene un registro exitoso se va directo al index
  if (!isUserRegistered) {
    alert('Registro Exitoso!')
    window.location.href = '../index.html'
  }






  Users.push({
    name: name,
    email: email,
    password: password
  })
  localStorage.setItem('users', JSON.stringify(Users))


})



//Login
const loginForm = document.querySelector('.loginForm')
loginForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const email = document.querySelector('#email').value
  const password = document.querySelector('#password').value




  const Users = JSON.parse(localStorage.getItem('users')) || []
  const validUser = Users.find(user => user.email === email && user.password === password)
  if (validUser) {
    return Swal.fire({
      icon: 'success',

      title: 'Bienvenido ',
      text: `${validUser.name}`,
      footer: `<p> <i class='fa-regular fa-heart fa-xl' style='color: #a0b5eb;' ></i>  </p>`
    })






  } else if (!validUser) {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Usuario y/o constraseña incorrectos!',
      footer: '<a href="#">Por qué tengo este problema?</a>'
    })
  }





  localStorage.setItem('login_success', JSON.stringify(validUser))

  window.location.href = '../index.html'

})