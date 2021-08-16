import './App.css';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Shop from './components/Shop';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Contact from './components/Contact';

function App() {

  React.useEffect(() => {
    function autoaccount() {
      var data = [
        {
          "id": 1,
          "proname": "Out-Fitter",
          "description": "Some Outfitter Description",
          "link": "product_detail/1",
          "price": 1000,
          "image": "jeans.jpeg",
          "qatuntiy": 0,
          "favourite": 0,

        },
        {
          "id": 2,
          "proname": "Levi's",
          "description": "Some Levi's Description",
          "link": "product_detail/2",
          "price": 1250,
          "image": "levis.jpeg",
          "qatuntiy": 0,
          "favourite": 0,
        },
        {
          "id": 3,
          "proname": "Break-Out",
          "description": "Some Break Out Description",
          "link": "product_detail/3",
          "price": 1400,
          "image": "break.jpeg",
          "qatuntiy": 0,
          "favourite": 0,
        },
        {
          "id": 4,
          "proname": "Polo",
          "description": "Some Polo Description",
          "link": "product_detail/4",
          "price": 850,
          "image": "polo.jpeg",
          "qatuntiy": 0,
          "favourite": 0,

        },
        {
          "id": 5,
          "proname": "Scoop",
          "description": "Some Scoop Description",
          "link": "product_detail/5",
          "price": 450,
          "image": "scoop.jpeg",
          "qatuntiy": 0,
          "favourite": 0,
        },
        {
          "id": 6,
          "proname": "Half Sleve",
          "description": "Some Half Sleeve Description",
          "link": "product_detail/6",
          "price": 750,
          "image": "sleve.jpeg",
          "qatuntiy": 0,
          "favourite": 0,
        },
        {
          "id": 7,
          "proname": "Rolex",
          "description": "Some Rolex Description",
          "link": "product_detail/7",
          "price": 4550,
          "image": "rulex.jpeg",
          "qatuntiy": 0,
          "favourite": 0,

        },
        {
          "id": 8,
          "proname": "Digital",
          "link": "product_detail/8",
          "description": "Some Digital Description",
          "price": 5000,
          "image": "feature_prod_02.jpg",
          "qatuntiy": 0,
          "favourite": 0,
        },
        {
          "id": 9,
          "proname": "Rado",
          "link": "product_detail/9",
          "description": "Some Rado Description",
          "price": 1800,
          "image": "rado.jpeg",
          "qatuntiy": 0,
          "favourite": 0,
        },
        {
          "id": 10,
          "proname": "Joger",
          "description": "Some Joger Description",
          "link": "product_detail/10",
          "price": 2500,
          "image": "banner_img_01.jpg",
          "qatuntiy": 0,
          "favourite": 0,

        },
        {
          "id": 11,
          "proname": "Glasses",
          "description": "Some Glasses Description",
          "link": "product_detail/11",
          "price": 500,
          "image": "category_img_03.jpg",
          "qatuntiy": 0,
          "favourite": 0,
        },
        {
          "id": 12,
          "proname": "Light",
          "description": "Some Light Description",
          "link": "product_detail/12",
          "price": 300,
          "image": "feature_prod_01.jpg",
          "qatuntiy": 0,
          "favourite": 0,
        }];
      localStorage.setItem("data", JSON.stringify(data));
    }
    autoaccount();
  })
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} />
        <Route path="/product_detail/:id" component={ProductDetail} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </main>
  );
}

export default App;
