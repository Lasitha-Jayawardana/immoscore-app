import {CSSProperties, FC} from "react";
import './CircleIcon.scss'

interface Props {
    link?: string
    icon: string;
    size?:any;
    bColor?:any;
}

export const CircleIcon: FC<Props> = (props) => {
    const style = { "--size": props.size, "backgroundColor": props.bColor} as CSSProperties;
    return (
        <div className={"circleIcon"}>
            <span style={style}>
                <img src={props.icon}/>
            </span>
        </div>
    )


}
