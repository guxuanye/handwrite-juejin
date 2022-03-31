import ReactDOM from "react-dom"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

import App from './App'

import { getCommentsByArticleId, getArticleById, getCategories, getArticles} from './fake-api/index'

// console.log(getArticleById("6987589727289344036"));
console.log(getArticles());

ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)
