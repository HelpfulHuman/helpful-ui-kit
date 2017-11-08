import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import styled from 'styled-components';

export default class Table extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            sortProperty: undefined,
            sortOrder: true
        }
        this.toggleSort = this.toggleSort.bind(this);
        this.formatData = this.formatData.bind(this);
    }

    toggleSort(property) {
        if (!this.state.sortProperty || property !== this.state.sortProperty) {
          this.setState({ sortProperty: property, sortOrder: true });
        } else {
          this.setState({ sortOrder: !this.state.sortOrder })
        }
    }
    
    formatData() {
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

    render() {
        const TableWrapper = styled.table`
            width: 100%;
            background: ${this.props.styles ? this.props.styles.backgroundColor : 'yellow'};
            ${this.props.showBorder ? `border: 1px solid black` : null};
        `
        return (
            <TableWrapper tabIndex={0}>
                <TableHeader
                    columns={this.props.columns}
                    toggleSort={this.toggleSort}
                />
                <TableBody
                    columns={this.props.columns}
                    data={this.formatData()}
                />
                <TableFooter
                    columns={this.props.columns}
                />
                {this.props.children}
            </TableWrapper>
        )
    }
}
