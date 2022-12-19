import "../styles/globals.css";
import { createClient, Provider } from "urql";
import Nav from "../components/Nav";
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
          </MainContainer>
        </Provider>
      </StateContext>
    </UserProvider>
  );
}

export default MyApp;

const MainContainer = styled.div`
  max-width: 1920px;
`