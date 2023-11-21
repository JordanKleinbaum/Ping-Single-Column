import styles from "./socialicons.module.css";

import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";

function Socialicons() {
  return (
    <>
      <div className="total">
        <BiLogoFacebook className={styles.facebook} />
        <BiLogoTwitter className={styles.facebook} />
        <BiLogoInstagram className={styles.facebook} />
      </div>
    </>
  );
}

export default Socialicons;
