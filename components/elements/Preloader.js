import React from 'react';

const Preloader = () => {
    return (
        <>
            <div id="preloader-active">
            <div className="container">
                <div className="flex mx-auto py-200 md:py-20 items-center justify-center jump">
                    <img src="/assets/imgs/logos/logo_7.png" alt="GDL Vending" />
                </div>
            </div>
        </div>
        </>
    );
};

export default Preloader;