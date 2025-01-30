import "@testing-library/jest-dom";
import { preventNotNumberCharacter } from "../Common/inputFuctions";

describe("preventNotNumberCharacter", () => {
  it("should allow numeric keys and special keys", () => {
    const allowedKeys = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "Backspace",
      "Tab",
      "Enter",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
    ];

    allowedKeys.forEach((key) => {
      const event = new KeyboardEvent("keydown", { key });
      const preventDefault = jest.spyOn(event, "preventDefault");

      preventNotNumberCharacter(event);

      expect(preventDefault).not.toHaveBeenCalled();
    });
  });

  it("should prevent non-numeric characters", () => {
    const disallowedKeys = ["a", "b", "c", "!", "@", "#", " "];

    disallowedKeys.forEach((key) => {
      const event = new KeyboardEvent("keydown", { key });
      const preventDefault = jest.spyOn(event, "preventDefault");

      preventNotNumberCharacter(event);

      expect(preventDefault).toHaveBeenCalled();
    });
  });
});
