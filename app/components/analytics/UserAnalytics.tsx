"use client";
import { useAnalyticsUserQuery } from "@/redux/features/analytics/analyticsApi";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Loading from "../Loading";

type Props = {
  isDashboard?: boolean;
};
type ChartData = {
  name: string;
  count: number;
};

export default function UserAnalytics({ isDashboard }: Props) {
  const { data: userAnalyicsData, isLoading } = useAnalyticsUserQuery({});
  const data: ChartData[] = [];

  userAnalyicsData &&
    userAnalyicsData?.users?.last12Month?.forEach((element: any) => {
      data.push({
        name: element.month,
        count: element.count,
      });
    });
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div
          className={`${
            !isDashboard
              ? "mt-[50px] "
              : "mt-[50px] dark:bg-[#111c43] pb-5 shadow-sm rounded-sm"
          }`}
        >
          <div className={`${isDashboard ? "!ml-8 mb5" : "mb5"}`}>
            <h1
              className={`title ${
                isDashboard && "!text-[20px] "
              } px-5 !text-start mb-2`}
            >
              Users Analytics
            </h1>
            {!isDashboard && <p className="label px-5">Last 12 Months Data</p>}
          </div>

          <div
            className={`${
              isDashboard ? "h-[30vh]" : "h-screen"
            } w-full  flex items-center justify-center`}
          >
            <ResponsiveContainer
              width={isDashboard ? "100%" : "90%"}
              height={!isDashboard ? "50%" : "100%"}
            >
              <AreaChart
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                data={data}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="count"
                  stroke="#4d62d9"
                  fill="#4d62d9"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  );
}
