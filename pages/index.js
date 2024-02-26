//component
import Landing from "../container/landing/Landing";
//service
import { fetchService } from "../services/fetchService";
//constant
import { CONST } from "../constant";

// import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";
// import { useEffect, useState } from "react";

export default function Home({
  news,
  bannerData,
  eventsData,
  servicesActivities,
  testimonialsData,
  footer,
  IsDBGroupLogo,
  socialMediaIcon,
}) {
  let social = [];
  let others = [];
  let quick = [];

  footer?.data?.map((data) => {
    if (data.attributes.FooterType === "SocialMedia") {
      social.push(data);
    } else if (data.attributes.FooterType === "QuickLinks") {
      quick.push(data);
    } else {
      others.push(data.attributes);
    }
  });
  const descNEws = news.data.sort((a, b) => b.id - a.id);

  // console.log("test", eventsData, testimonialsData, footer, IsDBGroupLogo);
  return (
    <>
      {/* <ErrorBoundary> */}

      <Landing
        news={descNEws}
        bannerData={bannerData}
        eventsData={eventsData}
        servicesActivities={servicesActivities}
        socialMediaIcon={socialMediaIcon}
        testimonialsData={testimonialsData}
        // siteVideos={siteVideos}
        footerLink={quick}
        otherResoruces={others}
        IsDBGroupLogo={IsDBGroupLogo}
      />

      {/* </ErrorBoundary> */}
    </>
  );
}

export async function getServerSideProps() {
  let newsUrl = process.env.BASE_URL + process.env.PATH.NEWS;
  let bannerUrl = process.env.BASE_URL + process.env.PATH.BANNER;
  let eventsUrl = process.env.BASE_URL + process.env.PATH.EVENTS;
  let servicesActivitiesUrl =
    process.env.BASE_URL + process.env.PATH.SERVICES_ACTIVITIES;
  let testimonialsUrl = process.env.BASE_URL + process.env.PATH.TESTIMONIS;
  let socialMediaIconUrl = process.env.BASE_URL + process.env.PATH.SOCIAL_MEDIA;
  let footerUrl = process.env.BASE_URL + process.env.PATH.FOOTER;
  let groupLogoUrl = process.env.BASE_URL + process.env.PATH.ISDBGROUPLOGO;

  // try {
  const [
    news,
    bannerData,
    eventsData,
    servicesActivities,
    testimonialsData,
    footer,
    IsDBGroupLogo,
    socialMediaIcon,
  ] = await Promise.all([
    await fetchService(newsUrl, CONST.API_METHOD.GET),
    await fetchService(bannerUrl, CONST.API_METHOD.GET),
    await fetchService(eventsUrl, CONST.API_METHOD.GET),
    await fetchService(servicesActivitiesUrl, CONST.API_METHOD.GET),
    await fetchService(testimonialsUrl, CONST.API_METHOD.GET),
    // await fetchService(siteVideosUrl, CONST.API_METHOD.GET),
    await fetchService(footerUrl, CONST.API_METHOD.GET),
    await fetchService(groupLogoUrl, CONST.API_METHOD.GET),
    await fetchService(socialMediaIconUrl, CONST.API_METHOD.GET),
  ]);

  return {
    props: {
      news,
      bannerData,
      eventsData,
      servicesActivities,
      testimonialsData,
      footer,
      IsDBGroupLogo,
      socialMediaIcon,
    },
  };
  /*  } catch (error) {
    console.error("Error in data fetching:", error);
    return {
      props: {
        news: [],
        bannerData: {},
        eventsData: {},
        servicesActivities: {},
        testimonialsData: [],
        siteVideos: {},
        footer: {},
        IsDBGroupLogo: {},
      },
    };
  } */
}
