import React, {FC, ReactNode, useState} from "react";
import './ConnectWallet.scss'
import {FaRegBookmark} from "react-icons/fa";
import {CircleIcon} from "../CircleIcon/CircleIcon";
import Icon from "../../../../assests/img/immoscore.png"

interface Props {
    onClose?: ()=>void;
    setTypeFrom: (e:boolean)=>void;
}

export const ConnectWallet: FC<Props> = (props) => {
    return (
        <>
           <div className={"wallet"}>
                <button onClick={props.onClose} className={"wallet-close-btn"}>
                <span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                        d="M13 1 1 13M1 1l12 12" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"></path></svg>
                </span>
                </button>
                <div className={"wallet-container"}>
                     <>
                    <div className={"wallet-top-container"}>
                        {/*<CircleIcon icon={Icon} size={"72px"} bColor={"transparent"}/>*/}
                        {/*<div style={{height:"72px",width:"72px", borderRadius:"10px"}}>*/}
                        <img style={{height:"72px" }} src={Icon}/>
                        {/*</div>*/}
                        <h3>Want Early Access?</h3>
                        <p>We are allowing a <b>selected</b> group of users to get the first access.</p>
                    </div>
                    <hr/>
                    <button onClick={()=>props.setTypeFrom(true)} className={"wallet-btn"}>Request Early Access</button>
                    <p>Immoscore is coming soon.</p>
                </>

                </div>
            </div>


                </>

    )


}
