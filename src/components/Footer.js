import './footer.css';
function Footer() {
    return (
        <footer className="page-footer deep-purple lighten-2">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} khuseynkhasiev
                    <a className="grey-text text-lighten-4 right" href="https://github.com/khuseynkhasiev/fortnite-shop-react!">Repositories</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;