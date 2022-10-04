import React from 'react';

const Preloader = () => {
    return (
        <>
            <div id="preloader-active">
            <div className="container">
                <div className="flex mx-auto py-200 md:py-20 items-center justify-center jump">
                    <img src="/assets/imgs/logos/limaydev-logo1.png" alt="LimayDev" />
                </div>
            </div>
        </div>
        </>
    );
};

export default Preloader;