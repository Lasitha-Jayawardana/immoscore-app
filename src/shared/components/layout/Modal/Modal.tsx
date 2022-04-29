import React, {FC, ReactNode, useState} from "react";
import ReactModal from 'react-modal';
import {ConnectWallet} from "../../core-components/ConnectWallet/ConnectWallet";
import "./Modal.scss"
import {Widget} from "@typeform/embed-react";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        // backgroundColor: "#4a4a4a",
        background:'transparent',
        transform: 'translate(-50%, -50%)',
        // border: "1px solid rgb(45, 16, 212)",
        border: "none",
        }
};

interface Props {
    children?: ReactNode;
    isOpen: boolean;
}

export const Modal: FC<Props> = (props) => {

    const [modalIsOpen, setIsOpen] = React.useState(props.isOpen);
    const [typeFrom,setTypeFrom]=useState(false)

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
            <ReactModal parentSelector={()=> (document.getElementById('main')!)}
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Connect Wallet"
                overlayClassName={"modal-overlay"}>
                {!typeFrom ?
                    <ConnectWallet setTypeFrom={setTypeFrom} onClose={closeModal}/>
                    :   <div style={{width:"60vw",height:"80vh",background:"transparent"}}>
                        <button onClick={closeModal} className={"modal-close-btn"}>
                <span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                        d="M13 1 1 13M1 1l12 12" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"></path></svg>
                </span>
                        </button>
                        <Widget id="frbzhUjk" style={{width:"100%",height:"100%", border: "1px solid rgb(45, 16, 212)"}}/>
                    </div>}
                {props.children}
            </ReactModal>
        </div>
    )

}
