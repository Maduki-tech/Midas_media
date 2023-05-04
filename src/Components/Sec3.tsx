import React from 'react';
import { CTAButton, CallToAction } from './CallToAction';

export default function Sec3() {
    return (
        <div className="mt-8 flex flex-col items-center">
            <h1 className="text-3xl font-bold">
                Kunden die uns <span className="text-cText">vertrauen:</span>
            </h1>

            <div className='grid grid-cols-6'>
                <div className="w-44 h-44 m-4 bg-gray-300"></div>
                <div className="w-44 h-44 m-4 bg-gray-300"></div>
                <div className="w-44 h-44 m-4 bg-gray-300"></div>
                <div className="w-44 h-44 m-4 bg-gray-300"></div>
                <div className="w-44 h-44 m-4 bg-gray-300"></div>
                <div className="w-44 h-44 m-4 bg-gray-300"></div>
            </div>
            <div className="flex flex-col items-center">
                <CallToAction />
                <CTAButton lineclass="G" />
                <div className="H absolute right-8 h-24 w-2 bg-transparent"></div>
            </div>
        </div>
    );
}
