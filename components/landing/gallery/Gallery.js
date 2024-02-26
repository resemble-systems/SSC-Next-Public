import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import isImage from "is-image";
// component
import CommonSectionHeader from "../commonSectionHeader/CommonSectionHeader";
import AppMultiSlider from "../../../common_components/appMultiSlider/AppMultiSlider";
import VideoPlayerModal from "../../../common_components/appModal/videoPlayerModal/VideoPlayerModal";
//css
import styles from "./gallery.module.sass";

function getImgArray(imgUrl) {
  let array = [];
  for (let i = 0; i < 9; i++) {
    array.push({ image: imgUrl });
  }
  return array;
}

let sliderItems = [];


function getSliderItems(imgArray, setIsopen, setPhotoUrl, setPlay, setVideoUrl, setModalVisibility, setAutoPlay) {

  //console.log("Img", imgArray)
  imgArray.forEach((image, index) => {
    if ((index + 1) % 3 === 0) {
      sliderItems.push(
        <>
          <div
            className={`item ${styles.slider_container}`}
            data-value={index.toString()}
          >
            <div className={` p-2 ${styles.slider_container_single}`}>
              <div className={`my-2 ${styles.gallery_card_container}`} onClick={() => isImage(imgArray[index - 2].Content[0].url) ? viewImage(imgArray[index - 2].Content[0].url, setIsopen, setPhotoUrl) : viewVideo(imgArray[index - 2].Content[0].url, setPlay, setVideoUrl, setModalVisibility, setAutoPlay)}>
                {imgArray[index - 2].ContentType.toLowerCase() === "image" ? (
                  <Image
                    className={`${styles.gallery_card}`}
                    src={process.env.BASE_URL + imgArray[index - 2].Content[0].url}
                    alt={"gallery-image"}
                    layout="fill"
                  />
                ) :
                  (
                    // <div className={`${styles.gallery_image_card}`}>
                    <>
                      <div
                        className={`${styles.video_play_btn}`}
                        onClick={() => {
                          // setVideoUrl(`${process.env.BASE_URL}${imgArray[index - 2].Content[0].url}`);
                          // setPlay(true);
                          // setModalVisibility(true);
                          // setAutoPlay(false);
                        }}
                      >
                        <i
                          className={`fa fa-play ${styles.play_icon}`}
                          aria-hidden="true"
                        ></i>
                      </div>
                      <Image
                        alt={imgArray[index - 2].VideoImage[0].hash}
                        src={process.env.BASE_URL + imgArray[index - 2].VideoImage[0].url}
                        layout={`fill`}
                      />
                    </>
                    // </div>
                  )
                }

              </div>
              <div className={`my-2 ${styles.gallery_card_container}`} onClick={() => isImage(imgArray[index - 1].Content[0].url) ? viewImage(imgArray[index - 1].Content[0].url, setIsopen, setPhotoUrl) : viewVideo(imgArray[index - 1].Content[0].url, setPlay, setVideoUrl, setModalVisibility, setAutoPlay)}>
                {imgArray[index - 2].ContentType.toLowerCase() === "image" ? (
                  <Image
                    className={`${styles.gallery_card}`}
                    src={process.env.BASE_URL + imgArray[index - 1].Content[0].url}
                    alt={"gallery-image"}
                    layout="fill"
                  />) :
                  (
                    <div className={`${styles.gallery_image_card}`}>

                      <div
                        className={`${styles.video_play_btn}`}
                        onClick={() => {
                          // setVideoUrl(`${process.env.BASE_URL}${imgArray[index - 1].Content[0].url}`);
                          // setPlay(true);
                          // setModalVisibility(true);
                          // setAutoPlay(false);
                        }}
                      >
                        <i
                          className={`fa fa-play ${styles.play_icon}`}
                          aria-hidden="true"
                        ></i>
                      </div>
                      <Image
                        alt={imgArray[index - 2].VideoImage[0].hash}
                        src={process.env.BASE_URL + imgArray[index - 1].VideoImage[0].url}
                        layout={`fill`}
                      />
                    </div>
                  )
                }

              </div>
            </div>
            <div className={` p-2 ${styles.slider_container_single}`}>
              <div className={`my-2 ${styles.gallery_card_container}`} onClick={() => isImage(imgArray[index].Content[0].url) ? viewImage(imgArray[index].Content[0].url, setIsopen, setPhotoUrl) : viewVideo(imgArray[index].Content[0].url), setPlay, setVideoUrl, setModalVisibility, setAutoPlay}>
                {imgArray[index - 2].ContentType.toLowerCase() === "image" ? (
                  <Image
                    className={`${styles.gallery_card}`}
                    src={process.env.BASE_URL + imgArray[index].Content[0].url}
                    alt={"gallery-image"}
                    layout="fill"
                  />) :
                  (
                    <div className={`${styles.gallery_image_card}`}>

                      <div
                        className={`${styles.video_play_btn}`}
                        onClick={() => {
                          // setVideoUrl(`${process.env.BASE_URL}${imgArray[index].Content[0].url}`);
                          // setPlay(true);
                          // setModalVisibility(true);
                          // setAutoPlay(false);
                        }}
                      >
                        <i
                          className={`fa fa-play ${styles.play_icon}`}
                          aria-hidden="true"
                        ></i>
                      </div>
                      <Image
                        alt={imgArray[index - 2].VideoImage[0].hash}
                        src={process.env.BASE_URL + imgArray[index].VideoImage[0].url}
                        layout={`fill`}
                      />
                    </div>
                  )
                }
              </div>
            </div>


          </div >
        </>
      );
    }
  });
}

const responsive = {
  0: { items: 1 },
  568: { items: 2.25 },
  1000: { items: 3.25 },
  1024: { items: 2.5 },
  1440: { items: 9 },
};

function viewImage(index, setIsopen, setPhotoUrl) {
  setIsopen(true);
  setPhotoUrl(index)

}
function viewVideo(index, setPlay, setVideoUrl, setModalVisibility, setAutoPlay) {
  setPlay(true);
  setVideoUrl(index)
  setModalVisibility(true)
  setAutoPlay(false);
}


export default function Gallery({ galleryContent }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const onSlideChanged = ({ item }) => setActiveIndex(item);


  const [videoUrl, setVideoUrl] = useState("");
  const [play, setPlay] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [photoUrl, setPhotoUrl] = useState("");
  const [isOpen, setIsopen] = useState(false)

  let imgUrl = "/testimonial.PNG";
  let imgArray = getImgArray(imgUrl);
  getSliderItems(galleryContent, setIsopen, setPhotoUrl, setPlay, setVideoUrl, setModalVisibility, setAutoPlay);
  return (
    <>
      <div
        className={`${styles.gallery_bg} mt-5`}
        style={{
          backgroundImage: `url(/background/gallery.svg)`,
        }}
      >
        <Row>
          <div className={`${styles.gallery_container}`}>
            <CommonSectionHeader
              title={"Gallery"}
              sliderSection={true}
              // prevBtn={}
              // nextBtn={}
              onClickPrev={slidePrev}
              onClickNext={slideNext}
            />
          </div>
          <AppMultiSlider
            responsive={responsive}
            items={sliderItems}
            activeIndex={activeIndex}
            onSlideChanged={onSlideChanged}
            paddingLeft={100}
            paddingRight={50}
            animationType={"slide"}
            disableDotsControls={true}
          />
        </Row>
      </div>
      {isOpen && photoUrl && (
        <Lightbox
          mainSrc={`${process.env.BASE_URL}${photoUrl}`}
          onCloseRequest={() => setIsopen(false)}
        />
      )}
      {play && videoUrl && (
        <VideoPlayerModal
          url={process.env.BASE_URL + videoUrl}
          setVisiblety={setModalVisibility}
          visible={modalVisibility}
          play={play}
          setPlay={setPlay}
          setAutoPlay={setAutoPlay}
        />
      )}


    </>

  );
}
