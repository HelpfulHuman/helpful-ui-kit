import * as React from 'react';
import styled from 'styled-components';
import {TableColumnProps} from './Table';

export interface TableHeaderColumnProps {
    children?: React.ReactChild|React.ReactChild[];
    className?: string;
    column: TableColumnProps;
    headerColumnClicked?: {(val: TableColumnProps): void},
    style?: object;
};

var HeaderColumn = styled.th`
    border-bottom: 1px solid lightgray;
    cursor: auto;
    padding: .5rem;
    text-align: ${props => props.style.textAlign || 'left'};
`;

var ToggleIcon = styled.span`
    background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAYAAAD3Va0xAAAABGdBTUEAALGPC/xhBQAAAPFJREFU
OBHlkksKwjAQhiN4EPEkPnfiC1x5DFF8LUWx6uFcuhL1DCoqqP+gU5I2TcO4NPAzk5n8X5M0SrlH
G+0TNHMvc3cJ8oBeX23cy+3dFso6hGFr+3J7tYnyHWJzNK7sNrPaSIEwNDBt5swXwrClaf/M6gg3
iBf5xoUOqwkh/LE5w46CnTCEYz4LCP0FejMZSDJ2MB0kxn/z0AVPoc4PB6fL7pJ/D/FvlMQn/DlI
FaAzJIGQpw+Fo4hMAhuEBC0pIb9Avjsbat5Y6gsbxZyWQhk1187GFk9iqYLOFYoec5LocDSqERi9
N/Eg2BbqpRHe9F+x9AHwvBUAAAAASUVORK5CYII=) no-repeat center right;
    background-size: 8px;
    cursor: pointer;
    padding-left: 20px;
`;

export function TableHeaderColumn(props: TableHeaderColumnProps) {
    var showSort = (props.headerColumnClicked && props.column.sortProperty);
    var textAlign = (props.column.alignText ? props.column.alignText.toLowerCase() : 'left');
    var headerColumnStyle = {
        ...props.style, 
        cursor: (showSort ? "pointer" : "auto"),
        textAlign,
    };
    return (
        <HeaderColumn
            style={headerColumnStyle}
            className={props.className}
            onClick={props.headerColumnClicked ? () => props.headerColumnClicked(props.column) : null}
        >
            {props.children || props.column.title}
            {showSort ? <ToggleIcon /> : undefined}
        </HeaderColumn>
    );
};