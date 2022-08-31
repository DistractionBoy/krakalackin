import React from "react";
import { render, screen } from "@testing-library/react";

import Sample from "./Sample";

describe("Sample", () => {
  it("renders", () => {
    render(<Sample />);
    const text = screen.getByText(/Sample Component/i);
    expect(text).toBeDefined();
  });
});
