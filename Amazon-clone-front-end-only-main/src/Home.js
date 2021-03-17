import React from "react";
import "./home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Michael Kors Emmy Saffiano Leather Medium Crossbody Bag"
            price={120.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Z3m7ChJIL._AC_SY400_.jpg"
          />
          <Product
            id="49538094"
            title="adidas Women's Superlite Super No Show Socks (6-pair)"
            price={19.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71i4ue2T6RL._AC_UX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Invicta Men's Aviator Stainless Steel Quartz Watch with Silicone Strap, Blue, Black 26 (Model: 22523, 22525)"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/91CyZis12VL._AC_UY741_.jpg"
          />
          <Product
            id="23445930"
            title="Seagate IronWolf 10TB NAS Internal Hard Drive HDD – CMR 3.5 Inch SATA 6Gb/s 7200 RPM 256MB Cache for RAID Network Attached Storage (ST10000VN0008) (ST10000VNZ008/N0008)"
            price={283.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81%2B054mzXML._AC_SX679_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung UN55RU7300FXZA Curved 55-Inch 4K UHD 7 Series Ultra HD Smart TV with HDR and Alexa Compatibility (2019 Model)"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91o08DsRplL._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
