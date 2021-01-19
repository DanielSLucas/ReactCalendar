# Simple React Calendar
Esse é um calendário simples feito com ReactJS, styled-components e date-fns.

## Funcionalidades
- Exibir mês atual, deixando em destaque o dia da semana e do mês correspondentes a "hoje";
- Navegação entre meses;
- Destacar datas recebidas através de um array de datas.

## Como funciona
 
- Instancie o componente `<Calendar />` onde desejar que ele seja exibido.

- Caso deseje destacar dias com eventos, passe a propriedade `events` ao componente, e dentro dessa propriedade
um array de datas ***Date[]***.

- Caso queira trocar as cores do calendário adicione a proprieade `theme` ao componente, dentro dessa propriedade
um objeto com o seguinte formato:

      {
        backgroundColor: '#FFFFFF',
        primaryColor: '#000000',
        headerFontColor: '#FFFFFF',
        primaryFontColor: '#000000',
        secondaryFontColor: '#FFFFFF',
      }
