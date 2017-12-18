import * as React from 'react';
import styled from 'styled-components';
import { Link } from '../Link/Link';

export interface Style {
    background?: string,
    border?: string,
    color?: string,
    hoverBackground?: string,
    hoverBorderColor?: string,
    disabledColor?: string,
    disabledBackground?: string,
    marginRight?: string,
    marginLeft?: string,
};

export interface ButtonProps {
    active?: boolean;
    handleClick?: (arg: any) => void;
    className?: string;
    disabled?: boolean;
    href?: string;
    style?: Style;
    title?: string;
    type?: string;
    tabIndex?: number;
    onKeyDown?: Function;
};

var StyledButton = styled.button`
    margin: 0;
    padding: .7rem 1.6rem;
    border-radius: 4px;
    line-height: 1;
    cursor: pointer;
    background: ${props => props.style.background || 'linear-gradient(180deg,#fff,#f9fafb)'};
    color: ${props => props.style.color || '#212b36'};
    border: ${props => props.style.border || '1px solid #c4cdd5'};
    &:hover,
    &:active,
    &:focus,
    &.active {
        background: ${props => props.style.hoverBackground || 'linear-gradient(180deg,#f9fafb,#f4f6f8)'} !important;
        border-color: ${props => props.style.hoverBorderColor || '#c4cdd5'} !important;
    };
    &.disabled {
        cursor: default !important;
        pointer-events: none !important;
        color: ${props => props.style.disabledColor || '#919eab'} !important;
        background: ${props => props.style.disabledBackground || 'linear-gradient(180deg,#f4f6f8,#f4f6f8)'} !important;
        border-color: ${props => props.style.disabledBackground || 'linear-gradient(180deg,#f4f6f8,#f4f6f8)'} !important;
    };
`;

export class Button extends React.Component<ButtonProps> {
    public static defaultProps: Partial<ButtonProps> = {
        disabled: false,
        type: 'button',
        tabIndex: 1
    };

    handleKeyDown = (e) => {
        if (e.keyCode === 13 || e.keyCode === 32) {
            this.props.handleClick;
        };
    };

    render() {
        var classes = {
            'active': this.props.active,
            'disabled': this.props.disabled,
        };
        var classNames = this.props.className ? [this.props.className] : [];
        for (var key in classes) {
            if (!!classes[key]) {
                classNames.push(key);
            };
        };
        var buttonClasses = classNames.join(' ');
        if (this.props.type.toLowerCase() === 'link') {
            return <Link {...this.props} className={buttonClasses} />
        }
        else {
            return (
                <StyledButton
                    className={buttonClasses}
                    onClick={!this.props.disabled ? this.props.handleClick : undefined}
                    tabIndex={this.props.tabIndex}
                    style={this.props.style}
                    onKeyDown={!this.props.disabled ? this.handleKeyDown : undefined}
                >
                    {this.props.title}
                    {this.props.children}
                </StyledButton>
            );
        };
    };
};
