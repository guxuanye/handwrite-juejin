import { Navigate } from "react-router-dom"
import PageHome from "../pages/PageHome"

const a = [
    {
        path: '/home',
        element: <PageHome />,
        children: [
            {
                path:'*',
                element: <div />,
                children: [
                    {
                        path:'*',
                        element: <div />
                    }
                ]
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to='/home'/>
    }
]

export default a
