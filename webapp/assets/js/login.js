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
    alert("Usuário ou senha inválidos!");
  });
}