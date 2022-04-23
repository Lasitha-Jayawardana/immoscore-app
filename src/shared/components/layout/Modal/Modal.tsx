import React, {FC, ReactNode, useState} from "react";
import ReactModal from 'react-modal';
import {ConnectWallet} from "../../core-components/ConnectWallet/ConnectWallet";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        backgroundColor:"#4a4a4a",
        transform: 'translate(-50%, -50%)',
        border: "1px solid rgb(45, 16, 212)",
        borderRadius: "24px",
        boxShadow: "0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
    }
};

interface Props {
    children?: ReactNode;
    isOpen:boolean;
}

export const Modal: FC<Props> = (props) => {

    const [modalIsOpen, setIsOpen] = React.useState(props.isOpen);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.

    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            {/*<button onClick={openModal}>Open Modal</button>*/}
            <ReactModal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Connect Wallet"
            >
                <ConnectWallet onClose={closeModal}/>
                {props.children}
            </ReactModal>
        </div>
    )

}
