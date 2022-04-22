import {FC} from "react";
import './Bookmark.scss'
import {FaRegBookmark} from "react-icons/fa";



export const Bookmark: FC = (props) => {
    return (
        <div className={"bookmark"}>
            <span >
                <FaRegBookmark/>
            </span>
        </div>
    )


}
