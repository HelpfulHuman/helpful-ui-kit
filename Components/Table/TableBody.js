import React from 'react';
import TableRow from './TableRow';
import TableBodyColumn from './TableBodyColumn';
import styled from 'styled-components';

export default class TableBody extends React.Component {

    constructor(props) {
        super(props);
        this.createTableBody = this.createTableBody.bind(this);
    }

    createTableBody(item, index) {
        return this.props.data.map((item, index) => {
            return (
                <TableRow key={`table-row-${index}`}>
                    {this.props.columns.map((column, index) => 
                        <TableBodyColumn
                            key={`${index}-${item[column.property]}`}
                            item={item}
                            value={column.value(item) === 0 ? 0 : column.value(item) || column.placeholder || ''}
                            alignText={column.alignText}
                        />
                    )}
                </TableRow>
            )
        })
    }

    render() {
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