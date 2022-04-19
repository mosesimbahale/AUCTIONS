import React from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Auction from "./Auction";

import {FaRocket} from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="App">
        <Navbar />

        <header className="App-header">
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </header>
 


        </div>


        <div class="flex flex-wrap  max-w-11/12   " >


<div class="flex flex-wrap justify-center m-2">
  <div class="rounded-lg shadow-lg bg-white max-w-xs">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img
        class="rounded-t-lg max-h-60 min-w-full object-cover "
        src="https://ik.imagekit.io/q5edmtudmz/FB_IMG_15658659197157667_wOd8n5yFyXI.jpg"
        alt=""
      />
    </a>

    <div class="p-2 m-2">
      <h5 class="text-gray-900 text-xl font-medium ">Card title</h5>

      <p class="text-gray-700 text-base mb-4">
        Some quick example text to build on.
      </p>

      <hr />
      <p class="flex items-center mb-2 justify-between">
        <p className="p-2">S</p>
        <span class="mr-2 text-xs text-blue-500 font-medium">$</span>
        <span class="text-xl text-blue-500 font-medium align-text-center">
          44.90
        </span>
       
        <p className="p-2">Highest</p>

        <FaRocket />
        <span class="mr-2 text-xs text-green-500 font-medium">$</span>
        <span class="text-xl text-green-500 font-medium align-text-center">
          70.90
        </span>
      </p>
      
      <hr />

      <div className="flex items-center justify-between">
        <button type="button" className=" py-1 px-2 m-1 text-gray-900 rounded-lg ">
          DD:MM:YY:HH:MM:SS
        </button>

        <button class="py-1 px-2 m-1 bg-red-600 text-gray-200 rounded-lg hover:bg-red-700 ">
        Bid 
        </button>
     
      </div>


    </div>
  </div>
</div>










<div class="flex flex-wrap justify-center m-2">
  <div class="rounded-lg shadow-lg bg-white max-w-xs">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img
        class="rounded-t-lg max-h-60 min-w-full object-cover "
        src="https://ik.imagekit.io/q5edmtudmz/FB_IMG_15658659197157667_wOd8n5yFyXI.jpg"
        alt=""
      />
    </a>

    <div class="p-2 m-2">
      <h5 class="text-gray-900 text-xl font-medium ">Card title</h5>

      <p class="text-gray-700 text-base mb-4">
        Some quick example text to build on.
      </p>

      <hr />
      <p class="flex items-center mb-2 justify-between">
        <p className="p-2">S</p>
        <span class="mr-2 text-xs text-blue-500 font-medium">$</span>
        <span class="text-xl text-blue-500 font-medium align-text-center">
          44.90
        </span>
       
        <p className="p-2">Highest</p>

        <FaRocket />
        <span class="mr-2 text-xs text-green-500 font-medium">$</span>
        <span class="text-xl text-green-500 font-medium align-text-center">
          70.90
        </span>
      </p>
      
      <hr />

      <div className="flex items-center justify-between">
      <button type="button" className=" py-1 px-2 m-1 text-green-400 rounded-lg ">
      DD:MM:YY:HH:MM:SS
        </button>

        <button class="py-1 px-2 m-1 bg-red-600 text-gray-200 rounded-lg hover:bg-red-700 ">
        Bid 
        </button>
     
      </div>


    </div>
  </div>
</div>









<div class="flex flex-wrap justify-center m-2">
  <div class="rounded-lg shadow-lg bg-white max-w-xs">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img
        class="rounded-t-lg max-h-60 min-w-full object-cover "
        src="https://ik.imagekit.io/q5edmtudmz/FB_IMG_15658659197157667_wOd8n5yFyXI.jpg"
        alt=""
      />
    </a>

    <div class="p-2 m-2">
      <h5 class="text-gray-900 text-xl font-medium ">Card title</h5>

      <p class="text-gray-700 text-base mb-4">
        Some quick example text to build on.
      </p>

      <hr />
      <p class="flex items-center mb-2 justify-between">
        <p className="p-2">S</p>
        <span class="mr-2 text-xs text-blue-500 font-medium">$</span>
        <span class="text-xl text-blue-500 font-medium align-text-center">
          44.90
        </span>
       
        <p className="p-2">Highest</p>

        <FaRocket />
        <span class="mr-2 text-xs text-green-500 font-medium">$</span>
        <span class="text-xl text-green-500 font-medium align-text-center">
          70.90
        </span>
      </p>
      
      <hr />

      <div className="flex items-center justify-between">
      <button type="button" className=" py-1 px-2 m-1 text-red-400 rounded-lg ">
      DD:MM:YY:HH:MM:SS
        </button>

        <button class="py-1 px-2 m-1 bg-red-600 text-gray-200 rounded-lg hover:bg-red-700 ">
        Bid 
        </button>
     
      </div>


    </div>
  </div>
</div>







</div>














































    </>
  );
};

export default Home;
