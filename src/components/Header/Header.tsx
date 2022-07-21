import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
        <Link className="title" to='/'>
    Inituitive Quiz App
    </Link>
    <hr className="divider"/>
    </div>
  )
}
