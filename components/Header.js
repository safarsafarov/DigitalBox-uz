import PropTypes from 'prop-types'
import Link from 'next/link'

const Header = (props) => (
    <header id="header" className="alt">
        <Link href="/">
            <a className="logo"><strong>SkillBox</strong></a>
        </Link>
        <nav>
        <Link href="tel:+496170961709">
            <a className="logo"><strong>+998998881800</strong></a>
        </Link>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Меню</a>

        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
