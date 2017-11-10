import React from 'react';
import styled from 'styled-components';

export default class TableRow extends React.Component {
    render() {
        return (
            <tr tabIndex={0}>
                {this.props.children}
            </tr>
        )
    }
}