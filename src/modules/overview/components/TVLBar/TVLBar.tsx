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
                    <TVLButton active={true} text={"All"} onClick={() => {
                    }}/>
                    <TVLButton active={false} text={"Ethereum"} onClick={() => {
                    }}/>
                    <TVLButton active={false} text={"Terra"} onClick={() => {
                    }}/>
                    <TVLButton active={false} text={"BSC"} onClick={() => {
                    }}/>
                    <TVLButton active={false} text={"Avalanche"} onClick={() => {
                    }}/>
                    <TVLButton active={false} text={"Fantom"} onClick={() => {
                    }}/>
                </div>
            </div>

        </div>
    )
}
