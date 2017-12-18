import * as React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

export interface ModalProps {
    handleClose: () => void;
    show: boolean;
    modalContent: any;
    style?: object;
    title?: string;
    titleClass?: string;
    titleStyle?: object;
}

//styles container of modal (background).
var ModalWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10000;
    position: fixed;
    top: 0;
    overflow: hidden;
`;

//styles content section of modal (foreground).
var ContentContainer = styled.div`
    max-width: 768px;
    max-height: 95vh;
    overflow: auto;
    background-color: #fff;
    z-index: 10001;
    border-radius: .2rem;
    padding: 1rem;
    `;

//Wraps the header of the content section.  Contains StyledTitle and CloseIcon.    
var HeaderWrapper = styled.div`
    display: flex;
    margin-bottom: 1rem;
    justify-content: space-between;
`;

var StyledTitle = styled.label`
    font-size: 24px;
    font-weight: bold;
`;

//X icon that calls handleClose from props
var CloseIcon = styled.span`
    background: url(data:image/png;base64,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
QmCC) no-repeat center right;
    height: 20px;
    width: 20px;
    background-size: 20px;
    padding-left: 20px;
    cursor: pointer;
    margin-left: auto;
`;


function handleContentClick(e) {
    //content section clicked, prevent modal from closing.
    e.stopPropagation();
};

function handleKeyUp(e, props: ModalProps) {
    //escape pressed, close modal.
    if (e.keyCode === 27) props.handleClose();
}

function closeIconKeyUp(e, cb) {
    //close (X) icon key up, if enter/space, call handleClose.
    if (e.keyCode === 13 || e.keyCode === 32) {
        cb();
    };
};

function createHeader(props: ModalProps) {
    return (
        <HeaderWrapper>
            {props.title ? 
                <StyledTitle
                    tabIndex={1}
                    className={props.titleClass}
                    style={props.titleStyle}
                >
                    {props.title}
                </StyledTitle>
            : undefined}
            <CloseIcon
                onKeyUp={(e) => closeIconKeyUp(e, props.handleClose)}
                tabIndex={1}
                onClick={props.handleClose}
            />
        </HeaderWrapper>
    );
};

export class Modal extends React.Component<ModalProps> {
    
    private modal;

    public componentDidMount(): void {
        //create div and apply directly to body of document.
        this.modal = document.createElement('div');
        document.body.appendChild(this.modal);
    };
    
    public componentWillUnmount(): void {
        //remove modal from body of document.
        ReactDOM.unmountComponentAtNode(this.modal);
        document.body.removeChild(this.modal);
        //remove event listener.
        window.removeEventListener('keyup', (e) => handleKeyUp(e, this.props));
    };

    public componentWillReceiveProps(props: ModalProps): void {
        if (props.show) {
            //add keyup event listener if modal is being shown.
            window.addEventListener('keyup', (e) => handleKeyUp(e, props));
        } else {
            //remove keyup event listener if modal is being hidden.
            window.removeEventListener('keyup', (e) => handleKeyUp(e, props));
        }
        //add modal to div that was applied to document body.
        ReactDOM.render(
            <ModalWrapper
                style={{display: props.show ? 'flex' : 'none'}}
                onClick={props.handleClose}
            >
                <ContentContainer
                    onClick={handleContentClick}
                    style={props.style}
                >
                    {createHeader(props)}
                    {props.modalContent}
                </ContentContainer>
            </ModalWrapper>,
            this.modal
        );
    };

    public render() {
        return null;
    };
};
