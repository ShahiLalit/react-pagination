import React from "react";
import { PAGES, defaultOptions } from "../../constants";
import { usePagination, DOTS } from "../../hooks/usePagination";
import Button from "../Button";
import RowsCount from "../RowsCount";
import {
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import { classnames } from "../../utils";
import { IPaginationProps } from "./Pagination.types";

function Pagination(props: IPaginationProps) {
  const {
    onPageChange,
    totalCount,
    siblingCount,
    currentPage,
    pageSize,
    onPageCountChange,
    showPageCount = false,
    highlightColor,
    options,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize: showPageCount ? pageSize : Number(defaultOptions[0]),
  });

  const lastPage = paginationRange[paginationRange.length - 1];

  const onNext = () => {
    onPageChange(currentPage + 1, PAGES.NEXT);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1, PAGES.PREVIOUS);
  };

  const onFirst = () => {
    onPageChange(1, PAGES.FIRST);
  };

  const onLast = () => {
    onPageChange(lastPage, PAGES.LAST);
  };

  const onPageNumber = (pageNumber: number) => {
    onPageChange(pageNumber, PAGES.PAGE_NUMBER);
  };

  return (
    <div
      className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
      data-testid="pagination-container"
    >
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          data-testid="previous-button"
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {showPageCount && (
            <RowsCount
              options={options}
              numberOfRows={pageSize}
              onSelection={onPageCountChange}
            />
          )}

          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">
              {pageSize * (currentPage - 1) + 1}
            </span>{" "}
            to{" "}
            <span className="font-medium">
              {lastPage === currentPage ? totalCount : currentPage * pageSize}
            </span>{" "}
            of <span className="font-medium">{totalCount}</span> results
          </p>
        </div>
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <Button
            pageNumber={0}
            currentPage={currentPage}
            handlePageChange={onFirst}
            disabled={currentPage === 1}
            firstButton={true}
            data-testid="gotoFirst-button"
          >
            <DoubleArrowLeftIcon
              className={classnames("h-4 w-4 text-blue-500", {
                "text-gray-400": currentPage === 1,
              })}
            />
          </Button>
          <Button
            pageNumber={0}
            currentPage={currentPage}
            handlePageChange={onPrevious}
            disabled={currentPage === 1}
            previousButton={true}
            data-testid="gotoPrevious-button"
          >
            <ChevronLeftIcon
              className={classnames("h-4 w-4 text-blue-500", {
                "text-gray-400": currentPage === 1,
              })}
            />
          </Button>
          {paginationRange.map((pageNumber: number, index: number) => {
            if (pageNumber === DOTS) {
              return (
                <Button
                  key={`${index}-${DOTS}`}
                  pageNumber={pageNumber}
                  currentPage={currentPage}
                  disabled
                  handlePageChange={() => {}}
                  data-testid="dots-button"
                >
                  &#8230;
                </Button>
              );
            }
            return (
              <Button
                key={pageNumber}
                pageNumber={pageNumber}
                currentPage={currentPage}
                handlePageChange={() => onPageNumber(pageNumber)}
                selected={pageNumber === currentPage}
                highlightColor={highlightColor}
                data-testid="pageNumber-button"
              >
                {pageNumber}
              </Button>
            );
          })}
          <Button
            pageNumber={0}
            currentPage={currentPage}
            handlePageChange={onNext}
            disabled={currentPage === lastPage}
            nextButton={true}
            data-testid="gotoNext-button"
          >
            <ChevronRightIcon
              className={classnames("h-4 w-4 text-blue-500", {
                "text-gray-400": currentPage === lastPage,
              })}
            />
          </Button>
          <Button
            pageNumber={0}
            currentPage={currentPage}
            handlePageChange={onLast}
            disabled={currentPage === lastPage}
            lastButton={true}
            data-testid="gotoLast-button"
          >
            <DoubleArrowRightIcon
              className={classnames("h-4 w-4 text-blue-500", {
                "text-gray-400": currentPage === lastPage,
              })}
            />
          </Button>
        </nav>
      </div>
    </div>
  );
}

Pagination.defaultProps = {
  siblingCount: 1,
};
export default Pagination;
