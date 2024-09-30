import { NavLink } from 'react-router-dom';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div id='layout-container'>
    <header></header>
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About me</NavLink>
      <NavLink to='/skills'>Skills</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <NavLink to='/achievements'>Achievements</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </nav>
    <main>{children}</main>
    <footer></footer>
  </div>
);

export default Layout;
