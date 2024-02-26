import { useEffect, useState } from "react";
//component
import Layout from "../../container/layout/Layout";
import Banner from "../../components/landing/banner/Banner";
import ServicesActivities from "../../components/landing/servicesActivities/ServicesActivities";
import NewsPublications from "../../components/landing/newsPublications/NewsPublications";
import UpcomingEvents from "../../components/landing/upcomingEvents/UpcomingEvents";
import Testimonials from "../../components/landing/testimonials/Testimonials";
import ContactUsSection from "../../components/landing/contactUsSection/ContactUsSection";
import Gallery from "../../components/landing/gallery/Gallery";
import VideoSection from "../../common_components/videoSection/VideoSection";
import Calendar from "../../common_components/calendar/Calendar";
const moment = require("moment");

//css
import styles from "./landing.module.sass";
import dynamic from "next/dynamic";
// const NewsPublications = dynamic(
//   () => import("../../components/landing/newsPublications/NewsPublications"),
//   {
//     ssr: false,
//   }
// );

export default function Landing({
  news,
  bannerData,
  eventsData,
  servicesActivities,
  socialMediaIcon,
  testimonialsData,
  // siteVideos,
  footerLink,
  otherResoruces,
  IsDBGroupLogo,
  // gallery,
  // galleryDetails,
}) {
  // let videoArray = siteVideos.sort(
  //   (a, b) =>
  //     new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  // );
  // console.log('videoArray',videoArray);
  // const [galleryContent, setGallerycontent] = useState([])

  // useEffect(() => {

  //   let galleryArray = []
  //   galleryArray = gallery.sort(
  //     (a, b) =>
  //       new Date(b.EventOccurDate).getTime() - new Date(a.EventOccurDate).getTime()
  //   );
  //   if (galleryArray && galleryArray.length > 0) {
  //     galleryArray = galleryArray.slice(0, 3)
  //   }

  //   let temp = galleryDetails.filter(data =>
  //     galleryArray.find(event => event.id.toString() === data.EventId)
  //   )
  //   let temp2 = temp.filter(data =>
  //     data.ContentType !== "Document"
  //   )
  //   setGallerycontent(temp2)

  // }, [gallery])

  return (
    <>
      <Layout
        socialMediaIcon={socialMediaIcon}
        footerLink={footerLink}
        otherResoruces={otherResoruces}
        ogTitle={`IsDB - The Islamic Development Bank`}
        title={`ISDB`}
      >
        {bannerData && bannerData?.data && bannerData?.data?.length > 0 && (
          <Banner bannerData={bannerData} />
        )}
        {/* {servicesActivities && servicesActivities.length > 0 && (
          <ServicesActivities servicesActivities={servicesActivities} />
        )} */}
        {/* {videoArray && videoArray[0] && <VideoSection video={videoArray[0]} />} */}
        <div
          className={`${styles.new_testimonial_bg}`}
          style={{
            backgroundImage: `url(/background/newsTestimoni.svg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPositionY: "-250px",
          }}
        >
          {news && news?.length > 0 && <NewsPublications newsData={news} />}
          {testimonialsData &&
            testimonialsData?.data &&
            testimonialsData?.data?.length > 0 && (
              <Testimonials testimonialsData={testimonialsData} />
            )}
        </div>
        <Calendar
          eventsData={eventsData}
          servicesActivities={servicesActivities}
        />
        {eventsData &&
          eventsData?.data?.length > 0 &&
          servicesActivities &&
          servicesActivities?.data?.length > 0 && (
            <UpcomingEvents
              eventsData={eventsData.data.sort((a, b) =>
                moment(a.attributes.StartDate).diff(
                  moment(b.attributes.StartDate)
                )
              )}
              servicesActivities={servicesActivities}
            />
          )}

        {/* {galleryContent && galleryContent.length > 0 && (
          <Gallery galleryContent={galleryContent} />
        )} */}
        <ContactUsSection IsDBGroupLogo={IsDBGroupLogo} />
      </Layout>
    </>
  );
}
