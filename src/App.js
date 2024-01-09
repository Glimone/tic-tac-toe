
//Criamos uma função chamada "Square", aplicamos o retorno o button. Chamamos a função dentro da function Board. Com isso, é possível realizarmos a alteração de 1 único valor, assim alterando todos.
function Square() {

  return <button className="square">X</button>;
}

export default function Board() {
  return (
    <> 
      <div className="board-row"> 
        <Square /> 
        <Square />
        <Square />
      </div>
 
      <div className="board-row"> 
        <Square />
        <Square />
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

 //Os componentes react só podem retornar 1 elemento JSX, ou seja, não podem ser vários buttons. Por isso, usamos "<>" e "</>", para agrupar vários elementos e para que considere como apenas 1. 

/*
LINHA 1
export - Torna a função "square" possível de ser exportada.
default - Define que a função é a principal do programa.
return - 
*/

/*
LINHA 2
classname - Método JSX de aplicar uma classe CSS no <button>. A classe é a square, que pode ser vista no arquivo CSS.
return - Retorna o valor para o comando que chama a função.
*/