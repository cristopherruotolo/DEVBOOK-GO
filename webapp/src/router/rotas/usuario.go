package rotas

import (
	"net/http"
	"webapp/src/controllers"
)

var rotasUsuarios = []Rota{
	{
		URI:                "/criar-usuario",
		Metodo:             http.MethodGet,
		Funcao:             controllers.CarregarPaginaDeCadastroUsuario,
		RequerAutenticacao: false,
	},
	{
		URI:                "/usuarios",
		Metodo:             http.MethodPost,
		Funcao:             controllers.CriarUsuario,
		RequerAutenticacao: false,
	},
	{
		URI:                "/buscar-usuario",
		Metodo:             http.MethodGet,
		Funcao:             controllers.CarregarPaginaDeUsuarios,
		RequerAutenticacao: true,
	},
	{
		URI:                "/usuarios/{usuarioID}",
		Metodo:             http.MethodGet,
		Funcao:             controllers.CarregarPerfilDoUsuario,
		RequerAutenticacao: true,
	},
	{
		URI:                "/usuarios/{usuarioID}/parar-de-seguir",
		Metodo:             http.MethodPost,
		Funcao:             controllers.PararDeSeguirUsuario,
		RequerAutenticacao: true,
	},
	{
		URI:                "/usuarios/{usuarioID}/seguir",
		Metodo:             http.MethodPost,
		Funcao:             controllers.SeguirUsuario,
		RequerAutenticacao: true,
	},
}
