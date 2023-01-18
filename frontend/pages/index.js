import Head from "next/head";
import { PRODUCT_QUERY } from "../lib/query";
import { useQuery } from "urql";
import Product from "../components/Product";
import { Gallery } from "../styles/Gallery";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
import tools from "../public/tools.avif";
import styled from "styled-components";

export default function Home() {
  //Fetch products from strapi
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  //Checks for the data coming in
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  const products = data.products.data;
  
  return (
    <div>
      <Head>
        <title>SUITSUPPLY | Modern. Classic.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainImage>
        <Image src={tools}></Image>
        <h1>A Cut Above</h1>
      </MainImage>

      <GalleryContainer>
        <h1>Featured Collection</h1>
        <Gallery>
          {fetching && <Skeleton />}
          {products
            .filter(product => product.attributes.category == "/")
            .map((product) => (
            <Product key={product.attributes.slug} product={product} />
          ))}
        </Gallery>
      </GalleryContainer>
    </div>
  );
}

const MainImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;

  h1 {
    position: absolute;
    width: 100%;
    font-size: 9rem;
    color: #efefef;
    text-shadow: rgba(0,0,0, 0.9) 2px 2px 4px;
  }
  @media screen and (max-width: 700px) {
    h1 {
      font-size: 5rem;
    }
  }
`

const GalleryContainer = styled.div`
  margin-top: 2rem;

  h1 {
    position: relative;
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
  }
`