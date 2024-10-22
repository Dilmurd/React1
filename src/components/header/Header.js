import "./Header.css";


function Header(){
    return(
        <header>
            <div className="container">
                <nav className="navbar">
                    <div className="navbar__logo">
                        <h1>Escape</h1>
                    </div>
                    <ul className="navbar__collection">
                        <li className="navbar__item">
                            <a href="#" className="navbar__link">
                                <span>Home</span>
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a href="#" className="navbar__link">
                                <span>Categories</span>
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a href="#" className="navbar__link">
                                <span>About</span>
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a href="#" className="navbar__link">
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header