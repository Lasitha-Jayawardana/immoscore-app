import React, {FC} from "react";
import './Toggle.scss'
import Switch from "react-switch";
import * as FaIcons from 'react-icons/fa';
import {AiOutlineQuestionCircle} from 'react-icons/ai';

interface Props {
    checked: boolean;
    label: string;
    onToggle: (e: boolean) => void;
}

export const Toggle: FC<Props> = (props) => {
    return (
        <div className={"toggle-container"}>
            <Switch height={20}
                    width={40}
                    onChange={props.onToggle}
                    checked={props.checked}
                    handleDiameter={20}
            />
            <div className={"toggle-label-container"}>

                <p>{props.label}</p>
                <AiOutlineQuestionCircle/>

            </div>
        </div>
    )


}
