import {FC} from "react";
import './LearningCard.scss'
import {LabelCard} from "../../../../shared/components/core-components/LabelCard/LabelCard";
import {CircleIcon} from "../../../../shared/components/core-components/CircleIcon/CircleIcon";

interface Props {
    header:string
    title:string;
    desc:string;
}


export const LearningCard: FC <Props>= (props) => {
    return (

        <div className={"learningCard"}>
            <div className={"learningCard-container"}>
                <div className={"learningCard-header"}>
                   <h1> {props.header} </h1>
                </div>
                <div className={"learningCard-title"}>
                   <p>{props.title}</p>
                </div>
                <div className={"learningCard-desc"}>
                  <p> {props.desc}</p>
                </div>

            </div>




        </div>
    )
}
