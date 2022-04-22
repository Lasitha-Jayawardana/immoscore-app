import {FC} from "react";
import './LabelCard.scss'

interface Props {
    color: any;
    title: string;
    value: string
}

export const LabelCard: FC<Props> = (props) => {
    return (
        <div className={"labelCard-container"}>
            <div className={"labelCard-inner-container"}>
                <div className={"labelCard-title"}>
                    {props.title}
                </div>
                <div style={{color: props.color}} className={"labelCard-value"}>
                    {props.value}
                </div>
            </div>
        </div>
    )


}
