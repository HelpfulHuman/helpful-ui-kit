import React from 'react';
import TableRow from './TableRow';
import TableBodyColumn from './TableBodyColumn';

export default class TableFooter extends React.Component {

    constructor(props) {
        super(props);
        this.createTableFooter = this.createTableFooter.bind(this);
    }

    createTableFooter() {
        return this.props.columns.map((item, index) => {
            return (
                <TableBodyColumn
                    key={`foot-${index}`}
                    value={`foot-${index}`}
                />
            )
        })
    }
    
    render() {

        return (
            <tfoot tabIndex={0}>
                <TableRow>
                    {this.props.children || this.createTableFooter()}
                </TableRow>
            </tfoot>
        )
    }
}