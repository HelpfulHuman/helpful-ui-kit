import * as React from 'react';
import {TableRow} from './TableRow';
import {TableColumnProps} from './Table';
import {TableBodyColumn} from './TableBodyColumn';
import styled from 'styled-components';

export interface TableBodyProps {
    children?: React.ReactChild|React.ReactChild[];
    className?: string;
    columns: TableColumnProps[];
    data: any[];
    style?: object;
    showRowHover?: boolean;
    rowStyle?: object;
    striped?: boolean;
};

var StyledBody = styled.tbody`
    tr:not(:last-of-type) {
        border-bottom: 1px solid lightgray;
    };
`;

function createTableBody(props: TableBodyProps) {
    return props.data.map((item, index) => {
        return (
            <TableRow
                isActive={props.striped && index % 2 === 0}
                key={`table-row-${index}`}
                showRowHover={props.showRowHover}
            >
                {props.columns.map((column, index) => 
                    <TableBodyColumn
                        style={props.rowStyle}
                        alignText={column.alignText}
                        key={`table-body-column-${index}`}
                        value={column.value(item) === 0 ? 0 : column.value(item) || column.placeholder || ''}
                    />
                )}
            </TableRow>
        );
    });
};

export function TableBody(props: TableBodyProps) {
    return (
        <StyledBody
            style={props.style}
            className={props.className}
        >
            {props.children || createTableBody(props)}
        </StyledBody>
    );
};
