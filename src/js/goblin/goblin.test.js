import { Goblin } from "./goblin";

describe("class Goblin", () => {
  test("new Goblin()", () => {
    const goblin = new Goblin();

    expect(goblin._element).toBeInstanceOf(HTMLImageElement);
    expect(goblin._element.classList).toContain("goblin");
  });
});
