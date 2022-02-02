import classes from './Navbar.module.css'

export const Navbar = () => {
  return (
      <div className={classes.nav}>
          <div className={classes.item}>
              <a href='#' className={classes.link}>Profile</a>
          </div>
          <div className={classes.item}>
              <a href='#' className={classes.link}>Message</a>
          </div>
          <div className={classes.item}>
              <a href='#' className={classes.link}>News</a>
          </div>
          <div className={classes.item}>
              <a href='#' className={classes.link}>Music</a>
          </div>
      </div>

  )
}