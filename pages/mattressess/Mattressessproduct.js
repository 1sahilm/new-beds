import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image/";
import Link from "next/link";
import { useState } from "react";
import { Tab, Tabs, Sonnet, Row, Col, Nav } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Review from "../../components/Review";
import Timer from "../../components/Timer";
import router, { useRouter } from "next/router";
import Mobilemenu from "../../components/comps/Mobilemenu";
import { QuantityPicker } from "react-qty-picker";
import { useSelector, useDispatch } from "react-redux";
import Checkout from "../../components/checkout/Checkout";
import { addToCart } from "../../store/actions/cartActions";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

let descolor = {
  color: "00b2bd ",
};
let imgStyle = {
  width: "100%",
  height: "300px",

  // backgroundColor: "#FFB900",
  paddingRight: "auto !important",
  paddingLeft: "auto !important",
};
let paddingP = {
  paddingTop: "8rem!important",
};
let headerButton = {
  border: "1px solid #1A4692",
  fontSize: "12px",
  width: "70px",
  height: "48px",
  color: "#1A4692",
  borderRadius: "5px",
};
let card = {
  padding: "8px",
  borderRadius: "8px",
  boxShadow: "7px 5px 19px -7px rgb(0 0 0 / 15%)",
};
let mainheading = {
  color: "#1A4692",
};
let heading = {
  fontSize: "15px",
};
let fa = {
  color: "red",
};
let deltext = {
  fontSize: "14px",
  color: "#7c7c7c",
};
let savetext = {
  fontSize: "14px",
  paddingLeft: "22px",
  color: "#00b2bd",
};
let sizetext = {
  fontSize: "10px",
  color: "#7c7c7c",
};
let button = {
  fontSize: "13px",
  color: "red",
  border: "2px solid grey",
  borderRadius: "4px",
  width: "170px",
};
let textwidth = {
  width: "1175px",
};
let titlebottomline = {
  display: "block",
  height: "2px",
  width: "73px",
  borderBottom: "2px solid grey",
  margin: "0 auto ",
};

