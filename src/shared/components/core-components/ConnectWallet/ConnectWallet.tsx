import {FC, ReactNode} from "react";
import './ConnectWallet.scss'
import {FaRegBookmark} from "react-icons/fa";
import {CircleIcon} from "../CircleIcon/CircleIcon";
import Icon from "../../../../assests/img/pools/img.svg"

interface Props {
    onClose?: ()=>void;
}

export const ConnectWallet: FC<Props> = (props) => {
    return (
        <div className={"wallet"}>
            <button onClick={props.onClose} className={"wallet-close-btn"}>
                <span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                        d="M13 1 1 13M1 1l12 12" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"></path></svg>
                </span>
            </button>
            <div className={"wallet-container"}>
                <div className={"wallet-top-container"}>
                    <CircleIcon icon={Icon} size={"72px"}/>
                    <h3>Connect Wallet</h3>
                    <p>To start using Immo App</p>
                </div>
                <hr/>
                <div>

                </div>
            </div>
        </div>
    )


}
