import './App.css';
import Stock from './stock/Stock';

function App() {
  return (
    <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://mywinecellar.io">
                    <strong>My Wine Cellar</strong>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item">
                        Home
                    </a>

                    <a className="navbar-item">
                        Documentation
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            More
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                About
                            </a>
                            <a className="navbar-item">
                                Jobs
                            </a>
                            <a className="navbar-item">
                                Contact
                            </a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item">
                                Report an issue
                            </a>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
                <div className="tile">
                    <div className="tile is-parent is-vertical">
                        <article className="tile is-child notification is-primary">
                            <p className="title">Vertical...</p>
                            <p className="subtitle">Top tile</p>
                        </article>
                        <article className="tile is-child notification is-warning">
                            <p className="title">...tiles</p>
                            <p className="subtitle">Bottom tile</p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-info">
                            <p className="title">Middle tile</p>
                            <p className="subtitle">With an image</p>
                            <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/640x480.png" />
                            </figure>
                        </article>
                    </div>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification is-danger">
                        <p className="title">Wide tile</p>
                        <p className="subtitle">Aligned with the right tile</p>
                        <div className="content">
                        </div>
                    </article>
                </div>
            </div>
            <div className="tile is-parent">
                <article className="tile is-child notification is-success">
                    <div className="content">
                        <Stock />
                    </div>
                </article>
            </div>
        </div>
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <strong>My Wine Cellar</strong> by <a href="https://github.com/xhanin">Xavier Hanin</a>. The source code is
                    licensed  <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                    is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p>
            </div>
        </footer>
    </div>
  );
}

export default App;
