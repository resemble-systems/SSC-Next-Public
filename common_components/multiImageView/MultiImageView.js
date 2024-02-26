import Image from "next/image";
import { Row, Col } from "antd";
import isImage from "is-image";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
//css
import styles from "./multi-image-view.module.sass";
// Components
import VideoPlayerModal from "../appModal/videoPlayerModal/VideoPlayerModal";

function ResponsiveView({ finalData, span, page }) {
  const [videoUrl, setVideoUrl] = useState("");
  const [play, setPlay] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [photoUrl, setPhotoUrl] = useState("");
  const [isOpen, setIsopen] = useState(false);

  function viewImage(index) {
    setIsopen(true);
    setPhotoUrl(index);
  }
  function viewVideo(index) {
    setPlay(true);
    setVideoUrl(index);
    setModalVisibility(true);
    setAutoPlay(false);
  }

  return (
    <>
      <Row
        gutter={[16, 16]}
        className={`d-flex justify-content-center w-100 mt-2`}
      >
        {page === "ssc" &&
          finalData?.data?.map((data) => (
            <Col
              span={span}
              className={`d-flex align-items-center flex-column px-0`}
            >
              <div className={`${styles.miv_image_box} mb-5`}>
                <Image
                  src={
                    process.env.IMG_URL +
                    data?.attributes?.Attachments?.data[0]?.attributes?.url
                  }
                  alt="ssc"
                  width={200}
                  height={200}
                  className={`${styles.miv_image}`}
                />
              </div>
              {page === "ssc" && (
                <>
                  <h5 className={`${styles.member_name}`}>
                    {data?.attributes?.Name}
                  </h5>
                  <p className={`${styles.member_degisnation}`}>
                    {data?.attributes?.Designation}
                  </p>
                </>
              )}
            </Col>
          ))}
        {page !== "ssc" &&
          finalData?.data?.map((data) => (
            <Col
              span={span}
              className={`d-flex align-items-center flex-column px-0`}
            >
              <div
                className={`${styles.miv_image_box} mb-5`}
                onClick={() =>
                  isImage(data?.Attachments?.data[0]?.attributes.url)
                    ? viewImage(
                        data?.attributes?.Attachments?.data[0]?.attributes.url
                      )
                    : viewVideo(
                        data?.attributes?.Attachments?.data[0]?.attributes.url
                      )
                }
              >
                {isImage(
                  data?.attributes?.Attachments?.data[0]?.attributes.url
                ) ? (
                  <Image
                    src={
                      process.env.IMG_URL +
                      data?.attributes?.Attachments?.data[0]?.attributes.url
                    }
                    alt="ssc"
                    width={200}
                    height={200}
                    className={`${styles.miv_image}`}
                  />
                ) : (
                  <ReactPlayer
                    url={
                      process.env.IMG_URL +
                      data?.attributes?.Attachments?.data[0]?.attributes.url
                    }
                    width={200}
                    height={200}
                    className={`${styles.service_type_video}`}
                    controls={false}
                  />
                )}
              </div>
            </Col>
          ))}
      </Row>
      {isOpen && photoUrl && (
        <Lightbox
          mainSrc={`${process.env.IMG_URL}${photoUrl}`}
          onCloseRequest={() => setIsopen(false)}
        />
      )}
      {play && videoUrl && (
        <VideoPlayerModal
          url={process.env.IMG_URL + videoUrl}
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

export default function MultiImageView({ title, subTitle, finalData, page }) {
  return (
    //   <div className={`${styles.container} `}>
    <div className="container">
      <div style={{ marginTop: "60px" }}>
        <h3 className={`${styles.miv_title}`}>{title}</h3>
      </div>
      <div style={{ marginTop: "28px", marginBottom: "38px" }}>
        <p className={`${styles.miv_subtitle} `}>{subTitle}</p>
      </div>
      <Row>
        <Col xs={0} sm={0} md={0} lg={24} xl={24}>
          {finalData /* && finalData?.data?.length > 0  */ && (
            <ResponsiveView finalData={finalData} span={6} page={page} />
          )}
        </Col>
        <Col xs={24} sm={24} md={24} lg={0} xl={0}>
          {finalData && finalData?.data?.length > 0 && (
            <ResponsiveView finalData={finalData} span={12} page={page} />
          )}
        </Col>
      </Row>
    </div>
  );
}
