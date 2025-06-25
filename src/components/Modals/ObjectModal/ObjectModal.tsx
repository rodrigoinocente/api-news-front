import React from 'react';
import ReactDOM from 'react-dom';
import { Content, HeadModal, Overlay } from './ObjectModalStyled';
import close from "../../../images/icons/icon-close.png"

type ModalProps = {
    title: string;
    children: React.ReactNode;
    onCloseModal: () => void;
};

export const ObjectModal: React.FC<ModalProps> = ({ title, onCloseModal, children }) => {
    return ReactDOM.createPortal(
        <Overlay onClick={onCloseModal} >
            <Content onClick={(e) => e.stopPropagation()}>
                <HeadModal>
                    <h3>{title}</h3>

                    <img src={close} alt="Icone para fechar o modal" onClick={onCloseModal}/>
                </HeadModal>

            {children}
            
            </Content>
        </Overlay>
        ,
        document.getElementById("modal")!
    )
}