import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "../app/components/footer/footer";

Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(),
  },
});

describe("Footer handleCopy", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("copies email to clipboard and shows 'Copied'", async () => {
    render(<Footer />);
    const copyButton = screen.getByTitle("Copy email");
    fireEvent.click(copyButton);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("thesonia07@gmail.com");
    expect(screen.getByText("Copied")).toBeInTheDocument();
  });
});
