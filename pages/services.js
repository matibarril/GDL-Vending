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
                  <span>Ofrecemos Instalar </span>
                  <br />
                  <span className="text-blue-600">Máquinas Expendedoras</span>
                  <br />
                  <span>
                    en su Empresa o Comercio. <br />
                  </span>
                </h2>
              </div>
              <div className="w-full lg:w-1/2">
                <p
                  className="lg:pl-16 text-blueGray-400 leading-loose wow animate__animated animate__fadeIn"
                  data-wow-delay=".4s"
                >
                  Como un servicio a los trabajadores y empleados de su empresa. 
                  <br />Nos encargamos de la reposición de los productos y del mantenimiento de la Máquina.
                </p>
              </div>
            </div>
            {/*<div className="flex flex-wrap -mx-3 -mb-6">
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <h3 className="mb-2 font-bold font-heading">
                    Refrescos
                  </h3>
                  <p className="text-sm text-blueGray-400">
                  Coca-Cola<br />
                  Pepsi<br />
                  Peña Fiel <br />
                  Y más...
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".5s"
                >
                  <h3 className="mb-2 font-bold font-heading">
                    Snacks
                  </h3>
                  <p className="text-sm text-blueGray-400">
                  Lays <br />
                  Doritos<br />
                  Cheetos <br />
                  Y más...
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".7s"
                >
                  <h3 className="mb-2 font-bold font-heading">
                    Galletas
                  </h3>
                  <p className="text-sm text-blueGray-400">
                    Oreo <br />
                    Canelitas <br />
                    Polvorones<br />
                    Y más...
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".9s"
                >
                  <h3 className="mb-2 font-bold font-heading">
                    Cereales
                  </h3>
                  <p className="text-sm text-blueGray-400">
                    Nature Valley <br />
                    Quaker <br />
                    Kellogs<br />
                    Y más...
                  </p>
                </div>
              </div>
</div> */}
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
                  <span>Clientes</span>
                  <br />
                  <span className="text-blue-600"> </span>
                  <span>
                    <br />
                  </span>
                </h2>
                <div className="flex flex-wrap justify-center">
                  <div className= "w-full md:w-1/2 lg:w-1/3 px-3 mb-6 mx-20" >
                    <div className="border border-gray-100 pt-8 px-6 pb-6 bg-inherit text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                      <img className="lg:max-w-sm w-full " src="/assets/imgs/logos/logo_nissan1.png" alt="Nissan" />
                    </div> 
                  </div> 
                  <div className= "w-full md:w-1/2 lg:w-1/3 px-3 mb-6 mx-20" >
                    <div className="border border-gray-100 pt-8 px-6 pb-6 bg-inherit text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                      <img className="lg:max-w-sm w-full " src="/assets/imgs/logos/logo_merza1.png" alt="Merza" />
                    </div> 
                  </div> 
                  <div className= "w-full md:w-1/2 lg:w-1/3 px-3 mb-6 mx-20" >
                    <div className="border border-gray-100 pt-8 px-6 pb-6 bg-inherit text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                      <img className="lg:max-w-sm w-full " src="/assets/imgs/logos/logo_callcenter2.png" alt="Call Center" />
                    </div>  
                  </div> 
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
                  Contactenos
                </span>
                <h2
                  className="mt-2 text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <span className="text-blue-500">Hablemos!</span>
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
