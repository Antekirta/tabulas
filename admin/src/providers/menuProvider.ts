import {ROUTES} from "../../../shared/registry/ROUTES";
import {ICollectionRoute} from "../../../server/router/REST/collections";

export interface IAdminMenuItem{
    name: string
    link: string
}

export const getMenuItems = async (): Promise<Array<IAdminMenuItem>> => {
    const response = await fetch(ROUTES.COLLECTION)

    const collectionsRoutes : Array<ICollectionRoute> = await response.json()

    const menuItems = collectionsRoutes.map(collectionRoute => (
         {
            name: collectionRoute.modelPrettyName,
            link: `${ROUTES.ADMIN_COLLECTION}/${collectionRoute.urlParam}`
        }
    ))

    menuItems.unshift({
        name: 'Home',
        link: ROUTES.ADMIN_PANEL
    })

    return menuItems
}
