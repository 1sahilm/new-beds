import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Review from '../../components/Review';
import Filter from '../../components/Filter';
import Menu from '../../components/Menu';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ProductBox from "../../components/comps/ProductBox";
import { useRouter } from "next/router";
import AllbedsBox from "../../components/comps/AllbedsBox";



const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two', className: 'myOptionClassName' }, 
];


function Manocobed({response}){
  const router = useRouter();
  console.log(response);
 
 

  const [items ,setItem]=useState(Menu);
  const filterItem =(cateItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === cateItem;

    });
    setItem(updatedItems);

  }

    return(
        <div style={{fontFamily:"sofia-pro,Helvetica,Arial,sans-serif"}}>
             <Head>
          <title>BedsDivans</title>
          <meta name="description" content="Generated by create next app" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <link rel="icon" href="/logo (1).png" />
        </Head>

        <Header/>

        
        
          <div className="container">
              <div className="row text-center ">
                  <h1 className="font-weight-bold mt-6" style={{color:"#0e3f70"}}>House fabric divan beds</h1>
                  <p className="mt-4" style={{fontSize:"17px",fontWeight:"300",color:"#3a356d",fontStyle:"normal"}}>A great night’s sleep starts with the perfect bed, and we can help with that! Not only are our house fabric divan beds ridiculously comfortable, but they’re super stylish too. Available in a variety of fabrics and colours, our range of divan beds will complement any home decor perfectly. We have something to suit everyone.</p>

              </div>

          </div>

          <div className="section mt-10">
        <div className="container">
          
          
        <div className="row">
                  <div className="size-box">
                    <div className="single-box">
                      <a href="#">
                        {" "}
                        <Image
                        priority={true}
                          width={100}
                          height={120}
                          src="/assets/images/DivanBedsicon/Group 477.svg"
                          alt="BedsDivan"
                        />
                      </a>

                      <p
                        className="text-center  mt-2"
                        style={{ color: "#222178" }}
                      >
                        {" "}
                        <b> Single </b>
                      </p>
                    </div>

                    <div className="single-box">
                      <a href="#">
                        {" "}
                        <Image
                        priority={true}
                          width={100}
                          height={120}
                          src="/assets/images/DivanBedsicon/Group 478.svg"
                          alt="BedsDivan"
                        />
                      </a>
                      <p
                        className="text-center  mt-2"
                        style={{ color: "#222178" }}
                      >
                        {" "}
                        <b> Small Double </b>
                      </p>
                    </div>

                    <div className="single-box">
                      <a href="#">
                        <Image
                        priority={true}
                          width={100}
                          height={120}
                          src="/assets/images/DivanBedsicon/Group 479.svg"
                          alt="BedsDivan"
                        />
                      </a>
                      <p
                        className="text-center  mt-2"
                        style={{ color: "#222178" }}
                      >
                        {" "}
                        <b> Double </b>
                      </p>
                    </div>

                    <div className="single-box">
                      <a href="#">
                        <Image
                        priority={true}
                          width={100}
                          height={120}
                          src="/assets/images/DivanBedsicon/Group 480.svg"
                          alt="BedsDivan"
                        />
                      </a>
                      <p
                        className="text-center mt-2"
                        style={{ color: "#222178" }}
                      >
                        <b> King</b>
                      </p>
                    </div>

                    <div className="single-box">
                      <a href="#">
                        <Image
                        priority={true}
                          width={100}
                          height={120}
                          src="/assets/images/DivanBedsicon/Group 481.svg"
                          alt="BedsDivan"
                        />
                      </a>
                      <p
                        className="text-center mt-2"
                        style={{ color: "#222178" }}
                      >
                        <b> Super King</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            

          <div>
            <div className="container mt-6 mb-2 rounded linen-fabric-filter" >
              <div className="row"  style={{padding:"10px"}}>

                  <div className="col-md-4">
                  <span style={{  }}>
                  <select className="dropdown-section">
                  <option  label="Beds"/>
                  <option value="2FT 6" label="2Feet"/>
                  <option value="2FT 6" label="2Feet"/>
                  <option value="2FT 6" label="2Feet"/>
                  <option value="2FT 6" label="2Feet"/>
                  </select>
                  </span>

                  
                  </div>
                  <div className="col-md-4">
                  <span style={{  }}>
                  <select className="dropdown-section">
                  <option  label="Color"/>
                  <option value="2FT 6" label="2Feet"/>
                  <option value="2FT 6" label="2Feet"/>
                  <option value="2FT 6" label="2Feet"/>
                  <option value="2FT 6" label="2Feet"/>
                  </select>
                  </span>
                  </div>
                  <div className="col-md-4">
                  <span style={{ }}>
                  <select className="dropdown-section">
                  <option  label="Price"/>
                  <option value="2FT 6" label="2Feet"/>
                  <option value="2FT 6" label="2Feet"/>
                  <option value="2FT 6" label="2Feet"/>
                  <option value="2FT 6" label="2Feet"/>
                  </select>
                  </span>
                  </div>

              </div>


          </div>
        </div>

          

          
    
          

{/* Product Start */}
<div className="lineproduts-style">
  <div className="container">

  
<div className="row">
                {response.map((item) => {
                  console.log(item);
                  return (
                    <AllbedsBox
                      src={item.images[0].color1.base_url}
                      title={item.product_name}
                      price={item.price}
                    />
                  );
                })}
              </div>
              </div>
     </div>


          <div className="container">
              <div className="row text-center ">
                  <h2 className="font-weight-bold mt-6" style={{color:"#0e3f70"}}>What is a linen fabric divan Bed?</h2>
                  <p className="mt-4" style={{fontSize:"18px"}}>When it comes to buying a new bed, a linen fabric divan bed is one of the best choices out there. These box-shaped beds are simple but incredibly practical. A divan bed set consists of a specially designed, firm base and a matching mattress.

The sturdy frame is covered in fabric for an aesthetically pleasing appearance and the bed is usually mounted on castor wheels or you can choose chrome gliders if you have wood or laminate flooring.</p>

              </div>

          </div>

          <div className="container">
              <div className="row text-center ">
                  <h2 className="font-weight-bold mt-6" style={{color:"#0e3f70"}}>Finding the right mattress type for your divan bed</h2>
                  <p className="mt-4" style={{fontSize:"18px"}}>The divan base and the mattress are designed to be used in conjunction with each other to provide comfort and good-quality sleep.

You can also choose which type of mattress you want that will suit you and your sleep pattern. Our beds come with a variety of options, choose from the orthopaedic, pocket, or pillow-top range. 

If you prefer a medium or soft mattress, our orthopaedic or pocket mattresses would be the ideal choice. If you like your mattress to be harder, the pillow top range would be the one for you.</p>

              </div>

          </div>

          <div className="container">
              <div className="row text-center ">
                  <h2 className="font-weight-bold mt-6" style={{color:"#0e3f70"}}>Is the standard option a spring mattress?</h2>
                  <p className="mt-4" style={{fontSize:"18px"}}>These days you have more options than just a spring mattress. Generally, you can use any style with a divan bed, however, some designer brands require a sprung edge base.

Sprung edge divans have springs integrated into the base. These springs act as a giant shock absorber and are very luxurious, taking pressure off the mattress.</p>

              </div>

          </div>

          <div className="container">
              <div className="row text-center ">
                  <h2 className="font-weight-bold mt-6" style={{color:"#0e3f70"}}>Which mattress size is best suited to a Divan base?</h2>
                  <p className="mt-4" style={{fontSize:"18px"}}>This depends on which size base you choose. For example, if you have a king size base you wouldn’t buy a single size mattress as it would be far too small.

Another advantage to divans is that they don’t take up too much space as the bed is only as wide as its mattress.</p>

              </div>

          </div>

          {/* Product End */}
          <br/>
          <br/>
          <Review/>
          <br/>
          <br/>
          <Footer/>


        </div>
    )
}
export default Manocobed;
export async function getServerSideProps(context) {
  const { req } = context;
  const size = req?.__NEXT_INIT_QUERY?.size;
  let sizes = "";

  const category= req?.__NEXT_INIT_QUERY.category

  size ? (sizes = size) : (sizes = "2FT 6");
  const data = await axios.post(
  //  "https://staggingx.bedsdivans.co.uk/api/products/getbeds",
  `${process.env.BASE_URL}/api/allbeds/getbeds`,
    {
      method: "category",
      value: 'Manocco Beds',
    }
  );
  const response = data.data.data;
  return {
    props: { response }, // will be passed to the page component as props
  };
}
