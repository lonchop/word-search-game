import wordSearchGameLogo from "@/assets/word-search-game-logo.svg";
import one from "@/assets/level-1.svg";
import two from "@/assets/level-2.svg";
import three from "@/assets/level-3.svg";
import "@/App.css";

export default function Navbar() {
  return (
    <nav className="nav d-flex flex-column align-items-center">
      <img
        className="logo"
        src={wordSearchGameLogo}
        alt="word-searh-game-logo"
      />

      <div className="d-flex flex-column align-items-center gap-3 mt-5">
        <h2 className="text-white">Elige el nivel</h2>
        <img className="level" src={one} alt="one" />
        <img className="level" src={two} alt="two" />
        <img className="level" src={three} alt="three" />
      </div>
    </nav>
  );
}
