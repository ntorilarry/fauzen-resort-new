"use client";

import Image from "next/image";
import Link from "next/link";
import { Logo } from "../../public";

const Footer = () => {
  return (
    <footer className=" bg-black mx-3 mb-3">
      <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-14">
        <div className="flex items-center justify-between py-2 gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="FauzanResort Logo"
              width={100}
              height={100}
              loading="eager"
              className="h-auto w-20 object-contain"
            />
          </Link>
          <p className="text-sm  text-gray-50">
            Rutois International Realty 9710 Stirling Rd #109 Hollywood, FL
            33024 +1 954-665-5757
          </p>
        </div>
        <div className="mx-auto my-2 h-px w-full bg-[#d6ac63]" />
        <div className="pb-8 pt-4 ">
          <p className="text-sm mb-4 text-gray-50">
            © 2025 Rutois International Realty. Todos los derechos reservados.
          </p>
          <p className="text-[9px] leading-4 text-gray-100">
            Rutois International Realty es una agencia inmobiliaria privada con
            licencia en el estado de Florida y con sede en Miami. No es ni se
            presenta como la desarrolladora del proyecto o proyectos presentados
            en este ni en ninguno de sus otros sitios web o páginas de destino.
            Rutois International Realty representa objetivamente a los
            compradores y puede ofrecer diversos proyectos, no necesariamente el
            que se presenta en este sitio web. Todo el material de marketing
            aquí contenido ha sido proporcionado por la desarrolladora y Rutois
            International Realty no se responsabiliza de ninguna inexactitud o
            tergiversación. La información compartida en este sitio web o en
            cualquier comunicación con compradores potenciales está sujeta a
            cambios en cualquier momento, incluyendo, entre otros, los precios y
            el inventario.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
