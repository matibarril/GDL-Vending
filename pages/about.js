import React from 'react';
import Layout from '../components/layout/Layout';
import Link from "next/link";
import TextEffect from "../components/elements/TextEffect"
import CounterUp from "../components/elements/Counterup"

const About = () => {
    return (
        <>
            <Layout>
                <section className="relative -mt-24 pt-24">
                    <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-inherit-100 z-0" style={{ "z-index": "-1" }}></div>
                    <div className="container">
                        <div className="flex flex-wrap items-center -mx-3">
                            <div className="w-full lg:w-1/2 px-3">
                                <div className="py-12">
                                    <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                                        <h2 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animatedanimated animate__fadeIn">
                                            Especificaciones de <span className="text-blue-500">Espacio y Energía</span> para su instalación.
                                        </h2>
                                        <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">
                                            Somos <strong className="text-blue-500">GDL Vending</strong>, {" "}
                                            <span className="typewrite d-inline text-brand">
                                                <TextEffect text1="Snacks 24/7" text2="Refrescos 24/7" />
                                            </span>
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-10 mb-12 lg:mb-0 pb-10">
                                <div className="flex items-center justify-center">
                                    <img className="lg:max-w-sm" src="/assets/imgs/placeholders/dibujo_1.png" alt="AMS Sensit 3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
                <section className="py-20 bg-blueGray-100" id="how-we-work">
                    <div className="container">
                        <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
                            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                                <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeInDown">
                                    <span>Máquina Expendedora </span> <br />
                                    <span className="text-blue-500">AMS Sensit 3 </span>
                                    <br />
                                    <span>de Vidrio Frontals</span>
                                </h2>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <p className="text-blueGray-400 leading-loose wow animate__animatedanimated animate__fadeIn">El consumo de energía eléctrica varía considerablemente debido a factores como la temperatura ambiente, humedad relativa, el uso, la frecuencia de recarga del producto, etc.</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 -mb-6 text-center">
                            <div className="hover-up-5 w-full md:w-1/2 lg:w-1/2 px-3 mb-6 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                <div className="p-12 bg-white shadow rounded">
                                    <h3 className="mb-2 font-bold font-heading text-xl">Dimensiones de la Máquina Expendedora</h3>
                                    <p className="text-sm text-blueGray-400 leading-relaxed">Altura: 1885 mm</p>
                                    <p className="text-sm text-blueGray-400 leading-relaxed">Ancho: 908 mm</p>
                                    <p className="text-sm text-blueGray-400 leading-relaxed">Profundida:908 mm</p>
                                </div>
                            </div>
                            <div className="hover-up-5 w-full md:w-1/2 lg:w-1/2 px-3 mb-6 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                <div className="p-12 bg-white shadow rounded">
                                    <h3 className="mb-2 font-bold font-heading text-xl">Requisitos de Alimentación Eléctrica</h3>
                                    <p className="text-sm text-blueGray-400 leading-relaxed">Consumo según Alimentación:</p>
                                    <p className="text-sm text-blueGray-400 leading-relaxed">10.8 A @ 120 VAC</p>
                                    <p className="text-sm text-blueGray-400 leading-relaxed"> 5.6 A @ 230 VAC </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default About;