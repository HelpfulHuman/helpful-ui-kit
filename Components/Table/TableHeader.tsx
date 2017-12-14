import * as React from 'react';
import {Column} from "./Table";
import {TableRow} from './TableRow';
import {TableHeaderColumn} from './TableHeaderColumn';

export interface TableHeaderProps {
    headerColumnClicked?: (val: Column) => void;
    columns: Column[];
}

export class TableHeader extends React.Component<TableHeaderProps> {
    
    constructor(props) {
        super(props);
        this.createTableHeader = this.createTableHeader.bind(this);
    }

    createTableHeader(): JSX.Element[] {
        return this.props.columns.map((column, i) => {
            return (
                <TableHeaderColumn
                    headerColumnClicked={this.props.headerColumnClicked || null}
                    key={`${i}-${column.title}`}
                    column={column}
                />
            );
        });
    }

    
    render(): JSX.Element {
        return (
            <thead>
                <TableRow>
                    {this.props.children || this.createTableHeader()}
                </TableRow>
            </thead>
        )
    }
}
