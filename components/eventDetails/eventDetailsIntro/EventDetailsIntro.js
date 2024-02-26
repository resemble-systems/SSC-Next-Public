import Image from "next/image";
import React, { useState } from "react";
import { Row, Col } from "antd";
// Lib
import moment from "moment";
//components
// import AppRoundedBtn from "../../../common_components/appRoundedBtn/AppRoundedBtn";
// import EventRegistrationModal from "../../../common_components/appModal/eventRegistrationModal/EventRegistrationModal";
import AppSlider from "../../../common_components/appSlider/AppSlider";

// css
import styles from "./event-details-intro.module.sass";

export default function EventDetailsIntro({ eventData }) {
  // Modal state
  // const [autoPlay, setAutoPlay] = useState(true);
  const [eventRegistrationModal, setEventRegistrationModal] = useState(false);
  // const [displayedImage, setDisplayedImage] = useState(eventData.Image[0].url);
  const [displayedImage, setDisplayedImage] = useState(
    eventData?.attributes?.Attachments?.data?.length > 0 &&
      eventData?.attributes?.Attachments?.data[0]?.attributes?.url
  );

  const formattedText = eventData?.attributes?.Description?.replace(
    /\n/g,
    "<br>"
  );

  return (
    <div className={`${styles.event_details_bg} mt-5`}>
      <div className={`${styles.event_details_container} py-5`}>
        <Row>
          {/* For Large screens */}
          <Col xs={0} sm={0} md={0} lg={10} xl={12}>
            <div>
              <h3 className={`${styles.event_details_title} mb-5`}>
                {eventData && eventData?.attributes?.Title}
              </h3>
              <div>
                {eventData && eventData?.attributes?.Author && (
                  <Row className="mb-2">
                    <Col span={6} className={`${styles.event_details_heading}`}>
                      {`Organizer`}
                    </Col>
                    <Col span={1} className={`${styles.event_details_heading}`}>
                      {`:`}
                    </Col>
                    <Col span={17} className={`${styles.event_details_value}`}>
                      {eventData?.attributes?.Author}
                    </Col>
                  </Row>
                )}
              </div>
              <div>
                {eventData && eventData?.attributes?.StartDate && (
                  <Row className="mb-2">
                    <Col span={6} className={`${styles.event_details_heading}`}>
                      {`Start Date`}
                    </Col>
                    <Col span={1} className={`${styles.event_details_heading}`}>
                      {`:`}
                    </Col>
                    <Col span={17} className={`${styles.event_details_value}`}>
                      {moment(eventData?.attributes?.StartDate).format(
                        "ddd, D MMMM YYYY"
                      )}
                      (
                      {moment(eventData?.attributes?.StartDate).format(
                        "h:mm a [onwards]"
                      )}
                      )
                    </Col>
                  </Row>
                )}
              </div>
              <div>
                {eventData && eventData?.attributes?.StartDate && (
                  <Row className="mb-2">
                    <Col span={6} className={`${styles.event_details_heading}`}>
                      {`End Date`}
                    </Col>
                    <Col span={1} className={`${styles.event_details_heading}`}>
                      {`:`}
                    </Col>
                    <Col span={17} className={`${styles.event_details_value}`}>
                      {moment(eventData?.attributes?.EndDate).format(
                        "ddd, D MMMM YYYY"
                      )}
                      ({moment(eventData?.attributes?.EndDate).format("h:mm a")}
                      )
                    </Col>
                  </Row>
                )}
              </div>
              {/* <div>
                {eventData && eventData?.attributes?.StartDate && (
                  <Row className="mb-2">
                    <Col span={6} className={`${styles.event_details_heading}`}>
                      {`Time`}
                    </Col>
                    <Col span={1} className={`${styles.event_details_heading}`}>
                      {`:`}
                    </Col>
                    <Col span={17} className={`${styles.event_details_value}`}>
                      {moment(eventData?.attributes?.StartDate).format(
                        "h:mm a [onwards]"
                      )}
                    </Col>
                  </Row>
                )}
              </div> */}
              <div className={`mb-4`}>
                {eventData && eventData?.attributes?.Location && (
                  <Row className="mb-2">
                    <Col span={6} className={`${styles.event_details_heading}`}>
                      {`Location`}
                    </Col>
                    <Col span={1} className={`${styles.event_details_heading}`}>
                      {`:`}
                    </Col>
                    <Col span={17} className={`${styles.event_details_value}`}>
                      {eventData?.attributes?.Location}
                    </Col>
                  </Row>
                )}
              </div>
              {eventData && (
                <div
                  className={`${styles.event_details_des} pr-4 overflow-auto`}
                >
                  <div dangerouslySetInnerHTML={{ __html: formattedText }} />
                </div>
              )}
            </div>
            {/* <div className={`d-flex justify-content-center`}>
              <AppRoundedBtn
                text={eventData.RegistrationLink ? `Join Now` : `Register Now`}
                prefix={""}
                suffix={""}
                bg={"yellow"}
                outline={"none"}
                long={true}
                href={
                  eventData.RegistrationLink
                    ? eventData.RegistrationLink
                    : "none"
                }
                onClickHandler={
                  eventData.RegistrationLink
                    ? () => {}
                    : e => {
                        setEventRegistrationModal(true);
                      }
                }
                btnStyle={{ width: `210px`, height: "55px" }}
              />
            </div>
            <EventRegistrationModal
              setVisiblety={setEventRegistrationModal}
              visible={eventRegistrationModal}
            /> */}
          </Col>
          {/* For small screens */}
          <Col xs={24} sm={24} md={24} lg={0} xl={0}>
            <div className={` px-5 `}>
              <h3 className={`${styles.event_details_title} mb-5`}>
                {eventData && eventData?.attributes?.Title}
              </h3>
              <div>
                {eventData && eventData?.attributes?.Author && (
                  <Row>
                    <Col
                      xs={8}
                      sm={8}
                      md={6}
                      lg={0}
                      xl={0}
                      className={`${styles.event_details_heading}`}
                    >
                      {`Organizer`}
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
                      xs={15}
                      sm={15}
                      md={17}
                      lg={0}
                      xl={0}
                      className={`${styles.event_details_value}`}
                    >
                      {eventData?.attributes?.Author}
                    </Col>
                  </Row>
                )}
              </div>
              <div>
                {eventData && eventData?.attributes?.StartDate && (
                  <Row>
                    <Col
                      xs={8}
                      sm={8}
                      md={6}
                      lg={0}
                      xl={0}
                      className={`${styles.event_details_heading}`}
                    >
                      {`Event Date`}
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
                      xs={15}
                      sm={15}
                      md={17}
                      lg={0}
                      xl={0}
                      className={`${styles.event_details_value}`}
                    >
                      {/* {moment(eventData?.attributes?.StartDate).format(
                        "ddd, D MMMM YYYY"
                      )} */}
                      {moment
                        .utc(eventData?.attributes?.StartDate)
                        .format("ddd, D MMMM YYYY")}
                    </Col>
                  </Row>
                )}
              </div>
              <div>
                {eventData && eventData?.attributes?.StartDate && (
                  <Row>
                    <Col
                      xs={8}
                      sm={8}
                      md={6}
                      lg={0}
                      xl={0}
                      className={`${styles.event_details_heading}`}
                    >
                      {`Time`}
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
                      xs={15}
                      sm={15}
                      md={17}
                      lg={0}
                      xl={0}
                      className={`${styles.event_details_value}`}
                    >
                      {moment(eventData?.attributes?.StartDate).format(
                        "h:mm a [onwards]"
                      )}
                    </Col>
                  </Row>
                )}
              </div>
              <div className={`mb-4`}>
                {eventData && eventData?.attributes?.Location && (
                  <Row>
                    <Col
                      xs={8}
                      sm={8}
                      md={6}
                      lg={0}
                      xl={0}
                      className={`${styles.event_details_heading}`}
                    >
                      {`Location`}
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
                      xs={15}
                      sm={15}
                      md={17}
                      lg={0}
                      xl={0}
                      className={`${styles.event_details_value}`}
                    >
                      {eventData?.attributes?.Location}
                    </Col>
                  </Row>
                )}
              </div>
              {eventData && (
                <p className={`${styles.event_details_des} pr-4 overflow-auto`}>
                  {eventData?.attributes?.Description}
                </p>
              )}
            </div>
            {/* <div className={`d-flex justify-content-center mb-5`}>
              <AppRoundedBtn
                text={`Register Now`}
                prefix={""}
                suffix={""}
                bg={"yellow"}
                outline={"none"}
                long={true}
                href={"none"}
                onClickHandler={e => {
                  setEventRegistrationModal(true);
                }}
                btnStyle={{ width: `210px`, height: "55px" }}
              />
            </div>
            <EventRegistrationModal
              title={`Event Registration`}
              setVisiblety={setEventRegistrationModal}
              visible={eventRegistrationModal}
            /> */}
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={14}
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
                {eventData &&
                  eventData?.attributes?.Attachments?.data?.map(
                    (image, index) =>
                      image.attributes.url ? (
                        <Image
                          src={`${process.env.IMG_URL}${image.attributes.url}`}
                          alt="ssc"
                          width={800}
                          height={800}
                          layout="responsive"
                          className={`${styles.event_details_image}`}
                          key={"events" + index}
                        />
                      ) : (
                        <Image
                          src={`${process.env.IMG_URL}${displayedImage}`}
                          alt="ssc"
                          width={800}
                          height={800}
                          layout="responsive"
                          className={`${styles.event_details_image}`}
                          key={"events" + index}
                        />
                      )
                  )}
              </AppSlider>
            </div>
            <div
              className={`d-flex ${styles.thumbnail_container} ${
                eventData &&
                Object.keys(eventData)?.length > 0 &&
                eventData?.attributes?.Attachments &&
                eventData?.attributes?.Attachments?.length > 4 &&
                `w-100`
              } overflow-hidden`}
            >
              <div className={`d-flex overflow-auto`}>
                <div className={`d-flex`}>
                  {eventData &&
                    eventData.attributes?.Attachments?.data?.length > 0 &&
                    eventData.attributes?.Attachments?.data &&
                    eventData.attributes?.Attachments?.data?.length > 0 &&
                    eventData.attributes?.Attachments?.data?.map(
                      (image, index) => (
                        <div
                          className={`mx-3 ${styles.image_cont} position-relative`}
                          key={"attachments" + index}
                        >
                          <div
                            className={`position-absolute`}
                            style={{
                              width: "100px",
                            }}
                          >
                            <Image
                              src={`${process.env.IMG_URL}${image.attributes.url}`}
                              alt="ssc"
                              width={100}
                              height={80}
                              key={"attachments" + index}
                            />
                          </div>
                        </div>
                      )
                    )}
                </div>
              </div>

              {/* {eventData &&
                eventData.Image.slice(0, 4).map(image => (
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
