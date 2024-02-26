import Image from "next/image";
import Link from "next/link";
import { Row, Col } from "antd";

// CSS
import styles from "./contact-details.module.sass";

export default function ContactDetails(
  {
    /* socialMediaIcon */
  }
) {
  // console.log("====================================");
  // console.log(socialMediaIcon);
  // console.log("====================================");
  // socialMediaIcon = socialMediaIcon.slice(0, 4);
  return (
    <>
      <div></div>
      <div className={`${styles.contact_details_container}`}>
        <Row className={`mt-5`}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Row className={`mb-5`}>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <div className={`${styles.contact_details_number}`}>
                  <h3 className={`${styles.contact_details_title_main}`}>
                    Call Us On +966 (12) 636 1264
                  </h3>
                  <h3 className={`${styles.contact_details_title_sub}`}>
                    Our office hours are Sunday – Thrusday, 9am-6pm
                  </h3>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <h3 className={`${styles.contact_details_title_main}`}>
                  Email Us Directly
                </h3>
                <div className={`mb-4`}>
                  <Col>
                    <h5 className={`${styles.contact_client_enquiry}`}>
                      Client Enquiries
                    </h5>
                  </Col>
                  <Col>
                    <h5>SSC@isdb.org</h5>
                  </Col>
                </div>
                <div className={`mb-4`}>
                  <Col>
                    <h5 className={`${styles.contact_client_enquiry}`}>
                      Vendor Enquiries
                    </h5>
                  </Col>
                  <Col>
                    <h5>SSC@isdb.org</h5>
                  </Col>
                </div>
                <div className={`mb-4`}>
                  <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={12}
                    xl={12}
                    className={`d-flex flex-column`}
                  >
                    <div
                      className={`mt-3 d-flex justify-content-start align-items-start`}
                    >
                      <Row className={`w-100`}>
                        <div className={`d-flex w-100`}>
                          {/* <h4 className={`mr-2 m-0 d-flex`}>Follow us on </h4> */}
                          {/* <div
                            className={`d-flex justify-content-center align-items-center`}
                          >
                            {socialMediaIcon &&
                              socialMediaIcon.map((icon) => (
                                <div
                                  className={`mx-2 d-flex justify-content-center align-items-center ${styles.socialmedia_icon}`}
                                  key={icon.id}
                                  onClick={() => {
                                    window.open(icon.Link);
                                  }}
                                >
                                  <Image
                                    src={
                                      process.env.BASE_URL + icon.Image[0].url
                                    }
                                    alt={`Social Media`}
                                    width="22"
                                    height="18"
                                  />
                                </div>
                              ))}
                          </div> */}
                        </div>
                        {/* <Col span={14}>
                          <div
                            className={`d-flex justify-content-center align-items-center`}
                          >
                            {socialMediaIcon &&
                              socialMediaIcon.map(icon => (
                                <div
                                  className={`mx-2 d-flex justify-content-center align-items-center ${styles.socialmedia_icon}`}
                                  key={icon.id}
                                  onClick={() => {
                                    window.open(icon.Link);
                                  }}
                                >
                                  <Image
                                    src={
                                      process.env.BASE_URL + icon.Image[0].url
                                    }
                                    alt={`Social Media`}
                                    width="22"
                                    height="18"
                                  />
                                </div>
                              ))}
                          </div>
                        </Col> */}
                      </Row>
                    </div>
                  </Col>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}
