import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

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
            if (a[property] > b[property]) {
              return this.state.sortOrder ? 1 : -1;
            } else if (b[property] > a[property]) {
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
        return (
            <table tabIndex={0}>
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
            </table>
        )
    }
}
