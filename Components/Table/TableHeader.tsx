import * as React from 'react';
import styled from 'styled-components';
import {TableColumnProps} from "./Table";
import {TableRow} from './TableRow';
import {TableHeaderColumn} from './TableHeaderColumn';

export interface TableHeaderProps {
    children?: React.ReactChild|React.ReactChild[];
    className?: string;
    columns: TableColumnProps[];
    headerColumnClicked?: (val: TableColumnProps) => void;
    style?: object;
    rowStyle?: object;
};

var StyledTableHeader = styled.thead``;

function renderTableColumns(props: TableHeaderProps): JSX.Element[] {
    return props.columns.map((column, i) => {
        return (
            <TableHeaderColumn
                style={props.rowStyle}
                headerColumnClicked={props.headerColumnClicked || null}
                key={`${i}-${column.title}`}
                column={column}
            />
        );
    });
};

export function TableHeader(props: TableHeaderProps) {
    return (
        <StyledTableHeader
            style={props.style}
            className={props.className}
        >
            <TableRow>
                {props.children || renderTableColumns(props)}
            </TableRow>
        </StyledTableHeader>
    );
};
