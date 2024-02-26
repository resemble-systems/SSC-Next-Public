import { useRouter } from "next/router";
// import Image from "next/image";
import { Row, Col } from "antd";
import AppRoundedBtn from "../../common_components/appRoundedBtn/AppRoundedBtn";
//import { useState } from "react";
// import noimg from "../../public/gallery/banner.PNG";
//css
import styles from "./search.module.sass";

export default function SearchCard({ cardData }) {
  const router = useRouter();
  const type = router.query.type;
  //process.env.BASE_URL +
  //const [eventId, setEventId] = useState("");
  // console.log("cardData", cardData);
  return (
    <>
      <div className={`${styles.buysell_card} my-2`}>
        <div className={`${styles.buysell_mainImgConatiner}`}>
          <h6 className={`${styles.title_text} text-capitalize p-3`}>
            {cardData?.attributes?.Type?.split("-")?.join(" & ")}
          </h6>

          <h2 className={`${styles.title_text} px-4`}>
            {cardData.attributes?.Title}
          </h2>
        </div>
        <div className={"p-4"}>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className={`${styles.buysell_text}`}>
                {cardData.attributes?.Description}
              </div>
            </Col>
            <div
              className={`${styles.button} d-flex h-100 align-items-center w-100 justify-content-center mt-4`}
            >
              <AppRoundedBtn
                text={"View More"}
                suffix={""}
                bg={"blue"}
                outline={"dark"}
                long={false}
                href={"none"}
                onClickHandler={(e) => {
                  // router.push(
                  //   `${cardData.attributes?.type}/${cardData.attributes?.strapi_path}`
                  // );

                  router.push(
                    type === "events"
                      ? `/${type}/${cardData.id}`
                      : type === "news"
                      ? `/news/${cardData.id}`
                      : type === "activities"
                      ? `/activities/${cardData.attributes.Title.toLowerCase()
                          .split(" ")
                          .join("-")}`
                      : ""
                  );
                }}
              />
            </div>
          </Row>
        </div>
      </div>
    </>
  );
}
