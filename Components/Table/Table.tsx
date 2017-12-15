import * as React from 'react';
import {TableHeader} from './TableHeader';
import {TableBody} from './TableBody';
import {TableFooter} from './TableFooter';
import styled from 'styled-components';

export interface TableColumnProps {
    alignText?: string;
    placeholder?: string;
    sortProperty?: string;
    title?: string;
    value?: any;
};

export interface TableProps {
    children?: React.ReactChild|React.ReactChild[];
    className?: string;
    columns: TableColumnProps[];
    data: any[];
    headerColumnClicked?: (val: TableColumnProps) => void;
    style?: object;
    showRowHover?: boolean;
    striped?: boolean;
    headerStyle?: object;
    bodyStyle?: object;
    rowStyle?: object;
};

var TableWrapper = styled.table`
    border: 1px solid lightgray;
    border-collapse: collapse;
    width: 100%;
`;

export function Table(props: TableProps) {
    return (
        <TableWrapper
            className={props.className}
            style={props.style}
        >
            <TableHeader
                style={props.headerStyle}
                rowStyle={props.rowStyle}
                columns={props.columns}
                headerColumnClicked={props.headerColumnClicked}
            />
            {props.children}
            <TableBody
                striped={props.striped}
                style={props.bodyStyle}
                rowStyle={props.rowStyle}
                columns={props.columns}
                data={props.data}
                showRowHover={props.showRowHover}
            /> 
        </TableWrapper>
    );
};
