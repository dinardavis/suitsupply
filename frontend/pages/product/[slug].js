import {
  DetailsStyle,
  ProductInfo,
  Quantity,
  AddToCart,
  BackBtn,
} from "../../styles/ProductDetails";
import Link from "next/link";
import { AiFillPlusCircle, AiFillMinusCircle, AiOutlineArrowLeft } from "react-icons/ai";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useQuery } from "urql";
import { useRouter } from "next/router";
import { useStateContext } from "../../lib/context";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default function ProductDetails() {
  //Use state
  const { increaseQty, decreaseQty, qty, onAdd, setQty } = useStateContext();

  const resetQuantity = () => {
    setQty(1);
  };
  useEffect(() => {
    resetQuantity();
  }, []);

  //Fetch slug
  const { query } = useRouter();
  //Fetch Graphql data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });
  const { data, fetching, error } = results;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  //Extract Data
  const { title, description, image, price, category } = data.products.data[0].attributes;

  //Create Toast
  const notify = () => {
    toast.success(`${title} added to cart`, {
      position: 'center',
      style: {
        border: '1px solid #424242',
        padding: '5px',
        fontSize: '0.8rem',
        color: '#424242',
      },
      iconTheme: {
        primary: '#6c8ead',
        secondary: '#fff',
      },
    });
  }

  return (
    <DetailsStyle>
      <Link href={`/${category}`}><BackBtn><AiOutlineArrowLeft />Back</BackBtn></Link>
      <img src={image.data.attributes.formats.large.url} alt={title} />
      <ProductInfo>
        <h2>{title}</h2>
        <p>{description}</p>
        <h4>${price}</h4>
        <Quantity>
          <span>Qty:</span>
          <button onClick={decreaseQty}>
            <AiFillMinusCircle />
          </button>
          <p>{qty}</p>
          <button>
            <AiFillPlusCircle onClick={increaseQty} />
          </button>
       
        </Quantity>
        <AddToCart
          onClick={() => {
            onAdd(data.products.data[0].attributes, qty);
            notify();
          }}
        >
          Add To Cart
        </AddToCart>
      </ProductInfo>
    </DetailsStyle>
  );
}
