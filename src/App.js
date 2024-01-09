export default function board() {
  return (
  <> 
    <div className="board-row"> 
    <button className="square">1</button>
    <button className="square">2</button>
    <button className="square">3</button>
    </div>

    <div className="board-row">
    <button className="square">4</button>
    <button className="square">5</button>
    <button className="square">6</button>
    </div>

    <div className="board-row">
    <button className="square">7</button>
    <button className="square">8</button>
    <button className="square">9</button>
    </div>

    
  </>
  ); //Os componentes react só podem retornar 1 elemento JSX, ou seja, não podem ser vários buttons. Por isso, usamos "<>" e "</>", para agrupar vários elementos e para que considere como apenas 1. 
} 

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