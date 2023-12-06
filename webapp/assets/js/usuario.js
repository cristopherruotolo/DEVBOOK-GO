$('#parar-de-seguir').on('click', pararDeSeguir);
$('#seguir').on('click', seguir);

function pararDeSeguir() {
  const usuarioID = $(this).data('usuario-id');
  $(this).prop('disabled', true);

  $.ajax({
    url: `/usuarios/${usuarioID}/parar-de-seguir`,
    method: "POST"
  }).done(function () {
    window.location = `/usuarios/${usuarioID}`;
  }).fail(function () {
    Swal.fire({
      title: "Ops..!",
      text: "Erro ao parar de seguir o usuário!",
      icon: "error"
    });
    $('#parar-de-seguir').prop('disabled', false);
  });
}

function seguir() {
  const usuarioID = $(this).data('usuario-id');
  $(this).prop('disabled', true);

  $.ajax({
    url: `/usuarios/${usuarioID}/seguir`,
    method: "POST"
  }).done(function () {
    window.location = `/usuarios/${usuarioID}`;
  }).fail(function () {
    Swal.fire({
      title: "Ops..!",
      text: "Erro ao seguir o usuário!",
      icon: "error"
    });
    $('#seguir').prop('disabled', false);
  });
}