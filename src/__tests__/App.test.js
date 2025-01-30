import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";

describe("App tests", () => {
  it("should render the app without trouble", () => {
    render(<App />);
    const heading = screen.getByText("Sngular Test");
    expect(heading).toBeInTheDocument();
  });
  it("while no interaction should display the correct message", () => {
    render(<App />);
    const resultMessage = screen.getByText(
      "Please enter a number to calculate"
    );
    expect(resultMessage).toBeInTheDocument();
  });
  it("test for the first 10 natural numbers", () => {
    render(<App />);
    const numberInput = screen.getByRole("spinbutton");
    const calculateButton = screen.getByRole("button", { name: /calculate/i });

    fireEvent.change(numberInput, { target: { value: "1" } });
    fireEvent.click(calculateButton);
    screen.getByText("Series(1) = 3");
    fireEvent.change(numberInput, { target: { value: "2" } });
    fireEvent.click(calculateButton);
    screen.getByText("Series(2) = 8");
    fireEvent.change(numberInput, { target: { value: "3" } });
    fireEvent.click(calculateButton);
    screen.getByText("Series(3) = 13");
    fireEvent.change(numberInput, { target: { value: "4" } });
    fireEvent.click(calculateButton);
    screen.getByText("Series(4) = 21");
    fireEvent.change(numberInput, { target: { value: "5" } });
    fireEvent.click(calculateButton);
    screen.getByText("Series(5) = 28");
    fireEvent.change(numberInput, { target: { value: "6" } });
    fireEvent.click(calculateButton);
    screen.getByText("Series(6) = 43");
    fireEvent.change(numberInput, { target: { value: "7" } });
    fireEvent.click(calculateButton);
    screen.getByText("Series(7) = 59");
    fireEvent.change(numberInput, { target: { value: "8" } });
    fireEvent.click(calculateButton);
    screen.getByText("Series(8) = 86");
    fireEvent.change(numberInput, { target: { value: "9" } });
    fireEvent.click(calculateButton);
    screen.getByText("Series(9) = 119");
    fireEvent.change(numberInput, { target: { value: "10" } });
    fireEvent.click(calculateButton);
    screen.getByText("Series(10) = 163");
  });
});
