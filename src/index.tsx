import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import { getCommentsByArticleId, getArticleById, getCategories, getArticles} from './fake-api/index'

console.log(getArticleById("6987589727289344036"));
// console.log(getCategories());

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)