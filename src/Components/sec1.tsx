import Link from 'next/link';
import React from 'react';
import { CallToAction, CTAButton } from './CallToAction';
import Image from 'next/image';
import stock1 from '~/../public/stock1.jpg';
import logo from '~/../public/Logo.png';

export default function Sec1() {
    return (
        <div className="flex flex-col items-center gap-4">
            {/* TODO: Logo */}
            <Image src={logo} alt="Midas Media Logo" width={150} className="" />

            <h2 className="w-1/2 text-center text-3xl font-bold">
                Willst du endlich deinen gewünschten{' '}
                <span className="text-cText">Mitarbeiter </span> finden?
            </h2>
            <div className="my-2 border-t-2 border-dashed border-cRed ">
                <h4 className="my-4 text-center text-xl">
                    Finde noch heute mit{' '}
                    <Link
                        href="https://midasmedia.de/"
                        className="text-cText hover:underline"
                    >
                        Midas Media
                    </Link>{' '}
                    gewünschten Mitarbeiter
                </h4>
                <div className="my-2 border-t-2 border-dashed border-cRed"></div>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 justify-items-center">
                <div className="relative overflow-hidden rounded-xl shadow-lg shadow-cBlack">
                    <Image
                        src={stock1}
                        alt="People Talking"
                        width={450}
                        className=""
                    />
                    <div className="absolute left-0 top-0 h-full w-full bg-black opacity-30"></div>
                </div>

                <div className="relative row-span-2 flex h-fit w-1/2 flex-col gap-4 rounded-xl border-2 border-cBlue p-8">
                    <span className="text-cText">
                        Für wen ist Social Recruiting geeignet?
                    </span>
                    <span className="text-cText">Achtung: </span>Social
                    Recruiting eignet sich für jede Unternehmensgröße und jeder
                    Branche, die nach neuen Mitarbeitern suchen und ihre
                    Rekrutierungsstrategien verbessern möchten. Es spricht
                    potenzielle Kandidaten an, die nicht aktiv nach einem neuen
                    Job suchen, aber dennoch offen für neue Möglichkeiten sind.
                    <div className="flex flex-col items-center text-center">
                        <CallToAction />
                        <CTAButton lineclass="A" />
                    </div>
                </div>

                <div className=" my-auto">
                    <strong>SOCIAL RECRUITING</strong> bedeutet:
                    <ul className="list-disc">
                        <li>Dein Stellenangebot wird maximal sichtbar</li>
                        <li>Du schaffst Wachstum durch Digitalisierung</li>
                        <li>Du wirst zum Platzhirsch deiner Branche</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
