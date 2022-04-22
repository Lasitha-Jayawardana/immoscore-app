import {FC} from "react";
import './CellText.scss'

interface Props {
    color?: string;
    text: string | number;

}

export const CellText: FC<Props> = (props) => {
    const colorSelector = () => {
        if (typeof (props.text) == "string") {
            if (props.text.charAt(0) === "+") {
                return "green"
            } else if (props.text.charAt(0) === "-") {
                return "red"
            } else {
                return "white"
            }
        }
    }
    return (
        <div style={{color: (props.color) ? props.color : colorSelector()}} className={"cellText"}>

            {props.text}

        </div>
    )


}
