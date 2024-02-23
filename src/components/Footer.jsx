function Footer() {
  return (
    <footer className="py-3 bg-light Footer w-full">
      <div className="container flex flex-col items-center justify-between h-full mx-auto">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
        </ul>
        <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
      </div>
    </footer>
  );
}

export default Footer;
