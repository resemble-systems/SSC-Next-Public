//component
import EventsDetails from "../../container/eventsActivities/EventsDetails";
//service
import { fetchService } from "../../services/fetchService";
//constant
import { CONST } from "../../constant";
import { useEffect, useState } from "react";
//router
import { useRouter } from "next/router";

export default function ServiceTypes({
  // eventData,
  eventsData,
  servicesActivities,
  footer,
  socialMediaIcon,
}) {
  const router = useRouter();
  const [eventData, setEventData] = useState([]);
  let social = [];
  let others = [];
  let quick = [];

  useEffect(() => {
    const id = window.location.href.split("/").pop();
    // setNewsDetails(news.data.find((newsD) => newsD.id.toString() === id));
    setEventData(
      eventsData?.data?.find((eventData) => eventData.id.toString() === id)
    );
  }, [router]);

  footer?.data?.map((data) => {
    if (data.FooterType === "SocialMedia") {
      social.push(data);
    } else if (data.FooterType === "QuickLinks") {
      quick.push(data);
    } else {
      others.push(data);
    }
  });

  return (
    <EventsDetails
      eventData={eventData}
      eventsData={eventsData?.data}
      servicesActivities={servicesActivities}
      socialMediaIcon={socialMediaIcon}
      footerLinkUrl={quick}
      otherResoruces={others}
    />
  );
}

// // StaticPaths
// export async function getStaticPaths() {
//   let eventsUrl = process.env.BASE_URL + process.env.PATH.EVENTS;
//   const [eventsData] = await Promise.all([
//     await fetchService(eventsUrl, CONST.API_METHOD.GET),
//   ]);

//   const paths = eventsData?.data?.map((eventData) => {
//     return {
//       params: {
//         id: eventData?.id?.toString(),
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: true,
//   };
// }

// // StaticProp
// export async function getStaticProps(context) {
//   let eventsUrl = process.env.BASE_URL + process.env.PATH.EVENTS;
//   let servicesActivitiesUrl =
//     process.env.BASE_URL + process.env.PATH.SERVICES_ACTIVITIES;
//   let footerUrl = process.env.BASE_URL + process.env.PATH.FOOTER;

//   const [eventsData, servicesActivities, footer] = await Promise.all([
//     await fetchService(eventsUrl, CONST.API_METHOD.GET),
//     await fetchService(servicesActivitiesUrl, CONST.API_METHOD.GET),
//     await fetchService(footerUrl, CONST.API_METHOD.GET),
//   ]);

//   const id = context.params.id;
//   //Finding Ids
//   const eventData = eventsData?.data?.find(
//     (eventData) => eventData.id.toString() === id
//   );
//   // Id Not Found
//   if (!eventData) {
//     return {
//       redirect: {
//         destination: "/events",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       eventData,
//       eventsData,
//       servicesActivities,
//       footer,
//     },
//     revalidate: 1,
//   };
// }

export async function getServerSideProps() {
  let eventsUrl = process.env.BASE_URL + process.env.PATH.EVENTS;
  let servicesActivitiesUrl =
    process.env.BASE_URL + process.env.PATH.SERVICES_ACTIVITIES;
  let footerUrl = process.env.BASE_URL + process.env.PATH.FOOTER;
  let socialMediaIconUrl = process.env.BASE_URL + process.env.PATH.SOCIAL_MEDIA;

  const [eventsData, servicesActivities, footer, socialMediaIcon] =
    await Promise.all([
      await fetchService(eventsUrl, CONST.API_METHOD.GET),
      await fetchService(servicesActivitiesUrl, CONST.API_METHOD.GET),
      await fetchService(footerUrl, CONST.API_METHOD.GET),
      await fetchService(socialMediaIconUrl, CONST.API_METHOD.GET),
    ]);

  return {
    props: {
      eventsData,
      servicesActivities,
      footer,
      socialMediaIcon,
    },
  };
}
