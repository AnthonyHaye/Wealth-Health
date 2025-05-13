import Navbar from '../navbar/Navbar.jsx';
import './_layout.scss';

export default function Layout({ children }) {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}
