import classes from "./Dialogs.module.css";
export const Dialogs = () => {

  return(
      <div className={classes.dialogs}>
        <div className={classes.dialogs_items}>
            <div className={classes.dialog}>
                Иван
            </div>
            <div className={classes.dialog}>
                Матвей
            </div>
            <div className={classes.dialog}>
                Кирилл
            </div>
            <div className={classes.dialog}>
                Оля
            </div>

        </div>

          <div className={classes.messages}>
              <div className={classes.message}>
                  Привет!
              </div>
          </div>
      </div>
  )
}