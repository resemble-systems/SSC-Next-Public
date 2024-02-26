//component

import Head from "../common_components/head/Head";
//service
import { fetchService } from "../services/fetchService";
//constant
import { CONST } from "../constant";
import SearchComponent from "../components/search/SearchComponent";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import { useRouter } from "next/router";

export default function SearchPage({
  eventsData,
  servicesActivities,
  news,
  footer,
}) {
  const router = useRouter();
  const [searchVal, setSearchVal] = useState(null);
  const [type, setType] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState(null);

  let social = [];
  let others = [];
  let quick = [];
  // console.log(
  //   "search-->",
  //   router.query,
  //   eventsData.data,
  //   servicesActivities.data,
  //   news.data,
  //   footer
  // );

  useEffect(() => {
    let searchValue = router.query.value;
    setSearchVal(decodeURIComponent(searchValue));
    setType(router.query.type);
  }, [router.query.type, router.query.value]);
  // console.log("testURL-->", searchVal, type);

  useEffect(() => {
    let filterSearch;
    if (type === "events") {
      filterSearch = eventsData.data?.filter(
        (data, index) =>
          data.attributes?.Author?.toLowerCase()?.includes(
            searchVal?.toLowerCase()
          ) ||
          data.attributes?.Description?.toLowerCase()?.includes(
            searchVal?.toLowerCase()
          ) ||
          //   data.Speaker.toLowerCase().includes(searchVal.toLowerCase()) ||
          data.attributes.Title?.toLowerCase()?.includes(
            searchVal?.toLowerCase()
          )
      );
      // console.log("eventsData-->", eventsData.data, searchVal, filterSearch);
      setFilteredEvents(filterSearch);
    }
    if (searchVal && type === "news" && news.data?.length > 0) {
      filterSearch = news.data?.filter(
        (data, index) =>
          data.attributes?.Description?.toLowerCase().includes(
            searchVal?.toLowerCase()
          ) ||
          data.attributes?.Title?.toLowerCase().includes(
            searchVal?.toLowerCase()
          )
      );
      setFilteredEvents(filterSearch);
    }
    if (
      searchVal &&
      type === "activities" &&
      servicesActivities.data?.length > 0
    ) {
      filterSearch = servicesActivities.data?.filter(
        (data, index) =>
          data.attributes?.Description?.toLowerCase().includes(
            searchVal.toLowerCase()
          ) ||
          data.attributes?.Title?.toLowerCase().includes(
            searchVal?.toLowerCase()
          )
      );
      setFilteredEvents(filterSearch);
    }
  }, [searchVal, type]);

  footer.data.map((data) => {
    if (data.attributes.FooterType === "SocialMedia") {
      social.push(data);
    } else if (data.attributes.FooterType === "QuickLinks") {
      quick.push(data);
    } else {
      others.push(data);
    }
  });
  // console.log("dataSet-->", filteredEvents);
  return (
    <>
      <Head logo={"/favicon.ico"} />
      {/* <RegistrationContainer /> */}
      {/* <span onClick={() => router.back()}>Click here to go back</span> */}

      <SearchComponent
        socialMediaIcon={social}
        otherResoruces={others}
        footerLink={footer}
        searchData={filteredEvents}
        searchValue={searchVal}
      />
    </>
  );
}

export async function getStaticProps() {
  let eventsUrl = process.env.BASE_URL + process.env.PATH.EVENTS;
  let servicesActivitiesUrl =
    process.env.BASE_URL + process.env.PATH.SERVICES_ACTIVITIES;
  let newsUrl = process.env.BASE_URL + process.env.PATH.NEWS;
  let footerUrl = process.env.BASE_URL + process.env.PATH.FOOTER;

  const [eventsData, servicesActivities, news, footer] = await Promise.all([
    await fetchService(eventsUrl, CONST.API_METHOD.GET),
    await fetchService(servicesActivitiesUrl, CONST.API_METHOD.GET),
    await fetchService(newsUrl, CONST.API_METHOD.GET),
    await fetchService(footerUrl, CONST.API_METHOD.GET),
  ]);

  return {
    props: {
      eventsData,
      servicesActivities,
      news,
      footer,
    },
  };
}
