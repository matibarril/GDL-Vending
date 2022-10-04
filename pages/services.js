import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import CounterUp from "../components/elements/Counterup";

const Services = () => {
  return (
    <>
      <Layout>
      {/*<section className="relative -mt-24 pt-24">
                    <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-inherit-100 z-0" style={{ "z-index": "-1" }}></div>
                    <div className="container">
                        <div className="flex flex-wrap items-center -mx-3">
                            <div className="w-full lg:w-1/2 px-3">
                                <div className="py-12">
                                    <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                                        <h2 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animatedanimated animate__fadeIn">
                                        Committed to <span className="text-blue-500">Digital</span> Transformation
                                        </h2>
                                        <p className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn">
                                            We are <strong className="text-blue-500">Limay Dev</strong>, a Creative Design <span className="typewrite d-inline text-brand" data-period="3000" data-type='["Web Agency", "Social Marketing" ]'></span>
                                        </p>
                                        
                                    </div>
                                    <div className="text-center lg:text-left">
                                        <Link href="#key-features">
                                            <a className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded wow animate__animatedanimated animate__fadeIn">Our Services</a>
                                        </Link>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-10 mb-12 lg:mb-0 pb-10">
                                <div className="flex items-center justify-center">
                                    <img className="lg:max-w-sm" src="/assets/imgs/backgrounds/limaydev-logo14.png" alt="LimayDev" />
                                </div>
                            </div>
                        </div>
                        </div>
  </section> */}
        <section className="pt-16 pb-20" id="key-features">
          <div className="container">
            <div className="flex flex-wrap items-center mb-12">
              <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                <h2
                  className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  <span>We are here to work with </span>
                  <br />
                  <span className="text-blue-600">you </span>
                  <span>
                    and learn <br />
                  </span>
                </h2>
              </div>
              <div className="w-full lg:w-1/2">
                <p
                  className="lg:pl-16 text-blueGray-400 leading-loose wow animate__animated animate__fadeIn"
                  data-wow-delay=".4s"
                >
                  At Limay Dev, we believe that incorporating IT and Digital Marketing into business strategy facilitates enterprise growth and more efficient workflow.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 -mb-6">
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="text-blue-500 mx-auto mb-4">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold font-heading">
                    IT Consultancy
                  </h3>
                  <p className="text-sm text-blueGray-400">
                   We focus on client’s business challenges
                  and providing business-goals-oriented software solutions. 
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".5s"
                >
                  <div className="text-blue-500 mx-auto mb-4">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold font-heading">
                    Web Development
                  </h3>
                  <p className="text-sm text-blueGray-400">
                  We design, build and integrate top-notch, intuitive, functional, 
                  higly secure and scalable web apps. 
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".7s"
                >
                  <div className="text-blue-500 mx-auto mb-4">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold font-heading">
                    App Development
                  </h3>
                  <p className="text-sm text-blueGray-400">
                    We create intuitive understanding and execution apps 
                    to meet every business`s unique requirements.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".9s"
                >
                  <div className="text-blue-500 mx-auto mb-4">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold font-heading">
                    Digital Marketing
                  </h3>
                  <p className="text-sm text-blueGray-400">
                    We complete a full analysis of your reputation and create a 
                    unique strategy for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-blueGray-100" id="key-features">
          <div className="container">
            <div className="flex flex-wrap items-center mb-12">
              <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                <h2
                  className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  <span>Technologies</span>
                  <br />
                  <span className="text-blue-600"> </span>
                  <span>
                    <br />
                  </span>
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 -mb-6">
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="text-blue-500 mx-auto mb-4"></div>
                  <h3 className="mb-2 font-bold text-blue-500 font-heading pb-8">
                    Frontend
                  </h3>
                  <ul className="text-blueGray-400">
                    <li className="flex mb-3">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewbox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>ReactJS</span>
                    </li>
                    <li className="flex mb-3">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewbox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>NextJs</span>
                    </li>
                    <li className="flex mb-3">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewbox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>TailwindCSS</span>
                    </li>
                    <li className="flex mb-3">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewbox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>JavaScript</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".5s"
                >
                  <div className="text-blue-500 mx-auto mb-4"></div>
                  <h3 className="mb-2 font-bold text-blue-500 font-heading pb-8">
                    Backend
                  </h3>
                  <ul className="text-blueGray-400">
                    <li className="flex mb-3">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewbox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>NodeJS</span>
                    </li>
                    <li className="flex mb-3">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewbox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>Python</span>
                    </li>
                    <li className="flex mb-3">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewbox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>C++</span>
                    </li>
                    <li className="flex mb-3">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewbox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>Java</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".7s"
                >
                  <div className="text-blue-500 mx-auto mb-4"></div>
                  <h3 className="mb-2 font-bold text-blue-500 font-heading pb-8">
                    Mobile
                  </h3>
                  <ul className="text-blueGray-400">
                    <li className="flex mb-3">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewbox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>Android</span>
                    </li>
                    <li className="flex mb-3">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewbox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>IOS</span>
                    </li>
                    <li className="flex mb-3">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewbox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>React Native</span>
                    </li>
                    <li className="flex mb-3">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewbox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>Ionic</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".9s"
                >
                  <div className="text-blue-500 mx-auto mb-4"></div>
                  <h3 className="mb-2 font-bold text-blue-500 font-heading pb-8">
                    Database
                  </h3>
                  <ul className="text-blueGray-400">
                    <li className="flex mb-3">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewbox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>SQL Server</span>
                    </li>
                    <li className="flex mb-3">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewbox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>MySQL</span>
                    </li>
                    <li className="flex mb-3">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewbox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>Postgre SQL</span>
                    </li>
                    <li className="flex mb-3">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewbox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>MongoDB</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-20 py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="max-w-md mb-8 mx-auto">
                <span
                  className="text-xs py-2 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInDown"
                  data-wow-delay=".9s"
                >
                  Contact Us
                </span>
                <h2
                  className="mt-2 text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <span className="text-blue-500">Let`s Talk!</span>
                </h2>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
