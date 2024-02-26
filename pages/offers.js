//service
import { fetchService } from "../services/fetchService";
//CONSTANT
import { CONST } from "../constant";
//Container
import OffersContainer from "../container/offers/offersContainer";

export default function Reward({ offersData, socialMediaIcon }) {
  return (
    <>
      <OffersContainer offers={offersData} socialMediaIcon={socialMediaIcon} />
    </>
  );
}

// StaticProp
export async function getServerSideProps() {
  let offerUrl = process.env.BASE_URL + process.env.PATH.OFFERS;
  let socialMediaIconUrl = process.env.BASE_URL + process.env.PATH.SOCIAL_MEDIA;

  const [offersData, socialMediaIcon] = await Promise.all([
    await fetchService(offerUrl, CONST.API_METHOD.GET),
    await fetchService(socialMediaIconUrl, CONST.API_METHOD.GET),
  ]);
  return {
    props: {
      offersData,
      socialMediaIcon,
    },
  };
}
