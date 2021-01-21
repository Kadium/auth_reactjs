import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';

const routes = [
    {
        path: '',
        component: asyncComponent(() => import('../Category/instantSearch')),
    },
    {
        path: 'add',
        component: asyncComponent(() => import('../Shop/Add')),
    },
    {
        path: 'edit/:item_id',
        component: asyncComponent(() => import('../Shop/Edit')),
    },
    {
        path: 'shop/:seller_id',
        component: asyncComponent(() => import('../Shop/Items')),
    },
    {
        path: 'item/:item_id',
        component: asyncComponent(() => import('../Item')),
    },
    {
        path: 'chat',
        component: asyncComponent(() => import('../Chat')),
    },
    {
        path: 'favorites/all',
        component: asyncComponent(() => import('../Favorite')),
    },
    {
        path: 'cart',
        component: asyncComponent(() => import('../Cart')),
    },
    {
        path: 'subscription',
        component: asyncComponent(() => import('../Subscription')),
    },
    {
        path: 'settings',
        component: asyncComponent(() => import('../Settings')),
    },
    {
        path: 'delivery',
        component: asyncComponent(() => import('../ShippingCosts')),
    },
    {
        path: 'orders',
        component: asyncComponent(() => import('../Orders')),
    },
];

class AppRouter extends Component {
    render() {
        const {url, style} = this.props;
        return (
            <div style={style}>
                {routes.map(singleRoute => {
                    const {path, exact, ...otherProps} = singleRoute;
                    return (
                        <Route
                            exact={exact === false ? false : true}
                            key={singleRoute.path}
                            path={`${url}/${singleRoute.path}`}
                            {...otherProps}
                        />
                    );
                })}
            </div>
        );
    }
}

export default AppRouter;
