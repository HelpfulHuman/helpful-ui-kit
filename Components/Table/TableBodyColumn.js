import React from 'react';
import styled from 'styled-components';

export default class TableBodyColumn extends React.Component {
    render() {
        const BodyColumn = styled.td`
            text-align: ${this.props.alignText ? this.props.alignText.toLowerCase() : 'left'};
            padding: .5rem;
        `
        return (
            <BodyColumn tabIndex={0}>
                {this.props.children || this.props.value}
            </BodyColumn>
        )
    }
}