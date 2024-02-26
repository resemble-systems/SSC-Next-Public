// Components
import ContactUs from "../container/contactUs/ContactUs";
//service
import { fetchService } from "../services/fetchService";
//CONSTANT
import { CONST } from "../constant";

// export default function ContactUsDetails({ footer }) {
export default function ContactUsDetails({ footer }) {
  // let social = [];
  // let others = [];
  // let quick = [];

  // footer.map(data => {
  //   if (data.FooterType === "SocialMedia") {
  //     social.push(data);
  //   } else if (data.FooterType === "QuickLinks") {
  //     quick.push(data);
  //   } else {
  //     others.push(data);
  //   }
  // });
  return (
    <>
      <ContactUs
      // socialMediaIcon={social}
      // footerLink={quick}
      // otherResoruces={others}
      />
    </>
  );
}

// StaticProp
// export async function getStaticProps() {
//   let footerUrl = process.env.BASE_URL + process.env.PATH.FOOTER;

//   const [footer] = await Promise.all([
//     await fetchService(footerUrl, CONST.API_METHOD.GET),
//   ]);
//   return {
//     props: {
//       footer,
//     },
//   };
// }
