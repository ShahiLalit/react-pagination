export declare const DOTS = 0;
interface IUsePaginationProps {
    totalCount: number;
    pageSize: number;
    siblingCount?: number;
    currentPage: number;
}
export declare const usePagination: ({ totalCount, pageSize, siblingCount, currentPage, }: IUsePaginationProps) => number[];
export {};
