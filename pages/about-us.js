//component
import AboutUs from "../container/aboutUs/AboutUs";
//service
import { fetchService } from "../services/fetchService";
//constant
import { CONST } from "../constant";

export default function AboutUsPage({
  sscMemberData,
  siteVideos,
  footer,
  socialMediaIcon,
  description,
  objectives,
  team,
}) {
  let social = [];
  let others = [];
  let quick = [];

  footer.data.map((data) => {
    if (data.FooterType === "SocialMedia") {
      social.push(data);
    } else if (data.FooterType === "QuickLinks") {
      quick.push(data);
    } else {
      others.push(data);
    }
  });

  return (
    <>
      <AboutUs
        socialMediaIcon={socialMediaIcon}
        sscMemberData={sscMemberData}
        siteVideos={siteVideos}
        footerLink={quick}
        otherResoruces={others}
        description={description.data}
        objectives={objectives.data}
        team={team.data}
      />
    </>
  );
}

export async function getServerSideProps() {
  let memberUrl = process.env.BASE_URL + process.env.PATH.MEMBERS;
  let siteVideosUrl = process.env.BASE_URL + process.env.PATH.SITEVIDEOS;
  let footerUrl = process.env.BASE_URL + process.env.PATH.FOOTER;
  let socialMediaIconUrl = process.env.BASE_URL + process.env.PATH.SOCIAL_MEDIA;
  let descriptionUrl = process.env.BASE_URL + process.env.PATH.DESCRIPTION;
  let objectivesIconUrl = process.env.BASE_URL + process.env.PATH.OBJECTIVES;
  let teamUrl = process.env.BASE_URL + process.env.PATH.TEAM;

  const [
    sscMemberData,
    siteVideos,
    footer,
    socialMediaIcon,
    description,
    objectives,
    team,
  ] = await Promise.all([
    await fetchService(memberUrl, CONST.API_METHOD.GET),
    await fetchService(siteVideosUrl, CONST.API_METHOD.GET),
    await fetchService(footerUrl, CONST.API_METHOD.GET),
    await fetchService(socialMediaIconUrl, CONST.API_METHOD.GET),
    await fetchService(descriptionUrl, CONST.API_METHOD.GET),
    await fetchService(objectivesIconUrl, CONST.API_METHOD.GET),
    await fetchService(teamUrl, CONST.API_METHOD.GET),
  ]);

  return {
    props: {
      sscMemberData,
      siteVideos,
      footer,
      socialMediaIcon,
      description,
      objectives,
      team,
    },
  };
}
