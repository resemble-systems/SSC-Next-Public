import { useRouter } from "next/router";
import { Button } from "antd";
//css
import styles from "./app-btn.module.sass";

export default function AppBtn({ text, prefix, suffix, mode, href, onClick }) {
  const router = useRouter();

  return (
    <Button
      className={`my-4 ${styles.app_btn} ${
        mode === "dark" ? styles.app_btn_dark : styles.app_btn_light
      }`}
      onClick={
        href && typeof href === "string" && href.length > 0
          ? () => router.push(href)
          : ()=>onClick()
      }
    >
      <span className={`d-flex justify-content-center`}>
        {prefix} {text} {suffix}
      </span>
    </Button>
  );
}
