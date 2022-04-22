import React, {FC, useMemo, useState} from "react";
import {PoolCard} from "../components/PoolCard/PoolCard";
import Logo1 from "../../../assests/img/pools/img.svg"
import Logo2 from "../../../assests/img/pools/img_1.svg"
import Logo3 from "../../../assests/img/pools/img_2.svg"
import Logo4 from "../../../assests/img/pools/img_3.svg"
import './Pools.scss'

export const Pools: FC = (props) => {

    return (
        <div className={"pools"}>
            <div className={"pools-container"}>
                <div className={"pools-row-container"}>
                    <div className={"pools-card-container"}>
                        <PoolCard icon={Logo1} title={"Rent Early"}
                                  desc={" Bridge DOT & other assets to Acala for staking rewards, liquidity rewards."}
                                  btnText={"Bridge"}/>

                    </div>
                    <div className={"pools-card-container"}>
                        <PoolCard icon={Logo2} title={"Rent Advance"}
                                  desc={" Bridge DOT & other assets to Acala for staking rewards, liquidity rewards."}
                                  btnText={"Bridge"}/>

                    </div>
                </div>
                <div className={"pools-row-container"}>
                    <div className={"pools-card-container"}>
                        <PoolCard icon={Logo3} title={"Rent Later"}
                                  desc={" Bridge DOT & other assets to Acala for staking rewards, liquidity rewards."}
                                  btnText={"Bridge"}/>

                    </div>
                    <div className={"pools-card-container"}>
                        <PoolCard icon={Logo4} title={"Rent Mutual"}
                                  desc={" Bridge DOT & other assets to Acala for staking rewards, liquidity rewards."}
                                  btnText={"Bridge"}/>

                    </div>
                </div>
            </div>
        </div>
    )
}
