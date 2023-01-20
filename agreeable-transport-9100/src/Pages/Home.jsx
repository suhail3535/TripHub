import React from "react";
import mystyle from "./mystyle.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Slider from "../Component/Slider";
import data from "../data.json";
import SmallBottom from "./Top";
import { Button } from "@chakra-ui/react";

import { Image, Heading, Text, Container } from "@chakra-ui/react";
import { MultipleSlidesExample, BigSlidesExample } from "./Slidebar";
import { Bigslide, TripMoney } from "./Slidecss";

const Home = () => {
  return (
    <>
      {/* TOPSECTION */}
      {/* searchbar */}

      <div className={mystyle.srch}>
        <form className={mystyle.frm}>
          <div className={mystyle.rad}>
            {" "}
            <input
              style={{ margin: "20px 20px 20px 20px" }}
              type="radio"
              id="oneway"
            ></input>
            <label for="oneway">ONEWAY</label>
            <input
              style={{ margin: "20px 20px 20px 20px" }}
              type="radio"
              id="oneway"
            ></input>
            <label for="roundtrip">ROUND TRIP</label>
            <input
              style={{ margin: "20px 20px 20px 20px" }}
              type="radio"
              id="multi city"
            ></input>
            <label for="multi city">MULTI CITY</label>{" "}
          </div>

          <div className={mystyle.dep}>
            <select
              style={{ margin: "10px 20px ", fontWeight: "bold" }}
              id="from_dept"
            >
              <option value="from">
                <b> FROM </b>
              </option>
              <option value="delhi">DELHI</option>
              <option value="mumbai">MUMBAI</option>
              <option value="lucknow">LUCKNOW</option>
              <option value="srinagar">SRINAGAR</option>
              <option value="jaipur">JAIPUR</option>
            </select>
            <select
              style={{ margin: "10px 20px ", fontWeight: "bold" }}
              id="form_arr"
            >
              <option value="to">TO</option>
              <option value="delhi">DELHI</option>
              <option value="mumbai">MUMBAI</option>
              <option value="lucknow">LUCKNOW</option>
              <option value="srinagar">SRINAGAR</option>
              <option value="jaipur">JAIPUR</option>
            </select>
            <label
              style={{ padding: "10px", fontWeight: "bold" }}
              for="from_time"
            >
              DEPARTURE
            </label>

            <input
              style={{ padding: "10px  20px" }}
              type="date"
              id="from_time"
            />

            <label
              style={{ padding: "10px", fontWeight: "bold" }}
              for="to_time"
            >
              RETURN
            </label>

            <input style={{ padding: "10px  20px" }} type="date" id="to_time" />
            <label
              style={{ padding: "10px", fontWeight: "bold" }}
              for="travellers & class"
            >
              {" "}
              TRAVELLERS & CLASS
            </label>
            <select style={{ padding: "10px", fontWeight: "bold" }} id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </div>
          <div></div>
        </form>
      </div>
      <div className={mystyle.bar}>
        <input
          className={mystyle.srh}
          type="search"
          placeholder="Search"
        ></input>
        <Button
          style={{
            border: "1px solid white",
            height: "48px",
            width: "200px",
            marginLeft: "45px",
            marginBottom: "5px",
          }}
          colorScheme="twitter"
        >
          {" "}
          Search{" "}
        </Button>
      </div>
      <SmallBottom />
      <div className={mystyle.myslider}>
   
        <Slider start={data.banner.start} />
      </div>

      <div
        style={{
          background: "#ebe7e7",
          paddingTop: "10px",
          border: "0px solid blue",
          width: "90%",
          margin: "auto",
        }}
      >
        <div style={{ width: "90%", margin: "auto" }}>
          <MultipleSlidesExample />
        </div>

        <Bigslide>
          <div className="supreoffers">
            <h1>Super Offers</h1>
            <div>
              <h3>ALL OFFERS</h3>
              <h3>BANK OFFERS</h3>
              <h3>DOMESTIC FLIGHTS</h3>
              <h3>MORE</h3>
            </div>
          </div>

          <BigSlidesExample className="bigslideex"></BigSlidesExample>
        </Bigslide>

        <TripMoney>
          <div className="maindiv">
            <div id="div2" style={{ borderColor: "#e47dad" }}>
              <img
                src="https://www.tripmoney.com/ext/static/TravelLoan/travelLoan.png"
                alt=""
              />
              <div>
                <div className="spa1n"></div>
                <h3>Personal loan</h3>
                <p>Get upto ₹1 lakh for booking flights, hotels & more.</p>
              </div>
              <div className="span2"></div>
            </div>
            <div id="div2" style={{ borderColor: "#dde47d" }}>
              <img
                src="https://www.tripmoney.com/ext/static/credit-card/cc@3x.png"
                alt=""
              />
              <div>
                <div className="spa1n"></div>
                <h3>Credit cards</h3>
                <p>Get instant approval & unmatched privileges.</p>
              </div>
              <div className="span2"></div>
            </div>
            <div id="div2" style={{ borderColor: "#7dbee4" }}>
              <img
                src="https://www.tripmoney.com/ext/static/PL/pl.png"
                alt=""
              />
              <div>
                <div className="spa1n"></div>
                <h3>Travel loan</h3>
                <p>Get approval for ₹30,00,000 at low interest rates.</p>
              </div>
              <div className="span2"></div>
            </div>
          </div>
        </TripMoney>
      </div>

      {/* Sliderpart */}

      <div className={mystyle.maindiv}></div>

      {/* ///mid section/// */}
      <div className={mystyle.bottom}>
        {/* small card  1*/}

        <div className={mystyle.card}>
          <div className={mystyle.img}>
            <Image
              style={{
                border: "0px solid red",
                borderRadius: "10PX",
                width: "100%",
              }}
              src="https://promos.makemytrip.com/notification/xhdpi//Launch_new_dt.jpg"
              alt="Dan Abramov"
            />
          </div>

          <div>
            <Heading color="gray" as="h6" size="xs" marginBottom={2}>
              GENERAL
            </Heading>

            <Heading as="h3" size="sm">
              PRESENTING: Republic of Travel Deals!
            </Heading>

            <Text fontSize="17px" color="gray" marginTop={2}>
              Grab up to 35% OFF* on flights, stays, holidays, cabs, buses &
              trains for your unforgettable trips.
            </Text>

            <button className={mystyle.btn}>BOOK NOW</button>
          </div>
        </div>

        {/* small card  2*/}

        <div className={mystyle.card}>
          <div className={mystyle.img}>
            <Image
              style={{
                border: "0px solid red",
                borderRadius: "10PX",
                width: "100%",
              }}
              src="https://promos.makemytrip.com/notification/xhdpi//Desktop_HoneymoonPackage_23Aug@2x.jpg"
              alt="Dan Abramov"
            />
          </div>

          <div>
            <Heading color="gray" as="h6" size="xs" marginBottom={2}>
              HOLIDAYS
            </Heading>

            <Heading as="h3" size="sm">
              For Matches Made in Heaven
            </Heading>

            <Text fontSize="17px" color="gray" marginTop={2}>
              PERSONALISED HONEYMOON PACKAGES, incl. special experiences,
              starting @ JUST Rs.29000
            </Text>

            <button className={mystyle.btn}>BOOK NOW</button>
          </div>
        </div>

        {/* small card  3*/}

        <div className={mystyle.card}>
          <div className={mystyle.img}>
            <Image
              style={{
                border: "0px solid red",
                borderRadius: "10PX",
                width: "100%",
              }}
              src="https://promos.makemytrip.com/notification/xhdpi//desktop-Tripmoney-13122021.jpg"
              alt="Dan Abramov"
            />
          </div>

          <div>
            <Heading color="gray" as="h6" size="xs" marginBottom={2}>
              GENERAL
            </Heading>

            <Heading as="h3" size="sm">
              NEW: Easy Forex Solutions for Your Spends Abroad!
            </Heading>

            <Text fontSize="17px" color="gray" marginTop={2}>
              between Goa's new Mopa Airport & Mumbai/Hyderabad/Bengaluru! Enjoy
              Your Journey With Family
            </Text>

            <button className={mystyle.btn}>CLAM NOW</button>
          </div>
        </div>

        {/* small card  4*/}

        <div className={mystyle.card}>
          <div className={mystyle.img}>
            <Image
              style={{
                border: "0px solid red",
                borderRadius: "10PX",
                width: "100%",
              }}
              src="https://promos.makemytrip.com/notification/xhdpi//116X116-df-16012023.jpg"
              alt="Dan Abramov"
            />
          </div>

          <div>
            <Heading color="gray" as="h6" size="xs" marginBottom={2}>
              DOM FLIGHTS
            </Heading>

            <Heading as="h3" size="sm">
              Grab Up to 25% OFF* on Domestic Flights
            </Heading>

            <Text fontSize="17px" color="gray" marginTop={2}>
              between Goa's new Mopa Airport & Mumbai/Hyderabad/Bengaluru! Enjoy
              Your Journey With Family
            </Text>

            <button className={mystyle.btn}>BOOK NOW</button>
          </div>
        </div>
      </div>

      <div className={mystyle.foot1}>
        <Text className={mystyle.head}>PRODUCT OFFERING</Text>

        <Text className={mystyle.txt}>
          {" "}
          Flights, International Flights, Charter Flights, Hotels, International
          Hotels, Homestays and Villas, Activities, Holidays In India,
          International Holidays, Book Hotels From UAE, myBiz for Corporate
          Travel, Book Online Cabs, Book Bus Tickets, Book Train Tickets, Cheap
          Tickets to India, Book Flights From US, Book Flights From UAE, Trip
          Planner, Gift Cards, Trip Money, Trip Ideas, Travel Blog, PNR Status,
          MakeMyTrip Advertising Solutions, eee
        </Text>
        <Text className={mystyle.head}>MAKEMYTRIP </Text>
        <Text className={mystyle.txt}>
          {" "}
          About Us, Investor Relations, Careers, MMT Foundation, CSR Policy,
          myPartner - Travel Agent Portal, Foreign Exchange, List your hotel,
          Partners- Redbus, Partners- Goibibo, Advertise with Us{" "}
        </Text>
        <Text className={mystyle.head}> ABOUT THE SITE </Text>
        <Text className={mystyle.txt}>
          {" "}
          Customer Support, Payment Security, Privacy Policy, User Agreement,
          Terms of Service, More Offices, Make A Payment, Work From Home
        </Text>
        <Text className={mystyle.head}>TOP HOTELS IN INDIA </Text>
        <Text className={mystyle.txt}>
          {" "}
          Fairmont Jaipur, St Regis Goa, Six Senses Fort Barwara, W Goa, Grand
          Hyatt Goa, Shangri-La Bangalore, The St Regis Mumbai, Taj Rishikesh,
          Grand Hyatt Mumbai, Le Meridien Delhi, Rambagh Palace Jaipur, Leela
          Palace Chennai, The Leela Palace Udaipur, Taj Lake Palace Udaipur, Jw
          Marriott Chandigarh, Alila Diwa Goa, Le Meridien Goa, Taj Lands End
          Mumbai, Itc Grand Chola Chennai, Itc Maratha Mumbai, Oberoi Udaivilas,
          Jai Mahal Palace Jaipur, Taj Mahal Tower Mumbai, Marriott Suites Pune,
          Park Hyatt Chennai, The Leela Palace Jaipur, Jw Marriott Mumbai Sahar,
          Jw Marriott Mumbai Juhu, The Ritz Carlton Bengaluru, The Oberoi New
          Delhi, Taj Resort & Convention Centre Goa, Taj Bengal Kolkata, Taj
          Coromandel Chennai, The Oberoi Gurgaon, The Westin Goa, Jw Marriott
          Hotel Pune, The Leela Palace New Delhi, Taj West End Bengaluru, The
          Taj Mahal Palace Mumbai
        </Text>
        <Text className={mystyle.head}> TOP INTERNATIONAL HOTELS</Text>
        <Text className={mystyle.txt}>
          {" "}
          Adaaran Club Rannalhi, Marina Bay Sands Singapore, Coco Bodu Hithi,
          Taj Dubai, Atlantis Hotel Dubai, Amari Phuket, Jw Marriott Dubai,
          Armani Hotel Dubai, Grand Hyatt Dubai, Sali Lagoon Maldives, Gevora
          Hotel Dubai, Hyatt Regency Dubai, Pan Pacific Singapore, The Palm
          Dubai, Caesars Palace, Baiyoke Sky Hotel, Centara Pattaya Hotel,
          Embudu Village, Orchard Hotel Singapore, Reethi Beach Resort,
          Ambassador Hotel Bangkok, Dusit Thani Pattaya, Shangri La Singapore,
          Sunbeam Hotel Pattaya, Taj Samudra Colombo, Bangkok Palace Hotel,
          Hilton Pattaya, Novotel Phuket Resort, Taj Exotica Resort Maldives,
          Village Hotel Bugis, Avani Atrium Bangkok, The Plaza New York, Village
          Hotel Albert Court, Amari Pattaya{" "}
        </Text>
        <Text className={mystyle.head}>QUICK LINKS </Text>
        <Text className={mystyle.txt}>
          Dethi Chennai Flights, Delhi Mumbai Flights, Delhi Goa Flights,
          Chennai Mumbai flights, Mumbai Hyderabad flights, Kolkata to Rupsi
          Flights, Rupsi to Guwahati Flights, Pasighat to Guwahati Flights,
          Delhi to Khajuraho Flights, Cochin to Agatti Island Flights, Hotels in
          Delhi, Hotels in Mumbai, Hotels In Goa, Hotels In Jaipur, Hotels In
          Ooty, Hotels In Udaipur, Hotels in Puri, Hotels In North Goa, Hotels
          In Rishikesh, Honeymoon Packages, Kerala Packages, Kashmir Packages,
          Ladakh Packages, Goa Packages, Thailand Packages, Sri Lanka Visa,
          Thailand Visa, Explore Goa, Explore Manali, Explore Shimla, Explore
          Jaipur, Explore Srinagar
        </Text>
        <Text className={mystyle.head}> IMPORTANT LINKS</Text>
        <Text className={mystyle.txt}>
          {" "}
          Cheap Flights, Flight Status, Kumbh Mela, Domestic Airlines,
          International Airlines, Indigo, Spicejet, GoAir, Air Asia, Air India,
          Indian Railways, Trip Ideas, Beaches, Honeymoon Destinations, Romantic
          Destinations, Popular Destinations, Resorts In Udaipur, Resorts In
          Munnar, Villas In Lonavala, Hotels in Thailand, Villas In Goa,
          Domestic Flight Offers, International Flight Offers, UAE Flight
          Offers, USA, UAE, Saudi Arabia, UK, Oman.
        </Text>
        <Text className={mystyle.head}>CORPORATE TRAVEL </Text>
        <Text className={mystyle.txt}>
          Corporate Travel, Corporate Hotel Booking, Corporate Flight Booking,
          Business Travel for SME, GST Invoice for International flights,
          Business Travel Solutions, GST Invoice for Bus, Corporate Bus booking,
          myBiz- Best Business Travel Platform, GST Invoice for Flights, GST
          Invoice for Corporate Travel, GST Invoice for Hotels, myBiz for Small
          Business, Free cancellation on International Flights
        </Text>
      </div>

      {/* footer part */}

      <div className={mystyle.lastpart}>
        <Container>
          <Heading as="h6" size="sm" marginTop={5} marginBottom={5}>
            Why MakeMyTrip?
          </Heading>
          <Text className={mystyle.txt}>
            {" "}
            Established in 2000, MakeMyTrip has since positioned itself as one
            of the leading companies, providing great offers, competitive
            airfares, exclusive discounts, and a seamless online booking
            experience to many of its customers. The experience of booking your
            flight tickets, hotel stay, and holiday package through our desktop
            site or mobile app can be done with complete ease and no hassles at
            all. We also deliver amazing offers, such as Instant Discounts, Fare
            Calendar, MyRewardsProgram, MyWallet, and many more while updating
            them from time to time to better suit our customers’ evolving needs
            and demands.{" "}
          </Text>
        </Container>

        <Container>
          <Heading as="h5" size="sm" marginTop={5} marginBottom={5}>
            Booking Flights with MakeMyTrip
          </Heading>
          <Text className={mystyle.txt}>
            {" "}
            At MakeMyTrip, you can find the best of deals and cheap air tickets
            to any place you want by booking your tickets on our website or app.
            Being India’s leading website for hotel, flight, and holiday
            bookings, MakeMyTrip helps you book flight tickets that are
            affordable and customized to your convenience. With customer
            satisfaction being our ultimate goal, we also have a 24/7 dedicated
            helpline to cater to our customer’s queries and concerns. Serving
            over 5 million happy customers, we at MakeMyTrip are glad to fulfill
            the dreams of folks who need a quick and easy means to find air
            tickets. You can get a hold of the cheapest flight of your choice
            today while also enjoying the other available options for your
            travel needs with us.{" "}
          </Text>
        </Container>

        <Container>
          <Heading as="h5" size="sm" marginTop={5} marginBottom={5}>
            Domestic Flights with MakeMyTrip
          </Heading>
          <Text className={mystyle.txt}>
            {" "}
            MakeMyTrip is India's leading player for flight bookings. With the
            cheapest fare guarantee, experience great value at the lowest price.
            Instant notifications ensure current flight status, instant fare
            drops, amazing discounts, instant refunds and rebook options, price
            comparisons and many more interesting features.{" "}
          </Text>
        </Container>
      </div>

      {/* finalpart */}
      <div className={mystyle.final}>
        <div>
          <span>
            <TwitterIcon
              style={{
                fontSize: 40,
                padding: 10,
                backgroundColor: "whitesmoke",
                margin: "50 0 30 100",
              }}
            ></TwitterIcon>
          </span>
          <span>
            <FacebookIcon
              style={{
                fontSize: 40,
                padding: 10,
                backgroundColor: "whitesmoke",
                margin: "50 0 30 20",
              }}
            ></FacebookIcon>
          </span>
        </div>

        <div className={mystyle.end}>
          <Text style={{ color: "white" }}> © 2023 MAKEMYTRIP PVT. LTD. </Text>
          <Text style={{ color: "white" }}> Country India USA UAE </Text>
        </div>
      </div>
    </>
  );
};

export default Home;
