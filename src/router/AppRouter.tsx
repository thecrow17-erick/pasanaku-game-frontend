import { RouteObject } from "react-router-dom";

import {PageRouterAuth,childrenRouteAuth} from '../auth/router'

export const AppRouter:Array<RouteObject> = [
  {
    path: "auth",
    element: <PageRouterAuth/>,
    children: childrenRouteAuth
  }
]
