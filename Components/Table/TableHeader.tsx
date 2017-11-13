import * as React from 'react';
import {Column} from "./Table";
import {TableRow} from './TableRow';
import {TableHeaderColumn} from './TableHeaderColumn';

export interface TableHeaderProps {
    toggleSort?: (val: string) => void;
    columns: Column[]
}

export class TableHeader extends React.Component<TableHeaderProps> {
    
    constructor(props) {
        super(props);
        this.createTableHeader = this.createTableHeader.bind(this);
    }

    createTableHeader(): JSX.Element[] {
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

    
    render(): JSX.Element {
        return (
            <thead tabIndex={0}>
                <TableRow>
                    {this.props.children || this.createTableHeader()}
                </TableRow>
            </thead>
        )
    }
}
