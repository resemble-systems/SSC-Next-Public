const path = require("path");

module.exports = {
  env: {
    // BASE_URL: "https://sscstrapi-uat.isdb.org",
    // BASE_URL: "http://localhost:1337/api",

    /* Resemble VM */
    // BASE_URL: "http://20.74.161.164:1337/api",
    // IMG_URL: "http://20.74.161.164:1337",

    /* SSC ENV  */
    BASE_URL: "https://ssc-api.isdb.org/api",
    IMG_URL: "https://ssc-api.isdb.org",

    FLOW_URL: {
      CONTACT:
        // "https://prod-27.westeurope.logic.azure.com:443/workflows/1a67532d6ed240078bde1d0f328907b3/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=-Sg4B7j32LvULMukqu6kNTG6bHBvD_WEUUi865sq5xQ",
        "https://prod-62.westeurope.logic.azure.com:443/workflows/faa6b50e0a584fb99a9aaf16779ea3dc/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=dMwUeUL8Vs7XnXFkV0ZMjw4siWfRk626NNZ0WHq1Erw",
      REGISTER:
        // "https://prod-78.westeurope.logic.azure.com:443/workflows/3a1e0eff6448414295acb62f6f17008f/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9hl2PW-g-b_8X3L_aC8h6EfsYqxzj2t0EYY6ggOitYg",
        "https://prod-160.westeurope.logic.azure.com:443/workflows/61691f7722044085b3691bad6d744fed/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=M_I-AxyZsZmzv_FQKWFvJa4XldhIvRU2jL6SPnWvpo4",
      NEWSLETTER:
        "https://prod-17.westeurope.logic.azure.com:443/workflows/84960c1d06f04a0aaee8670bb4d9aae6/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9P3DPZn_UDdrnUezsnvutJ5R9wjNpLT_iEMW7Rmq47A",
    },

    // PATH: {
    //   NEWS: "/news?populate=*",
    //   BANNER: "/banners?populate=*",
    //   EVENTS: "/events?populate=*",
    //   SOCIAL_MEDIA: "/social-medias?populate=*",
    //   CONTACT_US: "/contacts?populate=*",
    //   NEWSLETTER: "/newsletters?populate=*",
    //   SERVICES_ACTIVITIES: "/services?populate=*",
    //   TESTIMONIS: "/testimonials?populate=*",
    //   MEMBERS: "/members?populate=*",
    //   SITEVIDEOS: "/site-videos?populate=*",
    //   GALLERY_EVENTS: "/galleries?populate=*",
    //   GALLERY_DETAILS: "/gallery-contents?populate=*",
    //   GAMES: "/entertainments?populate=*",
    //   FOOTER_LINK: "/footer-links?populate=*",
    //   OTHER_RESOURCES: "/other-resources?populate=*",
    //   FOOTER: "/footers?populate=*",
    //   ISDBGROUPLOGO: "/isdb-group-logos?populate=*",
    //   OFFERS: "/offers?populate=*",
    // },
    PATH: {
      NEWS: "/news?populate=*",
      BANNER: "/banners?populate=*",
      EVENTS: "/events?populate=*",
      SOCIAL_MEDIA: "/social-medias?populate=*",
      CONTACT_US: "/contacts?populate=*",
      // NEWSLETTER: "/newsletters?populate=*",
      SERVICES_ACTIVITIES: "/services?populate=*",
      TESTIMONIS: "/testimonials?populate=*",
      MEMBERS: "/members?populate=*",
      SITEVIDEOS: "/site-videos?populate=*",
      GALLERY_EVENTS: "/galleries?populate=*",
      GALLERY_DETAILS: "/gallery-contents?populate=*",
      GAMES: "/entertainments?populate=*",
      FOOTER_LINK: "/footer-links?populate=*",
      OTHER_RESOURCES: "/other-resources?populate=*",
      FOOTER: "/footers?populate=*",
      ISDBGROUPLOGO: "/isdb-group-logos?populate=*",
      OFFERS: "/offers?populate=*",
      DESCRIPTION: "/about-us-descriptions",
      OBJECTIVES: "/about-us-objectives",
      TEAM: "/about-us-team-structures",
    },
  },
  images: {
    domains: [
      "sscstrapi-uat.isdb.org",
      "localhost",
      "20.74.161.164",

      "ssc-api.isdb.org",
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
