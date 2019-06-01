import PropTypes from 'prop-types'
import Link from 'next/link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link href="/company"><a><span onClick={props.onToggleMenu}>Компания</span></a></Link></li>
                <li><Link href="/team"><a><span onClick={props.onToggleMenu}>Наша Команда</span></a></Link></li>
                <li><Link href="/allcourses"><a><span onClick={props.onToggleMenu}>Все Курсы</span></a></Link></li>
                <li><Link href="/landing"><a><span onClick={props.onToggleMenu}>Контакты</span></a></Link></li>
                <li><Link href="/partners"><a><span onClick={props.onToggleMenu}>Партнеры</span></a></Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>

    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
