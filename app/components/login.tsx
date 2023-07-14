import styles from "./login.module.scss";
import { IconButton } from "./button";
import Locale from "../locales";
import WeChatIcon from "../icons/weChat.svg";
import QQIcon from "../icons/QQ.svg";

export function LoginPage() {
  let formData = {
    email: "",
    password: "",
  };

  console.log(styles);
  return (
    <div className={styles["login-page"]}>
      <div className={styles["login-page-box"]}>
        <div className={styles["box-title"]}>
          <IconButton
            className={styles["box-title-btn"] + " " + styles["active"]}
            text={Locale.Login.Title}
            onClick={() => login()}
          />
          <IconButton
            className={styles["box-title-btn"]}
            text={Locale.Register.Title}
            onClick={() => login()}
          />
        </div>
        <div className={styles["box-body"]}>
          <div className={styles["box-body-item"]}>
            <div className={styles["box-body-item-title"]}>Email</div>
            <input
              type="text"
              value={formData.email}
              onChange={
                (e) => {}
                // props.updateConfig(
                //   (config) => (config.template = e.currentTarget.value),
                // )
              }
            ></input>
          </div>
          <div className={styles["box-body-item"]}>
            <div className={styles["box-body-item-title"]}>Password</div>
            <input
              type="password"
              value={formData.password}
              onChange={
                (e) => {}
                // props.updateConfig(
                //   (config) => (config.template = e.currentTarget.value),
                // )
              }
            ></input>
          </div>
        </div>
        <IconButton
          className={styles["box-foot-btn"]}
          type="primary"
          text={Locale.Login.Title}
          onClick={() => login()}
        />
        <div className={styles["other-login"]}>
          <IconButton
            icon={<WeChatIcon className={styles["other-login-icon"]} />}
          />
          <IconButton
            icon={<QQIcon className={styles["other-login-icon"]} />}
            onClick={() => {
              // syncStore.check().then(console.log);
            }}
          />
        </div>
      </div>
    </div>
  );
}

function login() {
  console.log(123);
}
