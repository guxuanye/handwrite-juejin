import { useRoutes } from 'react-router-dom';
import routes from './routes'
const style = require('./App.module.less').default

export default function App() {
    const element = useRoutes(routes)
    console.log('APP 调用rander');
    
    return (
        <div className={style.main}>
            {element}
        </div>
    )
}
