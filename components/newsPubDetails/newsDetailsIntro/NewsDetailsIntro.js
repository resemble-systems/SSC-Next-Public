import Image from "next/image";
import React, { useState } from "react";
import { Row, Col } from "antd";
// Lib
import moment from "moment";
//components
import AppRoundedBtn from "../../../common_components/appRoundedBtn/AppRoundedBtn";
import EventRegistrationModal from "../../../common_components/appModal/eventRegistrationModal/EventRegistrationModal";
import AppSlider from "../../../common_components/appSlider/AppSlider";

// css
import styles from "./news-intro-details.module.sass";
import { attributes } from "@syncfusion/ej2-base";

export default function EventDetailsIntro({ newsDetails }) {
  // console.log("====================================");
  // console.log(newsDetails);
  // console.log("====================================");

  const [displayedImage, setDisplayedImage] = useState(
    // newsDetails.Image[0].url
    newsDetails?.attributes?.Attachments?.data[0].attributes?.url
  );

  const formattedText = newsDetails?.attributes?.Description?.replace(
    /\n/g,
    "<br>"
  );
  return (
    <div
      className={`${styles.event_details_bg} d-flex justify-content-center align-items-center`}
    >
      <div className={`${styles.event_details_container} `}>
        <Row>
          {/* For Large screens */}
          <Col xs={0} sm={0} md={0} lg={12} xl={12}>
            <div>
              <h3 className={`${styles.event_details_title} mb-5`}>
                {newsDetails && newsDetails?.attributes?.Title}
              </h3>
              <p>
                {newsDetails && newsDetails?.attributes?.Author && (
                  <Row>
                    <Col span={3} className={`${styles.event_details_heading}`}>
                      {`Author`}
                    </Col>
                    <Col span={1} className={`${styles.event_details_heading}`}>
                      {`:`}
                    </Col>
                    <Col span={20} className={`${styles.event_details_value}`}>
                      {newsDetails?.attributes?.Author}
                    </Col>
                  </Row>
                )}
              </p>
              <div className={`overflow-auto`} style={{ height: "400px" }}>
                {newsDetails && (
                  <div className={`${styles.event_details_des}`}>
                    <div dangerouslySetInnerHTML={{ __html: formattedText }} />
                  </div>
                )}
              </div>
            </div>
          </Col>
          {/* For small screens */}
          <Col xs={24} sm={24} md={24} lg={0} xl={0}>
            <div className={` px-5 `}>
              <h3 className={`${styles.event_details_title} mt-3 mb-4`}>
                {newsDetails && newsDetails?.attributes?.Title}
              </h3>
              <p>
                {newsDetails && newsDetails?.attributes?.Author && (
                  <Row>
                    <Col
                      xs={5}
                      sm={5}
                      md={3}
                      lg={0}
                      xl={0}
                      className={`${styles.event_details_heading}`}
                    >
                      {`Author`}
                    </Col>
                    <Col
                      xs={1}
                      sm={1}
                      md={1}
                      lg={0}
                      xl={0}
                      className={`${styles.event_details_heading}`}
                    >
                      {`:`}
                    </Col>
                    <Col
                      xs={18}
                      sm={18}
                      md={20}
                      lg={0}
                      xl={0}
                      className={`${styles.event_details_value}`}
                    >
                      {newsDetails?.attributes?.Author}
                    </Col>
                  </Row>
                )}
              </p>
              <div className={`overflow-auto`} style={{ height: "400px" }}>
                {newsDetails && (
                  <p className={`${styles.event_details_des} pr-4`}>
                    {newsDetails?.attributes?.Description}
                  </p>
                )}
              </div>
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <div
              className={`${styles.event_details_image_box} d-flex justify-content-center align-items-center overflow-hidden mb-5`}
            >
              <AppSlider
                showIndicators={false}
                autoPlay={true}
                setAutoPlay={() => {}}
                stopOnHover={false}
              >
                {newsDetails &&
                  newsDetails?.attributes?.Attachments?.data?.map((image) =>
                    image.attributes.url ? (
                      <div className="d-flex justify-content-center align-items-center">
                        <Image
                          src={`${process.env.IMG_URL}${image.attributes.url}`}
                          alt="ssc"
                          width={800}
                          height={800}
                          layout="responsive"
                          className={`${styles.event_details_image}`}
                        />
                      </div>
                    ) : (
                      <div className="d-flex justify-content-center align-items-center">
                        <Image
                          src={`${process.env.IMG_URL}${displayedImage}`}
                          alt="ssc"
                          width={800}
                          height={800}
                          layout="responsive"
                          className={`${styles.event_details_image}`}
                        />
                      </div>
                    )
                  )}
              </AppSlider>
            </div>
            <div
              className={`d-flex  ${styles.thumbnail_container}  ${
                newsDetails &&
                Object.keys(newsDetails).length > 0 &&
                newsDetails.Image &&
                newsDetails?.attributes.Attachments?.data.length > 4 &&
                `w-100`
              } overflow-hidden`}
            >
              <div className={`d-flex overflow-auto`}>
                <div className={`d-flex`}>
                  {newsDetails &&
                    Object.keys(newsDetails).length > 0 &&
                    newsDetails.Image &&
                    newsDetails?.attributes?.Attachments?.data?.length > 0 &&
                    newsDetails?.Image?.map((image) => (
                      <>
                        <div
                          className={` mx-3 ${styles.image_cont} position-relative`}
                        >
                          <div
                            className={`position-absolute`}
                            style={{
                              width: "100px",
                            }}
                          >
                            <Image
                              src={`${process.env.BASE_URL}${image?.attributes?.url}`}
                              alt="ssc"
                              width="100"
                              height="80"
                            />
                          </div>
                        </div>
                      </>
                    ))}
                </div>
              </div>

              {/* {newsDetails &&
                newsDetails.Image.slice(0, 4).map(image => (
                  <div
                    className={
                      `mx-3 `
                      // ${
                      //   displayedImage === image.url ? styles.selected : ""
                      //   }`
                    }
                    // onClick={() => setDisplayedImage(image.url)}
                  >
                    <Image
                      src={`${process.env.BASE_URL}${image.url}`}
                      alt="ssc"
                      width="100"
                      height="80"
                      layout="responsive"
                    />
                  </div>
                ))} */}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
