import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/HomePage'));
const AboutPage = lazy(() => import('../../pages/AboutPage'));
const SkillsPage = lazy(() => import('../../pages/SkillsPage'));
const ProjectsPage = lazy(() => import('../../pages/ProjectsPage'));
const AchievementsPage = lazy(() => import('../../pages/AchievementsPage'));
const ContactPage = lazy(() => import('../../pages/ContactPage'));
const NotFound = lazy(() => import('../NotFound/NotFound'));

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
