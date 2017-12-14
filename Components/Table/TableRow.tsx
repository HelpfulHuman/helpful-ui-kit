import * as React from 'react';
import styled from 'styled-components';

export class TableRow extends React.Component {
    render() {
        return (
            <tr>
                {this.props.children}
            </tr>
        )
    }
}