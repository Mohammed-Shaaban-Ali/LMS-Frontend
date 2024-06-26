import Image from "next/image";
import { RiLockPasswordFill } from "react-icons/ri";
import { SiCoursera } from "react-icons/si";
import { AiOutlineLogout } from "react-icons/ai";
import { GrUserAdmin } from "react-icons/gr";
import Link from "next/link";
import Avatar from "../../../public/Image/avatar.webp";

type Props = {
  user: any;
  active: number;
  setActive: (active: number) => void;
  logout: () => void;
  avatar: string | null;
  data: any;
};

function SideBarProfile({
  user,
  active,
  setActive,
  avatar,
  logout,
  data,
}: Props) {
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
            user?.avatar || avatar || data?.user
              ? user?.avatar?.url || avatar || data?.user?.image
              : Avatar
          }
          alt="Avatar"
          width={24}
          height={24}
          className=" 800px:w-[24px] 800px:h-[24px] cursor-pointer rounded-full  "
        />
        <h5 className="pl-2 800px:block hidden font-Poppins ">My Account</h5>
      </div>

      {!data && (
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
      )}

      {user.role == "admin" && (
        <Link
          href={"/admin"}
          className={`w-full items-center px-3 py-4 cursor-pointer flex ${
            active === 3 ? " bg-slate-200 dark:bg-slate-600" : "bg-transparent"
          }`}
        >
          <GrUserAdmin width={32} height={32} />
          <h5 className="pl-2 800px:block hidden font-Poppins ">
            Admin dashboard
          </h5>
        </Link>
      )}

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
