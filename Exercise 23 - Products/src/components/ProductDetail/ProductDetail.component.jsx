import store from "../../ store";
import { useHistory } from "react-router-dom";

export default function ProductDetail(props) {
  const id = +props.match.params.id;
  const product = store.find((item) => item.id === id);
  const history = useHistory();

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.imageUrl} alt={product.title} />
      <div>{product.price}$</div>
      <div>Size {product.size}</div>
      <button onClick={() => history.goBack()}>
        Back
        {/* <Link to={`/products`}>Back</Link> */}
      </button>
    </div>
  );
}
