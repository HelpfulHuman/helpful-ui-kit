import * as React from 'react';
import styled from 'styled-components';

export interface TableBodyColumnProps {
    alignText?: string;
    value?: string;
}

export class TableBodyColumn extends React.Component<TableBodyColumnProps> {
    render(): JSX.Element {
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