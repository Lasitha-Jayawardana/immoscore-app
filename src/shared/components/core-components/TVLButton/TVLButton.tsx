import {FC} from "react";
import './TVLButton.scss'

interface Props {
    active: boolean;
    text: string;
    onClick: (e: any) => void;
}

export const TVLButton: FC<Props> = (props) => {
    return (
        <button onClick={props.onClick} className={'tvlButton' + ((props.active===true) ? ' tvlButton-active' : '')}>
            {props.text}
        </button>
    )

}
