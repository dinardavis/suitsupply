import "../styles/globals.css";
import { createClient, Provider } from "urql";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { StateContext } from "../lib/context";
import { UserProvider } from "@auth0/nextjs-auth0";
import { Toaster } from "react-hot-toast";
import styled from "styled-components";



const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <StateContext>
        <Provider value={client}>
          <MainContainer>
            <Toaster />
            <Nav />
            <Component {...pageProps} /> 
            <Footer />
          </MainContainer>
        </Provider>
      </StateContext>
    </UserProvider>
  );
}

export default MyApp;

const MainContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  padding: 5rem 0;
  max-width: 1920px;
`