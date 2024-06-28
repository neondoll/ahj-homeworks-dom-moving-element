export class Goblin {
  constructor() {
    this._element = document.createElement("img");
    this._element.classList.add("goblin");
    this._element.src =
      "https://github.com/neondoll/ahj-homeworks-dom-moving-element/blob/main/src/img/goblin.png";
  }

  moveToAnotherCell(cells) {
    const cellIndex = Math.floor(Math.random() * cells.length);

    cells[cellIndex].appendChild(this._element);
  }
}
