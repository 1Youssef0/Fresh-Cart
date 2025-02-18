import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoiresItem from "./CategoiresItem";
import Slider from "react-slick";
import useCategories from "../hooks/useCategories";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";
import * as motion from "motion/react-client"
import { Helmet } from "react-helmet";


export default function Categories() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 800,
  };

  let { data, isLoading } = useCategories();
  let [isopen, setOpen] = useState(false);

  // if(isLoading){
  //     return <Loading></Loading>
  // }

  function catsub() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/subcategories`);
  }

  let { data: catdata } = useQuery({
    queryKey: ["catsub"],
    queryFn: catsub,
  });

  //  console.log(catdata?.data?.data);
  return (
    <>


<Helmet>
        <meta charSet="utf-8" />
         <title>Categories</title>   
</Helmet>
      <div className="dark:bg-black  xsm:block  flex justify-center xsm:h-screen  ">
        <Slider {...settings} className="">
          {data?.data?.data?.map((ele) => (
            <CategoiresItem key={ele._id} ele={ele}></CategoiresItem>
          ))}
        </Slider>
      </div>

   <div className="dark:bg-black flex justify-center ">
   <button
        onClick={() => {
          setOpen(!isopen);
        }}
        type="submit"
        className="text-white w-48  bg-green-color hover:bg-green-700 focus:ring-4 mb-24 focus:outline-none rounded-lg   px-5 py-2.5  dark:bg-green-color dark:hover:bg-green-700">Show All Categories</button>

   </div>
      {isopen ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }} >
       
          <div className="flex flex-wrap justify-center  dark:bg-black">
            {catdata?.data?.data?.map((prod) => (
              <div key={prod._id} prod={prod}>
                <div className="dark:bg-neutral-800 text-[1.2rem]  font-extrabold bg-slate-700 w-44 h-44 text-center flex items-center my-3 mx-3 justify-center cursor-pointer text-green-color hover:shadow-2xl transition-all hover:shadow-green-color">
                  {prod.name}
                </div>
              </div>
            ))}
          </div>{" "}
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
}

// function Cate({ele}){
//    return <div>
//     <img src={ele.image} alt="" />
//    </div>
// }

// let [cats,setcategories]=useState([]);

// async function getCat(){

//   let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
//   setcategories(data.data);

// }

// useEffect(()=>{
//   getCat()
// },[])
