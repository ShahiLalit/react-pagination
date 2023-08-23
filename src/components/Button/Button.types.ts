type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  currentPage: number;
  pageNumber: number;
  selected?: boolean;
  disabled?: boolean;
  firstButton?: boolean;
  lastButton?: boolean;
  previousButton?: boolean;
  nextButton?: boolean;
  handlePageChange: () => void;
  children?:
    | JSX.Element[]
    | JSX.Element
    | React.ReactElement
    | React.ReactElement[]
    | string
    | number;
  highlightColor?: RGB | RGBA | HEX;
  textColor?: RGB | RGBA | HEX;
}
