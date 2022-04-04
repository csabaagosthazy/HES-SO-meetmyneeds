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
    const button = screen.queryByTestId('button');

    expect(button).toBeTruthy();
    expect(button).toHaveClass(buttonStyles['custom-button'])
  });

  it("renders with correct background color", () => {
    const { getByTestId } = render(<CustomButton bgColor={"#FFF"} />);
    const CustomButtonComp = getByTestId("button");

    expect(CustomButtonComp).toHaveStyle(`background-color: #FFF`);
  });

  test.each([
      ['s', buttonStyles.small],
      ['m', buttonStyles.medium],
      ['x', buttonStyles.large]
  ])('renders variant %s with class %s', (variant, expectedClass) => {
    const { getByTestId } = render(<CustomButton bgColor={"pink"} variant={variant}/>);
    const CustomButtonComp = getByTestId("button");

    expect(CustomButtonComp).toHaveClass(expectedClass);
  })

  it("has a selected class when selected", () => {
    const { getByTestId, rerender } = render(<CustomButton bgColor={"pink"} variant={"x"}/>);
    const CustomButtonComp = getByTestId("button");
    expect(CustomButtonComp).not.toHaveClass(buttonStyles.selected);

    rerender(<CustomButton bgColor={"pink"} variant={"x"} focusColor={"white"} selected />);
    expect(CustomButtonComp).toHaveClass(buttonStyles.selected);
  });
})


