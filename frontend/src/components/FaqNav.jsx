import sideNav from "../components/data/sideNav.json";
import "../components/CSS/FAQNav.css";

const FaqNav = () => {
  return (
    <div className="side__nav">
      <ul>
        {sideNav.map((option) => (
          <li className="nav__item" key={option.id}>
            <span>{option.number}</span>
            <h3>{option.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaqNav;
