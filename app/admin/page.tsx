import { FC } from "react";

import DashboardHero from "../components/admin/DashboardHero";
interface Props {}
const Page: FC<Props> = (props) => {
  return (
    <>
      <DashboardHero isDashbord={true} />
    </>
  );
};
export default Page;
