import PropTypes from 'prop-types'
import Link from 'next/link'

const Header = (props) => (
    <header id="header" className="alt">
        <Link href="/">
            <a className="logo"><strong>DigitalBox</strong></a>
        </Link>
        <nav>
        <Link href="tel:+99895199-55-44">
            <a className="logo"><strong>+998951995544</strong></a>
        </Link>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Меню</a>

        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
