"use client";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Label,
  YAxis,
  LabelList,
} from "recharts";
import Loading from "../Loading";
import { useAnalyticsCoursesQuery } from "@/redux/features/analytics/analyticsApi";

type Props = {
  isDashboard?: boolean;
};
type ChartData = {
  name: string;
  uv: number;
};

export default function CourseAnalytics({ isDashboard }: Props) {
  const { data: courseAnalyicsData, isLoading } = useAnalyticsCoursesQuery({});
  const data: ChartData[] = [];
  console.log(courseAnalyicsData?.course?.last12Month);
  courseAnalyicsData &&
    courseAnalyicsData?.course?.last12Month?.forEach((element: any) => {
      data.push({
        name: element.month,
        uv: element.count,
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
              Course Analytics
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
              <BarChart width={150} height={300} data={data}>
                <XAxis dataKey="name">
                  <Label offset={0} position="insideBottom" />
                </XAxis>
                <YAxis />

                <Bar dataKey="uv" fill="#3faf82">
                  <LabelList dataKey="uv" position="top" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  );
}
