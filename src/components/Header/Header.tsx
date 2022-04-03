import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';


type HeaderPropsType = {
    login: string | null
    isAuth: boolean
}
export const Header = (props: HeaderPropsType) => {
    return (
        <header className={classes.header}>
            <div className={classes.headerWrapper}>
                <NavLink to={'/profile'}>
                    <img className={classes.img}
                         src="https://avatars.mds.yandex.net/i?id=e708784c502029fd3580605e76109216_l-5761336-images-thumbs&n=27&h=384&w=480"
                         alt=""/>
                </NavLink>
                {props.isAuth ? props.login :
                <NavLink to={'/auth'}>
                    <div className={classes.login}>Login</div>
                </NavLink>}


            </div>


        </header>
    );
};
