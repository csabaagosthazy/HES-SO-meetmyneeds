import { render, screen } from "@testing-library/react";
import App from "./App";

test.skip("App renders Counter component with correct text", () => {
  render(<App />);
  //const element = screen.getByText("My counter");
  //expect(element).toBeInTheDocument();
});
