import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About Page", () => {
  test("displays the heading", () => {
    render(<About />);
    expect(screen.getByRole("heading")).toHaveTextContent("About Page");
  });

  test("displays the correct description", () => {
    render(<About />);
    expect(screen.getByText(/Hello from CloudFront!/i)).toBeInTheDocument();
  });
});
