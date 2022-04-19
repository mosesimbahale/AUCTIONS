import React from "react";

const Sidebar = () => {
  return (
    <div>
      <section className="py-1 bg-gray-900 text-white">
        <div className="container px-2 mx-auto">
          <div className="flex flex-wrap">
            <div className="flex flex-wrap items-cente -mx-2 max-w-11/12">
              
              
              <div className="w-full md:w-auto px-4 mb-4 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-heading font-bold leading-relaxed">
                  Product analysis
                </h2>

                <p className="text-darkBlueGray-400 leading-8">
                  Achieve your goals and increase profits
                </p>

                
              </div>


   



              <div className="w-full md:w-auto px-4">
                <div className="flex items-center">
                  <a
                    className="inline-block py-2 px-6 m-4 text-sm leading-6 text-white font-medium tracking-tighter font-heading text-center bg-indigo-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                    href="/signin"
                  >
                    All
                  </a>

                  <a
                    className="inline-block py-2 px-6 m-4 text-sm leading-6 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                    href="/signin"
                  >
                    All
                  </a>

                  <a
                    className="inline-block py-2 px-6 m-4 text-sm leading-6 text-white font-medium tracking-tighter font-heading text-center bg-orange-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                    href="/signin"
                  >
                    All
                  </a>

                

                  <a
                    className="inline-block py-2 px-6 m-4 text-sm leading-6 text-white font-medium tracking-tighter font-heading text-center bg-orange-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                    href="/signin"
                  >
                    All
                  </a>

                

                




                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
