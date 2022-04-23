import {CellText} from "../../shared/components/core-components/CellText/CellText";
import {NameCell} from "../../modules/overview/components/OverviewTable/NameCell/NameCell";
// "../../assests/img/pools/" + cell.row.original.iconName
import Icon from '../../assests/img/pools/advance.png'
export const ColumnData = [
    {
        Header: "Name",
        accessor: "name",
        Cell: (cell: any) => <NameCell icon={Icon }  text={cell.value} id={parseInt(cell.row.id) + 1}/>

    }, {
        Header: " 1d Change",
        accessor: "1d_change",
        Cell: (cell: any) => <CellText text={cell.value}/>


    }, {
        Header: "7d Change",
        accessor: "7d_change",
        Cell: (cell: any) => <CellText text={cell.value}/>
    }, {
        Header: "1m Change",
        accessor: "1m_change",
        Cell: (cell: any) => <CellText text={cell.value}/>
    }, {
        Header: "TVL",
        accessor: "tvl",
        Cell: (cell: any) => <CellText text={cell.value}/>
    },

]
export const TableData = [

    {
        "name": "Rent Early",
        "7d_change": "+2.73%",
        "1d_change": "-1.71%",
        "1m_change": "-0.71%",
        "tvl": "$21.75b",
        "iconName":"rentearly.png"

    },
    {
        "name": "Rent Advance",
        "7d_change":"-2.73%",
        "1d_change": "+2.73%",
        "1m_change": "+0.71%",
        "tvl": "$21.75b",
        "iconName":"advance.png"
    },
    {
        "name": "Rent Later",
        "7d_change": "-0.71%",
        "1d_change": "+1.71%",
        "1m_change": "+2.73%",
        "tvl":"$21.75b",
        "iconName":"rentlate.png"
    },
    {
        "name": "Rent Mutual",
        "7d_change": "+2.73%",
        "1d_change": "-1.71%",
        "1m_change": "-0.71%",
        "tvl": "$21.75b",
        "iconName":"mutual.png"
    },


]
