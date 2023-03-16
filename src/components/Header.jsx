import classes from './style.module.css'
import {Link} from 'react-router-dom'
function Header(props) {
    return (
        <div className={classes.header}>
            <h1>Это тестовая работа студента группы {props.group}</h1>
            <p>Автор: {props.author}</p>
            <nav>
            <ul>
            <li>
                <Link to="/about">О сайте</Link>
            </li>
            <li>
                <Link to="/">На главную</Link>
            </li>
            </ul>
        </nav>
        </div>
    );
}
export default Header;