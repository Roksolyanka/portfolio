import React from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '../../constants';

const HomePage = lazy(() => import('../../pages/HomePage'));
const AboutPage = lazy(() => import('../../pages/AboutPage'));
const SkillsPage = lazy(() => import('../../pages/SkillsPage'));
const ProjectsPage = lazy(() => import('../../pages/ProjectsPage'));
const AchievementsPage = lazy(() => import('../../pages/AchievementsPage'));
const ContactPage = lazy(() => import('../../pages/ContactPage'));
const NotFound = lazy(() => import('../../pages/NotFound'));

interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

const routes: RouteConfig[] = [
  { path: ROUTES.HOME, element: <HomePage /> },
  { path: ROUTES.ABOUT, element: <AboutPage /> },
  { path: ROUTES.SKILLS, element: <SkillsPage /> },
  { path: ROUTES.PROJECTS, element: <ProjectsPage /> },
  { path: ROUTES.ACHIEVEMENTS, element: <AchievementsPage /> },
  { path: ROUTES.CONTACT, element: <ContactPage /> },
  { path: ROUTES.NOT_FOUND, element: <NotFound /> },
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
