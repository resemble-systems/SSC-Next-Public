//component
import NewsPublications from "../../container/newsPublications/NewsPublications";
//service
import { fetchService } from "../../services/fetchService";
//constant
import { CONST } from "../../constant";
import { useEffect } from "react";

export default function NewsPublicationsPage({
  news,
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
      others.push(data);
    }
  });
  const descNEws = news.data.sort((a, b) => b.id - a.id);
  return (
    <>
      <NewsPublications
        news={descNEws}
        socialMediaIcon={socialMediaIcon}
        footerLink={quick}
        otherResoruces={others}
      />
    </>
  );
}

export async function getServerSideProps() {
  let newsUrl = process.env.BASE_URL + process.env.PATH.NEWS;
  let footerUrl = process.env.BASE_URL + process.env.PATH.FOOTER;
  let socialMediaIconUrl = process.env.BASE_URL + process.env.PATH.SOCIAL_MEDIA;

  const [news, footer, socialMediaIcon] = await Promise.all([
    await fetchService(newsUrl, CONST.API_METHOD.GET),
    await fetchService(footerUrl, CONST.API_METHOD.GET),
    await fetchService(socialMediaIconUrl, CONST.API_METHOD.GET),
  ]);

  return {
    props: {
      news,
      footer,
      socialMediaIcon,
    },
  };
}
