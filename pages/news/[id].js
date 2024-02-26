import { useEffect, useState } from "react";
//service
import { fetchService } from "../../services/fetchService";
//constant
import { CONST } from "../../constant";
//router
import { useRouter } from "next/router";
//Components
import NewsDetails from "../../container/newsPublications/NewsDetails";

export default function NewsTypes({ news, footer, socialMediaIcon }) {
  const router = useRouter();
  const [newsDetails, setNewsDetails] = useState([]);
  const [newsId, setNewsId] = useState([]);
  const [filterAllNews, setFilterAllNews] = useState([]);
  // const id =router.query.id

  //  const newsDetails = news.find(
  //       newsD => newsD.id.toString() === id.toString(),
  //     );

  let social = [];
  let others = [];
  let quick = [];

  useEffect(() => {
    const id = window.location.href.split("/").pop();
    setNewsId(id);
    setNewsDetails(news.data.find((newsD) => newsD.id.toString() === id));
  }, [router]);

  useEffect(() => {
    if (news && news?.data?.length > 0) {
      const filterLib = news?.data?.filter(
        (data) => data.id.toString() !== newsId
      );
      // if (seeAll) {
      //   setNewsData(filterLib);
      // } else {
      //   setNewsData(filterLib.slice(0, 3));
      // }
      setFilterAllNews(filterLib);
    }
  }, [news, newsId]);

  footer.data.map((data) => {
    if (data.attributes.FooterType === "SocialMedia") {
      social.push(data);
    } else if (data.attributes.FooterType === "QuickLinks") {
      quick.push(data);
    } else {
      others.push(data);
    }
  });

  return (
    <>
      <NewsDetails
        newsDetails={newsDetails}
        news={filterAllNews}
        socialMediaIcon={socialMediaIcon}
        footerLink={quick}
        otherResoruces={others}
        routePath={newsId}
      />
    </>
  );
}

//Static Path
// export async function getStaticPaths() {
//   let newsUrl = process.env.BASE_URL + process.env.PATH.NEWS;
//   const [news] = await Promise.all([
//     await fetchService(newsUrl, CONST.API_METHOD.GET),
//   ]);
//   const paths = news.data.map((newsData) => {
//     return {
//       params: {
//         id: newsData.id.toString(),
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// }

// Static Props
// export async function getStaticProps(context) {
//   let newsUrl = process.env.BASE_URL + process.env.PATH.NEWS;
//   let footerUrl = process.env.BASE_URL + process.env.PATH.FOOTER;

//   const [news, footer] = await Promise.all([
//     await fetchService(newsUrl, CONST.API_METHOD.GET),
//     await fetchService(footerUrl, CONST.API_METHOD.GET),
//   ]);
//   const id = context.params.id;
//   //Finding Ids
//   const newsDetails = news.data.find((newsD) => newsD.id.toString() === id);
//   if (!newsDetails) {
//     return {
//       redirect: {
//         destination: "/news",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       newsDetails,
//       news,
//       footer,
//     },
//   };
// }

export async function getServerSideProps() {
  let newsUrl = process.env.BASE_URL + process.env.PATH.NEWS;

  let footerUrl = process.env.BASE_URL + process.env.PATH.FOOTER;
  let socialMediaIconUrl = process.env.BASE_URL + process.env.PATH.SOCIAL_MEDIA;

  // try {
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
