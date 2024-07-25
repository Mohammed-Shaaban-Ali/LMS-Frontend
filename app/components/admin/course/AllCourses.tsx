"use client";

import Loading from "@/app/Loading";
import {
  useDeleteCoursMutation,
  useGetAllcourseQuery,
} from "@/redux/features/course/CourseApi";
import { Box, Button } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { format } from "timeago.js";
import DeleteModal from "../../DeleteModal";
import toast from "react-hot-toast";
import Link from "next/link";

interface Course {
  _id: string;
  name: string;
  purchaseed: number;
  rating: number;
  createdAt: string;
}

const AllCourses: React.FC = () => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [courseID, setCourseID] = useState<string | undefined>(undefined);
  const [deleteCours, { isSuccess }] = useDeleteCoursMutation();

  const { data, isLoading, refetch } = useGetAllcourseQuery(
    {},
    { refetchOnReconnect: true }
  );

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "title", headerName: "Title", flex: 1 },
    { field: "ratings", headerName: "Ratings", flex: 0.5 },
    { field: "purchased", headerName: "Purchased", flex: 0.5 },
    { field: "createdAt", headerName: "Created At", flex: 0.5 },
    {
      field: "edit",
      headerName: "Edit",
      flex: 0.2,
      renderCell: (params) => (
        <div className="flex  items-center h-[100%] w-[100%] justify-center">

        <Link href={`/admin/edit-course/${params.id}`} >
          <FiEdit2 className="dark:text-white text-black" size={20} />
        </Link>
        </div>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      flex: 0.2,
      renderCell: (params) => (
        <Button
          onClick={() => {
            setOpen(true);
            setCourseID(params.id as string);
          }}
        >
          <AiOutlineDelete className="dark:text-white text-black" size={20} />
        </Button>
      ),
    },
  ];

  const rows: GridRowsProp = data
    ? data?.courses?.map((item: Course) => ({
        id: item._id,
        title: item.name,
        purchased: item.purchaseed,
        ratings: item.rating,
        createdAt: format(item.createdAt),
      }))
    : [];
  const handleDeleteCourses = async () => {
    await deleteCours(courseID);
    setOpen(false);
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Course deleted successfully");
    }
    refetch();
  }, [isSuccess, refetch]);
  return (
    <div className="mt-[120px]">
      {isLoading ? (
        <Loading />
      ) : (
        <Box m="20px">
          <Box
            m="40px 0 0 0"
            height="80vh"
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
              "& .MuiDataGrid-columnHeaders ": {
                backgroundColor:
                  theme === "dark" ? "#3e4396!important " : "#a4a9fc",
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
                    theme === "dark" ? "#3e4396!important " : "#a4a9fc",
                  borderBottom: "none",
                  color: theme === "dark" ? "#fff" : "#000",
                },
            }}
          >
            <DataGrid checkboxSelection rows={rows} columns={columns} />
          </Box>
          <DeleteModal
            open={open}
            setOpen={setOpen}
            handleDelete={handleDeleteCourses}
          />
        </Box>
      )}
    </div>
  );
};

export default AllCourses;
