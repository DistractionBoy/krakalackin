import React from "react";
import { render, screen } from "@testing-library/react";

import Home from "../pages";

describe("Home Page", () => {
  it("should render", () => {
    render(<Home />);
    const welcomeText = screen.getByRole("heading", /Home Page/u);
    expect(welcomeText).toBeDefined();
  });
});
