import React from "react";
import { render, screen } from "@testing-library/react";
import CustomButtonGroup from "../CustomButtonGroup";
import "@testing-library/jest-dom/extend-expect";

const text = [
  {technicalKey: "essential", label: "Essential"},
  {technicalKey: "important", label: "Important"},
  {technicalKey: "less_important", label: "Less important"},
  {technicalKey: "not_important", label: "Need already met"},
  {technicalKey: "already_filled", label: "Not concerned"},
];

test("CustomButtonGroup renders", () => {
  render(<CustomButtonGroup textObj={text} variant={"red"} />);
  const component = screen.queryByTestId("buttonGroup");

  expect(component).toBeTruthy();
});

test("CustomButtonGroup renders 5 buttons", () => {
  render(<CustomButtonGroup textObj={text} variant={"red"} />);
  const button = screen.getAllByRole("button");

  expect(button).toHaveLength(5);
});
