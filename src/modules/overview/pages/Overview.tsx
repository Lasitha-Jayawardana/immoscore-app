import React, {FC, useMemo, useState} from "react";
import {Hero} from "../components/Hero/Hero";
import {ToggleBar} from "../components/ToggleBar/ToggleBar";
import {TVLBar} from "../components/TVLBar/TVLBar";
import './Overview.scss'
import {Table} from "../../../shared/components/core-components/Table/Table";
import {ColumnData, TableData} from "../../../utils/constants/TableData";

export const Overview: FC = (props) => {
    const columns = useMemo(
        () =>ColumnData,
        []);
    return (<div className={"overview"}>
            <Hero></Hero>
            <ToggleBar/>
            <TVLBar/>
            <Table columns={columns} data={TableData} />
        </div>
    )
}
