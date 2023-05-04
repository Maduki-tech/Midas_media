import Link from 'next/link';
import React from 'react';

type CallToActionProps = {
    lineclass: string;
};
export function CallToAction() {
    return (
        <div className="flex flex-col items-center gap-5">
            <div>
                Buche <span className="text-cText">Dein</span> Kostenloses
                Beratungsgespräch
            </div>
        </div>
    );
}

export const CTAButton = ({ lineclass }: CallToActionProps) => {
    return (
        <button
            className={`w-fit rounded-full bg-gradient-to-r from-cRed to-cBlue px-5 py-3 text-xl text-white ${lineclass} z-30`}
        >
            <Link href="">Jetzt Buchen</Link>
        </button>
    );
};
