import React from 'react';
import styled from 'styled-components';

export default class TableHeaderColumn extends React.Component {

    render() {

        const HeaderColumn = styled.th`
            cursor: ${this.props.toggleSort ? 'pointer' : 'auto'};
            text-align: ${this.props.alignText ? this.props.alignText.toLowerCase() : 'left'};
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
            <HeaderColumn onClick={this.props.toggleSort || null} tabIndex={0}>
                {this.props.children || this.props.value}
                {this.props.toggleSort ? <ToggleIcon /> : undefined}
            </HeaderColumn>
        )
    }
}
