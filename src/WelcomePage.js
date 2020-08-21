import React from "react";
import ButtonPlayer from "./ButtonPlayer";
import "./WelcomePage.css";
function WelcomePage({ nbPlayer }) {
  return (
    <div className="welcome_page">
      <h1 className="nb_player_title">How do you want to play ?</h1>
      <ButtonPlayer textContent="One Player" onClick={nbPlayer} number={1} />
      <ButtonPlayer textContent="Two Player" onClick={nbPlayer} number={2} />
    </div>
  );
}
export default WelcomePage;
