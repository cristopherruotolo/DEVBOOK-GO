$('#login').on('submit', fazerLogin);


function fazerLogin(event) {
  event.preventDefault();

  $.ajax({
    url: "/login",
    method: "POST",
    data: {
      email: $('#email').val(),
      senha: $('#senha').val()
    }
  }).done(() => {
    window.location = "/home"
  }).fail((erro) => {
    Swal.fire({
      title: "Ops..!",
      text: "Usuário ou senha inválidos!",
      icon: "error"
    });
  });
}