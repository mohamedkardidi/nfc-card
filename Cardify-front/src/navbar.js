import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
          <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
          </ul>
        </nav>
    )
}