import React from 'react';
import Layout from '../components/layout/Layout';
import Slider2 from '../components/slider/Slider2';
import TextEffect from "../components/elements/TextEffect"
import Link from "next/link";

const Index = () => {
    return (
        <>
            <Layout>
                <section className="relative -mt-24 pt-24">
                    <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-white z-0" style={{ "z-index": "-1" }}></div>
                    <div className="container">
                        <div className="flex flex-wrap items-center -mx-3">
                            <div className="w-full lg:w-1/2 px-3">
                                <div className="py-12">
                                    <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                                        <h2 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
                                            Máquinas <span className="text-blue-500"> Expendedoras</span> de Snacks y Refrescos
                                        </h2>
                                        <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">
                                            Somos <strong className="text-blue-500">GDL Vending</strong>, {" "}
                                            <span className="typewrite d-inline text-brand">
                                                <TextEffect text1="Snacks 24/7" text2="Refrescos 24/7" />
                                            </span>
                                        </p>
                                        <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn mt-3 text-sm">Acompañandote en todo momento</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-10 mb-12 lg:mb-0 pb-10">
                                <div className="flex items-center justify-center">
                                    <img className="lg:max-w-sm w-full" src="/assets/imgs/placeholders/vending_11.png" alt="Vending" />
                                    <img className="lg:max-w-sm" src="/assets/imgs/placeholders/snacks_3.png" alt="Vending" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-16 pb-20 bg-blueGray-100"  id="key-features">
                    <div className="container">
                        <div className="flex flex-wrap items-center mb-12">
                            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                                <h2 className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                    <span>Máquinas de </span>
                                    <br />
                                    <span className="text-blue-600">Excelente </span>
                                    <span>
                                    Calidad <br />
                                    </span>
                                </h2>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <p className="lg:pl-16 text-blueGray-400 leading-loose wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                    Ofrecemos los mejores equipos y más nuevos del mercado. Cuentan con monedero de cambio, 40 selecciones de producto para Snack y 10 selecciones de refresco.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 -mb-6">
                            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                                <div className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                   
                                    <h3 className="mb-2 font-bold font-heading">Gran Variedad</h3>
                                    <p className="text-sm text-blueGray-400">Contamos con la más amplia variedad de productos y no damos preferencias a marcas (Sin Exclusividades).</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                                <div className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                
                                    <h3 className="mb-2 font-bold font-heading">Excelente Conservación</h3>
                                    <p className="text-sm text-blueGray-400">Los productos no están expuestos al sol, polvo ni humedad. Siempre frescos e higiénicos.</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                                <div className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn" data-wow-delay=".9s">
                                   
                                    <h3 className="mb-2 font-bold font-heading">Reposición Continua</h3>
                                    <p className="text-sm text-blueGray-400">La frecuencia de reposición se establece en función de las ventas y siempre de acuerdo a las necesidad del cliente.</p>
                                </div>
                            </div>  
                            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                                <div className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                 
                                    <h3 className="mb-2 font-bold font-heading">Mantenimiento de la Máquina</h3>
                                    <p className="text-sm text-blueGray-400">Es total responsabilidad nuestra, solo requerimos el espacio para su instalación.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/*<section className="py-12  md:py-20 bg-blueGray-100 ">
                    <div className="container">
                        <div className="flex flex-wrap -mx-3">
                            <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
                                <div className="max-w-md lg:max-w-xs mx-auto lg:ml-0 mb-6 lg:mb-0">
                                    <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                                        Simple Solution for <span className="text-blue-500">Complex</span> Connections
                                    </h2>
                                </div>
                                <div className="lg:absolute lg:bottom-0 lg:left-0 flex justify-center wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                    <div id="carausel-fade-1-arrows" className="flex"></div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 flex flex-wrap px-3 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                <div className="relative w-full rounded">
                                    <div className="carausel-fade slick-carausel rounded" id="carausel-fade-1">
                                        <Slider2 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </section> */}
                <section className="py-20 bg-inherit-100">
                    <div className="container">
                        <div className="max-w-2xl lg:max-w-3xl mx-auto">
                            <div className="mb-12 text-center">
                                <h2 className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                    Estamos en Contacto!
                                </h2>
                                <p className="text-blueGray-600 wow animate__animated animate__fadeIn animated" data-wow-delay=".5s">
                                    Nos encantará saber de Usted
                                </p>
                            </div>
                         </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Index;