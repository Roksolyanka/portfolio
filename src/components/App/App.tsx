import { NavLink } from 'react-router-dom';

import RoutesList from '../Routes';

import '../../App.css';

export const App = () => (
  <div id='app-container'>
    <header></header>
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About me</NavLink>
      <NavLink to='/skills'>Skills</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <NavLink to='/achievements'>Achievements</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </nav>
    <main>
      <RoutesList />
    </main>
    <footer></footer>
  </div>
);

export default App;
