import * as React from 'react';
import styled from 'styled-components';

export interface TableBodyColumnProps {
    alignText?: string;
    value?: string;
}

const BodyColumn = styled.td`
    text-align: ${props => props.style.textAlign};
    padding: .5rem;
`

export class TableBodyColumn extends React.Component<TableBodyColumnProps> {
    
    public static defaultProps = {
        alignText: 'left',
    };
    
    render(): JSX.Element {
        return (
            <BodyColumn style={{textAlign: this.props.alignText}}>
                {this.props.children || this.props.value}
            </BodyColumn>
        )
    }
}