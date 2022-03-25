import classes from './Header.module.css';

export const Header = () => {
    return (
        <div className={classes.header}>

            <img className={classes.img}
                 src="https://avatars.mds.yandex.net/i?id=e708784c502029fd3580605e76109216_l-5761336-images-thumbs&n=27&h=384&w=480"
                 alt=""/>
            <span>Выйти</span>


        </div>
    );
};
