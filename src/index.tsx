import ReactDOM from "react-dom"
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

import App from './App'

import { getCommentsByArticleId, getArticleById, getCategories, getArticles} from './fake-api/index'

// console.log(getCommentsByArticleId("698758972728934"),'test');
// console.log(getArticles(0, 'hot', 0, 10));
// console.log(getArticles(0,'hot'));
// console.log(getArticles(0,'new'));


ReactDOM.render(
    <HashRouter>
    <Provider store={store}>
        <App />
    </Provider>
    </HashRouter>,
    document.getElementById('root')
)
