import Image from "next/image";
import { useRouter } from "next/router";
import { Row, Col, Button } from "antd";
//service
import {
  mapTypeToRoutePath,
  cardIcon,
} from "../../services/serviceActivitieService";
//css
import styles from "./services-activities-card.module.sass";

export default function ServicesActivitiesCard({ data }) {
  const router = useRouter();
  return (
    <div className={`${styles.services_card}`}>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className={`${styles.card_text_container} pl-2`}>
            <div>
              <h4 className={`${styles.services_card_text} mb-5`}>
                {data.Title}
              </h4>
              <Button
                className={`${styles.services_know_more_btn}`}
                onClick={() =>
                  router.push(
                    `/services-activities/${mapTypeToRoutePath(data.Type)}`
                  )
                }
              >
                <h6 className={`${styles.services_know_more} m-0`}>
                  Know More
                </h6>
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className={`${styles.card_avatar_container} pr-2`}>
            {data && data.Type && (
              <Image
                src={cardIcon(data.Type)}
                alt="card-img"
                width="140"
                height="140"
              />
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}
