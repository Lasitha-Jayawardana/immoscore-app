import {Component, CSSProperties, FC, ReactComponentElement} from "react";
import './ColorCard.scss'
import {FaExternalLinkAlt} from "react-icons/fa";

interface Props {
    icon: ReactComponentElement<any>
    title: string;
    desc: string;
    link?: string;
    color?: any;
}


export const ColorCard: FC<Props> = (props) => {

    return (
        <a style={{textDecoration: "none", pointerEvents:props.link?"auto":"none"}} href={props.link ? props.link : ""} target={"_blank"}>
            <div style={{backgroundColor: props.color}} className={"colorCard " + (props.link?"":"colorCard-disable")}>
                {props.link && <FaExternalLinkAlt className={"colorCard-external-icon"}/>}
                <div className={"colorCard-logo-container"}>
                    <div className={"colorCard-logo"}>
                        {props.icon}
                    </div>
                </div>
                <div className={"colorCard-title"}>
                    <h2>{props.title}</h2>
                </div>
                <div className={"colorCard-desc"}>
                    <p>{props.desc}</p>
                </div>
            </div>
        </a>
    )
}
