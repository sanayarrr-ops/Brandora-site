const Footer = () => {
  return (
    <footer className="border-t border-[#ede8ff] py-12">
      <div className="container-padded grid gap-10 md:grid-cols-4">
        <div>
          <a href="#home" className="text-xl font-bold tracking-[0.2em] text-[#2b2358]">
            BRANDORA
          </a>
          <p className="mt-4 text-sm text-[#665f89]">Pastel-premium growth systems for ambitious brands.</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-[#2d255c]">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm text-[#655d86]">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#process">Process</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-[#2d255c]">Services</p>
          <ul className="mt-3 space-y-2 text-sm text-[#655d86]">
            <li>Paid Advertising</li>
            <li>Organic Growth</li>
            <li>Branding</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-[#2d255c]">Connect</p>
          <ul className="mt-3 space-y-2 text-sm text-[#655d86]">
            <li><a href="mailto:hello@brandora.co">hello@brandora.co</a></li>
            <li>@brandora.agency</li>
            <li>LinkedIn | Instagram | X</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
