import { Navigate } from "react-router-dom"
import PageArticle from "../pages/PageArticle"
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
        path: '/post',
        element: <PageArticle />,
        children: [
            {
                path: '*',
                element: <div></div>
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to='/home'/>
    }
]

export default a
