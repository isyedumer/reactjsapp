import React from "react";
import { Link } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { add } from '../extras/cart';
import { addToWishList } from "../extras/wishlist";

function Shop() {
    const [data, setData] = React.useState([]);
    const [allDataCheck, setallDataCheck] = React.useState(true);
    const [check1, setCheck1] = React.useState(false);
    const [check2, setCheck2] = React.useState(false);
    const [check3, setCheck3] = React.useState(false);
    const [check4, setCheck4] = React.useState(false);
    const [startRange,setStartRange] = React.useState(0);
    const [endRange,setEndRange] = React.useState(0);
    const [filteredArray, setFilteredArray] = React.useState([]);
    React.useEffect(() => {
        function getData() {
            var json = localStorage.getItem("data");
            var object = null;
            object = JSON.parse(json);
            setData(object);
            setFilteredArray(object);
            if(!check1 && !check2 && !check3 && !check4) {
                setallDataCheck(true);
            }
        }
        getData();
    }, [check1, check2, check3, check4, allDataCheck, startRange, endRange]);

    return (
        <>
            <Header data={data} />
            <section class="bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-4 mx-auto" id="product">
                            <br /><br />
                            <label>Filter by Product</label>
                            <select className="form-control" style={{ width: 300 }} onChange={(e) => {
                                if (e.target.value == "0") {
                                    setFilteredArray(data);
                                    return;
                                }
                                const filtered = data.filter((item) => item.id == e.target.value);
                                setFilteredArray(filtered);
                            }}>
                                <option value="0">Choose an option</option>
                                {data.map((item) => {
                                    return (<option value={item.id}>{item.proname}</option>)
                                })}
                            </select>
                        </div>
                        <div class="col-4 mx-auto" id="category">
                            <br /><br />
                            <label>Filter by Category</label>
                            <div class="form-group">
                                <input className="form-check-input" type="checkbox" checked={check1} onChange={(e) => {
                                    if(e.target.checked) {
                                        setCheck1(true);
                                        setallDataCheck(false);
                                    } else {
                                        setCheck1(false);
                                    }
                                }} /> Products
                            </div>
                            <div class="form-group">
                                <input className="form-check-input" type="checkbox" checked={check2} onChange={(e) => {
                                    if(e.target.checked) {
                                        setCheck2(true);
                                        setallDataCheck(false);
                                    } else {
                                        setCheck2(false);
                                    }
                                }}/> Men's T-Shirts
                            </div>
                            <div class="form-group">
                                <input className="form-check-input" type="checkbox" checked={check3} onChange={(e) => {
                                    if(e.target.checked) {
                                        setCheck3(true);
                                        setallDataCheck(false);
                                    } else {
                                        setCheck3(false);
                                    }
                                }} /> Watches
                            </div>
                            <div class="form-group">
                                <input className="form-check-input" type="checkbox" checked={check4} onChange={(e) => {
                                    if(e.target.checked) {
                                        setCheck4(true);
                                        setallDataCheck(false);
                                    } else {
                                        setCheck4(false);
                                    }
                                }} /> Others
                            </div>
                        </div>
                        <div class="col-4 mx-auto" id="price">
                            <br /><br />
                            <label>Filter by Price</label>
                            <input type="number" className="form-control" value={startRange} onChange={(e) => {
                                setStartRange(e.target.value);
                            }}/><br />
                            <input type="number" className="form-control" value={endRange} onChange={(e) => {
                                setEndRange(e.target.value);
                            }}/><br />
                            <button type="button" className="btn btn-primary" onClick={() => {
                                setFilteredArray(data.filter((item) => (item.price >= startRange && item.price <= endRange)))
                            }}>Filter</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-light">
                {check1 || allDataCheck ?
                    <div className="container py-5">
                        <div className="row text-center py-3">
                            <div className="col-lg-6 m-auto">
                                {filteredArray.length > 11 ? <h1 id="heading"><b>Products</b></h1> :
                                    <h1 id="heading"><b>Filtered Products</b></h1>
                                }
                            </div>
                        </div>
                        <div className="row" id="jean">
                            {
                                filteredArray.map((value, index) => {
                                    if (index >= 0 && index <= 2) {
                                        return (<div key={index} className="col-12 col-md-4 mb-4">
                                            <Link to={value.link}>
                                                <div className="card h-100">
                                                    <img src={`img/${value.image}`}
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
                    : ''
                }
                {check2 || allDataCheck ?
                    <div className="container py-5">
                        <div className="row text-center py-3">
                            <div className="col-lg-6 m-auto">
                                {filteredArray.length > 11 ? <h1 id="heading"><b>Men's T-Shirts</b></h1> : ''}
                            </div>
                        </div>
                        <div className="row" id="tshirts">
                            {
                                filteredArray.map((value, index) => {
                                    if (index >= 3 && index <= 5) {
                                        return (<div key={index} className="col-12 col-md-4 mb-4">
                                            <Link to={value.link}>
                                                <div className="card h-100">
                                                    <img src={`img/${value.image}`}
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
                    : ''}
                {check3 || allDataCheck ?
                    <div className="container py-5">
                        <div className="row text-center py-3">
                            <div className="col-lg-6 m-auto">
                                {filteredArray.length > 11 ? <h1 id="heading"><b>Watches</b></h1> : ''}
                            </div>
                        </div>
                        <div className="row" id="watch">
                            {
                                filteredArray.map((value, index) => {
                                    if (index >= 6 && index <= 8) {
                                        return (<div key={index} className="col-12 col-md-4 mb-4">
                                            <Link to={value.link}>
                                                <div className="card h-100">
                                                    <img src={`img/${value.image}`}
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
                    : ''}
                {check4 || allDataCheck ?
                    <div className="container py-5">
                        <div className="row text-center py-3">
                            <div className="col-lg-6 m-auto">
                                {filteredArray.length > 11 ? <h1 id="heading"><b>Other's</b></h1> : ''}
                            </div>
                        </div>
                        <div className="row" id="other">
                            {
                                filteredArray.map((value, index) => {
                                    if (index >= 9 && index <= 11) {
                                        return (<div key={index} className="col-12 col-md-4 mb-4">
                                            <Link to={value.link}>
                                                <div className="card h-100">
                                                    <img src={`img/${value.image}`}
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
                    : ''}
            </section>
            <Footer />
        </>
    );
}

export default Shop;