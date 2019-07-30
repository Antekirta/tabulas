import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import {ROUTES} from "../../../../shared/registry/ROUTES";
import {NavigationPanel} from "../NavigationPanel/NavigationPanel";
import {AdminFooter} from "../AdminFooter/AdminFooter";
import {MainPage} from "../MainPage/MainPage";
import {CollectionPage} from "../CollectionPage/CollectionPage";
import {DocumentEdit} from "../DocumentEdit/DocumentEdit";

function AdminApp() {
    return (
        <BrowserRouter>
            <NavigationPanel/>

            <Route exact path={ROUTES.ADMIN_PANEL} component={MainPage}/>

            <Route path={`${ROUTES.ADMIN_COLLECTION}/:collectionName`} render={(routeProps) => (
                <CollectionPage collectionName={routeProps.match.params.collectionName}/>
            )}/>

            <Route path={`${ROUTES.ADMIN_DOCUMENT_EDIT}/:documentId`} render={(routeProps) => {
                return <DocumentEdit collectionName={'articles'} documentId={routeProps.match.params.documentId}/>
            }}/>

            <AdminFooter/>
        </BrowserRouter>
    )
}

export {AdminApp}
