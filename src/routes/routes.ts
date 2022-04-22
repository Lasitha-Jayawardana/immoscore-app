import Route from "./Route";
import {Overview} from "../modules/overview/pages/Overview";
import {CircleIcon} from "../shared/components/core-components/CircleIcon/CircleIcon";
import {PoolCard} from "../modules/pools/components/PoolCard/PoolCard";
import {Pools} from "../modules/pools/pages/Pools";
import {Learn} from "../modules/learn/pages/Learn";

const routes: Route[] = [
    {
        path: '/',
        name: 'Overview',
        component: Overview,
        private: true
    } ,{
        path: '/pools',
        name: 'Pools',
        component: Pools,
        private: true
    } ,{
        path: '/learn',
        name: 'Learn',
        component: Learn,
        private: true
    } ,
]

export default routes;
