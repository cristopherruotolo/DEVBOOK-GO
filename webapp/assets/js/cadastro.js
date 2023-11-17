$('#formulario-cadastro').on('submit', criarUsuario);


function criarUsuario(event) {
  event.preventDefault();

  if ($('#senha').val() != $('#confirmar-senha').val()) {
    Swal.fire({
      title: "Ops..!",
      text: "As senhas não coincidem!",
      icon: "error"
    });
    return;
  }

  $.ajax({
    url: "/usuarios",
    method: "POST",
    data: {
      nome: $('#nome').val(),
      email: $('#email').val(),
      nick: $('#nick').val(),
      senha: $('#senha').val()
    }
  }).done(() => {
    Swal.fire({
      title: "Sucesso!",
      text: "Usuário cadastrado com sucesso!",
      icon: "success"
    }).then(function () {
      $.ajax({
        url: "/login",
        method: "POST",
        data: {
          email: $('#email').val(),
          senha: $('#senha').val()
        }
      }).done(function () {
        window.location = "/home";
      }).fail(function () {
        Swal.fire({
          title: "Ops..!",
          text: "Erro ao autenticar o usuário!",
          icon: "error"
        });
      })
    })
  }).fail((erro) => {
    Swal.fire({
      title: "Ops..!",
      text: "Erro ao cadastrar o usuário!",
      icon: "error"
    });
  });
}