import React from "react";
import { render } from "@testing-library/react";
import CustomButton from "../CustomButton";
import "@testing-library/jest-dom/extend-expect";

//want a CustomButton on the screen
//want a CustomButton with the given color
//want a CustomButton with the given size

test("CustomButton renders", () => {
  const { queryByTestId } = render(<CustomButton />);
  const CustomButtonComp = queryByTestId("button");

  expect(CustomButtonComp).toBeTruthy();
});

test("CustomButton renders with correct background color", () => {
  const { getByTestId } = render(<CustomButton bgColor={"#FFF"} />);
  const CustomButtonComp = getByTestId("button");

  expect(CustomButtonComp).toHaveStyle(`background-color: #FFF`);
});

test("CustomButton renders with correct size and padding", () => {
  const { getByTestId } = render(
    <CustomButton bgColor={"pink"} variant={"x"} focusColor={"white"} />
  );
  const CustomButtonComp = getByTestId("button");

  expect(CustomButtonComp).toHaveStyle(`min-height: 150px`);
  expect(CustomButtonComp).toHaveStyle(`min-width: 175px`);
  expect(CustomButtonComp).toHaveStyle(`padding: 10px`);
});

test("CustomButton changing outline if selected", () => {
  const { getByTestId, rerender } = render(
    <CustomButton bgColor={"pink"} variant={"x"} focusColor={"white"} />
  );
  const CustomButtonComp = getByTestId("button");

  expect(CustomButtonComp).toHaveStyle(`outline: none`);

  rerender(<CustomButton bgColor={"pink"} variant={"x"} focusColor={"white"} selected />);

  expect(CustomButtonComp).toHaveStyle(`outline: white solid 3px`);
});
