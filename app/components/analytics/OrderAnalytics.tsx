"use client";
import {
  useAnalyticsOrderQuery,
  useAnalyticsUserQuery,
} from "@/redux/features/analytics/analyticsApi";
import React from "react";
import Loading from "../Loading";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props = {
  isDashboard?: boolean;
};
type ChartData = {
  name: string;
  count: number;
};

export default function OrderAnalytics({ isDashboard }: Props) {
  const { data: userAnalyicsData, isLoading } = useAnalyticsOrderQuery({});
  const data: ChartData[] = [];

  userAnalyicsData &&
    userAnalyicsData?.order?.last12Month?.forEach((element: any) => {
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
              ? "mt-[50px]"
              : "mt-[50px] dark:bg-[#111c43] pb-5 shadow-sm rounded-sm"
          }`}
        >
          <div className={`${isDashboard ? "!ml-8 mb5" : "mb5"}`}>
            <h1
              className={`title ${
                isDashboard && "!text-[20px] "
              } px-5 !text-start mb-2`}
            >
              Orders Analytics
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
              <LineChart
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                data={data}
              >
                {" "}
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="count"
                  stroke="#4d62d9"
                  fill="#4d62d9"
                />
                {!isDashboard && <Legend />}
                <Line type="monotone" dataKey="count" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  );
}
