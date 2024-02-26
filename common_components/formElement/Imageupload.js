import { useState } from "react";
import Image from "next/image";
import { Row, Col } from "antd";
import { v4 as uuidv4 } from "uuid";
import styles from "./form-element.module.sass";

function handleFileSelect(evt, id) {
  // Loop through the FileList and render image files as thumbnails.
  for (const file of evt.target.files) {
    // Render thumbnail.
    //const span = document.createElement('span')
    const src = URL.createObjectURL(file);

    document.getElementById(id).innerHTML = `<div><Image
            src="/update/trash.svg"
            alt="Img_Item"
            width=20
            height=20
            style=position:absolute top: 20px left:20px
        /><Image
            src=${src}
            alt="Img_Item"
            width=70
            height=70
        /></div>`;
    let temp = document.getElementById(id);

    temp.firstChild.addEventListener("click", function (event) {
      hideDiv(id);
    });
  }
}

function hideDiv(id) {
  //Function to hide the elements
  var myobj = document.getElementById(id);
  myobj.remove();
  //alert(id)
}

export default function testUpload() {
  const [count, setCount] = useState(0);

  var elements = [];
  for (var i = 0; i < count; i++) {
    let p = uuidv4();

    let colid = "H" + p;
    let fid = "files" + p;
    // push the component to elements!
    elements.push(
      <Col id={colid} className={`${styles.imageDiv}`}>
        <label htmlFor={fid} className={`${styles.labelStyle}`}>
          <Image
            src={"/update/camera.svg"}
            alt="Img_Item"
            width={20}
            height={20}
          />
          <input
            type="file"
            className={`${styles.fileStyle}`}
            accept="image/*"
            id={fid}
            multiple
            onChange={(e) => handleFileSelect(e, colid)}
          />
        </label>
      </Col>
    );
  }
  return (
    <>
      <Row id="mainBG">
        <Col span={24}>
          <label className={`${styles.label}`}>Upload Pictures</label>
        </Col>
        <Col p-3>
          <Row>
            <Col id="H1" className={`${styles.imageDiv}`}>
              <label for="files" className={`${styles.labelStyle}`}>
                <Image
                  src={"/update/camera.svg"}
                  alt="Img_Item"
                  width={20}
                  height={20}
                />
                <input
                  type="file"
                  className={`${styles.fileStyle}`}
                  accept="image/*"
                  id="files"
                  multiple
                  onChange={(e) => handleFileSelect(e, "H1")}
                />
              </label>
            </Col>
            <Col id="H2" className={`${styles.imageDiv}`}>
              <label for="files1" className={`${styles.labelStyle}`}>
                <Image
                  src={"/update/camera.svg"}
                  alt="Img_Item"
                  width={20}
                  height={20}
                />
                <input
                  type="file"
                  className={`${styles.fileStyle}`}
                  accept="image/*"
                  id="files1"
                  multiple
                  onChange={(e) => handleFileSelect(e, "H2")}
                />
              </label>
            </Col>

            <Col id="H3" className={`${styles.imageDiv}`}>
              <label for="files2" className={`${styles.labelStyle}`}>
                <Image
                  src={"/update/camera.svg"}
                  alt="Img_Item"
                  width={20}
                  height={20}
                />
                <input
                  type="file"
                  className={`${styles.fileStyle}`}
                  accept="image/*"
                  id="files2"
                  multiple
                  onChange={(e) => handleFileSelect(e, "H3")}
                />
              </label>
            </Col>
            {elements}
          </Row>
        </Col>
        <Col className={`${styles.sPadding}`}>
          <b onClick={() => setCount(count + 1)}>Add more</b>{" "}
        </Col>
      </Row>
    </>
  );
}
