import classes from "./SnsButton.module.css";
import instagram from "../../pictures/instagram.png";
import youtube from "../../pictures/youtube.png";
import tiktok from "../../pictures/tiktok.png";

export function SnsButtons() {
  return (
    <div className={classes.verticalCenter}>
      <ul style={{ listStyle: "none" }}>
        <li>
          <a
            href="https://www.youtube.com/channel/UCGxXRNxxQ5wDOouP4rCqNrA"
            target="blank"
            className={classes.button}
          >
            <img src={youtube} alt="youtube" className={classes.image} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/japan_2u/?hl=en"
            target="blank"
            className={classes.button}
          >
            <img src={instagram} alt="instagram" className={classes.image} />
          </a>
        </li>
        <li>
          <a
            href="https://www.tiktok.com/@japan2u?source=h5_m&_r=1"
            target="blank"
            className={classes.button}
          >
           <img src={tiktok} alt="tiktok" className={classes.image} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SnsButtons;
