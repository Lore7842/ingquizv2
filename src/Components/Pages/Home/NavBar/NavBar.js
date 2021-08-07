import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar(props) {
  return (
    <div className="nav-container">
      <div className="nav">
        <nav id="menu">
          <div className="menu-item">
            <div className="menu-text">
              <a href="#">Dashboard</a>
            </div>
            <div className="sub-menu">
              <div className="icon-box">
                <div className="icon">
                  <i className="fas fa-house-user"></i>
                </div>
                <div className="text">
                  <div className="title">
                    Login <i className="far fa-arrow-right"></i>
                  </div>
                  <div className="sub-text">
                    <Link to="/" className="menu-item-btn">
                      Accedi al tuo profilo
                    </Link>
                  </div>
                </div>
              </div>

              <div className="sub-menu-holder"></div>
            </div>
          </div>
          <div className="menu-item highlight">
            <div className="menu-text">
              <a href="#">Materie</a>
            </div>
            <div className="sub-menu double">
              <div className="icon-box gb a">
                <div className="icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <div className="text">
                  <div className="title">
                    Fisiologia<i className="far fa-arrow-right"></i>
                  </div>
                  <div className="sub-text">
                    <Link to="/Fisiologia" className="menu-item-btn">
                      Quiz di fisiologia
                    </Link>
                  </div>
                </div>
              </div>
              <div className="icon-box gb b">
                <div className="icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <div className="text">
                  <div className="title">
                    Elettronica <i className="far fa-arrow-right"></i>
                  </div>
                  <div className="sub-text">
                    <Link to="/Elettronica" className="menu-item-btn">
                      Quiz di Elettronica
                    </Link>
                  </div>
                </div>
              </div>
              <div className="icon-box gb c">
                <div className="icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <div className="text">
                  <div className="title">
                    Fisica II <i className="far fa-arrow-right"></i>
                  </div>
                  <div className="sub-text">
                    <Link to="/Fisica2" className="menu-item-btn">
                      Quiz di fisica II
                    </Link>
                  </div>
                </div>
              </div>
              <div className="icon-box gb d">
                <div className="icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <div className="text">
                  <div className="title">
                    Chimica <i className="far fa-arrow-right"></i>
                  </div>
                  <div className="sub-text">
                    <Link to="/Chimica" className="menu-item-btn">
                      Quiz di chimica
                    </Link>
                  </div>
                </div>
              </div>
              <div className="icon-box gb e">
                <div className="icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <div className="text">
                  <div className="title">
                    Analisi II <i className="far fa-arrow-right"></i>
                  </div>
                  <div className="sub-text">
                    <Link to="/Analisi2" className="menu-item-btn">
                      Quiz di analisi II
                    </Link>
                  </div>
                </div>
              </div>
              <div className="icon-box gb f">
                <div className="icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <div className="text">
                  <div className="title">
                    Metodi matematici
                    <i className="far fa-arrow-right"></i>
                  </div>
                  <div className="sub-text">
                    <Link to="/Metodi" className="menu-item-btn">
                      Quiz di Metodi matematici
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-item highlight">
            <div className="menu-text">
              <a href="#">Chi siamo</a>
            </div>
            <div className="sub-menu triple">
              <div className="top-container gb c icon-box">
                <div className="icon big">
                  <i className="far fa-comment-alt"></i>
                </div>
                <div className="text">
                  <div className="title">Instagram</div>
                  <Link className="sub-text l" to="/about">
                    Seguici su instagram
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-text">
              <a href="#">Collabora</a>
            </div>
            <div className="sub-menu">
              <div className="icon-box">
                <div className="icon">
                  <i className="far fa-cogs"></i>
                </div>
                <div className="text">
                  <div className="title">Bug o consigli</div>
                  <Link to="/contact-us" className="sub-text">
                    Contattaci
                  </Link>
                </div>
              </div>
              <div className="icon-box">
                <div className="icon">
                  <i className="far fa-lightbulb"></i>
                </div>
                <div className="text">
                  <div className="title">Domande</div>
                  <Link to="/questions" className="sub-text">
                    Consigliaci nuove domande
                  </Link>
                </div>
              </div>

              <div className="sub-menu-holder"></div>
            </div>
          </div>
          <div id="sub-menu-container">
            <div id="sub-menu-holder">
              <div id="sub-menu-bottom"></div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
