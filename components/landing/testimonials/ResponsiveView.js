import Image from "next/image";
import { Row, Col, Skeleton } from "antd";
// css
import styles from "./testimonials.module.sass";
import quoteRight from "../../../public/background/QuoteRight.svg";
import quoteLeft from "../../../public/background/QuoteLeft.svg";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ResponsiveView({ view, testimonialsData }) {
  const formattedText = testimonialsData?.TestimonialsDescription?.replace(
    /\n/g,
    "<br>"
  );

  return (
    <div
      className="w-100 container d-flex gap-5 align-items-center"
      style={{ height: "458px" }}
    >
      <div className="flex-fill">
        {/* <h3 className={`${styles.testimonials_title}`}>Testimonials</h3> */}
        <div className="d-flex gap-3">
          <div>
            <Image src={quoteLeft} width={"64px"} height={"64px"} />
          </div>
          <div className="w-100 flex-fill">
            <div className={`${styles.testimonials_des}`}>
              {testimonialsData && testimonialsData.TestimonialsDescription ? (
                <div className={`overflow-auto`} style={{ height: "170px" }}>
                  <p className={`${styles.event_details_des}`}>
                    {/* <Scrollbars style={{ height: "100%", width: "100%" }}> */}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: formattedText,
                      }}
                    />
                    {/* </Scrollbars> */}
                  </p>
                </div>
              ) : (
                <Skeleton style={{ width: 500 }} />
              )}
            </div>
          </div>
          <div className="d-flex align-items-end">
            <Image src={quoteRight} width={"64px"} height={"64px"} />
          </div>
        </div>
        <h5 className={`${styles.testimonials_author} pt-3`}>
          {testimonialsData && testimonialsData.TestimonialsAuthor ? (
            testimonialsData.TestimonialsAuthor
          ) : (
            <Skeleton.Input style={{ width: 500 }} />
          )}
        </h5>
      </div>
      <div className={`${styles.image_container}`}>
        <div className={`${styles.testimonials_image_box}`}>
          {testimonialsData &&
            testimonialsData.Attachments &&
            testimonialsData.Attachments.data.length > 0 && (
              <Image
                src={
                  process.env.IMG_URL +
                  testimonialsData.Attachments.data[0].attributes.url
                }
                alt="card-img"
                width={100}
                height={200}
                layout="responsive"
              />
            )}
        </div>
      </div>
    </div>
  );
}
