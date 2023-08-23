import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Pagination } from "..";

describe("Pagination", () => {
  it("should render pagination normally", () => {
    const pageChangeMock = jest.fn();
    const totalCount = 0;
    const currentPage = 0;
    const pageSize = 0;
    const pageCountChangeMock = jest.fn();
    render(
      <Pagination
        onPageChange={pageChangeMock}
        totalCount={totalCount}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageCountChange={pageCountChangeMock}
      />
    );

    const paginationContainer = screen.getByTestId("pagination-container");
    expect(paginationContainer).toBeInTheDocument();
  });
});
