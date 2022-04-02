import ReactDOM from "react-dom"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

import App from './App'

import { getCommentsByArticleId, getArticleById, getCategories, getArticles} from './fake-api/index'

// console.log(getCommentsByArticleId("698758972728934"),'test');
// console.log(getArticles(0, 'hot', 0, 10));
// console.log(getArticles(0, 'hot', 20, 10));
console.log(getArticles(13));


ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)
