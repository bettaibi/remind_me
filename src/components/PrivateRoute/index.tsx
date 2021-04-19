import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSharedContext } from '../../Context';

interface PrivateRouteProps{
    path: string;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({path, children, ...rest}) => {
    const { user } = useSharedContext();

    return (
        <Route path = {path} {...rest}>
            {
                user ? children : <Redirect to ="/signin" />
            }
        </Route>
    )
}

export default PrivateRoute
