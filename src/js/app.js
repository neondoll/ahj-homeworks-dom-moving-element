import { Board } from "./board/board";
import { Goblin } from "./goblin/goblin";

document.addEventListener("DOMContentLoaded", () => {
  const board = new Board(document.querySelector(".board"));
  board.drawCells();

  const goblin = new Goblin();
  goblin.moveToAnotherCell(board);

  setInterval(() => {
    goblin.moveToAnotherCell(board);
  }, 1000);
});
