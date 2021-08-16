import React from "react";
import { Link, matchPath } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { add } from '../extras/cart';
import { addToWishList } from "../extras/wishlist";

function ProductDetail({ match }) {
    const [data, setData] = React.useState([]);
    const [quantity, setQuantity] = React.useState(1);
    const [productData, setProductData] = React.useState({});
    React.useEffect(() => {

        function getData() {
            var json = localStorage.getItem("data");
            var object = null;
            object = JSON.parse(json);
            setData(object);
            const getProductData = object.filter((value) => value.id == match.params.id);
            setProductData(getProductData[0]);

        }
        getData();
    }, []);

    return (
        <>
            <Header data={data} />
            <section class="bg-light">
                <div class="container pb-5">
                    <div class="row">
                        <div class="col-lg-5 mt-5">
                            <div class="card mb-3">
                                <img class="card-img img-fluid" src={`/img/${productData.image}`} id="product-detail" />
                            </div>
                        </div>
                        <div class="col-lg-7 mt-5">
                            <div class="card">
                                <div class="card-body">
                                    <h1 class="h2">{productData.proname}</h1>
                                    <p class="h3 py-2"><b>PKR : </b>{productData.price}</p>
                                    <p class="py-2">
                                        <i class="fa fa-star text-warning"></i>
                                        <i class="fa fa-star text-warning"></i>
                                        <i class="fa fa-star text-warning"></i>
                                        <i class="fa fa-star text-warning"></i>
                                        <i class="fa fa-star text-secondary"></i>
                                        <span class="list-inline-item text-dark">Rating 3.8</span>
                                    </p>
                                    <h6>Description:</h6>
                                    <p>{productData.description}</p>
                                    <form action="" method="POST">
                                        <input type="hidden" name="product-title" value="Activewear" />
                                        <div class="row">
                                            <div class="col-auto">
                                                <ul class="list-inline pb-3">
                                                    <li class="list-inline-item">Size :
                                                        <input type="hidden" name="product-size" id="product-size" value="S" />
                                                    </li>
                                                    <li class="list-inline-item"><span class="btn btn-success btn-size">S</span>
                                                    </li>
                                                    <li class="list-inline-item"><span class="btn btn-success btn-size">M</span>
                                                    </li>
                                                    <li class="list-inline-item"><span class="btn btn-success btn-size">L</span>
                                                    </li>
                                                    <li class="list-inline-item"><span
                                                        class="btn btn-success btn-size">XL</span></li>
                                                </ul>
                                            </div>
                                            <div class="col-auto">
                                                <ul class="list-inline pb-3">
                                                    <li class="list-inline-item text-right">
                                                        Quantity
                                                        <input type="hidden" name="product-quanity" id="product-quanity"
                                                            value="1" />
                                                    </li>
                                                    <li class="list-inline-item" onClick={() => {
                                                        if (quantity > 1) {
                                                            setQuantity(quantity - 1);
                                                        }
                                                    }}><span class="btn btn-success"
                                                        id="btn-minus">-</span></li>
                                                    <li class="list-inline-item"><span class="badge bg-secondary"
                                                        id="var-value">{quantity}</span></li>
                                                    <li class="list-inline-item" onClick={() => {
                                                        if (quantity > 0) {
                                                            setQuantity(quantity + 1);
                                                        }
                                                    }}><span class="btn btn-success"
                                                        id="btn-plus">+</span></li>
                                                    <Link to="#" className="btn btn-danger" onClick={() => {
                                                        const wishListData = addToWishList((match.params.id - 1), 1);
                                                        setData(wishListData);
                                                    }}><i className="fa fa-heart"></i></Link>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="row pb-3">
                                            <div class="col d-grid">
                                                <button type="submit" class="btn btn-success btn-lg" name="submit"
                                                    value="buy">Buy</button>
                                            </div>
                                            <div class="col d-grid">
                                                <Link onClick={() => {
                                                    const data = add((match.params.id - 1), quantity);
                                                    setData(data);

                                                }} className="btn btn-success btn-lg"
                                                    value="addtocard">Add To Cart</Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default ProductDetail;