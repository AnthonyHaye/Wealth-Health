import { Link } from 'react-router-dom';
import './_navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">WealthHealth</div>
      <ul className="navbar-links">
        <li><Link to="/Wealth-Health/">Créer un employé</Link></li>
        <li><Link to="/listEmployees">Liste des employés</Link></li>
      </ul>
    </nav>
  );
}
