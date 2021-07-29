import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav">
      <nav id="menu">
        <div className="menu-item">
          <div className="menu-text">
            <a href="#">Home</a>
          </div>
          <div className="sub-menu">
            <div className="icon-box">
              <div className="icon">
                <i className="fas fa-house-user"></i>
              </div>
              <div className="text">
                <div className="title">
                  Home <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">
                  Torna alla pagina iniziale del sito
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
                <div className="sub-text">Quiz di fisiologia</div>
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
                <div className="sub-text">Quiz di elettronica</div>
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
                <div className="sub-text">Quiz di fisica II</div>
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
                <div className="sub-text">Quiz di chimica</div>
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
                <div className="sub-text">Quiz di analisi II</div>
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
                <div className="sub-text">Quiz di metodi matematici</div>
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
                <i className="far fa-lightbulb"></i>
              </div>
              <div className="text">
                <div className="title">Domande</div>
                <div className="sub-text">Consigliaci nuovi domande o quiz</div>
              </div>
            </div>
            <div className="icon-box">
              <div className="icon">
                <i className="fas fa-cogs"></i>
              </div>
              <div className="text">
                <div className="title">Bug</div>
                <div className="sub-text">
                  Riportaci gli errori che hai notato.
                </div>
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
  );
}

export { NavBar };
