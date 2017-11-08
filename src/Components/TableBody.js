import React from 'react';
import TableRow from './TableRow';
import TableBodyColumn from './TableBodyColumn';

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
                        />
                    )}
                </TableRow>
            )
        })
    }

    render() {
        return (
            <tbody tabIndex={0}>
                {this.props.children || this.createTableBody()}
            </tbody>
        )
    }
}