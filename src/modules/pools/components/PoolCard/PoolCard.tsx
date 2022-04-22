import {FC} from "react";
import './PoolCard.scss'
import {LabelCard} from "../../../../shared/components/core-components/LabelCard/LabelCard";
import {CircleIcon} from "../../../../shared/components/core-components/CircleIcon/CircleIcon";

interface Props {
    link?: string
    icon: any;
    title:string;
    desc:string;
    btnText:string
}


export const PoolCard: FC <Props>= (props) => {
    return (

        <div className={"poolCard"}>
            <div className={"hero-logo-container"}>
                <CircleIcon icon={props.icon} size={"72px"} bColor={"#f2f2f2"}/>

            </div>
            <div className={"poolCard-title"}>
                {props.title}
            </div>
            <div className={"poolCard-desc"}>
                {props.desc}
            </div>
            <div className={"poolCard-button"}>
               <a href={"#"}>{props.btnText}</a>
            </div>


        </div>
    )
}
