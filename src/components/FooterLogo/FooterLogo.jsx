import logo from "/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

const FooterLogo = () => {

  return (
    <div className="logo_header">
      <Link className="logo" href="/">
        <Image src={logo} width={150} alt="Логотип Pict.design" />
      </Link>
    </div>
  );
};

export default FooterLogo;
