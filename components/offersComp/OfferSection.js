import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Col, Row } from "antd";
//Styles
import styles from "./offercomp.module.sass";

export default function OfferSection({ offers }) {
  const [OffersData, setOffersData] = useState(null);
  const base_url = process.env.BASE_URL;

  useEffect(() => {
    let sortedOfferData = offers.data.sort(function (x, y) {
      console.log(
        "sortedOfferData-->",
        offers,
        x,
        parseInt(y.attributes.Priority)
      );
      return parseInt(x.attributes.Priority) - parseInt(y.attributes.Priority);
    });
    setOffersData(sortedOfferData);
  }, []);

  return (
    <>
      <Row className={`h-100`}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className={`${styles.offers_container}`}>
            <div
            // className={`d-flex justify-content-center align-items-center flex-column`}
            >
              {OffersData &&
                OffersData.length > 0 &&
                OffersData.map((data) => (
                  <>
                    <h3 className={`${styles.event_details_title} mb-2  `}>
                      {data?.attributes?.Title && data?.attributes?.Title}
                    </h3>
                    {data?.attributes?.Description && (
                      <p className={`${styles.event_details_des} pr-4`}>
                        {/* <Scrollbars style={{ height: "120px" }}> */}
                        <div
                          className={`${styles.event_details_des} pr-4 overflow-auto`}
                        >
                          <div
                            dangerouslySetInnerHTML={{
                              __html: data?.attributes?.Description?.replace(
                                /\n/g,
                                "<br>"
                              ),
                            }}
                          />
                          {/* </Scrollbars> */}
                        </div>
                      </p>
                    )}
                    <div
                      className={`mb-4 d-flex justify-content-center align-items-center`}
                    >
                      <Image
                        src={
                          process.env.IMG_URL +
                          data.attributes.Attachments.data[0].attributes.url
                        }
                        alt={"Reward Application Demo"}
                        width={650}
                        height={400}
                        className={`${styles.image}`}
                      />
                    </div>
                  </>
                ))}
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
