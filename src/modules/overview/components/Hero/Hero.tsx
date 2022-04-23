import {FC} from "react";
import './Hero.scss'
import {LabelCard} from "../../../../shared/components/core-components/LabelCard/LabelCard";
import {Currency} from "../Chart";

export const Hero: FC = (props) => {
    return (
        <div className={"hero"}>
            <div className={"hero-left-container"}>
                <LabelCard color={"#4f8fea"} title={"Total Value Locked (USD)"} value={"$211.21b"}/>
                <LabelCard color={"#fc3c98"} title={"Change (24h)"} value={"3.61%"}/>
                <LabelCard color={"#46abb6"} title={"Curve Dominance"} value={"9.66%"}/>
            </div>
            <div className={"hero-right-container"}>
                <Currency/>
                {/*<Chart/>*/}
            </div>
        </div>
    )
}
