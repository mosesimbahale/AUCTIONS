import React from "react";

const Chart = () => {
  return (
    <section class="py-8 bg-blueGray-50">
      <div class="container px-4 mx-auto">
        <div class="px-8 md:px-12 lg:px-20 pt-14 pb-12 sm:pb-16 bg-white rounded-3xl">
          <div class="flex mb-6 sm:mb-12 flex-wrap items-center justify-between">
            <h3 class="mb-8 sm:mb-0 text-xl font-heading font-medium leading-8">
              Daily Visitors
            </h3>
            <div class="w-full sm:w-auto">
              <div class="relative inline-block mr-1 text-xxs border-2 border-gray-200 border-opacity-50 rounded-full tracking-wide hover:border-gray-300">
                <svg
                  class="absolute top-1/2 right-0 mr-3 -mt-px"
                  width="5"
                  height="3"
                  viewbox="0 0 5 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.35807 0.115939C4.50534 -0.0386464 4.74336 -0.0386464 4.88955 0.115939C5.03627 0.270525 5.03736 0.520284 4.88955 0.67487L2.76581 2.88406C2.61908 3.03865 2.3816 3.03865 2.23378 2.88406L0.110045 0.67487C-0.0366818 0.520861 -0.0366818 0.270525 0.110045 0.115939C0.257316 -0.0386464 0.49534 -0.0386464 0.641524 0.115939L2.50061 1.92771L4.35807 0.115939Z"
                    fill="#1D1C1D"
                  ></path>
                </svg>
                <select
                  class="py-1 pl-3 pr-6 font-bold tracking-wide bg-transparent outline-none appearance-none cursor-pointer"
                  name=""
                  id=""
                >
                  <option value="1">NOVEMBER</option>
                  <option value="2">DECEMBER</option>
                  <option value="3">JANUARY</option>
                </select>
              </div>
              <div class="relative inline-block text-xxs border-2 border-gray-200 border-opacity-50 rounded-full tracking-wide hover:border-gray-300">
                <svg
                  class="absolute top-1/2 right-0 mr-3 -mt-px"
                  width="5"
                  height="3"
                  viewbox="0 0 5 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.35807 0.115939C4.50534 -0.0386464 4.74336 -0.0386464 4.88955 0.115939C5.03627 0.270525 5.03736 0.520284 4.88955 0.67487L2.76581 2.88406C2.61908 3.03865 2.3816 3.03865 2.23378 2.88406L0.110045 0.67487C-0.0366818 0.520861 -0.0366818 0.270525 0.110045 0.115939C0.257316 -0.0386464 0.49534 -0.0386464 0.641524 0.115939L2.50061 1.92771L4.35807 0.115939Z"
                    fill="#1D1C1D"
                  ></path>
                </svg>
                <select
                  class="py-1 pl-3 pr-6 font-bold tracking-wide bg-transparent outline-none appearance-none cursor-pointer"
                  name=""
                  id=""
                >
                  <option value="1">2021</option>
                  <option value="2">2022</option>
                  <option value="3">2023</option>
                </select>
              </div>
            </div>
          </div>
          <div class="chart" data-type="columns"></div>
        </div>
      </div>
    </section>
  );
};

export default Chart;
