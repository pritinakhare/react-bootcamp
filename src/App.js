import React from "react";
import ReactDOM from "react-dom/client";
import avatar from '../assets/avatar.png';
import cards from "./data/cards.json";
import CardComponent from "./components/CardComponent";

const LogoComponent = () => <img className="logo" src="https://lwfiles.mycourse.app/635a5db526fa77c557bab00d-public/c4377b05799f40987f16cacd43da014d.png"></img>;
const SearchComponent = () => <input type="text" placeholder="Search Team Member.."></input>;
const UserAvatarComponent = () => <img className="avatar" src={avatar}></img>;

const HeadingComponent = () => (
  <div id="header" className="header" tabIndex="1">
    <span><LogoComponent /></span>
    <span className="search-form"><SearchComponent/></span>
    <span><UserAvatarComponent/></span>

  </div>
);
const CardContainer = () =>
 cards.map((teammate) => (
  <CardComponent teammate={teammate} key={teammate.id} />
));

const BodyComponent = () => (
 <div className="card-container">
   <CardContainer />
 </div>
);

const AppLayout = () => (
  <>
   <HeadingComponent />
   <BodyComponent />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
