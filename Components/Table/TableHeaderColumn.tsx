import * as React from 'react';
import styled from 'styled-components';
import {Column} from './Table';

export interface TableHeaderColumnProps {
    headerColumnClicked?: {(val: Column): void},
    column: Column;
}

export class TableHeaderColumn extends React.Component<TableHeaderColumnProps> {

    render(): JSX.Element {

        const HeaderColumn = styled.th`
            cursor: ${this.props.headerColumnClicked && this.props.column.sortProperty ? 'pointer' : 'auto'};
            text-align: ${this.props.column.alignText ? this.props.column.alignText.toLowerCase() : 'left'};
            padding: .5rem;
            border-bottom: 1px solid lightgray;
        `;

        const ToggleIcon = styled.span`
            cursor: pointer;
            background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAYAAAD3Va0xAAAABGdBTUEAALGPC/xhBQAAAPFJREFU
OBHlkksKwjAQhiN4EPEkPnfiC1x5DFF8LUWx6uFcuhL1DCoqqP+gU5I2TcO4NPAzk5n8X5M0SrlH
G+0TNHMvc3cJ8oBeX23cy+3dFso6hGFr+3J7tYnyHWJzNK7sNrPaSIEwNDBt5swXwrClaf/M6gg3
iBf5xoUOqwkh/LE5w46CnTCEYz4LCP0FejMZSDJ2MB0kxn/z0AVPoc4PB6fL7pJ/D/FvlMQn/DlI
FaAzJIGQpw+Fo4hMAhuEBC0pIb9Avjsbat5Y6gsbxZyWQhk1187GFk9iqYLOFYoec5LocDSqERi9
N/Eg2BbqpRHe9F+x9AHwvBUAAAAASUVORK5CYII=) no-repeat center right;
            background-size: 8px;
            padding-left: 20px;
        `;

        return (
            <HeaderColumn onClick={this.props.headerColumnClicked ? () => this.props.headerColumnClicked(this.props.column) : null}>
                {this.props.children || this.props.column.title}
                {this.props.headerColumnClicked && this.props.column.sortProperty ? <ToggleIcon /> : undefined}
            </HeaderColumn>
        )
    }
}
