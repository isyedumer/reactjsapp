import React from "react";
import { Link } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { add } from '../extras/cart';
import { addToWishList } from '../extras/wishlist';

function Home() {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        function getData() {
            var json = localStorage.getItem("data");
            var object = null;
            object = JSON.parse(json);
            setData(object);
        }
        getData();
    }, []);

    return (
        <>
            <Header data={data} />
            <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid" src="img/onlin.jpeg" alt="" style={{ width: 1000, height: 400 }} />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left align-self-center">
                                        <h1 className="h1 text-success"><b>E-shop</b> eCommerce</h1>
                                        <p>
                                            Here you buy all products in online E-shop.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid" src="img/levis.jpeg" alt="" style={{ width: 1000, height: 400 }} />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left">
                                        <h1 className="h1">Levis</h1>
                                        <p>
                                            Outfitters Is A Fashion Brand Created For The Spirited Youth Of Pakistan Who Enjoy
                                            Indulging In The Latest Lifestyle Trends; Be It Style, Music, Technology Or Social
                                            Networking, As A Means To Express Themselves.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid" src="img/break.jpeg" alt="" style={{ width: 1000, height: 400 }} />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left">
                                        <h1 className="h1">Out-fitter</h1>
                                        <p>
                                            Outfitters Is A Fashion Brand Created For The Spirited Youth Of Pakistan Who Enjoy
                                            Indulging In The Latest Lifestyle Trends; Be It Style, Music, Technology Or Social
                                            Networking, As A Means To Express Themselves
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-light">
                <div className="container py-5">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 id="heading"><b>Products</b></h1>
                        </div>
                    </div>
                    <div className="row" id="jean">
                        {
                            data.map((value, index) => {
                                if (index >= 0 && index <= 2) {
                                    return (<div key={index} className="col-12 col-md-4 mb-4">
                                        <Link to={value.link}>
                                            <div className="card h-100">
                                                <img src={`/img/${value.image}`}
                                                    className="card-img-top" alt="..." style={{ flexDirection: 'row', height: 250 }} />
                                                <div className="card-body text-center">
                                                    <ul className="list-unstyled d-flex justify-content-between">
                                                        <li><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-muted fa fa-star"></i><i className="text-muted fa fa-star"></i></li><li className="text-muted text-right"><b>PKR :</b>
                                                            {value.price}
                                                        </li>
                                                    </ul>
                                                    <Link to="#" className="h2 text-decoration-none text-dark text-center"><Link to={value.link} className="h2 text-decoration-none text-dark text-center">
                                                        {value.proname}
                                                    </Link>
                                                        <p className="card-text"><b>PKR :</b>
                                                            {value.price}
                                                        </p>
                                                        <Link to="#" className="btn btn-info text-white" onClick={() => {
                                                            const data = add(index, 1);
                                                            setData(data);
                                                        }}>Add to cart</Link>
                                                        &nbsp;
                                                        <Link to="#" className="btn btn-success text-white" onClick={() => {
                                                            const wishListData = addToWishList(index, 1);
                                                            setData(wishListData);
                                                        }}>Add to WishList</Link>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>)
                                }
                            })
                        }
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 id="heading"><b>Men's T-Shirts</b></h1>
                        </div>
                    </div>
                    <div className="row" id="tshirts">
                        {
                            data.map((value, index) => {
                                if (index >= 3 && index <= 5) {
                                    return (<div key={index} className="col-12 col-md-4 mb-4">
                                        <Link to={value.link}>
                                            <div className="card h-100">
                                                <img src={`/img/${value.image}`}
                                                    className="card-img-top" alt="..." style={{ flexDirection: 'row', height: 250 }} />
                                                <div className="card-body text-center">
                                                    <ul className="list-unstyled d-flex justify-content-between">
                                                        <li><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-muted fa fa-star"></i><i className="text-muted fa fa-star"></i></li><li className="text-muted text-right"><b>PKR :</b>
                                                            {value.price}
                                                        </li>
                                                    </ul>
                                                    <Link to="#" className="h2 text-decoration-none text-dark text-center"><Link to={value.link} className="h2 text-decoration-none text-dark text-center">
                                                        {value.proname}
                                                    </Link>
                                                        <p className="card-text"><b>PKR :</b>
                                                            {value.price}
                                                        </p>
                                                        <Link to="#" className="btn btn-info text-white" onClick={() => {
                                                            const data = add(index, 1);
                                                            setData(data);
                                                        }}>Add to cart</Link>
                                                        &nbsp;
                                                        <Link to="#" className="btn btn-success text-white" onClick={() => {
                                                            const wishListData = addToWishList(index, 1);
                                                            setData(wishListData);
                                                        }}>Add to WishList</Link>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>)
                                }
                            })
                        }
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 id="heading"><b>Watches</b></h1>
                        </div>
                    </div>
                    <div className="row" id="watch">
                        {
                            data.map((value, index) => {
                                if (index >= 6 && index <= 8) {
                                    return (<div key={index} className="col-12 col-md-4 mb-4">
                                        <Link to={value.link}>
                                            <div className="card h-100">
                                                <img src={`/img/${value.image}`}
                                                    className="card-img-top" alt="..." style={{ flexDirection: 'row', height: 250 }} />
                                                <div className="card-body text-center">
                                                    <ul className="list-unstyled d-flex justify-content-between">
                                                        <li><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-muted fa fa-star"></i><i className="text-muted fa fa-star"></i></li><li className="text-muted text-right"><b>PKR :</b>
                                                            {value.price}
                                                        </li>
                                                    </ul>
                                                    <Link to="#" className="h2 text-decoration-none text-dark text-center"><Link to={value.link} className="h2 text-decoration-none text-dark text-center">
                                                        {value.proname}
                                                    </Link>
                                                        <p className="card-text"><b>PKR :</b>
                                                            {value.price}
                                                        </p>
                                                        <Link to="#" className="btn btn-info text-white" onClick={() => {
                                                            const data = add(index, 1);
                                                            setData(data);
                                                        }}>Add to cart</Link>
                                                        &nbsp;
                                                        <Link to="#" className="btn btn-success text-white" onClick={() => {
                                                            const wishListData = addToWishList(index, 1);
                                                            setData(wishListData);
                                                        }}>Add to WishList</Link>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>)
                                }
                            })
                        }
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 id="heading"><b>Other's</b></h1>
                        </div>
                    </div>
                    <div className="row" id="other">
                        {
                            data.map((value, index) => {
                                if (index >= 9 && index <= 11) {
                                    return (<div key={index} className="col-12 col-md-4 mb-4">
                                        <Link to={value.link}>
                                            <div className="card h-100">
                                                <img src={`/img/${value.image}`}
                                                    className="card-img-top" alt="..." style={{ flexDirection: 'row', height: 250 }} />
                                                <div className="card-body text-center">
                                                    <ul className="list-unstyled d-flex justify-content-between">
                                                        <li><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-muted fa fa-star"></i><i className="text-muted fa fa-star"></i></li><li className="text-muted text-right"><b>PKR :</b>
                                                            {value.price}
                                                        </li>
                                                    </ul>
                                                    <Link to="#" className="h2 text-decoration-none text-dark text-center"><Link to={value.link} className="h2 text-decoration-none text-dark text-center">
                                                        {value.proname}
                                                    </Link>
                                                        <p className="card-text"><b>PKR :</b>
                                                            {value.price}
                                                        </p>
                                                        <Link to="#" className="btn btn-info text-white" onClick={() => {
                                                            const data = add(index, 1);
                                                            setData(data);
                                                        }}>Add to cart</Link>
                                                        &nbsp;
                                                        <Link to="#" className="btn btn-success text-white" onClick={() => {
                                                            const wishListData = addToWishList(index, 1);
                                                            setData(wishListData);
                                                        }}>Add to WishList</Link>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>)
                                }
                            })
                        }
                    </div>
                </div>
            </section>
            <section className="bg-light">
                <div className="container py-5">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 id="heading"><b>service's</b></h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <img src="img/ship.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-muted fa fa-star"></i>
                                            <i className="text-muted fa fa-star"></i>
                                        </li>
                                    </ul>
                                    <Link to="#" className=" h2 text-decoration-none text-dark text-center">Free Shipping</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <img src="img/onlin.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-muted fa fa-star"></i>
                                            <i className="text-muted fa fa-star"></i>
                                        </li>
                                    </ul>
                                    <Link to="#" className="h2 text-decoration-none text-dark text-center">Easy Payments</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <img src="img/replace.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-muted fa fa-star"></i>
                                            <i className="text-muted fa fa-star"></i>
                                        </li>

                                    </ul>
                                    <Link to="#" className="h2 text-decoration-none text-dark text-center">10 Days Replacements</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="container">
                    <center>
                        <div className="cta-banner">
                            <div className="cta-banner__content">
                                <h2>Mobile App!</h2>
                                <p>Upto 20% Off On First Online Shopping</p>
                                <p><b>PKR:</b>20,000/-</p>
                            </div>
                            <Link to="#" className="cta-banner__button">Add to cart</Link>
                        </div>
                    </center>
                </div>
                <br /><br />
            </section>
            <Footer />
        </>
    );
}

export default Home;