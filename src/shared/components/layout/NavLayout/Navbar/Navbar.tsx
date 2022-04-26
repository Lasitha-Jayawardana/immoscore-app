import {FC} from "react";
import * as FaIcons from 'react-icons/fa'
import './Navbar.scss'
import Icon from "../../../../../assests/img/immoscore-logo.svg"
interface Props {
    // toggleSidebar (open:boolean):   void;
    handleToggleSidebar :(open:boolean)=>   void;
}

export const Navbar: FC<Props> = ({handleToggleSidebar}) => {

    return (
        <div className={"navbar"}>
            <span style={{fontSize:"34px",color:"white"}}> <img src={Icon} /></span>
            <span className={"navbar-right-container"}>
         <span className={"navbar-menu-icon"} onClick={()=> handleToggleSidebar(true)}><FaIcons.FaBars/></span>
            </span>
        </div>
    )

}
