import React from 'react';
import { CTAButton, CallToAction } from './CallToAction';
import { motion } from 'framer-motion';

export default function Sec3() {
    return (
        <div className="odd mt-8 flex flex-col items-center gap-20">
            <h1 className="text-3xl font-bold">
                Kunden die uns <span className="text-cText">vertrauen:</span>
            </h1>

            <div className="grid grid-cols-6">
                <Kachel image="" delay={0.5}/>
                <Kachel image="" delay={0.6}/>
                <Kachel image="" delay={0.7}/>
                <Kachel image="" delay={0.8}/>
                <Kachel image="" delay={0.9}/>
                <Kachel image="" delay={1.0}/>
            </div>
            <div className="flex flex-col items-center">
                <CallToAction />
                <CTAButton lineclass="G" />
                <div className="H absolute right-10 h-24 w-2 bg-transparent"></div>
                <div className="I absolute left-10 h-24 w-2 bg-transparent"></div>
            </div>
        </div>
    );
}

type KachelProps = {
    image: string;
    delay: number;
};

function Kachel({ image, delay }: KachelProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: delay }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="m-4 h-44 w-44 bg-gray-300"
        ></motion.div>
    );
}
