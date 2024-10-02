import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-primary-100 py-16">
      <div className="w-5/6 mx-auto">
        <div className="md:flex justify-between gap-8">
          <div className="basis-1/2 mt-5">
            <img alt="logo" src={Logo} />
            <p className="py-3">
              Lorem vitae ut augue auctor faucibus eget eget ut libero.
              Elementum purus et arcu massa dictum condimentum. Augue
              scelerisque iaculis orci ut habitant laoreet. Iaculis tristique.
            </p>
            <p className="py-3">© Evogym All Rights Reserved.</p>
          </div>
          <div className="basis-1/4 mt-5">
            <h4 className="font-semibold">Links</h4>
            <p className="py-3">Massa orci senectus</p>
            <p className="py-3">Et gravida id et etiam</p>
            <p className="py-3">Ullamcorper vivamus</p>
          </div>
          <div className="basis-1/4 mt-5">
            <h4 className="font-semibold">Contact Us</h4>
            <p className="py-3">Tempus metus mattis risus volutpat egestas.</p>
            <p className="py-3">{"(333)425-6825"}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
