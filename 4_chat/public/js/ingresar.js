function joinChat() {
    var username = document.querySelector('#username').value;

    var usernamePattern = /^[a-zA-Z0-9áéíóúüÁÉÍÓÚÜ\s]+$/;
    var textoPattern = /^(?![^<>]*[<>])[\s\S]*$/;

    if (username.length <= 0) {
      alert('El nombre de usuario es requerido.');
    } else {
      window.location = '/chat/' + username;
    }
}