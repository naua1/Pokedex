# Pokedex

Funcionamento
A função fetchPokemon(param) é uma função assíncrona que aceita um parâmetro param, que é o nome do Pokémon que você deseja buscar. A função faz uma solicitação assíncrona à API de Pokémon usando o nome fornecido, espera a resposta da API e, em seguida, converte a resposta em um objeto JavaScript usando .json().

O código adiciona um ouvinte de eventos ao botão com o ID botao. Quando o botão é clicado, o código busca informações sobre o Pokémon cujo nome é fornecido no campo de entrada nomePokemon.

Ele usa a função fetchPokemon para buscar os dados do Pokémon e armazená-los na variável poke.

Os detalhes do Pokémon, como o nome e a imagem, são então exibidos na página. O código gera um parágrafo HTML com o nome do Pokémon e uma imagem do Pokémon. Ele também cria um parágrafo HTML inicial para exibir o tipo do Pokémon.

Em seguida, o código verifica se o Pokémon tem um ou mais tipos associados. Se houver tipos, ele percorre os tipos e adiciona parágrafos HTML para cada um deles.

Este código é uma demonstração simples de como fazer solicitações a uma API usando JavaScript assíncrono e atualizar dinamicamente a interface do usuário com os dados recuperados. É útil para quem deseja aprender a trabalhar com APIs e construir aplicativos da web interativos que exibem informações de terceiros.
