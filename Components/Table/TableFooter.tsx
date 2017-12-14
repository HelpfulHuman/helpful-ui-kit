import * as React from 'react';
import {Column} from './Table';
import {TableRow} from './TableRow';
import {TableBodyColumn} from './TableBodyColumn';

export interface TableFooterProps {
    columns: Column[];
    item: any
}

export class TableFooter extends React.Component<TableFooterProps> {

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
            <tfoot>
                <TableRow>
                    {this.props.children || this.createTableFooter()}
                </TableRow>
            </tfoot>
        )
    }
}