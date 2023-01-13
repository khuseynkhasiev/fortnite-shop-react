import './header.css';
function Header() {
    return (
        <nav className={"nav"}>
            <div className="nav-wrapper deep-purple lighten-2 nav-container">
                <a href="#" className="brand-logo">Fortnite shop React</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://github.com/khuseynkhasiev/fortnite-shop-react">Repositories</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Header;