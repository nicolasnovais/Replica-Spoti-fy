import React from "react";

const App2 = () => {
  return <div>App2</div>;
};

export default App2;

//rafce

//Arrow Function
//const App2 = () => <h1>Hello, World!</h1>;

//Nomeação de Componente
//PacalCase

//Nomeação de Variavel, Função...
//camelCaseCorcundaDoCamelo

// Nomeação de classes
// kebab-case

//export default, posso importar com qualquer nome e sem chaves
//export "sem default", só posso importar entre chaves e com o nome exportado

// Self closing
// <Header></Header>
// <Header/>

// Nomeação de classes em CSS
// Metodologia BEM
// Block
// Elements
// Modifiers
// bloco__elemento--modificador
// header
// header__link
// header__link--small
// item-list__header
// Nomes compostos são separados por -

//Tag vazia em REACT se chama Fragment(FRAGMENTO)

// Componentes recebem 'props'

{
  /* {items === 5 ? (
          <>
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          </>
        ) : (
          <>
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          </>
        )} */
}

//Array(items)
//          .fill()
//          .map((currentValue, index) => (
//            <SingleItem key={`${title}-${index}`} />
//          ))

// Spread operator
// ...

// Quando componetes se Re-Reinderizão?
// Uma das ocasiões é quando uma variavél de estado usada por esse componente é atualizado

// Hook - useState
