import { useState, useRef } from "react";
import "./CoffeeAdd.scss";
import video from "/assets/coffee.mp4";

const CoffeeAdd = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);

  const handlePlay = () => {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    nextIsPlaying ?
      ref.current.play() :
      ref.current.pause();
  }
  return (
    <section className="section__add">
      <button
        onClick={handlePlay}
        className="add__btn">{isPlaying ? "Pause" : "Play"}</button>
      <video
        className="add__video"
        muted
        loop
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={video} type="video/mp4" />
      </video>
    </section>
  );
};

export default CoffeeAdd;