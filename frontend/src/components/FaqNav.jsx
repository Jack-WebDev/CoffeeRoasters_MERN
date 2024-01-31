import sideNav from "../components/data/sideNav.json";

const FaqNav = () => {
  return (
    <div className="side__nav">
      <ul>
        {sideNav.map((option) => (
          <li key={option.id}>
            <span>{option.number}</span>
            <h3>{option.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaqNav;
