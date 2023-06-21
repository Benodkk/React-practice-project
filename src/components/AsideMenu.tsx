import { menuData } from "../assets/menuData";
import { Link } from "react-router-dom";

interface AsideMenuProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AsideMenu = ({ show, setShow }: AsideMenuProps) => {
  return (
    <aside
      className={`fixed  flex w-[20vw] items-center   
        shadow-lg ${show ? "left-0" : "-left-[18vw]"} transition-all
      `}
    >
      <div className={` h-screen w-[90%] p-8 `}>
        <div className="mb-8 text-2xl">Logo</div>
        <div className="flex flex-col gap-3">
          {menuData.map((element) => {
            return (
              <div key={element.linkName} className="flex items-center gap-2">
                {element.icon}
                <Link to={element.link}>{element.linkName}</Link>
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={() => setShow(!show)} className="w-[2vw] text-2xl">
        {show ? "<" : ">"}
      </button>
    </aside>
  );
};
