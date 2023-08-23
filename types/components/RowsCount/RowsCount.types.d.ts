export interface IRowsCountProps {
    numberOfRows: number;
    onSelection: (value: number) => void;
    options?: string[];
}
