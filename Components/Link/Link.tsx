import * as React from 'react';
import styled from 'styled-components';
import {Style} from '../Button/Button';

export interface LinkProps {
    active?: boolean;
    handleClick?: (arg: any) => void;
    className?: string;
    disabled?: boolean;
    href?: string;
    style?: Style;
    title?: string;
    tabIndex?: number;
    type?: string;
    target?: string;
}

var StyledLink = styled.a`
    display: inline;
    padding: 0;
    background: none;
    border: none;
    font-size: inherit;
    color: #007ace;
    text-decoration: none;
    cursor: pointer;
    &:hover,
    &:active,
    &:focus,
    &.active {
        color: #084e8a;
        text-decoration: underline;
    };
    &.disabled {
        cursor: default !important;
        pointer-events: none !important;
        color: ${props => props.style.disabledColor || 'gray'}
    };
`;

export class Link extends React.Component<LinkProps> {
    public static defaultProps: Partial<LinkProps> = {
        disabled: false,
        style: {
            disabledColor: undefined,
            disabledBackground: undefined,
        },
        type: 'link',
        tabIndex: 1,
        target: '__self',
    };

    handleKeyDown = (e) => {
        if (e.keyCode === 13 || e.keyCode === 32) {
            this.props.handleClick;
        };
    };

    render() {
        return(
            <StyledLink
                className={this.props.className}
                onClick={!this.props.disabled ? this.props.handleClick : undefined}
                href={this.props.href}
                tabIndex={this.props.tabIndex}
                style={this.props.style}
                target={this.props.target}
                type={this.props.type}
                onKeyDown={!this.props.disabled ? this.handleKeyDown : undefined}
            >
                {this.props.title}
                {this.props.children}
            </StyledLink>
        )
    }
}