import React from 'react';

export default class TableBodyColumn extends React.Component {
    render() {
        return (
            <td tabIndex={0}>
                {this.props.children || this.props.value}
            </td>
        )
    }
}