import React, {FC, useMemo, useState} from "react";
import {PoolCard} from "../components/PoolCard/PoolCard";
import Logo1 from "../../../assests/img/pools/rentearly.png"
import Logo2 from "../../../assests/img/pools/advance.png"
import Logo3 from "../../../assests/img/pools/rentlate.png"
import Logo4 from "../../../assests/img/pools/mutual.png"
import './Pools.scss'

export const Pools: FC = (props) => {

    return (
        <div className={"pools"}>
            <div className={"pools-container"}>
                <div className={"pools-row-container"}>
                    <div className={"pools-card-container"}>
                        <PoolCard icon={Logo1} title={"Rent Early"}
                                  desc={"Stake or borrow rent in stable coins for upto 14 days."}
                                  btnText={"Stake or Borrow"}/>

                    </div>
                    <div className={"pools-card-container"}>
                        <PoolCard icon={Logo2} title={"Rent Advance"}
                                  desc={"Stake or borrow rent in stable coins for more than 90 days."}
                                  btnText={"Stake or Borrow"}/>

                    </div>
                </div>
                <div className={"pools-row-container"}>
                    <div className={"pools-card-container"}>
                        <PoolCard icon={Logo3} title={"Rent Later"}
                                  desc={"Stake or borrow rent in stable coins for more than 90 days."}
                                  btnText={"Stake or Borrow"}/>

                    </div>
                    <div className={"pools-card-container"}>
                        <PoolCard icon={Logo4} title={"Rent Mutual"}
                                  desc={"Stake decentralized Insurance pool  in stable coins for any period."}
                                  btnText={"Stake"}/>

                    </div>
                </div>
            </div>
        </div>
    )
}
