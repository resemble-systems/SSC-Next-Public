//component
import EventsActivities from "../../container/eventsActivities/EventsActivities";
//service
import { fetchService } from "../../services/fetchService";
//constant
import { CONST } from "../../constant";

export default function EventsActivitiesPage({
  eventsData,
  servicesActivities,
  footer,
  socialMediaIcon,
}) {
  let social = [];
  let others = [];
  let quick = [];

  footer.data.map((data) => {
    if (data.attributes.FooterType === "SocialMedia") {
      social.push(data);
    } else if (data.attributes.FooterType === "QuickLinks") {
      quick.push(data);
    } else {
      others.push(data.attributes);
    }
  });
  // console.log("test-->", eventsData);
  return (
    <>
      <EventsActivities
        eventsData={eventsData}
        servicesActivities={servicesActivities}
        socialMediaIcon={socialMediaIcon}
        footerLink={quick}
        otherResoruces={others}
      />
    </>
  );
}

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
