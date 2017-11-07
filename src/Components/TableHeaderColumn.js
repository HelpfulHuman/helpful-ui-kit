import React from 'react';

export default class TableHeaderColumn extends React.Component {
    render() {
        return (
            <th onClick={this.props.toggleSort || null} tabIndex={0}>
                {this.props.children || this.props.value}
            </th>
        )
    }
}