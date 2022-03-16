import React from "react";
import { render, screen } from "@testing-library/react";
import CustomButtonGroup from "../CustomButtonGroup";
import "@testing-library/jest-dom/extend-expect";

const text = {
  essential: "Essential",
  important: "Important",
  medium: "Less important",
  done: "Need already met",
  none: "Not concerned",
};

test("CustomButtonGroup renders", () => {
  const { queryByTestId } = render(<CustomButtonGroup textObj={text} />);
  const component = queryByTestId("buttonGroup");

  expect(component).toBeTruthy();
});

test("CustomButtonGroup renders 5 buttons", () => {
  const { queryByTestId } = render(<CustomButtonGroup textObj={text} />);
  const button = screen.getAllByRole("button");

  expect(button).toHaveLength(5);
});
