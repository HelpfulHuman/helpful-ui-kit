import * as React from 'react';
import styled from 'styled-components';
import {TableColumnProps} from './Table';
import {TableRow} from './TableRow';
import {TableBodyColumn} from './TableBodyColumn';

export interface TableFooterProps {
    children?: React.ReactChild|React.ReactChild[];
    className?: string;
    columns: TableColumnProps[];
    item: any;
    style?: object;
};

var StyledTableFooter = styled.tfoot``;

function createTableFooter(props: TableFooterProps) {
    return props.columns.map((item, index) => {
        return (
            <TableBodyColumn
                key={`foot-${index}`}
                value={`foot-${index}`}
            />
        );
    });
};

export function TableFooter(props: TableFooterProps) {
    return (
        <StyledTableFooter
            className={props.className}
            style={props.style}
        >
            <TableRow>
                {props.children || createTableFooter(props)}
            </TableRow>
        </StyledTableFooter>
    );
};