import type { AppProps } from "next/app";
import "../styles/globals.css";
import Header from "../component/header";
import Footer from "../component/footer";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default App;

// App.getInitialProps = async (context) => {
//   const { ctx, Component } = context;
//   let pageProps = { props: "test" };

//   // return한 값은 해당 컴포넌트의 props로 들어가게 됩니다.
//   return { pageProps };
// };
