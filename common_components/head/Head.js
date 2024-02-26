import Head from "next/head";

export default function ComponentHead({ ogTitle,title}) {
  return (
    <Head>
      <title>{title}</title>
      <meta
          property="og:title"
          content={ogTitle}
        />
        <meta property="og:image" content={'/header/IsDB _ EN _ logo _ primary _ colour.png'} />
      <link rel="icon" href={'/favicon.ico'} />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;500;900&display=swap"
        rel="stylesheet"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
        rel="stylesheet"
      />
      <script
        type="text/javascript"
        src="https://www.gstatic.com/charts/loader.js"
      ></script>
    </Head>
  );
}
