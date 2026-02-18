import { FiStar } from "react-icons/fi";
import "./style.css";

export default function BrilhoTag() {
  return (
    <div className="brilhoTag">
      <div className="sparkle">
        <FiStar className="star star1" />
        <FiStar className="star star2" />
      </div>
      <span>Acabamento Brilhoso</span>
    </div>
  );
}