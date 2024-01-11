
import { useState } from "react"; //Importando useState de React, que lembra estados.

//Criamos uma função chamada "Square", aplicamos o retorno o button. Chamamos a função dentro da function Board usando JSX ( <Square /> ). Com isso, é possível realizarmos a alteração de  único valor, assim alterando todos os squares.
function Square() {
  const [value, setValue] = useState(null); //Definição de null pois o estado inicia em nulo.
        //value armazena o valor, setValue altera.
  function handleClick() { //Criação de função que informa o momento do click.
    setValue ('X');
  }
  return (                     //Definição de onClick tendo como valor a function handleClick(Ver no console), acima, tudo dentro do return de Square.
    <button className="square" onClick={handleClick}> {value} </button>
    );
}
//export - Torna a função "Board" possível de ser exportada.
//default - Define que a função é a principal do programa.
//return - Retornaa os botões 
export default function Board() {
  return (
    <> {/*Os componentes react só podem retornar  elemento JSX, ou seja, não podem ser vários buttons. Por isso, usamos "<>" e "</>", para agrupar vários elementos e para que considere como apenas um. */}
      <div className="board-row"> 
        <Square /> 
        <Square /> 
        <Square />
      </div>
 
 {/*classname - Método JSX de aplicar uma classe CSS no <button>. A classe é a square, que pode ser vista no arquivo CSS. */}
      <div className="board-row"> 
        <Square />
        <Square /> {/*<Square é uma var que foi renderizada pelo JSX. */}
        <Square />
      </div>

      <div className="board-row"> 
        <Square />
        <Square />
        <Square />
      </div>
      
    </>
  );
} 




