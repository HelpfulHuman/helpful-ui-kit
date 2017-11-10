import React from 'react';
import TableRow from './TableRow';
import TableHeaderColumn from './TableHeaderColumn';

export default class TableHeader extends React.Component {
    
    constructor(props) {
        super(props);
        this.createTableHeader = this.createTableHeader.bind(this);
    }

    createTableHeader() {
        const toggleSort = this.props.toggleSort || undefined;
        return this.props.columns.map((column, i) => {
            return (
                <TableHeaderColumn 
                    key={`${i}-${column.title}`}
                    value={column.title}
                    toggleSort={column.sortProperty && toggleSort ? () => toggleSort(column.sortProperty) : null}
                    alignText={column.alignText}
                />
            )
        })
    }

    
    render() {
        return (
            <thead tabIndex={0}>
                <TableRow>
                    {this.props.children || this.createTableHeader()}
                </TableRow>
            </thead>
        )
    }
}
