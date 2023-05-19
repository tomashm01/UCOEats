import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-gray-800 px-6 py-4 text-gray-500">
      <div className="container px-5 py-8 mx-auto flex items-center justify-between sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl color: #9CA3AF; text-gray-500">
            Uco Eats
          </span>
        </a>
        <p className="text-sm color: #9CA3AF;e sm:ml-6 sm:mt-0 mt-4">
          © 2023 Uco Eats
        </p>
      </div>
    </footer>
  );
}

export default Footer;
