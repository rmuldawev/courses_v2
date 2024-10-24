import { FC } from "react";
import { Link } from "react-router-dom";
import House from "../../assets/icons/House";

interface NavigationButtonProps {
  name: string;
  link: string;
}

const NavigationButton: FC<NavigationButtonProps> = ({ name, link }) => {
  return (
    <Link
      style={{
        height: 40,
        width: 288,
        backgroundColor: "#EDF2E8",
        color: "#141C0D",
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        padding: "8px 12px",
      }}
      to={link}
      className="nav-link"
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <House />
        {name}
      </div>
    </Link>
  );
};

export default NavigationButton;
