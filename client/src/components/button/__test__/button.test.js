import React from "react";
import { render, screen } from "@testing-library/react";
import CustomButton from "../CustomButton";
import buttonStyles from '../../../stylesheets/components/buttons.module.css';

import "@testing-library/jest-dom/extend-expect";

//want a CustomButton on the screen
//want a CustomButton with the given color
//want a CustomButton with the given size

describe('custom button', () => {
  it("renders", () => {
    render(<CustomButton />);
    const renderedButton = screen.queryByTestId("button");

    expect(renderedButton).toBeTruthy();
    expect(renderedButton).toHaveClass(buttonStyles['custom-button'])
  });

  it("renders with correct background color", () => {
    render(<CustomButton bgColor={"#FFF"} />);
    const renderedButton = screen.getByTestId("button")

    expect(renderedButton).toHaveStyle(`background-color: #FFF`);
  });

  test.each([
      ['s', buttonStyles.small],
      ['m', buttonStyles.medium],
      ['x', buttonStyles.large]
  ])('renders variant %s with class %s', (variant, expectedClass) => {
    render(<CustomButton bgColor={"pink"} variant={variant}/>);
    const renderedButton = screen.getByTestId("button");

    expect(renderedButton).toHaveClass(expectedClass);
  })

  it("has a selected class when selected", () => {
    const utils = render(<CustomButton bgColor={"pink"} variant={"x"}/>);
    const renderedButton = screen.getByTestId("button");
    expect(renderedButton).not.toHaveClass(buttonStyles.selected);

    utils.rerender(<CustomButton bgColor={"pink"} variant={"x"} focusColor={"white"} selected />);
    expect(renderedButton).toHaveClass(buttonStyles.selected);
  });
})


