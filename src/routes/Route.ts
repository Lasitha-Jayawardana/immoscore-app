/**
 * The single Route module
 *
 * Uses to modularize and extend to route funcitonality.
 *
 * Supported optoins are,
 * path      -> Required.
 * component -> Optional.
 * name      -> Optional but betting setting a name. This is used to in sidebar navigation
 *              and site-wide search.
 */

export default interface Route{
    path: string;
    component: any;
    name?: string;
    props?: any;
    private?: boolean
}
