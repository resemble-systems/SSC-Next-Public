import { useRouter } from "next/router";
import { useState } from "react";
import moment from "moment";
//component
import AppRoundedBtn from "../../common_components/appRoundedBtn/AppRoundedBtn";
import EventRegistrationModal from "../appModal/eventRegistrationModal/EventRegistrationModal";

//css
import styles from "./events-card.module.sass";

export default function EventsCard({ data, bg, bgImage, boxShadow, btn }) {
  const router = useRouter();
  const [eventRegistrationModal, setEventRegistrationModal] = useState(false);
  const [eventId, setEventId] = useState("");
  // console.log("eventData-->", data);
  return (
    <>
      <div
        className={`${styles.event_card} p-4`}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundColor: bg,
          boxShadow: boxShadow,
        }}
        // onClick={(e) => {
        //   if (e.target.innerText !== "Register Now")
        //     router.push(`/events-activities/${data.id}`);
        // }}
      >
        <div
          className={`${styles.event_card_date} mb-5 py-1`}
          style={{ color: bg }}
        >
          <p className={`${styles.date} mt-2 mb-0`}>
            {moment(data.attributes.StartDate).format("D")}
          </p>

          <p className={`${styles.month} m-0`}>
            {moment(data.attributes.StartDate).format("MMMM")}
          </p>
        </div>
        <h3 className={`${styles.event_title} pr-4 mb-4`}>
          {data.attributes.Title}
        </h3>
        <p className={`${styles.event_time}`}>{`${moment(
          data.attributes.StartDate
        ).format("LT")} - ${moment(data.attributes.EndDate).format("LT")}`}</p>
        <div className={`d-flex justify-content-center`}>
          {btn && (
            <AppRoundedBtn
              text={"View More"}
              prefix={""}
              suffix={""}
              bg={"none"}
              outline={"lite"}
              long={false}
              href={"none"}
              btnStyle={{}}
              // onClickHandler={(e) => {
              //   setEventRegistrationModal(true);
              //   setEventId(data.id);
              // }}
              onClickHandler={(e) => {
                router.push(`/events/${data.id}`);
              }}
            />
          )}
        </div>
      </div>
      <EventRegistrationModal
        setVisiblety={setEventRegistrationModal}
        visible={eventRegistrationModal}
        eventId={eventId}
      />
    </>
  );
}
