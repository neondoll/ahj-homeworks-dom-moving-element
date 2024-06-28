import imgGoblin from "../../img/goblin.png";

export class Goblin {
  constructor() {
    this._element = document.createElement("img");
    this._element.classList.add("goblin");
    this._element.src = imgGoblin;
  }

  moveToAnotherCell(board) {
    const cells = board.cells;
    const cellIndex = Math.floor(Math.random() * cells.length);

    cells[cellIndex].appendChild(this._element);
  }
}
