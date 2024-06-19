import Image from "next/image";
import { RiLockPasswordFill } from "react-icons/ri";
import { SiCoursera } from "react-icons/si";
import { AiOutlineLogout } from "react-icons/ai";

type Props = {
  user: any;
  active: number;
  setActive: (active: number) => void;
  logout: () => void;
  avatar: string | null;
};

function SideBarProfile({ user, active, setActive, avatar, logout }: Props) {
  return (
    <div className="w-full min-h-screen text-black dark:text-white font-semibold ">
      <div
        className={`w-full items-center px-3 py-4 cursor-pointer flex ${
          active === 1 ? " bg-slate-200 dark:bg-slate-600" : "bg-transparent"
        }`}
        onClick={() => setActive(1)}
      >
        <Image
          src={
            user?.avatar || avatar
              ? user.avatar || avatar
              : "https://thumbs.dreamstime.com/b/default-avatar-profile-trendy-style-social-media-user-icon-187599373.jpg"
          }
          alt="Avatar"
          width={24}
          height={24}
          className=" 800px:w-[24px] 800px:h-[24px] cursor-pointer rounded-full  "
        />
        <h5 className="pl-2 800px:block hidden font-Poppins ">My Account</h5>
      </div>

      <div
        className={`w-full items-center px-3 py-4 cursor-pointer flex ${
          active === 2 ? " bg-slate-200 dark:bg-slate-600" : "bg-transparent"
        }`}
        onClick={() => setActive(2)}
      >
        <RiLockPasswordFill width={32} height={32} />
        <h5 className="pl-2 800px:block hidden font-Poppins ">
          Change Password
        </h5>
      </div>

      <div
        className={`w-full items-center px-3 py-4 cursor-pointer flex ${
          active === 3 ? " bg-slate-200 dark:bg-slate-600" : "bg-transparent"
        }`}
        onClick={() => setActive(3)}
      >
        <SiCoursera width={32} height={32} />
        <h5 className="pl-2 800px:block hidden font-Poppins ">
          Enrolled Courses
        </h5>
      </div>

      <div
        className={`w-full items-center px-3 py-4 cursor-pointer flex ${
          active === 4 ? " bg-slate-200 dark:bg-slate-600" : "bg-transparent"
        }`}
        onClick={() => logout()}
      >
        <AiOutlineLogout width={32} height={32} />
        <h5 className="pl-2 800px:block hidden font-Poppins ">Log Out</h5>
      </div>
    </div>
  );
}

export default SideBarProfile;
