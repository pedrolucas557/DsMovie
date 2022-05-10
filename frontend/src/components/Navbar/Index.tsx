import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './Styles.css';

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DsMovie</h1>
                    <a href="https://github.com/pedrolucas557">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/pedrolucas557</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar