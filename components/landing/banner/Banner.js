import Image from "next/image";
import { useEffect, useRef, useState } from "react";
// import VideoThumbnail from "react-video-thumbnail";
import moment from "moment";
import { Button } from "antd";
//component
import AppSlider from "../../../common_components/appSlider/AppSlider";
import VideoPlayerModal from "../../../common_components/appModal/videoPlayerModal/VideoPlayerModal";
//css
import styles from "./banner.module.sass";
import ReactPlayer from "react-player";

function isMediaVideo(url) {
  let mediaFormat = url.split(".")[1];
  switch (mediaFormat.toLowerCase()) {
    case "mp4":
      return true;
  }
}

export default function Banner({ bannerData }) {
  const [autoPlay, setAutoPlay] = useState(true);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  const beginningHandler = () => {
    const videoTag = videoRef.current.getInternalPlayer();
    videoTag.style.objectFit = "cover";
  };
  let currentDate = new Date();
  //expire date banner should be filtered out
  let filteredBannerData = bannerData.data.filter((banner) => {
    return (
      // new Date(banner.attributes.Expiration).getTime() > new Date().getTime()
      new Date(banner.attributes.Expiration) >=
      new Date(currentDate.getTime() - 24 * 60 * 60 * 1000)
    );
  });
  return (
    <>
      <AppSlider
        btnIcon={`/context/slider_btn_icon_light.svg`}
        showIndicators={true}
        autoPlay={autoPlay}
        setAutoPlay={setAutoPlay}
        stopOnHover={true}
      >
        {filteredBannerData?.map((banner, index) => (
          <div className={`${styles.banner_container}`} key={"banner" + index}>
            {banner?.attributes?.BannerType?.toLowerCase() === "image" ? (
              <>
                <div className={`${styles.banner_shade}`}></div>
                <div
                  className={`d-flex justify-content-center align-items-center overflow-hidden`}
                  style={{ /* width: "400px", */ height: "638px" }}
                >
                  {banner?.attributes?.Attachments?.data &&
                    banner?.attributes?.Attachments?.data?.map(
                      (data, index) => {
                        return (
                          <div
                            className={`${styles.banner_container_shade} d-block w-100 h-100`}
                            key={"banner" + index}
                          >
                            <Image
                              // src={
                              //   // process.env.BASE_URL + banner.attributes.Image[0].url
                              //   process.env.IMG_URL + data.attributes.url
                              // }
                              src={`${process.env.IMG_URL}${data.attributes.url}`}
                              alt={data.attributes.hash}
                              width={0}
                              // width={1920}
                              // height={1080}
                              layout="fill"
                            />
                          </div>
                        );
                      }
                    )}
                </div>
              </>
            ) : (
              <>
                {/* <div
                  className={`${styles.video_thumbnail_container}`}
                  style={{  height: "638px" }}
                >
                  <div
                    className={`${styles.video_play_btn}`}
                    onClick={() => {
                      setVideoUrl(banner.attributes.VideoLink);
                      setPlay(true);
                      setModalVisibility(true);
                      setAutoPlay(false);
                    }}
                  >
                    <i
                      className={`fa fa-play ${styles.play_icon}`}
                      aria-hidden="true"
                      style={{ zIndex: "100000000000" }}
                    ></i>
                  </div>

                  {banner.attributes.Attachments.data &&
                    banner.attributes.Attachments.data.map((data) => {
                      return (
                        <div
                          className={`${styles.banner_container_shade} d-block w-100 h-100`}
                          key={"banner" + index}
                        >
                          <Image
                            src={`${process.env.IMG_URL}${data.attributes.url}`}
                            alt={data.attributes.hash}
                            width={0}
                            layout="fill"
                          />
                        </div>
                      );
                    })}
                </div> */}
                <div className={`${styles.banner_shade}`}></div>
                <div
                  className={`d-flex justify-content-center align-items-center overflow-hidden w-100`}
                  style={{ /* width: "400px", */ height: "638px" }}
                >
                  {banner?.attributes?.Attachments?.data &&
                    banner?.attributes?.Attachments?.data?.map(
                      (data, index) => {
                        return (
                          <div
                            className={`${styles.banner_container_shade} d-block w-100 h-100`}
                            key={"banner" + index}
                          >
                            <ReactPlayer
                              ref={videoRef}
                              url={
                                process.env.IMG_URL +
                                banner?.attributes.Attachments.data[0]
                                  .attributes?.url
                              }
                              width={"100%"}
                              height={`641px`}
                              // volume={true ? 1 : 0}
                              muted={true}
                              controls={true}
                              playing={true}
                            />
                          </div>
                        );
                      }
                    )}
                </div>
              </>
            )}

            <div className={`legend ${styles.text}`}>
              <div className={`pl-4`}>
                <h1 className={`${styles.text_title} mb-4`}>
                  {banner.attributes.Title && banner.attributes.Title}
                </h1>
                <p className={`${styles.text_des} mb-4`}>
                  {banner.attributes.Description &&
                  banner.attributes.Description.length > 100
                    ? `${banner.attributes.Description.substring(0, 100)}...`
                    : banner.attributes.Description}
                </p>
                <p className={`${styles.text_time}`}>
                  {banner?.attributes.RegistrationLink?.length > 0
                    ? moment(banner.attributes.CreatedDate).format(
                        "MMMM DD"
                      ) ===
                      moment(banner.attributes.Expiration).format("MMMM DD")
                      ? moment(banner.attributes.Expiration).format("MMMM DD")
                      : `${moment(banner.attributes.CreatedDate).format(
                          "MMMM DD"
                        )} - ${moment(banner.attributes.Expiration).format(
                          "MMMM DD"
                        )}`
                    : ""}
                  {/* {`${moment(banner.attributes.CreatedDate).format(
                    "MMMM DD"
                  )} - ${moment(banner.attributes.Expiration).format(
                    "MMMM DD"
                  )}`} */}
                </p>
                {banner.attributes.RegistrationLink && (
                  <Button
                    shape="round"
                    size={"large"}
                    className={`${styles.text_button}`}
                    onClick={() =>
                      window.open(banner.attributes.RegistrationLink)
                    }
                  >
                    {banner.attributes.ButtonName}
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </AppSlider>
      {play && (
        // <ReactPlayer
        //   url={videoUrl}
        //   setVisiblety={setModalVisibility}
        //   visible={modalVisibility}
        //   play={play}
        //   setPlay={setPlay}
        //   setAutoPlay={setAutoPlay}
        // />
        <VideoPlayerModal
          url={videoUrl}
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
