'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationLink = ({link, title}) => {

  const pathname = usePathname();
  
  return(
    <Link href={link} className={`navigation__link ${pathname === `/${link}` ? 'navigation__link_active' : ''}`}>
      {title}
    </Link>
  )
}

export default NavigationLink;