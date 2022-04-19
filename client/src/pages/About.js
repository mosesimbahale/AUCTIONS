import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <div className="App">
        <Navbar />

        <header className="App-header">
          <h1 className="text-3xl ">Navigation</h1>
        </header>
    

      {/*Collaborate.. 1st section*/}

      <section class="relative pt-20 2xl:pt-40">
        <div class="container px-4 mx-auto mb-16 md:mb-24">
          <div class="text-center">
            <a class="inline-block mb-8 text-2xl font-bold" href="#">
              <img
                class="h-7"
                src="zospace-assets/logos/zospace-dark-logo.svg"
                alt=""
                width="auto"
              />
            </a>
            <h2 class="mb-8 text-6xl 2xl:text-7xl font-bold font-heading">
              Collaborate everywhere.
            </h2>
            <p class="mb-16 text-xl">Get our free mobile application.</p>
            <a
              class="inline-block px-12 py-5 bg-blue-500 hover:bg-blue-600 rounded-full text-lg font-bold text-white transition duration-200"
              href="#"
            >
              Downolad
            </a>
          </div>
        </div>
        <div class="relative">
          <div class="hidden lg:block absolute right-0 top-0 mt-24 w-1/2 h-px bg-gray-50"></div>
          <div class="hidden lg:block absolute left-0 top-0 mt-40 w-1/2 h-px bg-gray-50"></div>
          <img
            class="lg:relative lg:max-w-4xl mx-auto"
            src="zospace-assets/images/smartphone.png"
            alt=""
          />
        </div>
      </section>

      {/*Collaborate.. 2nd section*/}

      <section class="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden">
        <img
          class="hidden lg:block absolute top-0 right-0 h-128 w-128 -mt-52 -mr-52"
          src="zospace-assets/lines/circle.svg"
          alt=""
        />
        <img
          class="hidden lg:block absolute bottom-0 left-0 h-128 w-128 -mb-52"
          src="zospace-assets/lines/full-circle.svg"
          alt=""
        />
        <img
          class="block absolute bottom-0 left-0 h-24 md:h-32 lg:h-72 lg:ml-24 -mb-8"
          src="zospace-assets/images/five-stars.svg"
          alt=""
        />
        <img
          class="block absolute bottom-0 left-0 h-128 w-128 -mb-96 -ml-24"
          src="zospace-assets/lines/circle.svg"
          alt=""
        />
        <div class="container px-3 mx-auto">
          <div class="max-w-3xl mx-auto text-center">
            <span class="text-lg text-blue-400 font-bold">
              What&apos;s new at Shuffle
            </span>
            <h2 class="my-10 text-5xl lg:text-6xl font-bold font-heading text-white">
              The quick brown fox jumps over the lazy dog.
            </h2>
            <div class="max-w-md mx-auto">
              <p class="mb-20 text-lg text-gray-200">
                A short message that will bring your customers into the world of
                your imagination.
              </p>
              <a
                class="inline-block mb-4 sm:mb-0 sm:mr-4 py-5 px-12 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200"
                href="#"
              >
                Join us now
              </a>
              <a
                class="inline-block py-5 px-12 text-white font-bold border border-gray-300 hover:border-gray-200 rounded-full"
                href="#"
              >
                Active demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*Testimonials.. 3rd section*/}

      <section class="py-24 2xl:py-44 bg-blueGray-100 rounded-t-10xl overflow-hidden">
        <div class="container px-4 mx-auto">
          <span class="text-xs text-gray-300 uppercase tracking-wide">
            What people say
          </span>
          <h1 class="mt-8 mb-14 md:mb-24 text-8xl md:text-10xl xl:text-11xl font-heading font-medium leading-tight">
            Testimonials
          </h1>
          <div class="flex flex-wrap -mx-2 mb-14">
            <div class="w-full xl:w-3/5 px-2 mb-4 xl:mb-0">
              <div class="flex items-center h-full py-12 px-8 bg-white rounded-3xl">
                <div class="flex flex-wrap items-center justify-between w-full -mx-2">
                  <div class="w-full md:w-auto px-2 mb-4 md:mb-0">
                    <a class="block mx-auto max-w-max" href="#">
                      <img
                        class="h-24 object-cover"
                        src="uinel-assets/images/ecommerce-reviews/product-phone1.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="w-full md:w-auto px-2 mb-8 md:mb-0">
                    <a
                      class="block mb-2 text-2xl xl:text-3xl font-heading font-medium hover:underline"
                      href="#"
                    >
                      Apple iPhone 12 Pro
                    </a>
                    <div class="flex">
                      <p class="text-sm font-heading font-medium mr-2">
                        <span>Color:</span>
                        <span class="text-darkBlueGray-300">Silver</span>
                      </p>
                      <p class="text-sm font-heading font-medium">
                        <span>Memory storage:</span>
                        <span class="text-darkBlueGray-300">128GB</span>
                      </p>
                    </div>
                  </div>
                  <div class="w-full md:w-auto px-2 mb-8 md:mb-0">
                    <p class="text-xl text-blue-500 font-heading font-medium">
                      $&nbsp;720,70
                    </p>
                  </div>
                  <div class="w-full md:w-auto px-2">
                    <a
                      class="inline-block w-full md:w-auto py-4 px-6 text-center leading-8 font-heading font-medium tracking-tighter text-xl text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                      href="#"
                    >
                      Add&nbsp;to&nbsp;cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/5 px-2 mb-4 md:mb-0">
              <div class="py-12 px-12 h-full bg-white rounded-3xl">
                <p class="font-heading font-medium">
                  <span class="text-9xl">4.3</span>
                  <span class="text-gray-300">/5</span>
                </p>
                <div class="flex mb-3">
                  <a class="inline-block mr-1" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      ></path>
                    </svg>
                  </a>
                  <a class="inline-block mr-1" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      ></path>
                    </svg>
                  </a>
                  <a class="inline-block mr-1" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      ></path>
                    </svg>
                  </a>
                  <a class="inline-block mr-1" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      ></path>
                    </svg>
                  </a>
                  <a class="inline-block text-gray-200" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
                <p class="text-sm text-gray-300 font-medium">1 218 reviews</p>
              </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/5 px-2">
              <div class="py-12 px-12 h-full bg-white rounded-3xl">
                <p class="font-heading font-medium">
                  <span class="text-9xl">4.1</span>
                  <span class="text-gray-300">/5</span>
                </p>
                <div class="flex mb-3">
                  <a class="inline-block mr-1" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      ></path>
                    </svg>
                  </a>
                  <a class="inline-block mr-1" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      ></path>
                    </svg>
                  </a>
                  <a class="inline-block mr-1" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      ></path>
                    </svg>
                  </a>
                  <a class="inline-block mr-1" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      ></path>
                    </svg>
                  </a>
                  <a class="inline-block text-gray-200" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
                <p class="text-sm text-gray-300 font-medium">Uistore</p>
              </div>
            </div>
          </div>
          <a
            class="inline-block mb-14 text-3xl font-heading font-medium underline hover:text-darkBlueGray-700"
            href="#"
          >
            1,218 reviews
          </a>
          <div class="mb-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
            <div class="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
              <div class="flex flex-wrap items-center">
                <img
                  class="mr-6"
                  src="uinel-assets/images/ecommerce-reviews/user.png"
                  alt=""
                />
                <h4 class="w-full md:w-auto text-xl font-heading font-medium">
                  Faustina H. Fawn
                </h4>
                <div class="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
                <span class="mr-4 text-xl font-heading font-medium">5.0</span>
                <div class="inline-flex">
                  <a class="inline-block mr-1" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      ></path>
                    </svg>
                  </a>
                  <a class="inline-block mr-1" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      ></path>
                    </svg>
                  </a>
                  <a class="inline-block mr-1" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      ></path>
                    </svg>
                  </a>
                  <a class="inline-block mr-1" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      ></path>
                    </svg>
                  </a>
                  <a class="inline-block text-gray-200" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="px-4 overflow-hidden md:px-16 pt-8 pb-12 bg-white">
              <div class="flex flex-wrap">
                <div class="w-full md:w-2/3 mb-6 md:mb-0">
                  <p class="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">
                    I haretra neque non mi aliquam, finibus hart bibendum
                    molestie. Vestibulum suscipit sagittis dignissim mauris.
                  </p>
                  <div class="-mb-2">
                    <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                      <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                        <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                          <svg
                            width="11"
                            height="11"
                            viewbox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <span class="text-green-500 font-heading font-medium">
                          battery life
                        </span>
                      </div>
                    </div>
                    <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                      <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                        <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                          <svg
                            width="11"
                            height="11"
                            viewbox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <span class="text-green-500 font-heading font-medium">
                          functionality
                        </span>
                      </div>
                    </div>
                    <div class="inline-flex w-full md:w-auto mb-2">
                      <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                        <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                          <svg
                            width="11"
                            height="11"
                            viewbox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <span class="text-green-500 font-heading font-medium">
                          ease of use
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/3 text-right">
                  <p class="mb-8 text-sm text-gray-300">Added 2 months ago</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
            <div class="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
              <div class="flex flex-wrap items-center">
                <img
                  class="mr-6"
                  src="uinel-assets/images/ecommerce-reviews/user2.png"
                  alt=""
                />
                <h4 class="w-full md:w-auto text-xl font-heading font-medium">
                  Ainsley Stones
                </h4>
                <div class="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
                <span class="mr-4 text-xl font-heading font-medium">4.3</span>
                <div class="flex">
                  <a class="inline-block mr-1" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      ></path>
                    </svg>
                  </a>
                  <a class="inline-block mr-1" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      ></path>
                    </svg>
                  </a>
                  <a class="inline-block mr-1" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      ></path>
                    </svg>
                  </a>
                  <a class="inline-block mr-1" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      ></path>
                    </svg>
                  </a>
                  <a class="inline-block text-gray-200" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="px-4 md:px-16 pt-8 pb-12 bg-white">
              <div class="flex flex-wrap">
                <div class="w-full md:w-2/3 mb-6 md:mb-0">
                  <p class="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">
                    I haretra neque non mi aliquam, finibus hart bibendum
                    molestie. Morbi facilisis neque in condimentum malesuada.
                    Vestibulum suscipit sagittis dignissim mauris.
                  </p>
                  <div class="-mb-2">
                    <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                      <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                        <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                          <svg
                            width="11"
                            height="11"
                            viewbox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <span class="text-green-500 font-heading font-medium">
                          battery life
                        </span>
                      </div>
                    </div>
                    <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                      <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                        <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                          <svg
                            width="11"
                            height="11"
                            viewbox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <span class="text-green-500 font-heading font-medium">
                          functionality
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/3 text-right">
                  <p class="mb-8 text-sm text-gray-300">Added 2 months ago</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-14 md:mb-24 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
            <div class="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
              <div class="flex flex-wrap items-center">
                <img
                  class="mr-6"
                  src="uinel-assets/images/ecommerce-reviews/user3.png"
                  alt=""
                />
                <h4 class="w-full md:w-auto text-xl font-heading font-medium">
                  Jasmine Joy
                </h4>
                <div class="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
                <span class="mr-4 text-xl font-heading font-medium">5.0</span>
                <div class="flex">
                  <a class="inline-block mr-1" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      ></path>
                    </svg>
                  </a>
                  <a class="inline-block mr-1" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      ></path>
                    </svg>
                  </a>
                  <a class="inline-block mr-1" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      ></path>
                    </svg>
                  </a>
                  <a class="inline-block mr-1" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      ></path>
                    </svg>
                  </a>
                  <a class="inline-block text-gray-200" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="px-4 md:px-16 pt-8 pb-12 bg-white">
              <div class="flex flex-wrap">
                <div class="w-full md:w-2/3 mb-6 md:mb-0">
                  <p class="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">
                    I haretra neque non mi aliquam, finibus hart bibendum
                    molestie. Vestibulum suscipit sagittis dignissim mauris.
                  </p>
                  <div class="-mb-2">
                    <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                      <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                        <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                          <svg
                            width="11"
                            height="11"
                            viewbox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <span class="text-green-500 font-heading font-medium">
                          battery life
                        </span>
                      </div>
                    </div>
                    <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                      <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                        <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                          <svg
                            width="11"
                            height="11"
                            viewbox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <span class="text-green-500 font-heading font-medium">
                          functionality
                        </span>
                      </div>
                    </div>
                    <div class="inline-flex w-full md:w-auto mb-2">
                      <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                        <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                          <svg
                            width="11"
                            height="11"
                            viewbox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <span class="text-green-500 font-heading font-medium">
                          ease of use
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/3 text-right">
                  <p class="mb-8 text-sm text-gray-300">Added 2 months ago</p>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <button class="inline-block w-full md:w-auto h-full py-4 px-10 leading-8 font-heading font-medium tracking-tighter text-xl text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl">
              See all
            </button>
          </div>
        </div>
      </section>

      {/*features types of auctions.. 4TH section*/}

      <section class="relative py-20 2xl:py-40 bg-gray-900 overflow-hidden">
        <div class="absolute h-40 w-40 bg-blue-500 bottom-0 right-0 -mr-20 -mb-20 rounded-full"></div>
        <div class="container px-4 mx-auto">
          <div>
            <div class="flex flex-wrap -mx-6 lg:-mx-8">
              <div class="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-8 mb-20 lg:mb-0">
                <span class="flex mb-10 justify-center items-center w-20 h-20 bg-blue-500 rounded-lg">
                  <svg
                    class="w-8 h-8"
                    width="35"
                    height="35"
                    viewbox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M22.6042 34.9999H2.1875C0.981458 34.9999 0 34.0185 0 32.8124V12.3958C0 11.1897 0.981458 10.2083 2.1875 10.2083H22.6042C23.8102 10.2083 24.7917 11.1897 24.7917 12.3958V32.8124C24.7917 34.0185 23.8102 34.9999 22.6042 34.9999ZM2.1875 11.6666C1.78646 11.6666 1.45833 11.9933 1.45833 12.3958V32.8124C1.45833 33.2149 1.78646 33.5416 2.1875 33.5416H22.6042C23.0052 33.5416 23.3333 33.2149 23.3333 32.8124V12.3958C23.3333 11.9933 23.0052 11.6666 22.6042 11.6666H2.1875Z"
                        fill="white"
                      ></path>
                      <path
                        d="M34.2702 5.83333C33.8677 5.83333 33.541 5.50667 33.541 5.10417V3.64583C33.541 2.43979 32.5596 1.45833 31.3535 1.45833H29.8952C29.4927 1.45833 29.166 1.13167 29.166 0.729167C29.166 0.326667 29.4927 0 29.8952 0H31.3535C33.3646 0 34.9993 1.63625 34.9993 3.64583V5.10417C34.9993 5.50667 34.6727 5.83333 34.2702 5.83333Z"
                        fill="white"
                      ></path>
                      <path
                        d="M6.56217 5.83333C6.15967 5.83333 5.83301 5.50667 5.83301 5.10417V3.64583C5.83301 1.63625 7.4678 0 9.47884 0H10.9372C11.3397 0 11.6663 0.326667 11.6663 0.729167C11.6663 1.13167 11.3397 1.45833 10.9372 1.45833H9.47884C8.2728 1.45833 7.29134 2.43979 7.29134 3.64583V5.10417C7.29134 5.50667 6.96467 5.83333 6.56217 5.83333Z"
                        fill="white"
                      ></path>
                      <path
                        d="M24.0618 1.45833H16.7702C16.3677 1.45833 16.041 1.13167 16.041 0.729167C16.041 0.326667 16.3677 0 16.7702 0H24.0618C24.4643 0 24.791 0.326667 24.791 0.729167C24.791 1.13167 24.4643 1.45833 24.0618 1.45833Z"
                        fill="white"
                      ></path>
                      <path
                        d="M31.3535 29.1666H29.8952C29.4927 29.1666 29.166 28.8399 29.166 28.4374C29.166 28.0349 29.4927 27.7083 29.8952 27.7083H31.3535C32.5596 27.7083 33.541 26.7268 33.541 25.5208V24.0624C33.541 23.6599 33.8677 23.3333 34.2702 23.3333C34.6727 23.3333 34.9993 23.6599 34.9993 24.0624V25.5208C34.9993 27.5303 33.3646 29.1666 31.3535 29.1666Z"
                        fill="white"
                      ></path>
                      <path
                        d="M34.2702 18.9583C33.8677 18.9583 33.541 18.6316 33.541 18.2291V10.9374C33.541 10.5349 33.8677 10.2083 34.2702 10.2083C34.6727 10.2083 34.9994 10.5349 34.9994 10.9374V18.2291C34.9994 18.6316 34.6727 18.9583 34.2702 18.9583Z"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                </span>
                <div class="pb-px mb-12 bg-gray-500"></div>
                <h3 class="mt-12 mb-8 text-lg font-bold font-heading text-white">
                  Backups
                </h3>
                <p class="text-lg text-gray-200">
                  The brown me quam, sagittis porttitor lorem vel, commodo
                  fringilla nisl.
                </p>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-8 mb-20 lg:mb-0">
                <span class="flex mb-10 justify-center items-center w-20 h-20 bg-violet-500 rounded-lg">
                  <svg
                    class="w-8 h-8"
                    width="35"
                    height="35"
                    viewbox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M24.0625 18.9583C23.7402 18.9583 23.431 18.8927 23.1467 18.7615L17.5 16.1175L11.8592 18.7585C11.569 18.8927 11.2598 18.9583 10.9375 18.9583C9.73146 18.9583 8.75 17.9769 8.75 16.7708C8.75 16.4529 8.81417 16.1583 8.94833 15.8681L15.5079 1.28917C15.8419 0.510417 16.6265 0 17.5 0C18.3735 0 19.1581 0.510417 19.4965 1.30083L26.0546 15.874C26.1858 16.1583 26.25 16.4529 26.25 16.7708C26.25 17.9769 25.2685 18.9583 24.0625 18.9583ZM17.5 14.5833C17.605 14.5833 17.7115 14.6067 17.8092 14.6519L23.7592 17.4373C24.166 17.6225 24.7917 17.2856 24.7917 16.7708C24.7917 16.6629 24.7712 16.5754 24.7275 16.4763L18.1621 1.88854C17.9346 1.35771 17.061 1.36792 16.8423 1.87833L10.2754 16.4719C10.2287 16.5754 10.2083 16.6629 10.2083 16.7708C10.2083 17.2856 10.8092 17.6327 11.2467 17.4358L17.1908 14.6533C17.2885 14.6067 17.395 14.5833 17.5 14.5833Z"
                        fill="white"
                      ></path>
                      <path
                        d="M17.4997 35C8.65488 35 1.45801 27.8031 1.45801 18.9583C1.45801 12.9194 4.7903 7.46227 10.154 4.71769C10.507 4.53685 10.9518 4.6754 11.1355 5.0356C11.3193 5.3929 11.1763 5.83331 10.8176 6.0156C5.94384 8.50936 2.91634 13.4691 2.91634 18.9583C2.91634 26.9996 9.45842 33.5417 17.4997 33.5417C25.5409 33.5417 32.083 26.9996 32.083 18.9583C32.083 13.4794 29.0613 8.51956 24.1963 6.0156C23.8376 5.83185 23.6961 5.39144 23.8813 5.03414C24.0665 4.67539 24.507 4.53539 24.8628 4.7206C30.2163 7.47394 33.5413 12.931 33.5413 18.9583C33.5413 27.8031 26.3445 35 17.4997 35Z"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                </span>
                <div class="pb-px mb-12 bg-gray-500"></div>
                <h3 class="mt-12 mb-8 text-lg font-bold font-heading text-white">
                  Navigation
                </h3>
                <p class="text-lg text-gray-200">
                  It&rsquo;s over, maecenas tincidunt malesuada dolor sit amet
                  malesuada.
                </p>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-8 mb-10 lg:mb-0">
                <span class="flex mb-10 justify-center items-center w-20 h-20 bg-green-500 rounded-lg">
                  <svg
                    class="w-8 h-8"
                    width="36"
                    height="35"
                    viewbox="0 0 36 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M32.25 35H5.25C3.183 35 1.5 33.3638 1.5 31.3542V3.64588C1.5 3.24338 1.836 2.91672 2.25 2.91672C2.664 2.91672 3 3.24338 3 3.64588V31.3542C3 32.5603 4.0095 33.5417 5.25 33.5417H31.5V6.56255C31.5 6.16005 31.836 5.83338 32.25 5.83338C32.664 5.83338 33 6.16005 33 6.56255V34.2709C33 34.6734 32.664 35 32.25 35Z"
                        fill="white"
                      ></path>
                      <path
                        d="M32.25 7.29167H5.25C3.183 7.29167 1.5 5.65542 1.5 3.64583C1.5 1.63625 3.183 0 5.25 0H29.25C29.664 0 30 0.326667 30 0.729167V5.83333H32.25C32.664 5.83333 33 6.16 33 6.5625C33 6.965 32.664 7.29167 32.25 7.29167ZM5.25 1.45833C4.0095 1.45833 3 2.43979 3 3.64583C3 4.85187 4.0095 5.83333 5.25 5.83333H28.5V1.45833H5.25Z"
                        fill="white"
                      ></path>
                      <path
                        d="M12.9868 27.7055C12.2338 27.7055 11.6158 27.4897 11.1718 27.0566C10.2898 26.1991 10.2808 24.6838 11.1478 22.7866C11.9158 21.1051 13.3018 19.2443 15.0478 17.5482C16.7938 15.8507 18.7063 14.5047 20.4358 13.7565C22.3858 12.9122 23.9443 12.9209 24.8278 13.7799C25.7098 14.6374 25.7188 16.154 24.8518 18.0499C24.0838 19.7313 22.6978 21.5922 20.9518 23.2882C19.2058 24.9857 17.2933 26.3318 15.5638 27.0799C14.5963 27.4955 13.7263 27.7055 12.9868 27.7055ZM23.0143 14.582C22.5043 14.582 21.8188 14.754 21.0448 15.088C19.4803 15.7647 17.7268 17.0043 16.1068 18.5778C14.4868 20.1513 13.2148 21.8561 12.5188 23.3772C11.9488 24.627 11.8378 25.6405 12.2323 26.024C12.6268 26.4076 13.6693 26.2997 14.9548 25.7455C16.5193 25.0688 18.2728 23.8293 19.8928 22.2557C21.5128 20.6822 22.7863 18.9774 23.4823 17.4549C24.0523 16.2051 24.1633 15.1916 23.7688 14.808C23.6113 14.6563 23.3503 14.582 23.0143 14.582Z"
                        fill="white"
                      ></path>
                      <path
                        d="M23.0128 27.7054C22.2733 27.7054 21.4033 27.4969 20.4358 27.0784C18.7063 26.3317 16.7923 24.9842 15.0478 23.2867C13.3018 21.5892 11.9173 19.7298 11.1478 18.0484C10.2808 16.1525 10.2898 14.6359 11.1718 13.7784C12.0523 12.9209 13.6138 12.9121 15.5638 13.755C17.2933 14.5017 19.2073 15.8492 20.9518 17.5467C22.6978 19.2442 24.0823 21.1036 24.8518 22.785C25.7188 24.6823 25.7098 26.1975 24.8278 27.055C24.3838 27.4882 23.7658 27.7054 23.0128 27.7054ZM12.9853 14.5819C12.6478 14.5819 12.3898 14.6563 12.2323 14.8094C11.8378 15.1929 11.9488 16.2065 12.5188 17.4563C13.2148 18.9773 14.4898 20.6821 16.1083 22.2571C17.7268 23.8321 19.4803 25.0702 21.0463 25.7469C22.3318 26.3025 23.3743 26.4075 23.7688 26.0254C24.1633 25.6419 24.0523 24.6284 23.4823 23.3786C22.7863 21.8575 21.5113 20.1527 19.8928 18.5777C18.2743 17.0027 16.5208 15.7646 14.9548 15.0879C14.1808 14.754 13.4953 14.5819 12.9853 14.5819ZM11.7013 14.2932H11.7163H11.7013Z"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                </span>
                <div class="pb-px mb-12 bg-gray-500"></div>
                <h3 class="mt-12 mb-8 text-lg font-bold font-heading text-white">
                  Documents
                </h3>
                <p class="text-lg text-gray-200">
                  The time, this accumsan augue, posuere posuere elit lorem.
                </p>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-8">
                <span class="flex mb-10 justify-center items-center w-20 h-20 bg-pink-500 rounded-lg">
                  <svg
                    class="w-8 h-8"
                    width="35"
                    height="35"
                    viewbox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.0618 13.1249C24.0618 12.8935 23.952 12.6758 23.766 12.5384C23.5797 12.4009 23.3394 12.3599 23.1183 12.428L14.3682 15.1203C14.0623 15.2144 13.8535 15.4972 13.8535 15.8173V21.536C13.4245 21.2878 12.9264 21.1457 12.3952 21.1457C10.7844 21.1457 9.47852 22.4515 9.47852 24.0624C9.47852 25.6733 10.7844 26.9791 12.3952 26.9791C14.0044 26.9791 15.3092 25.6758 15.3118 24.0671V24.0624V16.3557L22.6035 14.1122V20.0777C22.1745 19.8294 21.6765 19.6874 21.1452 19.6874C19.5343 19.6874 18.2285 20.9932 18.2285 22.6041C18.2285 24.2149 19.5343 25.5207 21.1452 25.5207C22.7545 25.5207 24.0592 24.2174 24.0618 22.6087V22.6041V13.1249ZM22.6035 22.6041C22.6035 21.7986 21.9506 21.1457 21.1452 21.1457C20.3397 21.1457 19.6868 21.7986 19.6868 22.6041C19.6868 23.4095 20.3397 24.0624 21.1452 24.0624C21.9506 24.0624 22.6035 23.4095 22.6035 22.6041ZM12.3952 22.6041C11.5898 22.6041 10.9368 23.257 10.9368 24.0624C10.9368 24.8678 11.5898 25.5207 12.3952 25.5207C13.2006 25.5207 13.8535 24.8678 13.8535 24.0624C13.8535 23.257 13.2006 22.6041 12.3952 22.6041Z"
                      fill="white"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.208 3.64577C8.19447 3.64577 6.56217 5.27807 6.56217 7.2916V8.0937C4.89804 8.43149 3.64551 9.90278 3.64551 11.6666V27.7083C3.64551 29.7218 5.27781 31.3541 7.29134 31.3541H27.708C29.7215 31.3541 31.3538 29.7218 31.3538 27.7083V11.6666C31.3538 9.90278 30.1013 8.43149 28.4372 8.0937V7.2916C28.4372 5.27807 26.8049 3.64577 24.7913 3.64577H10.208ZM26.9788 8.02077V7.2916C26.9788 6.08347 25.9994 5.1041 24.7913 5.1041H10.208C8.99988 5.1041 8.02051 6.08347 8.02051 7.2916V8.02077H26.9788ZM7.29134 9.4791C6.08321 9.4791 5.10384 10.4585 5.10384 11.6666V27.7083C5.10384 28.9163 6.08321 29.8958 7.29134 29.8958H27.708C28.9161 29.8958 29.8955 28.9163 29.8955 27.7083V11.6666C29.8955 10.4585 28.9161 9.4791 27.708 9.4791H7.29134Z"
                      fill="white"
                    ></path>
                  </svg>
                </span>
                <div class="pb-px mb-12 bg-gray-500"></div>
                <h3 class="mt-12 mb-8 text-lg font-bold font-heading text-white">
                  Weekly updates
                </h3>
                <p class="text-lg text-gray-200">
                  Again and again vehicula libero at nibh volutpat lacinia non
                  sed you see.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*FAQS.. 5TH section*/}

      <section class="py-20 2xl:py-40 bg-blue-50">
        <div class="container px-4 mx-auto">
          <div class="mb-20 text-center">
            <span class="text-lg font-bold text-blue-500">
              Hey! Have any questions?
            </span>
            <h2 class="mt-8 text-7xl font-bold font-heading">FAQ&apos;s</h2>
          </div>
          <div class="max-w-4xl mx-auto">
            <ul>
              <li class="mb-4 px-4 lg:px-12 py-8 bg-white rounded-2xl">
                <button class="flex w-full text-left">
                  <div class="w-auto mr-8">
                    <span class="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">
                      1
                    </span>
                  </div>
                  <div class="w-full mt-3">
                    <div class="flex items-center justify-between">
                      <h3 class="text-xl font-bold">
                        How should I develop my workflow over time?
                      </h3>
                      <span class="ml-4">
                        <svg
                          class="w-4 h-4"
                          width="18"
                          height="10"
                          viewbox="0 0 18 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.18267 9.00018C0.910673 9.26818 0.473672 9.26818 0.203672 9.00018C-0.0663284 8.73218 -0.0673279 8.29918 0.203672 8.03118L8.11167 0.201183C8.38167 -0.0668173 8.81867 -0.0668173 9.09067 0.201183L16.9987 8.03118C17.2687 8.29918 17.2687 8.73218 16.9987 9.00018C16.7277 9.26818 16.2897 9.26818 16.0197 9.00018L8.60067 1.85918L1.18267 9.00018Z"
                            fill="#1F40FF"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div class="mt-6 border-l-2 border-gray-50 pl-10">
                      <p class="mb-5 text-xl">
                        The point of using Lorem Ipsum is that it has a
                        more-or-less normal:
                      </p>
                      <p class="mb-2 text-lg">
                        <span class="inline-block mr-6 h-2 w-2 rounded-full bg-blue-500"></span>
                        <span>Distribution of letters</span>
                      </p>
                      <p class="text-lg">
                        <span class="inline-block mr-6 h-2 w-2 rounded-full bg-blue-500"></span>
                        <span>Content here</span>
                      </p>
                    </div>
                  </div>
                </button>
              </li>
              <li class="mb-4 px-4 lg:px-12 py-8 bg-white rounded-2xl">
                <button class="flex w-full text-left">
                  <div class="w-auto mr-8">
                    <span class="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">
                      2
                    </span>
                  </div>
                  <div class="w-full mt-3">
                    <div class="flex items-center justify-between">
                      <h3 class="text-xl font-bold">Can I pay by card?</h3>
                      <span class="ml-4">
                        <svg
                          class="w-4 h-4"
                          width="18"
                          height="10"
                          viewbox="0 0 18 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z"
                            fill="#1F40FF"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div class="hidden mt-6 border-l-2 border-gray-50 pl-10">
                      <p class="text-xl">
                        The point of using Lorem Ipsum is that it has a
                        more-or-less normal:
                      </p>
                    </div>
                  </div>
                </button>
              </li>
              <li class="mb-4 px-4 lg:px-12 py-8 bg-white rounded-2xl">
                <button class="flex w-full text-left">
                  <div class="w-auto mr-8">
                    <span class="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">
                      3
                    </span>
                  </div>
                  <div class="w-full mt-3">
                    <div class="flex items-center justify-between">
                      <h3 class="text-xl font-bold">
                        How often should the app be updated?
                      </h3>
                      <span class="ml-4">
                        <svg
                          class="w-4 h-4"
                          width="18"
                          height="10"
                          viewbox="0 0 18 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z"
                            fill="#1F40FF"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div class="hidden mt-6 border-l-2 border-gray-50 pl-10">
                      <p class="text-xl">
                        The point of using Lorem Ipsum is that it has a
                        more-or-less normal:
                      </p>
                    </div>
                  </div>
                </button>
              </li>
              <li class="mb-4 px-4 lg:px-12 py-8 bg-white rounded-2xl">
                <button class="flex w-full text-left">
                  <div class="w-auto mr-8">
                    <span class="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">
                      4
                    </span>
                  </div>
                  <div class="w-full mt-3">
                    <div class="flex items-center justify-between">
                      <h3 class="text-xl font-bold">Are Zospace apps free?</h3>
                      <span class="ml-4">
                        <svg
                          class="w-4 h-4"
                          width="18"
                          height="10"
                          viewbox="0 0 18 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z"
                            fill="#1F40FF"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div class="hidden mt-6 border-l-2 border-gray-50 pl-10">
                      <p class="text-xl">
                        The point of using Lorem Ipsum is that it has a
                        more-or-less normal:
                      </p>
                    </div>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/*Types of subscriptions.. 6TH section*/}

      <section class="relative py-20 2xl:py-40 bg-gray-800">
        <div class="container px-4 pb-20 mx-auto border-b border-gray-500">
          <div class="mb-14 text-center">
            <span class="text-lg text-blue-400 font-bold">
              Check of details
            </span>
            <h2 class="mt-8 text-5xl font-bold font-heading text-white">
              See all features
            </h2>
          </div>
          <div class="pt-20 border-t border-gray-500 overflow-x-auto overflow-y-hidden">
            <table class="table-auto w-full mb-10">
              <thead>
                <tr class="text-lg text-gray-200 text-left font-bold">
                  <th class="pb-6"></th>
                  <th class="pb-6 pr-8">Feature 1</th>
                  <th class="pb-6 pr-8">Feature 2</th>
                  <th class="pb-6 pr-8">Feature 3</th>
                  <th class="pb-6 pr-8">Feature 4</th>
                  <th class="pb-6 pr-8">Feature 5</th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-xl text-white bg-gray-700">
                  <td class="py-5 pl-10 text-left text-gray-200">
                    Number of Team Members
                  </td>
                  <td>5</td>
                  <td>20</td>
                  <td>200+</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                </tr>
                <tr class="text-xl text-white">
                  <td class="py-5 pl-10 text-left text-gray-200">Users</td>
                  <td>3</td>
                  <td>10</td>
                  <td>50+</td>
                  <td>100+</td>
                  <td>Unlimited</td>
                </tr>
                <tr class="text-xl text-white bg-gray-700">
                  <td class="py-5 pl-10 text-left text-gray-200">Projects</td>
                  <td>3/mo</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                </tr>
                <tr class="text-xl text-white">
                  <td class="py-5 pl-10 text-left text-gray-200">Video chat</td>
                  <td>
                    <svg
                      width="20"
                      height="16"
                      viewbox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                        fill="white"
                      ></path>
                    </svg>
                  </td>
                  <td>
                    <svg
                      width="20"
                      height="16"
                      viewbox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                        fill="white"
                      ></path>
                    </svg>
                  </td>
                  <td>
                    <svg
                      width="20"
                      height="16"
                      viewbox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                        fill="white"
                      ></path>
                    </svg>
                  </td>
                  <td>
                    <svg
                      width="20"
                      height="16"
                      viewbox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                        fill="white"
                      ></path>
                    </svg>
                  </td>
                  <td>
                    <svg
                      width="20"
                      height="16"
                      viewbox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                        fill="white"
                      ></path>
                    </svg>
                  </td>
                </tr>
                <tr class="text-xl text-white bg-gray-700">
                  <td class="py-5 pl-10 text-left text-gray-200">
                    Realt-Time Collaboration
                  </td>
                  <td>
                    <svg
                      width="16"
                      height="2"
                      viewbox="0 0 16 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        y1="1.35"
                        x2="16"
                        y2="1.35"
                        stroke="#414C5E"
                        stroke-width="1.3"
                      ></line>
                    </svg>
                  </td>
                  <td>
                    <svg
                      width="16"
                      height="2"
                      viewbox="0 0 16 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        y1="1.35"
                        x2="16"
                        y2="1.35"
                        stroke="#414C5E"
                        stroke-width="1.3"
                      ></line>
                    </svg>
                  </td>
                  <td>
                    <svg
                      width="20"
                      height="16"
                      viewbox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                        fill="white"
                      ></path>
                    </svg>
                  </td>
                  <td>
                    <svg
                      width="20"
                      height="16"
                      viewbox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                        fill="white"
                      ></path>
                    </svg>
                  </td>
                  <td>
                    <svg
                      width="20"
                      height="16"
                      viewbox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                        fill="white"
                      ></path>
                    </svg>
                  </td>
                </tr>
                <tr class="text-xl text-white">
                  <td class="py-5 pl-10 text-left text-gray-200">Support</td>
                  <td>
                    <svg
                      width="16"
                      height="2"
                      viewbox="0 0 16 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        y1="1.35"
                        x2="16"
                        y2="1.35"
                        stroke="#414C5E"
                        stroke-width="1.3"
                      ></line>
                    </svg>
                  </td>
                  <td>
                    <svg
                      width="16"
                      height="2"
                      viewbox="0 0 16 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        y1="1.35"
                        x2="16"
                        y2="1.35"
                        stroke="#414C5E"
                        stroke-width="1.3"
                      ></line>
                    </svg>
                  </td>
                  <td>
                    <svg
                      width="16"
                      height="2"
                      viewbox="0 0 16 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        y1="1.35"
                        x2="16"
                        y2="1.35"
                        stroke="#414C5E"
                        stroke-width="1.3"
                      ></line>
                    </svg>
                  </td>
                  <td>
                    <svg
                      width="20"
                      height="16"
                      viewbox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                        fill="white"
                      ></path>
                    </svg>
                  </td>
                  <td>
                    <svg
                      width="20"
                      height="16"
                      viewbox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                        fill="white"
                      ></path>
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="flex justify-end">
              <div class="max-w-xs mr-8 flex items-center">
                <p class="mr-6 text-5xl font-bold font-heading text-white">
                  8<span class="text-3xl">%</span>
                </p>
                <p class="text-lg text-gray-200">
                  The tell condimentum turpis lorem
                </p>
              </div>
              <div class="max-w-xs flex items-center">
                <p class="mr-6 text-5xl font-bold font-heading text-white">
                  20
                </p>
                <p class="text-lg text-gray-200">
                  A sad laoreet sit amet nec purus
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Contact US.. 7nth section*/}

      <section class="relative py-20 2xl:py-40 bg-gray-800">
        <img
          class="hidden lg:block absolute top-0 left-0 w-2/5"
          src="zospace-assets/images/map.svg"
          alt=""
        />
        <img
          class="hidden lg:block absolute top-0 left-0 mt-40 ml-40"
          src="zospace-assets/images/office-tag.svg"
          alt=""
        />
        <div class="relative container px-4 mx-auto">
          <div class="text-center mb-20">
            <span class="text-lg text-blue-400 font-bold">
              Have a question?
            </span>
            <h2 class="mt-10 text-5xl font-bold font-heading text-white">
              Contact with us
            </h2>
          </div>
          <div class="max-w-4xl mx-auto">
            <div class="flex flex-wrap -mx-4 mb-20">
              <div class="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                <div class="bg-gray-600 rounded-b-lg">
                  <img
                    class="h-64 w-full rounded-lg object-cover"
                    src="https://image.freepik.com/free-photo/contacting-with-friends-via-computer_329181-14587.jpg"
                    alt=""
                  />
                  <div class="px-14 py-8">
                    <div class="mb-6 py-px bg-gray-500"></div>
                    <h3 class="mb-8 lg:mb-4 text-xl text-white font-bold">
                      Have any question? Send a message!
                    </h3>
                    <div class="md:text-right">
                      <a
                        class="inline-block px-12 py-4 border border-gray-300 hover:border-gray-200 rounded-full font-bold text-white"
                        href="#"
                      >
                        Message
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-1/2 px-4">
                <div class="py-6 px-8 mb-4 bg-gray-600 rounded-lg">
                  <div class="flex items-center">
                    <span class="flex items-center justify-center w-12 h-12 mr-8 bg-blue-500 rounded-lg">
                      <svg
                        class="w-4 h-4"
                        width="18"
                        height="18"
                        viewbox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.9347 13.3167C17.811 12.6058 17.2022 12.0401 16.4551 11.94L12.3077 11.3855C11.555 11.2832 10.8101 11.6825 10.4984 12.3528C10.4185 12.5237 10.3521 12.7014 10.2981 12.8848C9.13582 12.4 8.09277 11.7004 7.19375 10.8018C6.29473 9.90315 5.59374 8.86053 5.10992 7.6987C5.29332 7.64471 5.4711 7.57835 5.64213 7.4985C6.31274 7.18695 6.70993 6.44351 6.60866 5.69108L6.05394 1.54536C5.9538 0.797426 5.38784 0.188953 4.66434 0.0641091C4.40105 0.0202451 4.18164 0 3.97348 0C2.61201 0 1.32368 0.71982 0.612565 1.87716C-0.157059 3.13122 -0.0501675 4.73507 0.128736 5.9925C0.533802 8.84029 1.99766 11.7038 4.14451 13.8498C5.74002 15.4446 7.71246 16.6402 9.84693 17.306C10.9339 17.6457 12.2942 18 13.605 18C14.5851 18 15.537 17.802 16.3235 17.2498C17.3733 16.5109 18 15.3052 18 14.0196C18 13.8115 17.9797 13.5911 17.9347 13.3167Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <p class="text-lg font-bold text-white">
                      +44 20457523 00 01
                    </p>
                  </div>
                </div>
                <div class="py-6 px-8 mb-10 bg-gray-600 rounded-lg">
                  <div class="flex items-center">
                    <span class="flex items-center justify-center w-12 h-12 mr-8 bg-blue-500 rounded-lg">
                      <svg
                        class="w-5 h-3"
                        width="21"
                        height="14"
                        viewbox="0 0 21 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.8109 0H2.1878C0.981688 0 0 0.980499 0 2.18676V11.8119C0 13.0182 0.981688 14 2.1878 14H18.8122C20.0183 14 21 13.0182 21 11.8119V2.18676C20.9987 0.980499 20.017 0 18.8109 0ZM19.2492 4.73317L11.716 8.67092C11.3393 8.86387 10.9193 8.96887 10.4993 8.96887C10.0794 8.96887 9.66858 8.86387 9.28273 8.67092L1.74945 4.73317V2.75511L10.0872 7.11288C10.3405 7.24414 10.6555 7.24414 10.9101 7.11288L19.2479 2.75511V4.73317H19.2492Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <p class="text-lg font-bold text-white">
                      support@shuffle.dev.dev
                    </p>
                  </div>
                </div>
                <div class="py-6 px-8">
                  <div class="flex">
                    <span class="flex-shrink-0 flex items-center justify-center w-12 h-12 mr-8 bg-blue-500 rounded-lg">
                      <svg
                        class="w-5 h-5"
                        width="23"
                        height="23"
                        viewbox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.5 11C16.0185 11 14 13.0962 14 15.6729C14 19.2285 17.8951 22.6871 18.0612 22.8339C18.3123 23.0554 18.6877 23.0554 18.9388 22.8339C19.1049 22.6885 23 19.2298 23 15.6729C23 13.0962 20.9815 11 18.5 11ZM18.5 17.4618C17.5077 17.4618 16.7003 16.6338 16.7003 15.6161C16.7003 14.5985 17.5077 13.7705 18.5 13.7705C19.4923 13.7705 20.2997 14.5985 20.2997 15.6161C20.2997 16.6338 19.4923 17.4618 18.5 17.4618Z"
                          fill="white"
                        ></path>
                        <path
                          d="M9.01758 0C4.04824 0 0 4.04035 0 9C0 13.9597 4.04824 18 9.01758 18C9.90081 18 10.7583 17.8745 11.5604 17.6315C10.1794 14.5374 10.8571 11.7539 12.7236 9.9193C12.6912 9.9193 12.2597 9.73436 12.2272 9.72086C8.69567 8.37903 5.3927 12.6232 8.35888 16.156C6.02299 15.94 4.00361 14.6171 2.84987 12.7096C4.09829 12.4153 5.00721 11.3057 5.02344 9.9922C5.04373 9.16199 5.60505 8.59232 6.30433 8.43573C9.41794 7.77021 9.7128 3.90535 8.51307 1.83051C9.34355 1.78461 10.0442 1.80756 11.0383 2.10049C10.7881 4.61407 12.1501 7.66087 15.1596 7.37468L16.0158 7.27614C16.0875 7.57312 16.1335 7.87011 16.1605 8.18464C16.7272 8.08745 17.4468 8.06855 18 8.17519C17.5739 3.60027 13.7056 0 9.01758 0Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <div>
                      <div class="pb-4 pr-16 mb-6 border-b border-gray-500">
                        <p class="text-lg font-bold text-white">
                          Bayswater, London
                        </p>
                        <p class="text-lg font-bold text-white">W16EG, UK</p>
                      </div>
                      <p class="text-gray-400">
                        The one est bad, semper six. At sem quis, congue
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center">
              <p class="mb-4 text-xl text-gray-300">
                The brown fox jumps over the lazy dog.
              </p>
              <a
                class="inline-flex text-blue-400 hover:text-blue-500 font-bold"
                href="#"
              >
                <span>Learn more</span>
                <svg
                  class="ml-4 w-4 h-5"
                  width="19"
                  height="20"
                  viewbox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7383 1.47342L18.7383 10.9304L17.5562 10.9304L17.5562 2.89788L0.834948 19.625L0.00154682 18.7916L16.7228 2.06448L9.28125 2.06448L9.28125 0.882355L18.1472 0.882355C18.4737 0.882355 18.7383 1.14697 18.7383 1.47342Z"
                    fill="#1F40FF"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*Processes to follow .. 8th section*/}

      <section class="pt-20 2xl:pt-40 pb-40 2xl:pb-80 overflow-hidden">
        <div class="container px-4 mx-auto">
          <div class="max-w-xl mx-auto mb-16 lg:mb-28 text-center">
            <span class="text-lg font-bold text-blue-500">How it works</span>
            <h2 class="mt-6 mb-12 text-6xl font-bold font-heading">
              Build and launch without problems
            </h2>
            <p class="text-lg text-gray-500">
              The brown fox jumps over the lazy dog.
            </p>
          </div>
          <div class="flex flex-wrap items-center -mx-10">
            <div class="relative w-full lg:w-1/2 px-10 mb-16 lg:mb-0">
              <div class="relative lg:max-w-md lg:ml-auto z-10">
                <img
                  class="object-cover w-full lg:w-112 h-160"
                  src="https://images.pexels.com/photos/7148031/pexels-photo-7148031.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=450&amp;w=940"
                  alt=""
                />
                <div class="absolute bottom-0 left-0 w-full px-12">
                  <div class="flex pt-10 pb-16 w-full border-t border-gray-200">
                    <a
                      class="inline-flex mr-10 w-20 h-20 items-center justify-center bg-white rounded-lg"
                      href="#"
                    >
                      <svg
                        class="-mb-2 -mr-2"
                        width="38"
                        height="38"
                        viewbox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.791667 6.33333C0.354667 6.33333 0 5.97867 0 5.54167V3.95833C0 1.7765 1.7765 0 3.95833 0H5.54167C5.97867 0 6.33333 0.354667 6.33333 0.791667C6.33333 1.22867 5.97867 1.58333 5.54167 1.58333H3.95833C2.64892 1.58333 1.58333 2.64892 1.58333 3.95833V5.54167C1.58333 5.97867 1.22867 6.33333 0.791667 6.33333Z"
                          fill="#1F40FF"
                        ></path>
                        <path
                          d="M30.8747 6.33333C30.4377 6.33333 30.083 5.97867 30.083 5.54167V3.95833C30.083 2.64892 29.0174 1.58333 27.708 1.58333H26.1247C25.6877 1.58333 25.333 1.22867 25.333 0.791667C25.333 0.354667 25.6877 0 26.1247 0H27.708C29.8898 0 31.6664 1.7765 31.6664 3.95833V5.54167C31.6664 5.97867 31.3117 6.33333 30.8747 6.33333Z"
                          fill="#1F40FF"
                        ></path>
                        <path
                          d="M19.7914 1.58333H11.8747C11.4377 1.58333 11.083 1.22867 11.083 0.791667C11.083 0.354667 11.4377 0 11.8747 0H19.7914C20.2284 0 20.583 0.354667 20.583 0.791667C20.583 1.22867 20.2284 1.58333 19.7914 1.58333Z"
                          fill="#1F40FF"
                        ></path>
                        <path
                          d="M16.6247 31.6667H11.8747C11.4377 31.6667 11.083 31.312 11.083 30.875C11.083 30.438 11.4377 30.0834 11.8747 30.0834H16.6247C17.0617 30.0834 17.4163 30.438 17.4163 30.875C17.4163 31.312 17.0617 31.6667 16.6247 31.6667Z"
                          fill="#1F40FF"
                        ></path>
                        <path
                          d="M5.54167 31.6667H3.95833C1.7765 31.6667 0 29.8902 0 27.7084V26.125C0 25.688 0.354667 25.3334 0.791667 25.3334C1.22867 25.3334 1.58333 25.688 1.58333 26.125V27.7084C1.58333 29.0178 2.64892 30.0834 3.95833 30.0834H5.54167C5.97867 30.0834 6.33333 30.438 6.33333 30.875C6.33333 31.312 5.97867 31.6667 5.54167 31.6667Z"
                          fill="#1F40FF"
                        ></path>
                        <path
                          d="M0.791667 20.5833C0.354667 20.5833 0 20.2286 0 19.7916V11.8749C0 11.4379 0.354667 11.0833 0.791667 11.0833C1.22867 11.0833 1.58333 11.4379 1.58333 11.8749V19.7916C1.58333 20.2286 1.22867 20.5833 0.791667 20.5833Z"
                          fill="#1F40FF"
                        ></path>
                        <path
                          d="M30.8747 17.4166C30.4377 17.4166 30.083 17.0619 30.083 16.6249V11.8749C30.083 11.4379 30.4377 11.0833 30.8747 11.0833C31.3117 11.0833 31.6663 11.4379 31.6663 11.8749V16.6249C31.6663 17.0619 31.3117 17.4166 30.8747 17.4166Z"
                          fill="#1F40FF"
                        ></path>
                        <path
                          d="M22.0118 38C21.4418 38 20.9795 37.5377 20.9795 36.9677V15.2823C20.9795 14.7123 21.4418 14.25 22.0118 14.25C22.2873 14.25 22.547 14.3577 22.7417 14.5524L37.6773 29.488C37.8721 29.6812 37.9829 29.9472 37.9829 30.2211C37.9829 30.7911 37.5206 31.2534 36.9506 31.2534H28.9563L22.7544 37.6849C22.5533 37.8908 22.2921 38 22.0118 38ZM22.5628 16.6123V35.6044L28.0507 29.9139C28.1995 29.7587 28.4053 29.6717 28.6207 29.6717H35.6206L22.5628 16.6123ZM36.5658 30.6153H36.5817H36.5658Z"
                          fill="#1F40FF"
                        ></path>
                      </svg>
                    </a>
                    <div>
                      <p class="mb-1 text-lg font-bold text-blue-500">
                        Zospace
                      </p>
                      <h4 class="text-4xl font-bold text-white">
                        How it works
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <img
                class="hidden lg:block absolute top-0 right-0 mt-52 -mr-40"
                src="zospace-assets/images/blue-eclipse.png"
                alt=""
              />
            </div>
            <div class="w-full lg:w-1/2 px-10">
              <div class="max-w-lg">
                <ul>
                  <li class="flex pb-10 mb-8 border-b border-gray-50">
                    <div class="mr-8">
                      <span class="flex justify-center items-center w-14 h-14 bg-blue-50 text-lg font-bold rounded-full">
                        1
                      </span>
                    </div>
                    <div class="max-w-xs">
                      <h3 class="mb-6 text-lg font-bold font-heading">
                        Register account
                      </h3>
                      <p class="text-lg">
                        It&rsquo;s over, maecenas tincidunt malesuada dolor sit
                        amet malesuada.
                      </p>
                    </div>
                  </li>
                  <li class="flex pb-10 mb-8 border-b border-gray-50">
                    <div class="mr-8">
                      <span class="flex justify-center items-center w-14 h-14 bg-blue-50 text-lg font-bold rounded-full">
                        2
                      </span>
                    </div>
                    <div class="max-w-xs">
                      <h3 class="mb-6 text-lg font-bold font-heading">
                        Customize tools
                      </h3>
                      <p class="text-lg">
                        The brown me quam, sagittis porttitor lorem vel, commodo
                        fringilla nisl.
                      </p>
                    </div>
                  </li>
                  <li class="flex pb-10 border-b border-gray-50">
                    <div class="mr-8">
                      <span class="flex justify-center items-center w-14 h-14 bg-blue-50 text-lg font-bold rounded-full">
                        3
                      </span>
                    </div>
                    <div class="max-w-xs">
                      <h3 class="mb-6 text-lg font-bold font-heading">
                        Work with your team
                      </h3>
                      <p class="text-lg">
                        The time, this accumsan augue, posuere posuere elit
                        lorem.
                      </p>
                    </div>
                  </li>
                </ul>
                <div class="mt-10 text-right">
                  <a
                    class="inline-block font-bold text-blue-500 hover:text-blue-600"
                    href="#"
                  >
                    <span>Learn more</span>
                    <span class="inline-block ml-6">
                      <svg
                        width="19"
                        height="20"
                        viewbox="0 0 19 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.7383 1.47342L18.7383 10.9304L17.5562 10.9304L17.5562 2.89788L0.834948 19.625L0.00154682 18.7916L16.7228 2.06448L9.28125 2.06448L9.28125 0.882355L18.1472 0.882355C18.4737 0.882355 18.7383 1.14697 18.7383 1.47342Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Footer .. 9th section*/}

      <section class="py-20 2xl:py-40 bg-gray-800">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap -mx-4 pb-24 mb-16 border-b border-gray-400">
            <div class="w-full lg:w-2/5 px-4 mb-16 lg:mb-0">
              <span class="text-lg text-blue-400 font-bold">
                We&apos;re Zospace
              </span>
              <h2 class="max-w-sm mt-8 mb-12 text-5xl text-white font-bold font-heading">
                Thank you for your time
              </h2>
              <p class="mb-16 text-gray-300">
                The brown fox jumps over the lazy dog.
              </p>
              <div>
                <a
                  class="inline-block mb-4 sm:mb-0 sm:mr-4 py-4 px-12 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200"
                  href="#"
                >
                  Active demo
                </a>
                <a
                  class="inline-block px-12 py-4 text-white font-bold border border-gray-200 hover:border-white rounded-full"
                  href="#"
                >
                  Contact
                </a>
              </div>
            </div>
            <div class="w-full lg:w-3/5 px-4">
              <div class="flex flex-wrap -mx-4">
                <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-16 lg:mb-0">
                  <ul class="text-lg">
                    <li class="mb-6">
                      <a class="text-gray-200 hover:text-gray-100" href="#">
                        Hello
                      </a>
                    </li>
                    <li class="mb-6">
                      <a class="text-gray-200 hover:text-gray-100" href="#">
                        Story
                      </a>
                    </li>
                    <li class="mb-6">
                      <a class="text-gray-200 hover:text-gray-100" href="#">
                        Pricing
                      </a>
                    </li>
                    <li class="mb-6">
                      <a class="text-gray-200 hover:text-gray-100" href="#">
                        Applications
                      </a>
                    </li>
                    <li class="mb-6">
                      <a class="text-gray-200 hover:text-gray-100" href="#">
                        Stats
                      </a>
                    </li>
                    <li>
                      <a class="text-gray-200 hover:text-gray-100" href="#">
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-16 lg:mb-0">
                  <ul class="text-lg">
                    <li class="mb-6">
                      <a class="text-gray-200 hover:text-gray-100" href="#">
                        Newsletter
                      </a>
                    </li>
                    <li class="mb-6">
                      <a class="text-gray-200 hover:text-gray-100" href="#">
                        Features
                      </a>
                    </li>
                    <li class="mb-6">
                      <a class="text-gray-200 hover:text-gray-100" href="#">
                        How it works
                      </a>
                    </li>
                    <li class="mb-6">
                      <a class="text-gray-200 hover:text-gray-100" href="#">
                        FAQ
                      </a>
                    </li>
                    <li class="mb-6">
                      <a class="text-gray-200 hover:text-gray-100" href="#">
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a class="text-gray-200 hover:text-gray-100" href="#">
                        Team
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="w-full lg:w-1/3 px-4">
                  <ul class="text-lg">
                    <li class="mb-6">
                      <a class="text-gray-200 hover:text-gray-100" href="#">
                        New account
                      </a>
                    </li>
                    <li class="mb-6">
                      <a class="text-gray-200 hover:text-gray-100" href="#">
                        Log in
                      </a>
                    </li>
                    <li class="mb-6">
                      <a class="text-gray-200 hover:text-gray-100" href="#">
                        Testimonials
                      </a>
                    </li>
                    <li class="mb-6">
                      <a class="text-gray-200 hover:text-gray-100" href="#">
                        Contact
                      </a>
                    </li>
                    <li class="mb-6">
                      <a class="text-gray-200 hover:text-gray-100" href="#">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a class="text-gray-200 hover:text-gray-100" href="#">
                        Cookies
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="md:flex justify-between">
            <p class="text-lg text-gray-200 mb-8 md:mb-0">
              &copy; 2021 Shuffle. All rights reserved.
            </p>
            <div class="flex items-center">
              <a class="inline-block mr-2" href="#">
                <img
                  class="h-12"
                  src="zospace-assets/logos/facebook.svg"
                  alt=""
                />
              </a>
              <a class="inline-block mr-2" href="#">
                <img
                  class="h-12"
                  src="zospace-assets/logos/instagram.svg"
                  alt=""
                />
              </a>
              <a class="inline-block" href="#">
                <img
                  class="h-12"
                  src="zospace-assets/logos/twitter.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>










      </div>
    </>
  );
};

export default About;
