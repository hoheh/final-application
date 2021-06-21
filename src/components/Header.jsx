import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector, useDispatch } from "react-redux";

import { Context } from "../index";
import { routesHeader } from "../pages/routes";
import { logo, search, menu, arrow } from "../assets/images/main";

import { fetchData } from "../redux/actions/cart";

function Header() {
  const myProfile = React.useRef(null);
  const [popup, setPopup] = React.useState(false);

  const { auth } = React.useContext(Context);
  const [isAuth] = useAuthState(auth);

  const { count } = useSelector(({ cart }) => cart);

  const handleClick = (event) => {
    if (
      myProfile.current &&
      !event.path.includes(myProfile.current || myProfile.current.children)
    ) {
      setPopup(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <header className="border-b-2 py-2 px-20">
      <div className="flex justify-between items-center">
        <Link to="/" className="w-20 h-20 flex-none">
          <img className="h-16" src={logo} alt="Logo svg" />
        </Link>
        <div className="flex items-center flex-grow border-2 ml-20 mr-16 h-14 rounded-md">
          <div id="search-icon" className="w-16 flex justify-center items-center">
            <img className="w-6 h-6 opacity-50" src={search} alt="Search icon" />
          </div>
          <div className="w-full">
            <input
              className="w-full focus:outline-none text-xl"
              placeholder="Поиск по книгам или авторам"
              type="text"
            />
          </div>
          <div
            className="flex cursor-pointer hover:text-gray-100 text-gray-50 transition ease-in
						duration-200 hover:bg-hover-dirty-green items-center bg-dirty-green
						justify-center h-12 mr-0.5 w-40">
            <button className="text-xl focus:outline-none font-medium">Найти</button>
          </div>
        </div>
        <div className="flex p-3 w-72 justify-around items-center">
          {!isAuth ? (
            <div className="flex items-center space-x-1">
              <Link to="/auth">
                <p className="text-lg font-medium text-link">Вход</p>
              </Link>
              <p className="text-lg opacity-50">/</p>
              <Link to="/register">
                <p className="text-lg font-medium text-link">Регистрация</p>
              </Link>
            </div>
          ) : (
            <div ref={myProfile}>
              <p
                onClick={() => setPopup(!popup)}
                className="cursor-pointer flex items-center font-medium text-lg text-gray-500">
                Мой профиль
                <span className="ml-1">
                  <img className="w-4 h-2" src={arrow} alt="Arrow down" />
                </span>
              </p>
              {popup && (
                <div className="bg-white absolute border mt-0.5 shadow-md">
                  <ul>
                    <li
                      className="py-3 px-5 hover:bg-hover-dirty-green-50 text-gray-600
                      cursor-pointer">
                      История заказов
                    </li>
                    <li
                      onClick={() => auth.signOut()}
                      className="py-3 px-5 hover:bg-hover-dirty-green-50 text-gray-600
                      cursor-pointer">
                      Выйти
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
          <Link to="/cart">
            <div className="cursor-pointer">
              <svg
                className="relative fill-current text-gray-400 cursor-pointer w-9 transition ease-in
            duration-300 hover:text-gray-500"
                viewBox="0 -31 512.00033 512"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m166 300.003906h271.003906c6.710938 0 12.597656-4.4375 14.414063-10.882812l60.003906-210.003906c1.289063-4.527344.40625-9.390626-2.433594-13.152344-2.84375-3.75-7.265625-5.964844-11.984375-5.964844h-365.632812l-10.722656-48.25c-1.523438-6.871094-7.617188-11.75-14.648438-11.75h-91c-8.289062 0-15
              6.710938-15 15 0 8.292969 6.710938 15 15 15h78.960938l54.167968 243.75c-15.9375 6.929688-27.128906 22.792969-27.128906 41.253906 0 24.8125 20.1875 45 45 45h271.003906c8.292969 0 15-6.707031 15-15
              0-8.289062-6.707031-15-15-15h-271.003906c-8.261719 0-15-6.722656-15-15s6.738281-15 15-15zm0 0"
                />
                <path
                  d="m151 405.003906c0 24.816406 20.1875 45 45.003906 45 24.8125 0 45-20.183594 45-45 0-24.8125-20.1875-45-45-45-24.816406
              0-45.003906 20.1875-45.003906 45zm0 0"
                />
                <path
                  d="m362.003906 405.003906c0 24.816406 20.1875 45 45 45 24.816406 0 45-20.183594 45-45
              0-24.8125-20.183594-45-45-45-24.8125 0-45 20.1875-45 45zm0 0"
                />
              </svg>
              {count > 0 && (
                <div
                  className="absolute border-2 border-white box-border
							w-7 h-7 top-6 bg-hover-dirty-green rounded-full">
                  <p className="text-sm w-full h-full text-center relative top-0.5 text-gray-50">
                    {count}
                  </p>
                </div>
              )}
            </div>
          </Link>
        </div>
      </div>
      <div className="flex items-center pt-4">
        <div className="w-36 cursor-pointer opacity-80 hover:opacity-100 flex pr-7 pt-3 pb-2 border-r-2">
          <p className="text-xl text-gray-600 tracking-wide">Каталог</p>
          <img className="w-6 ml-4" src={menu} alt="Menu icon" />
        </div>
        <ul className="flex ml-4 space-x-4">
          {routesHeader &&
            routesHeader.map(({ name, path }, idx) => (
              <Link to={path} key={idx}>
                <li
                  className="text-xl px-5 text-gray-600 transition ease-in duration-200 opacity-80
							hover:opacity-100 tracking-wide cursor-pointer pt-3 pb-2">
                  {name}
                </li>
              </Link>
            ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
