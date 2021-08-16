import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";

function About() {
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
            <section class="bg-success py-5">
                <div class="container">
                    <div class="row align-items-center py-5">
                        <div class="col-md-8 text-white">
                            <h1>About Us</h1>
                            <p>
                                Some description about the Store
                            </p>
                        </div>
                        <div class="col-md-4">
                            <img src="img/onlin.jpeg" alt="About Hero" style={{ width: 450, }} />
                        </div>
                    </div>
                </div>
            </section>
            <section class="container py-5">
                <div class="row text-center pt-5 pb-3">
                    <div class="col-lg-6 m-auto">
                        <h1 class="h1">Our Services</h1>
                    </div>
                </div>
                <div class="row">

                    <div class="col-md-6 col-lg-3 pb-5">
                        <div class="h-100 py-5 services-icon-wap shadow">
                            <div class="h1 text-success text-center"><i class="fa fa-truck fa-lg"></i></div>
                            <h2 class="h5 mt-4 text-center">Delivery Services</h2>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 pb-5">
                        <div class="h-100 py-5 services-icon-wap shadow">
                            <div class="h1 text-success text-center"><i class="fas fa-exchange-alt"></i></div>
                            <h2 class="h5 mt-4 text-center">Shipping & Return</h2>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 pb-5">
                        <div class="h-100 py-5 services-icon-wap shadow">
                            <div class="h1 text-success text-center"><i class="fa fa-percent"></i></div>
                            <h2 class="h5 mt-4 text-center">Promotion</h2>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 pb-5">
                        <div class="h-100 py-5 services-icon-wap shadow">
                            <div class="h1 text-success text-center"><i class="fa fa-user"></i></div>
                            <h2 class="h5 mt-4 text-center">24 Hours Service</h2>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default About;