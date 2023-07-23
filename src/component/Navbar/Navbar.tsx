import gambar from "../../image/download.jpeg";
import ThemeSwitcher from "../Button/ThemeSwitcher";


const Navbar= () => {
  return (
    <div className="navbar w-screen sticky inset-x-0 top-0 z-10 py-5">
      <div className="flex-none w-14 h-14">
        <a  className="btn btn-ghost normal-case rounded-full">
          <img src={gambar} className="w-10 h-10 rounded-full" alt="" />
        </a>
      </div>
      <div className="grow">
        <a className="btn btn-ghost normal-case text-3xl dark:text-primary font-righteous text-title mx-auto">
          TodoList
        </a>
      </div>
      <div className="flex-none w-14 h-14">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
