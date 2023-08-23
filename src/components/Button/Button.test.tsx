import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button", () => {
  it("renders Pagination Button", () => {
    const onChangeMock = jest.fn();
    const pageNumber = 1;
    render(
      <Button
        currentPage={1}
        pageNumber={pageNumber}
        handlePageChange={onChangeMock}
      >
        {pageNumber}
      </Button>
    );
    const pageNumberOnScreen = screen.getByText("1");
    expect(pageNumberOnScreen).toBeInTheDocument();
  });

  it("when page is selected, button should be highlighted with accent color", () => {
    const onChangeMock = jest.fn();
    const pageNumber = 1;
    render(
      <Button
        currentPage={1}
        pageNumber={pageNumber}
        handlePageChange={onChangeMock}
        selected
      >
        {pageNumber}
      </Button>
    );
    const pageNumberOnScreen = screen.getByText("1");
    expect(pageNumberOnScreen).toHaveClass("bg-indigo-600");
  });

  it("when disabled, the button show", () => {
    const onChangeMock = jest.fn();
    const pageNumber = 1;
    const currentPage = 1;
    render(
      <Button
        currentPage={currentPage}
        pageNumber={pageNumber}
        handlePageChange={onChangeMock}
        disabled={true}
      />
    );

    const pageButton = screen.getByTestId("page-button");
    expect(pageButton).toHaveClass("pointer-events-none");
  });
});
