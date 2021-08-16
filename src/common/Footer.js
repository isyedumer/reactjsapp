import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-dark" id="tempaltemo_footer">
            <div className="container">
                <div className="row">

                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-success border-bottom pb-3 border-light logo">MO Online E-Shop</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li>
                                <i className="fas fa-map-marker-alt fa-fw"></i>
                                123 Consectetur at ligula 10660
                            </li>
                            <li>
                                <i className="fa fa-envelope fa-fw"></i>
                                <Link className="text-decoration-none" to="mailto:info@company.com">info@company.com</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light">Products</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li><a className="text-decoration-none" href="/product_detail/2">Levi's</a></li>
                            <li><a className="text-decoration-none" href="/product_detail/7">Rolex</a></li>
                            <li><a className="text-decoration-none" href="/product_detail/6">Half Sleeve</a></li>
                            <li><a className="text-decoration-none" href="/product_detail/11">Glasses</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li><Link className="text-decoration-none" to="/">Home</Link></li>
                            <li><Link className="text-decoration-none" to="/about">About Us</Link></li>
                            <li><Link className="text-decoration-none" to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="row text-light mb-4">
                    <div className="col-12 mb-3">
                        <div className="w-100 my-3 border-top border-light"></div>
                    </div>
                    <div className="col-auto me-auto">
                        <ul className="list-inline text-left footer-icons">
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a className="text-light text-decoration-none" target="_blank" href="https://facebook.com/"><i
                                    className="fab fa-facebook-f fa-lg fa-fw"></i></a>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a href="https://instagram.com" className="text-light text-decoration-none" target="_blank"><i className="fab fa-instagram fa-lg fa-fw"></i></a>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a className="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i
                                    className="fab fa-twitter fa-lg fa-fw"></i></a>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a className="text-light text-decoration-none" target="_blank"
                                    href="https://www.linkedin.com/"><i className="fab fa-linkedin fa-lg fa-fw"></i></a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>



        </footer>
    );
}

export default Footer;