import * as React from 'react';
import {TableRow} from './TableRow';
import {Column} from './Table';
import {TableBodyColumn} from './TableBodyColumn';
import styled from 'styled-components';

export interface TableBodyProps {
    columns: Column[],
    data: any[]
}

export class TableBody extends React.Component<TableBodyProps> {

    constructor(props) {
        super(props);
        this.createTableBody = this.createTableBody.bind(this);
    }

    createTableBody() {
        return this.props.data.map((item, index) => {
            return (
                <TableRow key={`table-row-${index}`}>
                    {this.props.columns.map((column, index) => 
                        <TableBodyColumn
                            key={`table-body-column-${index}`}
                            value={column.value(item) === 0 ? 0 : column.value(item) || column.placeholder || ''}
                            alignText={column.alignText}
                        />
                    )}
                </TableRow>
            )
        })
    }

    render(): JSX.Element {
        const StyledBody = styled.tbody`
            tr:not(:last-of-type) {
                border-bottom: 1px solid lightgray;
            };
        `
        return (
            <StyledBody tabIndex={0}>
                {this.props.children || this.createTableBody()}
            </StyledBody>
        )
    }
}