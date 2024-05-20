
//Traemos el form del html
//prevenimos las actuaciones por default al hacer submit 
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    validacion();
  });
  
  //traemos los inputs value que nos dé el login
  function validacion() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
// Con este condicional evaluamos si el valor del input coincide con el valor que tenemos preasingado
    if (email === "usuario" && password === "usuario") {
      Swal.fire({
        icon: 'success',
        title: 'Bienvenido usuario!',
        showConfirmButton: false,
        timer: 1500
      })
      .then(() => {
        window.location = "../index.html"
      })

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Contraseña/usuario incorrectos',
      });
    }
  }
  