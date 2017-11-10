import React from 'react';

export default class TableRow extends React.Component {
    render() {
        return (
            <tr tabIndex={0}>
                {this.props.children}
            </tr>
        )
    }
}