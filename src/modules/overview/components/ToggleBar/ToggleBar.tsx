import {FC, useState} from "react";
import './ToggleBar.scss'
import {LabelCard} from "../../../../shared/components/core-components/LabelCard/LabelCard";
import {Toggle} from "../../../../shared/components/core-components/Toggle/Toggle";

export const ToggleBar: FC = (props) => {

    const [checked, setChecked] = useState(false);
    const handleChange = (nextChecked: boolean) => {
        setChecked(nextChecked);
    };
    return (
        <div className={"toggleBar"}>
            <ul>
                <li>
                    <Toggle checked={checked} label={"Staking"} onToggle={handleChange}/>
                </li>
                <li>
                    <Toggle checked={checked} label={"Pool2"} onToggle={handleChange}/>

                </li>
                <li>
                    <Toggle checked={checked} label={"Borrows"} onToggle={handleChange}/>

                </li>
                <li>
                    <Toggle checked={checked} label={"Double Count"} onToggle={handleChange}/>

                </li>
            </ul>
        </div>
    )
}
