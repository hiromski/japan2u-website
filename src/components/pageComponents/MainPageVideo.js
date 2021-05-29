import Poster from "../ui/Poster";
import classes from "./MainPageVideo.module.css";

function MainPageVideo() {
  return (
    <div>
      <div>
        <h1 style={{textAlign: 'center'}}>
              Welcome To Best Japanese Lesson in the World
        </h1>
        <Poster>
          <iframe
            className={classes.video}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IyKTAA0_Vgc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Poster>
      </div>
    </div>
  );
}

export default MainPageVideo;
