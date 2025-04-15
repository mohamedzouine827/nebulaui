const Footer = () => {
    // Static data - you would typically get these from props or context
    const magasin_image = "/logo.png";
    const footer = {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      tiktok: "https://tiktok.com",
      ville: "Paris",
      pays: "France",
      email: "contact@example.com",
      phone: "+1234567890"
    };
    const en_tete = {
      couleur_texte: "#000000",
      nom_a_propos: "About Us",
      nom_catalogue: "Products"
    };
  
    return (
      <div className="w-full px-28 py-24 bg-neutral-100 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
        <div className="w-full flex flex-col justify-start items-center gap-16">
          <div className="inline-flex justify-start items-start gap-28">
            {/* Logo and Social Section */}
            <div className="max-w-96 inline-flex flex-col justify-start items-start overflow-hidden">
              <div className="w-48 h-6">
                <div className="w-48 h-6 left-0 top-0 overflow-hidden">
                  <img
                    className="w-48 h-6 left-[1.22px] top-[0.29px]"
                    id="footer-logo-theme-1"
                    src={magasin_image}
                    alt="Logo"
                  />
                </div>
              </div>
  
              <div className="w-4 h-4"></div>
              <div className="justify-center text-black text-base font-normal font-['Mulish'] leading-normal">
                Des idées locales, une portée mondiale!
              </div>
              <div className="w-4 h-4"></div>
              
              {/* Social Icons */}
              <div className="inline-flex justify-center items-center gap-2.5 overflow-hidden">
                {footer.facebook && (
                  <a href={footer.facebook} target="_blank" id="footer-facebook-theme-1" className="hover:text-blue-400">
                    <div className='w-6 h-6'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2z" />
                      </svg>
                    </div>
                  </a>
                )}
  
                {footer.instagram && (
                  <a href={footer.instagram} target="_blank" id="footer-instagram-theme-1" className="hover:text-blue-400">
                    <div className='w-6 h-6 flex items-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.946 5.29a6.606 6.606 0 0 0-.418-2.185 4.412 4.412 0 0 0-1.039-1.594A4.412 4.412 0 0 0 14.895.472a6.606 6.606 0 0 0-2.184-.418C11.75.01 11.444 0 9 0S6.25.01 5.29.054a6.606 6.606 0 0 0-2.185.418A4.412 4.412 0 0 0 1.51 1.511 4.412 4.412 0 0 0 .472 3.105a6.606 6.606 0 0 0-.418 2.184C.01 6.25 0 6.556 0 9s.01 2.75.054 3.71a6.606 6.606 0 0 0 .418 2.185 4.412 4.412 0 0 0 1.039 1.594 4.411 4.411 0 0 0 1.594 1.039 6.606 6.606 0 0 0 2.184.418C6.25 17.99 6.556 18 9 18s2.75-.01 3.71-.054a6.606 6.606 0 0 0 2.185-.418 4.602 4.602 0 0 0 2.633-2.633 6.606 6.606 0 0 0 .418-2.184C17.99 11.75 18 11.444 18 9s-.01-2.75-.054-3.71zm-1.62 7.347a4.978 4.978 0 0 1-.31 1.67 2.98 2.98 0 0 1-1.708 1.709 4.979 4.979 0 0 1-1.671.31c-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052a4.979 4.979 0 0 1-1.67-.31 2.788 2.788 0 0 1-1.036-.673 2.788 2.788 0 0 1-.673-1.035 4.978 4.978 0 0 1-.31-1.671c-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637a4.979 4.979 0 0 1 .31-1.67 2.788 2.788 0 0 1 .673-1.036 2.788 2.788 0 0 1 1.035-.673 4.979 4.979 0 0 1 1.671-.31c.95-.043 1.234-.052 3.637-.052s2.688.009 3.637.052a4.979 4.979 0 0 1 1.67.31 2.788 2.788 0 0 1 1.036.673 2.788 2.788 0 0 1 .673 1.035 4.979 4.979 0 0 1 .31 1.671c.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637zM9 4.378A4.622 4.622 0 1 0 13.622 9 4.622 4.622 0 0 0 9 4.378zM9 12a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm5.884-7.804a1.08 1.08 0 1 1-1.08-1.08 1.08 1.08 0 0 1 1.08 1.08z" />
                      </svg>
                    </div>
                  </a>
                )}
  
                {footer.tiktok && (
                  <a href={footer.tiktok} target="_blank" id="footer-tiktok-theme-1" className="hover:text-blue-400">
                    <div className='w-6 h-6 flex items-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21,7V9a1,1,0,0,1-1,1,8,8,0,0,1-4-1.08V15.5A6.5,6.5,0,1,1,6.53,9.72a1,1,0,0,1,1.47.9v2.52a.92.92,0,0,1-.28.62,2.49,2.49,0,0,0,2,4.23A2.61,2.61,0,0,0,12,15.35V3a1,1,0,0,1,1-1h2.11a1,1,0,0,1,1,.83A4,4,0,0,0,20,6,1,1,0,0,1,21,7Z" />
                      </svg>
                    </div>
                  </a>
                )}
              </div>
  
              <div className="w-8 h-4"></div>
              <div id="footer-ville-pays-theme-1" className="justify-center text-black text-base font-normal font-['Mulish'] leading-normal">
                {footer.ville}, {footer.pays}
              </div>
            </div>
  
            {/* Sections Links */}
            <div className="w-32 inline-flex flex-col justify-start items-start gap-4">
              <div className="self-stretch h-8 justify-center text-black text-2xl font-normal font-['Montserrat'] leading-loose">
                Sections
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-3 overflow-hidden">
                <div className="flex flex-col justify-start items-start">
                  <div
                    style={{ color: en_tete.couleur_texte }}
                    className="text-gray-600 text-base font-normal font-['Mulish'] tracking-wide hover:underline hover:text-gray-900 cursor-pointer transition-all duration-300"
                  >
                    {en_tete.nom_a_propos}
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start">
                  <div
                    style={{ color: en_tete.couleur_texte }}
                    className="text-gray-600 text-base font-normal font-['Mulish'] tracking-wide hover:underline hover:text-gray-900 cursor-pointer transition-all duration-300"
                  >
                    {en_tete.nom_catalogue}
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start">
                  <div
                    style={{ color: en_tete.couleur_texte }}
                    className="text-gray-600 text-base font-normal font-['Mulish'] tracking-wide hover:underline hover:text-gray-900 cursor-pointer transition-all duration-300"
                  >
                    Message
                  </div>
                </div>
              </div>
            </div>
  
            {/* Contact Section */}
            <div className="w-48 inline-flex flex-col justify-start items-start gap-4">
              <div className="self-stretch h-8 justify-center text-black text-2xl font-normal font-['Montserrat'] leading-loose [text-shadow:_0px_1px_2px_rgb(0_0_0_/_0.25)]">
                Contactez-nous
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch inline-flex justify-start items-center gap-5">
                  <div className='w-6 h-6 flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z" />
                    </svg>
                  </div>
                  <p id="footer-email-theme-1" className="justify-center text-black text-base font-normal font-['Mulish'] leading-normal">
                    {footer.email}
                  </p>
                </div>
  
                <div className="inline-flex justify-start items-center gap-5">
                  <div className='w-6 h-6 flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.004 0H5.996A1.996 1.996 0 0 0 4 1.996v16.007C4 19.106 4.894 20 5.996 20h8.007A1.997 1.997 0 0 0 16 18.004V1.996A1.996 1.996 0 0 0 14.004 0zM10 19c-.69 0-1.25-.447-1.25-1s.56-1 1.25-1 1.25.447 1.25 1-.56 1-1.25 1zm4-3H6V2h8v14z" />
                    </svg>
                  </div>
                  <div id="footer-phone-theme-1" className="justify-center text-black text-base font-normal font-['Mulish'] leading-normal">
                    {footer.phone}
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Copyright Section */}
          <div className="self-stretch flex flex-col justify-start items-center gap-3.5">
            <div className="self-stretch h-px bg-neutral-700"></div>
            <div className="self-stretch text-center text-black/75 text-sm font-normal font-[Mulish] leading-tight">
              © 2025 IT Atlas Vox
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;