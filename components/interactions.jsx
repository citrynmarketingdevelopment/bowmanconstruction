'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initializeSite } from '../lib/site-interactions';
import { initializeContact } from '../lib/contact-interactions';

// Content remains server-rendered and readable without JavaScript. This small
// boundary enhances the menu, service panels, gallery, video and inquiry form.
export default function Interactions() {
  const pathname = usePathname();
  useEffect(() => {
    const disposeSite = initializeSite();
    const disposeContact = initializeContact();
    return () => { disposeContact(); disposeSite(); };
  }, [pathname]);
  return null;
}
