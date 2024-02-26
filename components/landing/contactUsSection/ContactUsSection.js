import { useState, useEffect } from "react";
import Image from "next/image";
import { Row, Col, notification } from "antd";
import { CheckCircleOutlined, WarningOutlined } from "@ant-design/icons";
import useInView from "react-cool-inview";
//animation
import { slideInLeft, slideInUp } from "react-animations";
import { StyleSheet, css } from "aphrodite";
//component
import AppBtn from "../../../common_components/appBtn/AppBtn";
//service
import {
  subscribeChangeHandler,
  onClickSubscribeHandler,
} from "./localService";
//css
import styles from "./contact-us-section.module.sass";

notification.config({
  placement: "bottomCenter",
  duration: 3,
});

const openErrorNotification = ({ title, description }) => {
  notification.error({
    message: title,
    description: description,
    onClose: () => {},
    icon: <WarningOutlined className={`text-danger`} />,
  });
};

const openSuccessNotification = ({ title, description }) => {
  console.log("test-->", title, description);
  notification.success({
    message: title,
    description: description,
    onClose: () => {},
    icon: <CheckCircleOutlined className={`text-success`} />,
  });
};

const animationStyles = StyleSheet.create({
  slideInLeft: {
    animationName: slideInLeft,
    animationDuration: "1.5s",
  },
  slideInUp: {
    animationName: slideInUp,
    animationDuration: "1.5s",
  },
});

export default function ContactUsSection({ IsDBGroupLogo }) {
  const [validEmail, setEmailValidation] = useState(0);
  const [emailValue, setEmailValue] = useState("");
  const [logoMainData, setLogoMainData] = useState(null);
  const [logoSubData, setLogoSubData] = useState(null);
  // console.log("logoMainData", logoMainData);
  const base_url = process.env.BASE_URL;

  useEffect(() => {
    // ==== Main Logo ====
    let filteredLogoMainData = IsDBGroupLogo?.data?.filter(
      (data) => data.attributes.LogoType.toLowerCase() === "main"
    );

    let sortedMainData = filteredLogoMainData?.sort(function (x, y) {
      return x.attributes.Priority - y.attributes.Priority;
    });

    setLogoMainData(sortedMainData);
    // ==== Sub Logo ====
    let filteredLogoSubData = IsDBGroupLogo?.data?.filter(
      (data) => data.attributes.LogoType.toLowerCase() === "sub"
    );
    let sortedSubData = filteredLogoSubData?.sort(function (x, y) {
      return x.attributes.Priority - y.attributes.Priority;
    });
    setLogoSubData(sortedSubData);
  }, [IsDBGroupLogo]);

  // const { observe, unobserve, inView, scrollDirection, entry } = useInView({
  //   threshold: 0.25, // Default is 0
  //   onChange: ({ inView, scrollDirection, entry, observe, unobserve }) => {
  //     // Triggered whenever the target meets a threshold, e.g. [0.25, 0.5, ...]

  //     unobserve(); // To stop observing the current target element
  //     observe(); // To re-start observing the current target element
  //   },
  //   onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
  //     // Triggered when the target enters the viewport
  //   },
  //   onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
  //     // Triggered when the target leaves the viewport
  //   },
  //   // More useful options...
  // });

  return (
    <div className={`${styles.contact_us_section}`}>
      <div className={`${styles.second_layer}`}>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div
              className={`${styles.contact_us_container} pt-5`}
              style={{
                backgroundImage: `url('/background/contactUs.svg')`,
              }}
            >
              <div className={`${styles.contact_us_subcontainer} pt-5`}>
                <h3 className={`${styles.contact_us_text} mb-4`}>Contact us</h3>
                <p className={`${styles.contact_us_para} mb-2`}>
                  We’d love to discuss how we can help your queries.
                </p>
                <p className={`${styles.contact_us_para}`}>
                  {"We’d love to discuss how we can help your queries."}
                </p>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={10} xl={10}>
                    <AppBtn
                      text={`Get in Touch`}
                      prefix={""}
                      suffix={""}
                      mode={"light"}
                      href={"/contact-us"}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={14} xl={14}>
                    <div
                      className={`d-flex justify-content-center flex-column h-100 pl-3`}
                    >
                      <p className={`m-0 ${styles.contact_us_subtext_title}`}>
                        SSC@isdb.org
                      </p>
                      <p className={`m-0 ${styles.contact_us_subtext_des}`}>
                        Monday - Friday, 9am
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col xs={0} sm={0} md={24} lg={24} xl={24}>
            <div
              className={`${styles.group_img_bg}`}
              style={{
                backgroundImage: `url('/background/contactImgSec.svg')`,
              }}
            >
              <h3 className={`${styles.group_img_title}`}>IsDB GROUP</h3>

              <div
                className={`${styles.group_img_container}`} /* ref={observe} */
              >
                {/* <div className={inView ? css(animationStyles.slideInLeft) : ""}> */}
                {
                  <div className={`d-flex justify-content-center`}>
                    {logoMainData &&
                      logoMainData.length > 0 &&
                      logoMainData.map((data, index) => (
                        <a
                          href={data.attributes.HyperLink}
                          style={{ cursor: "pointer" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${styles.logo_tiles} d-flex justify-content-center align-items-center overflow-hidden position-relative m-3 p-3 shadow`}
                          key={"contactUs" + index}
                        >
                          {data.attributes.Attachments.data && (
                            <Image
                              // src={base_url + data.Logo.url}
                              // src={
                              //   process.env.IMG_URL +
                              //   data.attributes.Attachments.data[0].attributes.url
                              // }
                              src={`${process.env.IMG_URL}${data.attributes.Attachments.data[0]?.attributes.url}`}
                              alt="groupLogo"
                              width={160}
                              height={100}
                              // layout={"responsive"}
                            />
                          )}
                        </a>
                      ))}
                  </div>
                }
                {/* </div> */}
                {/* <div className={inView ? css(animationStyles.slideInUp) : ""}> */}
                <div className={`d-flex justify-content-center`}>
                  {logoSubData &&
                    logoSubData.length > 0 &&
                    logoSubData.map((data, index) => (
                      <a
                        href={data.attributes.HyperLink}
                        style={{ cursor: "pointer" }}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.logo_tiles} d-flex justify-content-center align-items-center overflow-hidden position-relative m-3 p-3 shadow`}
                        key={"subData" + index}
                      >
                        {data.attributes.Attachments.data && (
                          <Image
                            // src={base_url + data.Logo.url}

                            src={`${process.env.IMG_URL}${data.attributes.Attachments.data[0].attributes.url}`}
                            alt="groupLogo"
                            width={160}
                            height={100}
                            // layout={"responsive"}
                          />
                        )}
                      </a>
                    ))}
                </div>
                {/* </div> */}
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className={`${styles.first_layer}`}>
        <div
          className={`${styles.newsletter_container}`}
          style={{
            backgroundImage: `url('/background/newsletter.svg')`,
          }}
        >
          <h2 className={`${styles.newsletter_title}`}>Our Newsletter</h2>
          <div className={`${styles.newsletter_input_container}`}>
            <input
              placeholder="Email Address"
              value={emailValue}
              className={`form-control ${
                validEmail === 0 ? "" : validEmail ? "is-valid" : "is-invalid"
              }`}
              onChange={(e) =>
                subscribeChangeHandler(e, setEmailValidation, setEmailValue)
              }
            />
            <button
              onClick={() =>
                onClickSubscribeHandler(
                  emailValue,
                  setEmailValue,
                  setEmailValidation,
                  openErrorNotification,
                  openSuccessNotification
                )
              }
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
