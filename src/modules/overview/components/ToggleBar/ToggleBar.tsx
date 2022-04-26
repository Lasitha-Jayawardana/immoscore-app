import {FC, useState} from "react";
import './ToggleBar.scss'
import {LabelCard} from "../../../../shared/components/core-components/LabelCard/LabelCard";
import {Toggle} from "../../../../shared/components/core-components/Toggle/Toggle";

export const ToggleBar: FC = (props) => {

    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const handleChange = (nextChecked: boolean) => {
        setChecked(nextChecked);
    };
    const handleChange1 = (nextChecked: boolean) => {
        setChecked1(nextChecked);
    };
    const handleChange2 = (nextChecked: boolean) => {
        setChecked2(nextChecked);
    };


    return (
        <div className={"toggleBar"}>
            <ul>
                <li>
                    <Toggle checked={checked} label={"Staking"} onToggle={handleChange}/>
                </li>
                <li>
                    <Toggle checked={checked1} label={"Lending"} onToggle={handleChange1}/>
                </li>
                <li>
                    <Toggle checked={checked2} label={"Total"} onToggle={handleChange2}/>
                </li>

            </ul>
        </div>
    )
}
