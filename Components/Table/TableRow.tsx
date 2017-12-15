import * as React from 'react';
import styled from 'styled-components';

export interface TableRowProps {
    children?: React.ReactChild|React.ReactChild[]|any;
    className?: string;
    isActive?: boolean;
    showRowHover?: boolean;
    style?: object;
};

export interface TableRowState {
    hovered?: boolean;
};

var StyledTableRow = styled.tr`
    background-color: ${props => props.style.backgroundColor || 'initial'};
`;

export class TableRow extends React.Component <TableRowProps, TableRowState> {

    constructor(props) {
        super(props);
        this.state = {
            hovered: false,
        };
    };

    render() {
        var activeStyle = this.state.hovered && this.props.showRowHover || this.props.isActive;
        var backgroundColor = this.state.hovered && this.props.showRowHover ? 'rgb(224, 224, 224)' : this.props.isActive ? 'rgb(245, 245, 245)' : 'initial';
        var tableRowStyle = {...this.props.style, backgroundColor};
        return (
            <StyledTableRow
                onMouseEnter={() => this.setState({ hovered: true })}
                onMouseLeave={() => this.setState({ hovered: false })}
                style={tableRowStyle}
                className={this.props.className}
            >
                {this.props.children}
            </StyledTableRow>
        );
    };
};