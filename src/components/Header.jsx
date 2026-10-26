import "./Header.css";

export function Header() {
  return (
    <>
      <header>
        <div className="header_container">
          <h2 id="title">CALVO AUTO LOCKS</h2>
        </div>
        <div className="header_container">
          <div className="nav_links">
            <a href="#services">SERVICES</a>
          </div>
          <div className="nav_links">
            <a href="#how-it-works">HOW IT WORKS</a>
          </div>
          <div className="nav_links">
            <a href="#book">BOOK</a>
          </div>
          <div className="nav_links ">
            <a href="#book" id="get_help">
              GET HELP NOW
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
