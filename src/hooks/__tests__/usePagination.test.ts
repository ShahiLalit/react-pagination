import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";
import { usePagination } from "../usePagination";

describe("usePagination", () => {
  it("returns correct range when totalCount <= pageSize", () => {
    const { result } = renderHook(() =>
      usePagination({
        totalCount: 10,
        pageSize: 10,
        currentPage: 1,
      })
    );

    expect(result.current).toEqual([1]);
  });

  it("returns correct range when shouldShowLeftDots is true when sibling = 1(defaultValue)", () => {
    const { result } = renderHook(() =>
      usePagination({
        totalCount: 100,
        pageSize: 10,
        currentPage: 7,
      })
    );
    expect(result.current).toEqual([1, 0, 7, 8, 9, 10]);
  });

  it("returns correct range when shouldShowLeftDots is true when sibling = 2(custom)", () => {
    const { result } = renderHook(() =>
      usePagination({
        totalCount: 100,
        pageSize: 10,
        currentPage: 7,
        siblingCount: 2,
      })
    );
    expect(result.current).toEqual([1, 0, 6, 7, 8, 9, 10]);
  });

  it("returns correct range when shouldShowRightDots is true && siblingCount = 1 (defaultValue)", () => {
    const { result } = renderHook(() =>
      usePagination({
        totalCount: 100,
        pageSize: 10,
        currentPage: 3,
      })
    );

    expect(result.current).toEqual([1, 2, 3, 4, 0, 10]);
  });

  it("returns correct range when shouldShowRightDots is true && siblingCount = 2 (custom)", () => {
    const { result } = renderHook(() =>
      usePagination({
        totalCount: 100,
        pageSize: 10,
        currentPage: 3,
        siblingCount: 2,
      })
    );

    expect(result.current).toEqual([1, 2, 3, 4, 5, 0, 10]);
  });

  test("returns correct range when shouldShowLeftDots and shouldShowRightDots are true", () => {
    const { result } = renderHook(() =>
      usePagination({
        totalCount: 100,
        pageSize: 10,
        currentPage: 5,
        siblingCount: 2,
      })
    );

    expect(result.current).toEqual([1, 0, 3, 4, 5, 6, 7, 0, 10]);
  });
});
