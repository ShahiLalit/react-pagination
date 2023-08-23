import React from "react";
import { IPaginationProps } from "./Pagination.types";
declare function Pagination(props: IPaginationProps): React.JSX.Element;
declare namespace Pagination {
    var defaultProps: {
        siblingCount: number;
    };
}
export default Pagination;
