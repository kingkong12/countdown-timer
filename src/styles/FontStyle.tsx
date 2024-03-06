import { HelmetProvider, Helmet } from "react-helmet-async";

function FontStyle() {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&family=Noto+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    </HelmetProvider>
  );
}

export default FontStyle;
