import Logo from "../../assets/logo.svg";
import {useState} from 'react'

const Nav: React.FC = () => {
    const [checked, setChecked] = useState(false)
  return (
    <header className="flex justify-between py-10 sm:px-20 px-6 relative h-[5rem] mb-10">
      <div className="sm:h-[100px] sm:w-[100px] h-[60px] w-[60px]">
        <img src={Logo} alt="" height="100%" width="100%" />
      </div>
      <ul className="hidden sm:flex gap-4 text-lg">
        <li>
          <a href="/" className="hover:text-darkGreen">
            Home
          </a>
        </li>
        <li>
          <a href="" className="hover:text-darkGreen">
            About
          </a>
        </li>
        <li>
          <a href="" className="hover:text-darkGreen">
            Contact
          </a>
        </li>
        <li>
          <a href="/terms-of-service"className="hover:text-darkGreen">
            Terms of Service
          </a>
        </li>
      </ul>
      <div className="nav__icon sm:hidden sm:invisible block visible">
            <input
              type="checkbox"
              className={`navigation__checkbox none`}
              id="navi-toggle"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <label htmlFor="navi-toggle" className={`navigation__button h-[2rem] absolute z-20 w-[2rem] right-6 top-6 text-center cursor-pointer`}>
              <span className={`navigation__icon relative mt-[2rem]`}>&nbsp;</span>
            </label>
          </div>
      <ul className={`flex flex-col gap-4 text-lg fixed z-10 bg-white right-0 h-screen px-10 py-32 top-0 transform transition-transform duration-300 ${checked ? "translate-x-0" : 'translate-x-full'}`}>
        <li>
          <a href="/" className="hover:text-darkGreen">
            Home
          </a>
        </li>
        <li>
          <a href="" className="hover:text-darkGreen">
            About
          </a>
        </li>
        <li>
          <a href="" className="hover:text-darkGreen">
            Contact
          </a>
        </li>
        <li>
          <a href="/terms-of-service" className="hover:text-darkGreen">
            Terms of Service
          </a>
        </li>
      </ul>
      
    </header>
  );
};
export default Nav;
