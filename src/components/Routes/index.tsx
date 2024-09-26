import { Route, Routes } from 'react-router-dom';

import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import SkillsPage from '../../pages/SkillsPage';
import ProjectsPage from '../../pages/ProjectsPage';
import AchievementsPage from '../../pages/AchievementsPage';
import ContactPage from '../../pages/ContactPage';
import NotFound from '../NotFound/NotFound';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/skills', element: <SkillsPage /> },
  { path: '/projects', element: <ProjectsPage /> },
  { path: '/achievements', element: <AchievementsPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '*', element: <NotFound /> },
];

const RoutesList = () => {
  return (
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
  );
};

export default RoutesList;
