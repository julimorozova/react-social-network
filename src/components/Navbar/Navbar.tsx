import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

export const Navbar = () => {
    const setActive = ({isActive}: any) => isActive ? `${classes.link} ${classes.active}` : classes.link;
  return (
      <div className={classes.nav}>
          <div className={classes.item}>
              <NavLink to='/profile' className={setActive}>Profile</NavLink>
          </div>
          <div className={classes.item}>
              <NavLink to='/dialogs' className={setActive}>Message</NavLink>
          </div>
          <div className={classes.item}>
              <NavLink to='/news' className={setActive}>News</NavLink>
          </div>
          <div className={classes.item}>
              <NavLink to='/music' className={setActive}>Music</NavLink>
          </div>
      </div>

  );
};