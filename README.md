# Base de Conhecimento - Imersão Alura

## Descrição

Este projeto é uma aplicação web simples que funciona como uma base de conhecimento para tópicos educacionais. Ele permite aos usuários pesquisar e filtrar dinamicamente uma lista de assuntos de diversas áreas, como Matemática, História, Física, entre outras. A cada termo digitado, a lista de resultados é atualizada em tempo real.

Este projeto foi desenvolvido como parte da Imersão Alura.

## Tecnologias Utilizadas

*   **HTML5:** Utilizado para a estruturação semântica da página, incluindo o campo de busca, a área de exibição dos cards e o rodapé.
*   **CSS3:** Responsável pela estilização da aplicação, definindo o layout, as cores, as fontes e a aparência dos cards de conteúdo.
*   **JavaScript (ES6+):** Utilizado para toda a lógica da aplicação, incluindo:
    *   Carregamento assíncrono dos dados a partir do arquivo `data.json`.
    *   Manipulação do DOM para renderizar os cards de forma dinâmica.
    *   Implementação da funcionalidade de busca e filtragem em tempo real.

## Estrutura do Projeto

*   `index.html`: Arquivo principal que contém a estrutura HTML da página.
*   `style.css`: Folha de estilos para a aplicação.
*   `script.js`: Contém toda a lógica de funcionamento da interface.
*   `data.json`: Arquivo JSON que armazena os dados da base de conhecimento (tópicos, descrições, links, etc.).

## Como Funciona

1.  **Carregamento Inicial:** Ao abrir a página, o JavaScript carrega de forma assíncrona o conteúdo do arquivo `data.json`.
2.  **Renderização:** Os dados carregados são utilizados para renderizar uma lista de "cards", onde cada card representa um tópico de estudo.
3.  **Busca em Tempo Real:** O usuário pode digitar um termo no campo de pesquisa. A cada tecla pressionada, o JavaScript filtra a lista de tópicos, buscando correspondências no nome e na descrição de cada item.
4.  **Exibição dos Resultados:** Apenas os cards que correspondem ao termo de busca são exibidos na tela. Se o campo de pesquisa estiver vazio, todos os tópicos são mostrados.

## Como Usar

1.  Clone este repositório para o seu computador.
2.  Abra o arquivo `index.html` em qualquer navegador web moderno.
3.  Digite no campo de busca para encontrar o tópico desejado.

## Contribuições

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhoria, por favor, abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a licença [MIT](https://opensource.org/licenses/MIT).