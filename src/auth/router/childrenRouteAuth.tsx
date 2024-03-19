
import { RouteObject } from "react-router-dom";
import { CreatePlayerPage } from "../pages";

export const childrenRouteAuth:Array<RouteObject> = [
  {
    index: true,
    element: <>Hola</>
  },
  {
    path: "sign-up",
    element: <CreatePlayerPage/>
  },      
]
