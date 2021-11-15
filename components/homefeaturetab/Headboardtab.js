import React from 'react';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import HeadboardBox from '../comps/HeadboardBox';
import { useRouter } from "next/router";

function Headboardtab({response}) {
    const router = useRouter();
  console.log(response);
    return (
        <div>
            <div className="row">
            {
          response.map((item) =>{
              console.log(item);
              return(
                  <HeadboardBox
                   category={item.images[0].url}
                   src={item.images[0].url}
                   title={item.product_name}
                   price={item.price} 
                   size={item.size}
                   />
              );
          })
      }

            </div>
        </div>
    )
}

export default Headboardtab;

