import React, {FC, useMemo, useState} from "react";
import {LearningCard} from "../components/LearningCard/LearningCard";
import Logo from "../../../assests/img/logo.svg"
import './Learn.scss'
import {LearningCardData} from "../../../utils/constants/LearningCardData";
import {ColorCard} from "../components/ColorCard/ColorCard";
import {FaRegAddressBook} from "react-icons/fa";

export const Learn: FC = (props) => {


    return (
        <div className={"learn"}>
            <div className={"learn-container"}>
                <div className={"learn-left"}>
                    <LearningCard header={LearningCardData.header} title={LearningCardData.title}
                                  desc={LearningCardData.desc}/>
                </div>
                <div className={"learn-right"}>
                    <div className={"learn-card-container"}>
                        <ColorCard color={"#b069ed"} title={"Official Documentation"} link={"https://docs.immoscore.io"}
                                   desc={"Read official Immoscore documentation on Gitbook.."} icon={<FaRegAddressBook/>}/>

                    </div>
                    <div className={"learn-card-container"}>
                        <ColorCard color={"#485dff"} title={"Pools Tutorials"}
                                   desc={"Guides and demos on how to participate in the pools - coming soon."} icon={<FaRegAddressBook/>}/>

                    </div>
                    <div className={"learn-card-container"}>
                        <ColorCard color={"#f8d147"} title={"Rent Yields/Offset"}
                                   desc={"Guide on how to increase rent yield and offset rent expenses - coming soon"} icon={<FaRegAddressBook/>}/>

                    </div>
                    <div className={"learn-card-container"}>
                        <ColorCard color={"#5bb682"} title={"FAQ"}
                                   desc={"Frequently asked questions and answers - coming soon."} icon={<FaRegAddressBook/>}/>

                    </div>
                </div>
            </div>
        </div>
    )
}
