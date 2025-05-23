/**
 * @file Définit les routes principales de l'application en utilisant React Router.
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateEmployee from '../pages/CreateEmployee.jsx';
import EmployeeList from '../pages/EmployeeList.jsx';
import Layout from '../components/layout/Layout.jsx';

/**
 * Composant de routage principal de l'application.
 *
 * @returns {JSX.Element} Le composant de gestion des routes.
 */
const AppRouter = () => {
  return (
    <Router>
      <Layout>
      {/* Définition des routes de l'application */}
      <Routes>
        {/* Route vers la page d'accueil */}
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/listEmployees" element={<EmployeeList />} />

      </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
