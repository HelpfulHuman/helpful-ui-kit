import * as React from 'react';
import {TableHeader} from './TableHeader';
import {TableBody} from './TableBody';
import {TableFooter} from './TableFooter';
import styled from 'styled-components';

export interface Column {
    title?: string;
    placeholder?: string;
    alignText?: string;
    value?: any;
    sortProperty?: string;
}

export interface TableProps {
    columns: Column[];
    data: any[];
    headerColumnClicked?: (val: Column) => void;
    style?: object;
    className?: string;
}

const TableWrapper = styled.table`
    width: 100%;
    border-collapse: collapse;
    border: 1px solid lightgray
`

export class Table extends React.Component<TableProps> {

    render(): JSX.Element {

        return (
            <TableWrapper
                className={this.props.className}
                style={this.props.style}
            >
                <TableHeader
                    columns={this.props.columns}
                    headerColumnClicked={this.props.headerColumnClicked}
                />
                <TableBody
                    columns={this.props.columns}
                    data={this.props.data}
                /> 
                {this.props.children}
            </TableWrapper>
        )
    }
}
