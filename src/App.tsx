import { useRoutes } from 'react-router-dom';
import routes from './routes'
const style = require('./App.module.less').default

export default function App() {
    const element = useRoutes(routes)

    return (
        <div className={style.main}>
            {element}
        </div>
    )
}
