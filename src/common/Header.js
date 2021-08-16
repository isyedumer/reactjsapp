import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {
    const [cartCount, setCartCount] = React.useState(0);
    const [wishlistCount, setWishlistCount] = React.useState(0);
    const [cartData, setCartData] = React.useState([]);
    const [showCart, setShowCart] = React.useState('none');
    const [showWishlist, setShowWishlist] = React.useState('none');
    const node = React.useRef();
    const node2 = React.useRef();

    React.useEffect(() => {

        setCartData(data);

        const filterCartData = data.filter((item) => item.qatuntiy > 0);
        const filterWishlistData = data.filter((item) => item.favourite == 1);

        setCartCount(filterCartData.length);
        setWishlistCount(filterWishlistData.length);


        // add when mounted
        document.addEventListener("mousedown", handleClick);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [data,cartData]);

    const handleClick = e => {
        if (node.current.contains(e.target)) {
            // inside click
            return;
        } else {
            setShowCart('none');
        }
        if (node2.current.contains(e.target)) {
            // inside click
            return;
        } else {
            setShowWishlist('none');
        }
    };

    const removeProductHandler = (value) => {
        const filteredData = cartData.map((item) => {
            if (item.id == value.id) {
                item.qatuntiy = 0;
                return item;
            }
            else return item;
        });
        setCartData(filteredData);
        localStorage.setItem("data", JSON.stringify(filteredData));
    }
    const removeWishlistItemHandler = (value) => {
        const filteredData = cartData.map((item) => {
            if (item.id == value.id) {
                item.favourite = 0;
                return item;
            }
            else return item;
        });
        setCartData(filteredData);
        localStorage.setItem("data", JSON.stringify(filteredData));
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container d-flex justify-content-between align-items-center">

                    <Link className="navbar-brand text-success logo h1 align-self-center" to="/">
                        MO Online E-Shop
                    </Link>

                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                        data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
                        id="templatemo_main_nav">
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/shop">Shop</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" id="cart" className="nav-link" onClick={() => {
                                        setShowCart('block');
                                    }}><i
                                        className="fa fa-shopping-cart"></i>Cart ( {cartCount} )</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" id="wishlist" className="nav-link" onClick={() => {
                                        setShowWishlist('block');
                                    }}><i
                                        className="fa fa-heart"></i>Wishlist ( {wishlistCount} )</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>

            <div className="shopping-cart" style={{ display: showCart }} ref={node}>


                <ul className="shopping-cart-items" id="showcart">
                    {cartData.map((value, index) => {
                        if (value.qatuntiy > 0) {
                            return (<li key={index} className="clearfix">
                                <img src={`/img/${value.image}`} alt="item1" style={{ width: 50, height: 60 }} /><span className="item-name">
                                    {value.proname}
                                </span>
                                <span className="item-price" style={{ fontSize: 14 }}>
                                    {value.price}
                                </span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="#" onClick={() => removeProductHandler(value)}><i className="fa fa-window-close"></i></Link><br /><span className="item-quantity" style={{ fontSize: 12 }}>Quantity :
                                    {value.qatuntiy}
                                </span>
                            </li>)
                        }
                    })}
                </ul>
            </div>

            <div className="shopping-cart" style={{ display: showWishlist }} ref={node2}>


                <ul className="shopping-cart-items" id="showwishlist">
                    {cartData.map((value, index) => {
                        if (value.favourite == 1) {
                            return (<li key={index} className="clearfix">
                                <img src={`/img/${value.image}`} alt="item1" style={{ width: 50, height: 60 }} /><span className="item-name">
                                    {value.proname}
                                </span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="#" onClick={() => removeWishlistItemHandler(value)}><i className="fa fa-window-close"></i></Link>
                            </li>)
                        }
                    })}
                </ul>
            </div>


            <div className="modal fade bg-white" id="templatemo_search" tabIndex="-1" role="dialog"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="w-100 pt-1 mb-5 text-right">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form action="" method="get" className="modal-content modal-body border-0 p-0">
                        <div className="input-group mb-2">
                            <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
                            <button type="submit" className="input-group-text bg-success text-light">
                                <i className="fa fa-fw fa-search text-white"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}

export default Header;