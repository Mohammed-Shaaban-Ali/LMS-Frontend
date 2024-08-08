"use client";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { AiOutlineMail } from "react-icons/ai";
import { useTheme } from "next-themes";
import { format } from "timeago.js";
import Loading from "@/app/Loading";
import { useGetAllcourseQuery } from "@/redux/features/course/CourseApi";
import { useGetOrdersQuery } from "@/redux/features/orders/OrdersApi";
import { useGetAllUsersQuery } from "@/redux/features/user/userApi";

interface Props {
  isDashboard?: boolean;
}

interface Order {
  _id: string;
  userId: string;
  courseId: string;
  createdAt: string;
  userName: string;
  userEmail: string;
  title: string;
  price: string;
}

interface User {
  _id: string;
  name: string;
  email: string;
}

interface Course {
  _id: string;
  name: string;
  price: number;
}

const AllInvoices: React.FC<Props> = ({ isDashboard = false }) => {
  const { theme } = useTheme();
  const { isLoading, data: ordersData } = useGetOrdersQuery({});
  const { data: usersData } = useGetAllUsersQuery({});
  const { data: coursesData } = useGetAllcourseQuery({});
  const [orderData, setOrderData] = useState<Order[]>([]);

  useEffect(() => {
    if (ordersData && usersData && coursesData) {
      const enrichedOrders = ordersData.orders.map((order: Order) => {
        const user = usersData.users.find(
          (user: User) => user._id == order.userId
        );
        const course = coursesData.courses.find(
          (course: Course) => course._id == order.courseId
        );
        return {
          ...order,
          userName: user?.name || "Unknown User",
          userEmail: user?.email || "Unknown Email",
          title: course?.name || "Unknown Course",
          price: course ? `$${course.price}` : "Price Not Available",
        };
      });
      setOrderData(enrichedOrders);
    }
  }, [ordersData, usersData, coursesData]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 0.3 },
    { field: "userName", headerName: "Name", flex: isDashboard ? 0.6 : 1 },
    ...(isDashboard
      ? []
      : [
          { field: "userEmail", headerName: "Email", flex: 1 },
          { field: "title", headerName: "Course Title", flex: 1 },
        ]),
    { field: "price", headerName: "Price", flex: 0.5 },
    ...(isDashboard
      ? [
          {
            field: "createdAt",
            headerName: "Created At",
            flex: 0.5,
          },
        ]
      : [
          {
            field: "createdAt",
            headerName: "Created At",
            flex: 0.5,
          },
          {
            field: "emailLink",
            headerName: "Email",
            flex: 0.2,
            renderCell: (params: any) => (
              <div className="flex  items-center h-[100%] w-[100%] justify-center">
                <a href={`mailto:${params?.row?.email}`}>
                  <AiOutlineMail
                    className="dark:text-white text-black"
                    size={20}
                  />
                </a>
              </div>
            ),
          },
        ]),
  ];
  const rows = orderData.map((order) => ({
    id: order._id,
    userName: order.userName,
    userEmail: order.userEmail,
    title: order.title,
    price: order.price,
    createdAt: format(order.createdAt),
  }));

  return (
    <div className={!isDashboard ? "mt-[120px]" : "mt-0"}>
      {isLoading ? (
        <Loading />
      ) : (
        <Box m={isDashboard ? "0" : "40px"}>
          <Box
            m={isDashboard ? "0" : "40px 0 0 0"}
            height={isDashboard ? "35vh" : "80vh"}
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
                outline: "none",
              },
              "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-sortIcon": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-row": {
                color: theme === "dark" ? "#fff" : "#000",
                borderBottom:
                  theme === "dark"
                    ? "1px solid #ffffff30!important"
                    : "1px solid #ccc!important",
              },
              "& .MuiTablePagination-root": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .name-column-cell": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor:
                  theme === "dark" ? "#3e4396!important" : "#a4a9fc",
                borderBottom: "none",
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: theme === "dark" ? "#1f2a40" : "#f2f0f0",
              },
              "& .MuiDataGrid-footerContainer": {
                backgroundColor: theme === "dark" ? "#3e4396" : "#a4a9fc",
                borderTop: "none",
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiCheckbox-root": {
                color:
                  theme === "dark" ? `#b7ebde!important` : `#000!important`,
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: "#fff!important",
              },
              ".css-14mxsc7-MuiDataGrid-root .MuiDataGrid-container--top [role=row], .css-14mxsc7-MuiDataGrid-root .MuiDataGrid-container--bottom [role=row]":
                {
                  backgroundColor:
                    theme === "dark" ? "#3e4396!important" : "#a4a9fc",
                  borderBottom: "none",
                  color: theme === "dark" ? "#fff" : "#000",
                },
            }}
          >
            <DataGrid
              checkboxSelection={!isDashboard}
              rows={rows}
              columns={columns}
            />
          </Box>
        </Box>
      )}
    </div>
  );
};

export default AllInvoices;
