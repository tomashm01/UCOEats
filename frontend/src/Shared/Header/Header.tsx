import { useEffect, useState } from "react";
import { useBasket } from "../../Basket/providers/BasketContext";
import { Link } from "react-router-dom";

interface paths {
  path: string;
  value: string;
}

function Header({
  type,
  closeSesion,
}: {
  type: string;
  closeSesion: Function;
}) {
  const { basket, getTotalItems } = useBasket();
  const [totalItems, setTotalItems] = useState(0);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  useEffect(() => {
    setTotalItems(getTotalItems());
  }, [basket]);

  const adminPaths: paths[] = [
    { path: "Product", value: "Product" },
    { path: "Category", value: "Category" },
    { path: "History", value: "History" },
  ];
  const userPaths: paths[] = [
    { path: "ProductList", value: "Products" },
    { path: "History", value: "History" },
    { path: "Basket", value: "Cesta" },
  ];
  const currentUser = type == "admin" ? adminPaths : userPaths;

  return (
    <header className="text-white body-font bg-gray-800 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white-900 mb-4 md:mb-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Logounicordoba.svg"
            alt="logo"
            className="w-10 h-10 text-white p-2 bg-white rounded-full"
          />
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {currentUser.map((item: paths, index: number) => (
            <div
              className="mr-5 hover:text-white-900 flex items-center"
              key={index}
            >
              <Link to={`/${item.path}`}>
                {item.path !== "Basket" && `${item.value}`}
                {item.path === "Basket" && (
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <span className="ml-2">{totalItems}</span>
                  </div>
                )}
              </Link>
            </div>
          ))}
          <div className="relative inline-block text-left dropdown">
            <span className="rounded-md shadow-sm flex items-center">
              <button
                className="bg-transparent border-0 p-0 m-0"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </span>
            {isUserMenuOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
                <div className="rounded-md bg-white shadow-xs">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      to="/ModifyUser"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Modify User
                    </Link>
                    <a
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      onClick={() => closeSesion()}
                    >
                      Close Session
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
