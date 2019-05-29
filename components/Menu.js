import PropTypes from 'prop-types'
import Link from 'next/link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link href="/"><a><span onClick={props.onToggleMenu}>Компания</span></a></Link></li>
                <li><Link href="/landing"><a><span onClick={props.onToggleMenu}>Все Курсы</span></a></Link></li>
                <li><Link href="/generic"><a><span onClick={props.onToggleMenu}>Портфолио</span></a></Link></li>
                <li><Link href="/elements"><a><span onClick={props.onToggleMenu}>Контакты</span></a></Link></li>
                <li><Link href="/like"><a><span onClick={props.onToggleMenu}>like</span></a></Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
