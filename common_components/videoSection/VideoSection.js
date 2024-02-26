import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import useInView from "react-cool-inview";
//animation
import { zoomIn } from "react-animations";
import { StyleSheet, css } from "aphrodite";
//css
import styles from "./video-section.module.sass";

const animationStyles = StyleSheet.create({
  zoomIn: {
    animationName: zoomIn,
    animationDuration: "1s",
  },
});

export default function VideoSection({ video }) {
  const [backgroundVideo, setBackgroundVideo] = useState(true);
  const [clickedOutside, setClickedOutside] = useState(false);
  const { observe, unobserve, inView, scrollDirection, entry } = useInView({
    threshold: 0.25, // Default is 0
    onChange: ({ inView, scrollDirection, entry, observe, unobserve }) => {
      // Triggered whenever the target meets a threshold, e.g. [0.25, 0.5, ...]

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
    onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
      // Triggered when the target enters the viewport
    },
    onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
      // Triggered when the target leaves the viewport
    },
    // More useful options...
  });
  const videoRef = useRef();

  const handleClickOutside = (e) => {
    if (!videoRef.current.contains(e.target)) {
      setClickedOutside(true);
      setBackgroundVideo(true);
    }
  };

  const handleClickInside = () => setClickedOutside(false);

  useEffect(() => {
    setBackgroundVideo(true);
  }, [inView]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <div className={`${styles.video}`} ref={videoRef}>
      <div className={`${styles.viewPort_container}`} ref={observe}>
        {backgroundVideo ? (
          <div className={inView ? css(animationStyles.zoomIn) : ""}>
            <div
              className={`${styles.image_container}`}
              onClick={() => setBackgroundVideo(false)}
            >
              <div
                className={`position-absolute h-100 w-100 ${styles.video_title_container}`}
              >
                <h3 className={`${styles.video_title}`}>
                  {video.attributes.Text}
                </h3>
              </div>
              <Image
                className={`${styles.image}`}
                src={"/video/Video.svg"}
                alt="card-img"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
              <ReactPlayer
                url={video.attributes.VideoLink}
                width={"100%"}
                height={`100%`}
                volume={0}
                muted
                loop
                controls={false}
                playing={true}
                // controls={true}
              />
            </div>
          </div>
        ) : (
          <ReactPlayer
            url={video.attributes.VideoLink}
            width={"100%"}
            height={`100%`}
            volume={100}
            muted
            loop
            controls={false}
            playing={true}
            // controls={true}
          />
        )}
      </div>
    </div>
  );
}
