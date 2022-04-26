import * as FaIcons from 'react-icons/fa';
import SidebarMenu from "../../models/SidebarMenu";

export const SidebarMenuData:SidebarMenu[] = [
    {
        title: "Overview",
        icon: <FaIcons.FaHive/>,
        path: "",
        // isSubMenu: true,
        // subMenu: [
        //     {
        //         icon: <FaIcons.FaDeezer/>,
        //         title: 'Tenants',
        //         path: "Tenants"
        //     }, {
        //         icon: <FaIcons.FaGripfire/>,
        //         title: 'Landlords',
        //         path: "Landlords",
        //     }, {
        //         icon: <FaIcons.FaMagento/>,
        //         title: 'Ponols',
        //         path: "Ponols",
        //     },
        // ]
    },
    {
        icon: <FaIcons.FaDeezer/>,
        title: 'Tenants',
        path: "#Tenants",

    }, {
        icon: <FaIcons.FaGripfire/>,
        title: 'Landlords',
        path: "#Landlords",
    },
    {
        title: "Pools",
        icon: <FaIcons.FaSellsy/>,
        path: "pools",
        isSubMenu: false,

    },
{
        title: "Learn",
        icon: <FaIcons.FaBook/>,
        path: "learn",
        isSubMenu: false,

    },

]
