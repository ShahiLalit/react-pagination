type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export interface IPaginationProps {
  onPageChange: (pageNumber: number, page: string) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  onPageCountChange: (rows: number) => void;
  showPageCount?: boolean;
  highlightColor?: RGB | RGBA | HEX;
  textColor?: RGB | RGBA | HEX;
  options?: string[];
}
