import React from 'react';
import { CTAButton, CallToAction } from './CallToAction';
import { motion } from 'framer-motion';
import awo from '~/../public/awo.png';
import hauck from '~/../public/hauck-logo.png';
import mba from '~/../public/mba-logo-copy.png';
import nontel from '~/../public/nontel.png';
import pappi from '~/../public/pappi.png';
import scherer from '~/../public/scherer.png';
import Image from 'next/image';

export default function Sec3() {
    return (
        <div className="odd mt-8 flex flex-col items-center gap-20">
            <h1 className="text-3xl font-bold">
                Kunden die uns<span className="text-cText">vertrauen : </span>
            </h1>

            <div className="grid grid-cols-6 gap-x-12">
                <Kachel image={awo as HTMLImageElement} delay={0.5} />
                <Kachel image={hauck as HTMLImageElement} delay={0.6} />
                <Kachel image={mba as HTMLImageElement} delay={0.7} />
                <Kachel image={nontel as HTMLImageElement} delay={0.8} />
                <Kachel image={pappi as HTMLImageElement} delay={0.9} />
                <Kachel image={scherer as HTMLImageElement} delay={1.0} />
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

type KachelProps = { image: HTMLImageElement; delay: number };

function Kachel({ image, delay }: KachelProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 100,
            }}
            transition={{
                duration: 0.5,
                ease: 'easeOut',
                delay: delay,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
            }}
            className="h-44 w-44 flex justify-center items-center"
        >
            <Image src={image} alt="Logo" />
        </motion.div>
    );
}
