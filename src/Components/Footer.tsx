import Link from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <div className='grid grid-cols-3 place-items-center py-8'>
            <span className='font-thin'>Copyright © 2023 Midas Media. Alle Rechte reserviert. </span>
            <span>
                <Link className='hover:text-cRed' href={'https://midasmedia.de/impressum/'}>Impressum</Link>{' '}
                |{' '}
                <Link className='hover:text-cRed' href={'https://midasmedia.de/datenschutz/'}>
                    Datenschutz
                </Link>
            </span>
            <span className='font-thin text-center'>
                This site is not a part of the Facebook TM website or Facebook
                TM Inc. Additionally, this site is NOT endorsed by FacebookTM in
                any way. FACEBOOK TM is a trademark of FACEBOOK TM, Inc.
            </span>
        </div>
    );
}
