import Poster from "../ui/Poster";
import classes from "./Introduction.module.css";
import profPhoto from "../../pictures/japan2u.jpg";

function Introduction() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <img src={profPhoto} alt="profile" className={classes.introPhoto} />
      </div>
      <hr />
      <Poster >
        <div className={classes.introFont}>
          <p>
            Hey, guys!! We're Japan2U!! Masa was born in Japan and speaks
            Japanese, Korean, and English. He has been in Texas for 4 years.
          </p>
          <p>
          Hiromi was also born in Japan and speaks Japanese and English. He has
          been in Texas for 14 years.
          </p>
          <p>
           We'd love to teach REAL Japanese to you all
          and we want to share Japanese cultures!! We upload four videos every
          week, and we are sure that you guys love our content!!
          </p>
        </div>
      </Poster>
    </div>
  );
}

export default Introduction;
