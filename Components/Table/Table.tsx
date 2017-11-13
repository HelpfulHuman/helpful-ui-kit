import * as React from 'react';
import {TableHeader} from './TableHeader';
import {TableBody} from './TableBody';
import {TableFooter} from './TableFooter';
import styled from 'styled-components';

export interface Column {
    title?: string;
    toggleSort?: (val: string) => void;
    sortProperty?: string;
    placeholder?: string;
    alignText?: string;
    value?: any;
}

export interface TableProps {
    columns: Column[];
    data: any[];
}

export interface TableState {
    sortProperty?: string;
    sortOrder?: boolean;
}

export class Table extends React.Component<TableProps, TableState> {
    
    constructor(props) {
        super(props);
        this.state = {
            sortProperty: undefined,
            sortOrder: true
        }
        this.toggleSort = this.toggleSort.bind(this);
        this.formatData = this.formatData.bind(this);
    }

    // toggles the sort property/order for the data array being passed in.  Property is
    // sortProperty from columns array.
    toggleSort(property) {
        if (!this.state.sortProperty || property !== this.state.sortProperty) {
          this.setState({ sortProperty: property, sortOrder: true });
        } else {
          this.setState({ sortOrder: !this.state.sortOrder })
        }
    }
    
    // if sort properties exist, sort data before rendering item rows.
    formatData(): any[] {
        const property = this.state.sortProperty;
        if (property) {
          return this.props.data.sort((a, b) => {
            const itemA = a[property] ? a[property].toLowerCase() : '';
            const itemB = b[property] ? b[property].toLowerCase() : '';
            if (itemA > itemB) {
              return this.state.sortOrder ? 1 : -1;
            } else if (itemB > itemA) {
              return this.state.sortOrder ? -1 : 1;
            } else {
              return 0
            }
          })
        } else {
          return this.props.data
        }
    }

    render(): JSX.Element {

        const TableWrapper = styled.table`
            width: 100%;
            border-collapse: collapse;
            border: 1px solid lightgray
        `

        return (
            <TableWrapper className="table" tabIndex={0}>
                <TableHeader
                    columns={this.props.columns}
                    toggleSort={this.toggleSort}
                />
                <TableBody
                    columns={this.props.columns}
                    data={this.formatData()}
                /> 
                {this.props.children}
            </TableWrapper>
        )
    }
}
