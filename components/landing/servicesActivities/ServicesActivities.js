// component
import CommonSectionHeader from "../commonSectionHeader/CommonSectionHeader";
import ServicesActivitiesCardSection from "../../../common_components/servicesActivitiesCardSection/ServicesActivitiesCardSection";
//css
import styles from "./services-activities.module.sass";

export default function ServicesActivities({ servicesActivities }) {
  return (
    <div
      style={{ backgroundImage: `url('/background/ServicesActivities.svg')` }}
      className={`${styles.service_bg}`}
    >
      <div className={`${styles.service_container} py-5`}>
        <CommonSectionHeader
          title={"Services & Activities"}
          sliderSection={false}
        />
        <ServicesActivitiesCardSection cardsData={servicesActivities} />
      </div>
    </div>
  );
}
