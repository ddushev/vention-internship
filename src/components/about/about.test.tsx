import { render, screen } from "@testing-library/react";
import About from "./about";

describe("About component", () => {
  render(<About />);

  test("h2 text", () => {
    expect(screen.getByText("About page")).toBeDefined();
  });
});
