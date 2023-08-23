import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import RowsCount from "./RowsCount";

describe("ShowRowsCount", () => {
  it("renders the showRowsCount dropdown normally", () => {
    const mockOnSelection = jest.fn();

    const options = ["10", "20", "50", "100"];
    const numberOfRows = 10;
    render(
      <RowsCount
        options={options}
        onSelection={mockOnSelection}
        numberOfRows={numberOfRows}
      />
    );

    expect(screen.getByText(/Show 10/i)).toBeInTheDocument();
  });
  it("renders RowsCount component with options and triggers selection", () => {
    const mockOnSelection = jest.fn();

    const options = ["10", "20", "50", "100", "1000"];
    const numberOfRows = 100;
    render(
      <RowsCount
        options={options}
        onSelection={mockOnSelection}
        numberOfRows={numberOfRows}
      />
    );
    expect(screen.getByText(/Show 100/i)).toBeInTheDocument();

    // Open the dropdown
    fireEvent.click(screen.getByLabelText("Rows"));

    // Check if options are rendered
    waitFor(() => {
      options.forEach((option) => {
        expect(screen.getByText(`Show ${option}`)).toBeInTheDocument();
      });
      // Select an option
      fireEvent.click(screen.getByText(`Show ${numberOfRows}`));

      // Check if the selection function was called
      expect(mockOnSelection).toHaveBeenCalledWith(numberOfRows);
    });
  });

  it("displays the correct selected value", () => {
    const mockOnSelection = jest.fn();

    const options = ["10", "20", "50", "100", "1000"];
    const numberOfRows = 100;
    render(
      <RowsCount
        options={options}
        onSelection={mockOnSelection}
        numberOfRows={numberOfRows}
      />
    );

    const selectedValue = screen.getByText(`Show ${numberOfRows}`);
    expect(selectedValue).toBeInTheDocument();
  });

  it("renders select item indicator when an option is selected", () => {
    const mockOnSelection = jest.fn();

    const options = ["10", "20", "50", "100", "1000"];
    const numberOfRows = 100;
    render(
      <RowsCount
        options={options}
        onSelection={mockOnSelection}
        numberOfRows={numberOfRows}
      />
    );

    // Open the dropdown
    fireEvent.click(screen.getByLabelText("Rows"));

    waitFor(() => {
      // Select an option
      fireEvent.click(screen.getByText(`Show ${numberOfRows}`));

      // Check if the select item indicator is rendered
      const itemIndicator = screen.getByTestId("select-item-indicator");
      expect(itemIndicator).toBeInTheDocument();
    });
  });
});
