import * as React from 'react';
import styled from 'styled-components';

export interface TableBodyColumnProps {
    alignText?: string;
    children?: React.ReactChild|React.ReactChild[];
    className?: string;
    style?: object;
    value?: string;
};

var BodyColumn = styled.td`
    padding: .5rem;
    text-align: ${props => props.style.textAlign || 'left'};
`;

export function TableBodyColumn(props: TableBodyColumnProps) {
    var tableBodyColumnStyle = {...props.style, textAlign: props.alignText}
    return (
        <BodyColumn
            style={tableBodyColumnStyle}
            className={props.className}
        >
            {props.children || props.value}
        </BodyColumn>
    );
};