function Mattressessproduct ({ response }) {
  //ADD TO CART REDUX
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [qty, setQty] = useState(1);

  
  const addToCartHandler = () => {
    dispatch(addToCart(response[0]._id, parseInt(qty)));
    router.push("/cart");
  };

  async function addToCarsst() {
    // const { data } = await axios.get(`/api/products/${response[0]._id}`);

    // console.log(data);
  }
  addToCarsst();
  const [expanded, setExpanded] = useState("panel1");
  const [data, setData] = useState([]);
  const [bed, setBed] = useState([]);
  const [color, setColor] = useState([]);
  // const [image, setImage] = useState(
  //   "/assets/images/ProductImage/Mattress-01.png"
  // );
  const [image, setImage] = useState(response[0].images[0]);
  const storageIcon = [
    "/assets/images/newicons/storage000-01.png",
    "/assets/images/newicons/Storage-03.png",
    "/assets/images/newicons/Storage-04.png",
  ];
  const storagetitle = ["2 Same Side", " 2Foot Side", "4 Drawer"];

  let storageindex = 0;

  const feetIcon = [
    "/assets/images/newicons/feets-01.png",
    "/assets/images/newicons/feets-02.png",
  ];
  let feetindex = 0;

  //STORING PRICE IN STATE
  const [headboard, setHeadboard] = useState(0);
  const [storage, setStorage] = useState(0);
  const [mattress, setMattress] = useState(0);
  const [feets, setfeet] = useState(0);


  console.log(total);
  console.log(headboard);
  console.log(mattress);
  console.log(storage);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

 // send query to route
 const router = useRouter()
 const { id } = router.query

 //GET SIZE
 console.log(router.query);

 //FILTER BED DYNAMIC

 var divanBedSize;
 if(router.query.size){
 divanBedSize = response?.filter(
   function (beds) {
     return beds.size === router.query.size;
   }
 );
 }
 else{
    divanBedSize = response;
   
 }



const classes = useStyles({});

//FETCHING API FOR BEDS


//FETCHING API FOR BEDS

useEffect(() => {
  setData(response);
  setBed(divanBedSize[0]);
  setColor(response[0].images[0].color1);
  setImage(divanBedSize[0].images[0]);
}, [response]);
  useEffect(() => {
    setTotal(
      parseInt(qty) *
        (parseInt(bed?.price) +
          parseInt(headboard) +
          parseInt(storage) +
          parseInt(mattress) +
          parseInt(feets))
    );
  }, [response, headboard, storage, mattress, bed, feets, qty]);

  console.log(bed);
  return (
    <div>
      <div>
        <Head>
          <title>BedsDivans</title>
          <meta name="description" content="Generated by create next app" />
          <link
            passHref={true}
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          />

          <link
            passHref={true}
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <link
            passHref={true}
            href="/style/plugins/plugins.min.css/"
            rel="stylesheet"
          ></link>
          <link passHref={true} rel="icon" href="/logo (1).png" />
        </Head>
        <div>
          <div className="fordesktopmeu">
            <Header />
          </div>

          <div className="mb-10 formobilemenu">
            <Mobilemenu />
          </div>

          <div className="container-fluid fluid-color tab-touch-section">
            <div className="container  tab-touch-cont mattress-product-tab">
              <div className="row">
                <div className="col-md-6 big-img-chenger">
                  <div className="twofeet">
                    <Timer />
                    <Image
                      id="shwimg_1"
                      className="imgfornone"
                      width={600}
                      height={550}
                      src={image}
                    />
                  </div>

                  {/* <Image width={100} height={100} id="shwimg_7" className="imgfornone"   src="/assets/images/image/meter.png"/> */}
                  {/* <Image src=""/> */}
                </div>
                <div className="col-md-6 mt-4 outer-tab-section">
                  <h5 className="HeadingProduct">
                    <b>{bed?.product_name}</b>
                  </h5>
                  <Image
                    src="/assets/images/image/trustpilot-5stars.png"
                    width={140}
                    height={30}
                  />
                  <span className="trustreview">
                    <b> ( 5,245,22 Reviews) </b>
                  </span>
                  <div className="mt-4 image-multitabs">
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="first"
                    >
                      <Row>
                        <Col sm={3} xs={12}>
                          <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                              <Nav.Link eventKey="first"> Sizes</Nav.Link>
                            </Nav.Item>
                            
                            
                          </Nav>
                        </Col>
                        <Col sm={9} col xs={12}>
                          <Tab.Content>
                            <Tab.Pane eventKey="first">
                              <div className="bg-white cusHeight Headboard-page">
                                <div className="row">
                                  <div className="col-md-12 mt-4 ml-6 ">
                                    <span className="optionB">
                                      24 Option Available
                                    </span>
                                    <br />
                                    <hr
                                      style={{
                                        marginLeft: "-20px",
                                        width: "445px",
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="container-fluid slider-Mobile">
                                  <div className="row">
                                    <div
                                      className="col-md-3 productimghover"
                                      onClick={() => {
                                        var newarray = response?.filter(
                                          function (beds) {
                                            return beds.size === "2FT 6";
                                          }
                                        );
                                        setImage(
                                          newarray[0].images[0]
                                        );
                                        setBed(newarray[0]);
                                        console.log(bed);
                                      }}
                                    >
                                      <Image
                                        id="img_1"
                                        width={140}
                                        height={100}
                                        src="/assets/images/MattressIcon/Mattress-01.png"
                                      />
                                      <br />
                                      <span className="productsize">
                                        2.6ft Single{" "}
                                        <span>
                                          {" "}
                                          <br /> <b> (£79)</b>
                                        </span>
                                      </span>
                                      <br />
                                      {/*<span className="productsize" style={{fontSize:"14px"}}> £ 400</span>*/}
                                    </div>
                                    <div
                                      className="col-md-3 productimghover"
                                      onClick={() => {
                                        var newarray = response?.filter(
                                          function (beds) {
                                            return beds.size === "3FT";
                                          }
                                        );
                                        setImage(
                                          newarray[0].images[0]
                                        );
                                        setBed(newarray[0]);
                                        console.log(bed);
                                      }}
                                    >
                                      <Image
                                        width={140}
                                        height={100}
                                        id="img_2"
                                        src="/assets/images/MattressIcon/Mattress-02.png"
                                      />
                                      <span className="productsize">
                                        3ft Single{" "}
                                        <span>
                                          {" "}
                                          <br />
                                          <b> (£89) </b>
                                        </span>
                                      </span>
                                      <br />
                                      {/*<span className="productsize" style={{fontSize:"14px"}}> £ 400</span>*/}
                                    </div>
                                    <div
                                      className="col-md-3 productimghover"
                                      onClick={() => {
                                        var newarray = response?.filter(
                                          function (beds) {
                                            return beds.size === "4FT";
                                          }
                                        );
                                        setImage(
                                          newarray[0].images[0]
                                        );
                                        setBed(newarray[0]);
                                        console.log(bed);
                                      }}
                                    >
                                      <Image
                                        width={140}
                                        height={100}
                                        id="img_3"
                                        src="/assets/images/MattressIcon/Mattress-03.png"
                                      />
                                      <span className="productsize">
                                        4ft Small-Double{" "}
                                        <span>
                                          {" "}
                                          <br /> <b> (£109)</b>
                                        </span>
                                      </span>
                                      <br />
                                      {/*<span className="productsize" style={{fontSize:"14px"}}> £ 400</span>*/}
                                    </div>
                                    <div
                                      className="col-md-3 productimghover"
                                      onClick={() => {
                                        var newarray = response?.filter(
                                          function (beds) {
                                            return beds.size === "4FT 6";
                                          }
                                        );
                                        setImage(
                                          newarray[0].images[0]
                                        );
                                        setBed(newarray[0]);
                                        console.log(bed);
                                      }}
                                    >
                                      <Image
                                        id="img_4"
                                        width={140}
                                        height={100}
                                        src="/assets/images/MattressIcon/Mattress-03.png"
                                      />
                                      <span className="productsize">
                                        4.6ft Double{" "}
                                        <span>
                                          {" "}
                                          <br /> <b> (£109) </b>
                                        </span>
                                      </span>
                                      <br />

                                      {/*<span className="productsize" style={{fontSize:"14px"}}> £ 400</span>*/}
                                    </div>
                                    {/* <div className="container-fluid">
                                  <div className="row mt-2"> */}
                                    <div
                                      className="col-md-3   productimghover"
                                      onClick={() => {
                                        var newarray = response?.filter(
                                          function (beds) {
                                            return beds.size === "5FT";
                                          }
                                        );
                                        setImage(
                                          newarray[0].images[0]
                                        );
                                        setBed(newarray[0]);
                                        console.log(bed);
                                      }}
                                    >
                                      <Image
                                        id="img_5"
                                        width={140}
                                        height={100}
                                        src="/assets/images/MattressIcon/Mattress-03.png"
                                      />
                                      <span className="productsize">
                                        5ft King{" "}
                                        <span>
                                          {" "}
                                          <br /> <b> (£119)</b>
                                        </span>
                                      </span>
                                      <br />
                                      {/*<span className="productsize" style={{fontSize:"14px"}}> £ 400</span>*/}
                                    </div>
                                    <div
                                      className="col-md-3 productimghover"
                                      onClick={() => {
                                        var newarray = response?.filter(
                                          function (beds) {
                                            return beds.size === "6FT";
                                          }
                                        );
                                        setImage(
                                          newarray[0].images[0]
                                        );
                                        setBed(newarray[0]);
                                        console.log(bed);
                                      }}
                                    >
                                      <Image
                                        id="img_6"
                                        width={140}
                                        height={100}
                                        src="/assets/images/MattressIcon/Mattress-03.png"
                                      />
                                      <span className="productsize">
                                        6ft Super-King{" "}
                                        <span>
                                          {" "}
                                          <br /> <b> (£149) </b>
                                        </span>
                                      </span>
                                      <br />
                                      {/*<span className="productsize" style={{fontSize:"14px"}}> £ 400</span>*/}
                                    </div>
                                    {/* <div className="col-md-3 mt-4  ">
        <Image width={100} height={80} src="/assets/images/image/box-image.png"/>

    </div> */}
                                    {/* <div className="col-md-3 mt-4  ">
        <Image width={100} height={80} src="/assets/images/image/box-image.png"/>

    </div> */}{" "}
                                  </div>
                                </div>
                                
                              </div>
                            </Tab.Pane>
                            
                            
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </div>

                  <div className="container price-touch-tab">
                    <div className="row">
                      <div className="col-md-3 col-xs-3 price-input">
                        
                        <QuantityPicker
                          min={1}
                          onChange={(e) => setQty(e)}
                          value={qty}
                        />

                        
                      </div>
                      <div className="col-md-9 col-xs-9 price-box">
                        <div className="scndbtn">
                          <div className="row">
                            <div className="col-md-6">
                              <h6
                                style={{
                                  color: "#7c7c7c",
                                  textAlign: "right",
                                  position: "relative",
                                  left: "-6px",
                                  top: "14px",
                                }}
                              >
                                <blockquote>WAS: £549.00</blockquote>
                              </h6>
                              <h2
                                style={{
                                  color: "red",
                                  position: "relative",
                                  left: "43px",
                                }}
                              >
                                <span
                                  style={{ fontSize: "12px", color: "#7c7c7c" }}
                                >
                                  <b>NOW: </b>
                                </span>
                                <b>
                                  £<span id="price_now">{total}</span>
                                </b>
                              </h2>
                            </div>
                            <div className="col-md-6">
                              
                              <Checkout addToCartHandler={addToCartHandler} price={total} title={bed?.product_name} base_price={bed?.price} type="mattress" size={bed?.size}/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="container-fluid  Complete-your-Bedroom"
            style={{ backgroundColor: "#F5F5F5" }}
          >
            <div className="rightcol">
              <div className="container ">
                <div className="row ">
                  <div className="col-sm-5 mt-10 ">
                    <div style={{ position: "sticky", top: "10px" }}>
                      <h3
                        style={{
                          color: "#222178",
                          fontWeight: "500",
                          textAlign: "center",
                        }}
                      >
                        <b>Complete your Bedroom</b>
                      </h3>
                      <br />
                      <br />
                      <div>
                        <div
                          className="container bg-white"
                          style={{
                            borderRadius: "7px",
                            border: "1px solid #00b2bd",
                          }}
                        >
                          <div className="row pt-2">
                            <div className="col-md-2 col-6">
                              <img
                                className="mobile-width"
                                src="assets/images/image/box-image.png"
                                style={{ width: "94px" }}
                                alt=""
                              />
                            </div>
                            <div className="col-md-6 col-6 pl-8">
                              <h6
                                style={{ color: "#141414", fontSize: "15px" }}
                                className="completebed-heading"
                              >
                                <b>OTTOMAN STORAGE BED NEW COLLECTION</b>
                              </h6>
                              <img
                                src="assets/images/image/Group 480.png"
                                alt=""
                              />
                              <span className="ratingfont pl-1">(8524)</span>
                              <p style={{ color: "#f22222" }}>425</p>
                            </div>
                            <div className="col-md-4">
                              <button className="ProductPageB ">
                                <b>ADD</b>
                              </button>
                            </div>
                          </div>
                        </div>

                        <div
                          className="container bg-white mt-2"
                          style={{
                            borderRadius: "7px",
                            border: "1px solid #00b2bd",
                          }}
                        >
                          <div className="row pt-2">
                            <div className="col-md-2">
                              <img
                                src="assets/images/image/box-image.png"
                                style={{ width: "94px" }}
                                alt=""
                              />
                            </div>
                            <div className="col-md-6 pl-8">
                              <h6
                                style={{ color: "#141414", fontSize: "15px" }}
                                className="completebed-heading"
                              >
                                <b>OTTOMAN STORAGE BED NEW COLLECTION</b>
                              </h6>
                              <img
                                src="assets/images/image/Group 480.png"
                                alt=""
                              />
                              <span className="ratingfont pl-1">(8524)</span>
                              <p style={{ color: "#f22222" }}>425</p>
                            </div>
                            <div className="col-md-4">
                              <button className="ProductPageB ">
                                <b>ADD</b>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div
                          className="container bg-white mt-2"
                          style={{
                            borderRadius: "7px",
                            border: "1px solid #00b2bd",
                          }}
                        >
                          <div className="row pt-2">
                            <div className="col-md-2">
                              <img
                                src="assets/images/image/box-image.png"
                                style={{ width: "94px" }}
                                alt=""
                              />
                            </div>
                            <div className="col-md-6 pl-8">
                              <h6
                                style={{ color: "#141414", fontSize: "15px" }}
                                className="completebed-heading"
                              >
                                <b>OTTOMAN STORAGE BED NEW COLLECTION</b>
                              </h6>
                              <img
                                src="assets/images/image/Group 480.png"
                                alt=""
                              />
                              <span className="ratingfont pl-1">(8524)</span>
                              <p style={{ color: "#f22222" }}>425</p>
                            </div>
                            <div className="col-md-4">
                              <button className="ProductPageB ">
                                <b>ADD</b>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8">
                          <div
                            className="container bg-white mt-2"
                            style={{
                              borderRadius: "7px",
                              border: "2px solid #B2B2B2  ",
                            }}
                          >
                            <div className="NeedImg  text-center need-help">
                              <img
                                className="mt-2"
                                src="assets/images/DivanBedsicon/chat call-01.png"
                                alt=""
                              />
                              <span
                                style={{ color: "#222178", fontSize: "22px" }}
                              >
                                <b> Need help?</b>
                              </span>
                              <p className="mt-6" style={{ color: "#4E4E4E" }}>
                                <b>
                                  Our Sleep Specialists are here for you. Chat
                                  Or Call Us
                                </b>
                              </p>
                              <img
                                className="icons"
                                width="5%"
                                src="assets/images/DivanBedsicon/Icon ionic-md-call.png"
                                alt=""
                              />
                              <span style={{ color: "#000", fontSize: "26px" }}>
                                <b> 01902 405535</b>
                              </span>
                              <p
                                className="mt-4 mb-6"
                                style={{
                                  color: "#8E8E8E",
                                  fontSize: "12px",
                                  marginBottom: "9px",
                                }}
                              >
                                Available 7 days a week
                              </p>
                              <p className="mt-4"></p>
                            </div>
                            {/* <div className="row pt-2">
                        <div className="col-md-2">
                            <img src="assets/images/image/box-image.png" style={{width:"94px"}} alt="" />

                        </div>
                        <div className="col-md-6 pl-8">
                            <h6 style={{color:"#141414" ,fontSize:"15px"}}><b>OTTOMAN STORAGE BED NEW COLLECTION</b></h6>
                            <img src="assets/images/image/Group 480.png" alt="" /><span className="ratingfont pl-1">(8524)</span>
                            <p style={{color:"#f22222"}}>425</p>
                        </div>
                        <div className="col-md-4">
                        <button className="ProductPageB " > <b>ADD</b> </button>
                        </div>

                    </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-7  mt-10">
                    <Accordion
                      square
                      expanded={expanded === "panel1"}
                      onChange={handleChange("panel1")}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography
                          className={classes.heading}
                          style={{
                            color: "#00B2BD",
                            fontWeight: "600",
                            fontSize: "18px",
                          }}
                        >
                          DESCRIPTION
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="panel-body">
                          {/* <h5 className="sub-headingA">
                            <i> Specification</i>
                          </h5> */}
                          {/* <ul className="li-text acc-para">
                            <li>
                              <i
                                className="fa fa-play"
                                aria-hidden="true"
                                width="30px"
                              ></i>
                              <span className="pl-2">
                                Variety of colours available in many different
                                fabrics
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Various drawer options available
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Chrome Glides or castor wheel options
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                3 different Mattress options and 5 headboard
                                options available
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2"> Made in the UK </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                1-year guarantee included on a full set (not on
                                a base alone – 30 days on a base alone)
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Headboard can be fitted on either side of the
                                base for a 2 draw same side option
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Base height is 12” without the feet.
                              </span>
                            </li>
                          </ul> */}
                          {bed?.description}
                          {/* <h5 className=" sub-headA ">
                            <i> Dimensions </i>
                          </h5>
                          <ul className="li-text acc-para mt-2">
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Table: L 110cm x W 110cm x H 74cm
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Chair: L 53cm x W 53cm x H 87-90cm
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Footstool: L 35.5cm x W 35.5cm x H 36-40cm
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">5mm Tempered Glass</span>
                            </li>
                          </ul>
                          <h5 className="sub-headA">
                            6 Headboards options available as an optional extra,
                            shop our range of matching headboards here:
                          </h5>
                          <ul className="li-text acc-para">
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Our couriers will deliver between the hours of
                                7am to 9pm.
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Once you place an order and your order is ready
                                to be dispatched you will receive a message
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Alternatively, you can send us another message
                                after placing your order and we will manually
                                update your delivery date.
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                The day before delivery you will receive a
                                text/email with a delivery time, unfortunately
                                we cannot supply estimated delivery times
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Deliveries are made to the communal door of your
                                property and couriers are not authorized to take
                                items any further.
                              </span>
                            </li>
                          </ul>
                          <h5 className="sub-headA">
                            <i>
                              3 optional Mattressess available separately, shop
                              our range of mattress here:
                            </i>
                          </h5>
                          <ul className="li-text acc-para">
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Our couriers will deliver between the hours of
                                7am to 9pm.
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Once you place an order and your order is ready
                                to be dispatched you will receive a message
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Alternatively, you can send us another message
                                after placing your order and we will manually
                                update your delivery date.
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                The day before delivery you will receive a
                                text/email with a delivery time, unfortunately
                                we cannot supply estimated delivery times
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Deliveries are made to the communal door of your
                                property and couriers are not authorized to take
                                items any further.
                              </span>
                            </li>
                          </ul>
                          <h5 className="sub-headA">
                            <i> Please note: </i>
                          </h5>
                          <ul className="li-text acc-para">
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Our couriers will deliver between the hours of
                                7am to 9pm.
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Once you place an order and your order is ready
                                to be dispatched you will receive a message
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Alternatively, you can send us another message
                                after placing your order and we will manually
                                update your delivery date.
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                The day before delivery you will receive a
                                text/email with a delivery time, unfortunately
                                we cannot supply estimated delivery times
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Deliveries are made to the communal door of your
                                property and couriers are not authorized to take
                                items any further.
                              </span>
                            </li>
                          </ul> */}
                        </div>
                        {/* <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography> */}
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography
                          className={classes.heading}
                          style={{
                            color: "#00B2BD",
                            fontWeight: "600",
                            fontSize: "18px",
                          }}
                        >
                          DILIVERY POLICY
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Free delivery within 2-5 Working days within 120 miles
                          of our post code WV14 7HZ. Once you’ve successfully
                          placed your order, you’ll receive an order
                          confirmation by email followed up by a call from the
                          sales team within 2-3 working days, they will confirm
                          your order and give you a confirmed delivery date.
                          Areas that are covered within 2-5 working days are –
                          London, East Midlands, West Midlands, South Wales,
                          Manchester, Yorkshire & surrounding postcodes. Areas
                          outside the above postcodes will take up to a further
                          2-5 working days. We only deliver to UK Mainland. Each
                          order will only be dispatched once the order has been
                          confirmed with the customer & the delivery date and
                          approximate time has been given. Please ensure you
                          must leave a correct Contact number for our sales team
                          to contact you, if we fail to reach you on a contact
                          number your order will be put on hold until we hear
                          from you to confirm.
                          <b>
                            Please note Dilivery times can strat from 5am
                            onwards up to 10pm
                          </b>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                      >
                        <Typography
                          className={classes.heading}
                          style={{
                            color: "#00B2BD",
                            fontWeight: "600",
                            fontSize: "18px",
                          }}
                        >
                          ADDITIONAL INFORMATION
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        Lorem Ipsum is simply dummy text of the Beds Divans
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                        when an unknown
                      </AccordionDetails>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                      >
                        <Typography
                          className={classes.heading}
                          style={{
                            color: "#00B2BD",
                            fontWeight: "600",
                            fontSize: "18px",
                          }}
                        >
                          CANCELLATIONS
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        Once an order has been placed online or by phone, you
                        agree to our terms and conditions, of the item being
                        made to your specification, and if you decide to cancel
                        your order a £30 administration charge will be liable to
                        be paid, and this will be deducted from your order.
                      </AccordionDetails>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5a-content"
                        id="panel5a-header"
                      >
                        <Typography
                          className={classes.heading}
                          style={{
                            color: "#00B2BD",
                            fontWeight: "600",
                            fontSize: "18px",
                          }}
                        >
                          RETURN POLICY
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        DUE TO COVID-19 WE CANNOT ACCEPT ANY RETURNS OF ITEMS
                        BEING OPENED OR USED. Our policy lasts 30 days. If 30
                        days have gone by since your purchase, unfortunately, we
                        can’t offer you a refund or exchange. Any cancellations
                        after 48 hours will incur a £30:00 cancellation fee due
                        to the item being made. Please note if any items are no
                        longer wanted within 30 days, and a change of mind
                        occurs, you must return the item to us at your own cost,
                        Or pay a collection fee of £62 to us directly and we can
                        arrange for collection with one of our drivers – please
                        ensure you clearly mark your name, order number, and
                        full address, so that we can process your return for
                        you. Please ensure you use a tracking service so we can
                        safely receive your returned item. Any returns must be
                        approved by DBZKHAN LTD (bedsDivans) before any return
                        is made. To be eligible for a return, your item must be
                        unused and in the same condition that you received it.
                        It must also be in the original packaging. So, you must
                        make sure that the base bag is kept in good condition.
                        To complete your return, we require a receipt or proof
                        of purchase. This could be through a form of email or
                        invoice. Our sales teams are always here to help you
                        with any enquirers many thanks BedsDivans Please do not
                        send your purchase back to the manufacturer before a
                        booking is made this will speed up the process and allow
                        us to rectify the issue.
                      </AccordionDetails>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel6a-content"
                        id="panel6a-header"
                      >
                        <Typography
                          className={classes.heading}
                          style={{
                            color: "#00B2BD",
                            fontWeight: "600",
                            fontSize: "18px",
                          }}
                        >
                          REFUND POLICY
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        Once your return is received and inspected, we will send
                        you an email to notify you that we have received your
                        returned item. We will also notify you of the approval
                        or rejection of your refund. If you are approved, then
                        your refund will be processed, and a credit will
                        automatically be applied to your credit card or original
                        method of payment, within a 5-7 days depending on your
                        bank
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row mt-6">
                <div className="col-md-8">
                  <img
                    src="/assets/images/DivanBedsicon/Review.png"
                    width="100%"
                    alt=""
                  />
                </div>
                <div className="col-md-4">
                  <div
                    className=" bg-white mt-2"
                    style={{ borderRadius: "7px" }}
                  >
                    <div className="NeedImg bedsdivanLog text-center">
                      <img
                        className="mt-2"
                        src="/assets/images/DivanBedsicon/Logo (1).png"
                        width="75%"
                        alt=""
                      />
                      <hr />
                      <button className="trustpilot">
                        <img
                          src="/assets/images/DivanBedsicon/Trustpilot02.png"
                          width="300px"
                          alt=""
                        />
                      </button>
                      <br /> <br />
                      <a href="https://www.reviews.co.uk/" className="pointer">
                        <img
                          src="/assets/images/DivanBedsicon/Reviews-co-uk.png"
                          width="200px"
                          alt=""
                        />
                      </a>
                      <br />
                      <br />
                      <button className="trustpilot">
                        <img
                          src="/assets/images/DivanBedsicon/toppng.com-oogle-review-logo-png-google-reviews-transparent-993x400.png"
                          width="200px"
                          alt=""
                        />
                      </button>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Unique Scroller End */}
            <div className="section product-tab-area">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center" data-aos="fade-up">
                    <div className="section-title mb-0">
                      <h2 className="title my-5 ">
                        <span style={mainheading}>Related Products</span>
                      </h2>

                      <div
                        className="divider  title-bottom-line light my-4 text-center"
                        style={titlebottomline}
                      />
                    </div>
                  </div>
                </div>

                <div className="container mt-10">
   
    <div className="row">
                                            <div className="col-lg-3 col-6 col-md-6 col-sm-6 col-xs-6 mb-6" data-aos="fade-up" data-aos-delay="200">

                                                <div className="product productfor2">
                                                    <div className="thumb thumbfor2">
                                                        <a href="shop-left-sidebar.html" className="image imagefor2">
                                                            <Image src="/assets/images/product-image/1.jpg" alt="Product" width={210} height={10} />
                                                            {/* <Image className="hover-image" src="/assets/images/product-image/2.jpg" width={180} height={180} alt="Product" /> */}
                                                        </a>
                                                        <span className="badges">
                                                            <span className="new" style={{fontSize:"18px"}}>50% OFF</span>
                                                        </span>

                                                        <p className="sale">
                                                            APRIL SALE
                                            </p>


                                                    </div>
                                                    <div className="content reco-pr">

                                                        <h5 className="title"><a href="shop-left-sidebar.html">Simple minimal Chair </a></h5>
                                                        <span className="price">

                                                            <span className="old">NOW $48.50</span>
                                                            <span className="new">FROM $38.50</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-6 col-md-6 col-sm-6 col-xs-6 mb-6" data-aos="fade-up" data-aos-delay="400">

                                                <div className="product productfor2">
                                                    <div className="thumb thumbfor2">
                                                        <a href="shop-left-sidebar.html" className="image imagefor2">
                                                        <Image src="/assets/images/product-image/1.jpg" alt="Product" width={210} height={10} />
                                                            {/* <Image width={180} height={100} className="hover-image" src="assets/images/product-image/2.jpg" alt="Product" /> */}
                                                        </a>
                                                       

                                                        <p className="sale">
                                                            APRIL SALE
                                            </p>


                                                    </div>
                                                    <div className="content reco-pr">

                                                        <h5 className="title"><a href="shop-left-sidebar.html">Simple minimal Chair </a></h5>
                                                        <span className="price">

                                                            <span className="old">NOW $48.50</span>
                                                            <span className="new">FROM $38.50</span>
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-lg-3 col-6 col-md-6 col-sm-6 col-xs-6 mb-6" data-aos="fade-up" data-aos-delay="600">

                                                <div className="product productfor2">
                                                    <div className="thumb thumbfor2">
                                                        <a href="shop-left-sidebar.html" className="image imagefor2">
                                                        <Image src="/assets/images/product-image/1.jpg" alt="Product" width={210} height={10} />
                                                            {/* <Image width={180} height={100} className="hover-image" src="assets/images/product-image/2.jpg" alt="Product" /> */}
                                                        </a>
                                                        

                                                        <p className="sale">
                                                            APRIL SALE
                                            </p>


                                                    </div>
                                                    <div className="content reco-pr">

                                                        <h5 className="title"><a href="shop-left-sidebar.html">Simple minimal Chair </a></h5>
                                                        <span className="price">

                                                            <span className="old">NOW $48.50</span>
                                                            <span className="new">FROM $38.50</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-6 col-md-6 col-sm-6 col-xs-6 mb-6" data-aos="fade-up" data-aos-delay="800">

                                                <div className="product productfor2">
                                                    <div className="thumb thumbfor2">
                                                        <a href="shop-left-sidebar.html" className="image imagefor2">
                                                        <Image src="/assets/images/product-image/1.jpg" alt="Product" width={210} height={10} />
                                                            {/* <Image width={180} height={100} className="hover-image" src="assets/images/product-image/2.jpg" alt="Product" /> */}
                                                        </a>
                                                       

                                                        <p className="sale">
                                                            APRIL SALE
                                            </p>


                                                    </div>
                                                    <div className="content reco-pr">

                                                        <h5 className="title"><a href="shop-left-sidebar.html">Simple minimal Chair </a></h5>
                                                        <span className="price">

                                                            <span className="old">NOW $48.50</span>
                                                            <span className="new">FROM $38.50</span>
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>
                                            
                                            
                                            
                                            
                                        </div>
                                        </div>

              </div>
              <div className="container my-5">
                <div className="row">
                  <div className="col text-center">
                    <button
                      className="btn btn-default btn-hover"
                      style={button}
                      onClick={() => router.push(`/product/Mattressess`)}
                    >
                      VIEW ALL PRODUCTS
                    </button>
                  </div>
                </div>
              </div>

              <div className="container my-5">
                <div className="row">
                  <div className="col text-center my-5">
                    <h4 className="testomonial">
                      Check out our TrustPilot reviews and join hundreds of
                      happy customers who we’ve helped to buy a bed over the
                      last 10 years — you won’t be disappointed.
                    </h4>
                    <h6 className="mt-4">
                      We are confident you’ll love your new bed and that our
                      service will leave you more than satisfied. But if you
                      aren’t happy, we’ll happily either exchange it or give you
                      a refund within 30-days of purchase. The team we have is
                      dedicated to offering an unbeatable customer service. So
                      if there’s anything you need or any questions you want
                      answering — just give us a call or send us an email. A
                      friendly member of our team will be happy to help.
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="container"></div>
          </div>
         

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Mattressessproduct;

export async function getServerSideProps(context) {
  const { req } = context;

  const title = req?.__NEXT_INIT_QUERY?.title;
  console.log(req);
  console.log(title);

  const data = await axios.post(
    `${process.env.BASE_URL}/api/mattress/getbeds`,
    {
      method: "product_name",
      value: title,
    }
  );

  const response = await data.data.data;

  console.log(response);

  return {
    props: { response }, // will be passed to the page component as props
  };
}
