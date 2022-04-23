import {FC, useState} from "react";
import './TVLBar.scss'
import {TVLButton} from "../../../../shared/components/core-components/TVLButton/TVLButton";

export const TVLBar: FC = (props) => {
    return (
        <div className={"TVLBar"}>
            <div className={"TVLBar-container"}>
                <div className={"TVLBar-header-container"}>
                    TVL Rankings
                </div>
                <div className={"TVLBar-button-container"}>
                    <TVLButton active={true} text={"Global"} onClick={() => {
                    }}/>
                    <TVLButton active={false} text={"Austria"} onClick={() => {
                    }}/>
                    <TVLButton active={false} text={"Belgium"} onClick={() => {
                    }}/>
                    <TVLButton active={false} text={"Croatia"} onClick={() => {
                    }}/>
                    <TVLButton active={false} text={"France"} onClick={() => {
                    }}/>

                </div>
            </div>

        </div>
    )
}
