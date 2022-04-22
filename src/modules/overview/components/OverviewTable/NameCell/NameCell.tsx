import {FC} from "react";
import './NameCell.scss'
import {Bookmark} from "../../../../../shared/components/core-components/Bookmark/Bookmark";
import {CellText} from "../../../../../shared/components/core-components/CellText/CellText";
import {CircleIcon} from "../../../../../shared/components/core-components/CircleIcon/CircleIcon";
import Icon from "../../../../../assests/img/logo.svg"
interface Props {
     text: string|number;
    id: string|number;

}

export const NameCell: FC<Props> = (props) => {
    return (
        <div   className={"nameCell"}>
<Bookmark/>
            <CellText text={props.id} color={"gray"}/>
            <CircleIcon icon={Icon} size={"48px"}/>
            <CellText text={props.text} color={"rgb(33, 114, 229)"}/>


        </div>
    )


}
