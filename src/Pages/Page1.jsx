import React from 'react';
import '../styles/page1.css';
import LeftTextPage1 from '../components/LeftTextPage1'; // Left text component
import RightImgPage1 from '../components/RightImgPage1'; // Right image component

const Page1 = () => {
    return (
        <>
            <div className="page1-container">
                <div className="left">
                    <LeftTextPage1 />
                </div>
                <div className="right">
                    <RightImgPage1 />
                </div>
            </div>
            <hr />
        </>
    );
};

export default Page1;
