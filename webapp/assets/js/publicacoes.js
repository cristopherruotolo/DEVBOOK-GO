$('#nova-publicacao').on('submit', criarPublicacao);

$(document).on('click', '.curtir-publicacao', curtirPublicacao);
$(document).on('click', '.descurtir-publicacao', descurtirPublicacao);

$('#atualizar-publicacao').on('click', atualizarPublicacao);
$('.deletar-publicacao').on('click', deletarPublicacao);

function criarPublicacao(evento) {
  evento.preventDefault();

  $.ajax({
    url: "/publicacoes",
    method: "POST",
    data: {
      titulo: $('#titulo').val(),
      conteudo: $('#conteudo').val(),
    }
  }).done(function () {
    window.location = "/home";
  }).fail(function () {
    Swal.fire({
      title: "Ops..!",
      text: "Erro ao criar publicação!",
      icon: "error"
    });
  })
}

function curtirPublicacao(evento) {
  evento.preventDefault();

  const elementoClicado = $(evento.target);
  const publicacaoId = elementoClicado.closest('div').data('publicacao-id');

  elementoClicado.prop('disabled', true);
  $.ajax({
    url: `/publicacoes/${publicacaoId}/curtir`,
    method: "POST"
  }).done(function () {
    const contadorCurtidas = elementoClicado.next('span');
    const quantidadeCurtidas = parseInt(contadorCurtidas.text());

    contadorCurtidas.text(quantidadeCurtidas + 1);

    elementoClicado.addClass('descurtir-publicacao');
    elementoClicado.addClass('text-danger');
    elementoClicado.removeClass('curtir-publicacao');
  }).fail(function () {
    Swal.fire({
      title: "Ops..!",
      text: "Erro ao curtir a publicação!",
      icon: "error"
    });
  }).always(function () {
    elementoClicado.prop('disabled', false);
  });
}

function descurtirPublicacao(evento) {
  evento.preventDefault();

  const elementoClicado = $(evento.target);
  const publicacaoId = elementoClicado.closest('div').data('publicacao-id');

  elementoClicado.prop('disabled', true);
  $.ajax({
    url: `/publicacoes/${publicacaoId}/descurtir`,
    method: "POST"
  }).done(function () {
    const contadorCurtidas = elementoClicado.next('span');
    const quantidadeCurtidas = parseInt(contadorCurtidas.text());

    contadorCurtidas.text(quantidadeCurtidas - 1);

    elementoClicado.removeClass('descurtir-publicacao');
    elementoClicado.removeClass('text-danger');
    elementoClicado.addClass('curtir-publicacao');
  }).fail(function () {
    Swal.fire({
      title: "Oops...!",
      text: "Erro ao curtir a publicação!",
      icon: "error"
    });
  }).always(function () {
    elementoClicado.prop('disabled', false);
  });
}

function atualizarPublicacao() {
  $(this).prop('disabled', false);

  const publicacaoId = $(this).data('publicacao-id');

  $.ajax({
    url: `/publicacoes/${publicacaoId}`,
    method: "PUT",
    data: {
      titulo: $('#titulo').val(),
      conteudo: $('#conteudo').val()
    }
  }).done(function () {
    Swal.fire({
      title: "Sucesso!",
      text: "Publicação criada com sucesso!",
      icon: "success"
    }).then(function () {
      window.location = "/home";
    })
  }).fail(function () {
    Swal.fire({
      title: "Oops...!",
      text: "Erro ao alterar a publicação!",
      icon: "error"
    });
  }).always(function () {
    $('#atualizar-publicacao').prop('disabled', false);
  });
}

function deletarPublicacao(evento) {
  evento.preventDefault();

  Swal.fire({
    title: "Atenção!",
    text: "Tem certeza que deseja excluir a publicação?",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    icon: "warning"
  }).then(function (confirmacao) {
    if (!confirmacao.value) return;

    const elementoClicado = $(evento.target);
    const publicacao = elementoClicado.closest('div');
    const publicacaoId = publicacao.data('publicacao-id');

    elementoClicado.prop('disabled', true);

    $.ajax({
      url: `/publicacoes/${publicacaoId}`,
      method: "DELETE"
    }).done(function () {
      publicacao.fadeOut("slow", function () {
        $(this).remove();
      });
    }).fail(function () {
      Swal.fire({
        title: "Oops...!",
        text: "Erro ao excluir publicação!",
        icon: "error"
      });
    });
  })
}