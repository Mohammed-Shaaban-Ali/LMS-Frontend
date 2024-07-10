"use client";

import Loading from "@/app/Loading";
import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
import { Box, Button } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { useTheme } from "next-themes";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineAttachEmail } from "react-icons/md";

interface Course {
  _id: string;
  name: string;
  email: string;
  role: string;
  courses: string;
}

const AllUsers: React.FC = () => {
  const { theme } = useTheme();
  const { data, isLoading } = useGetAllUsersQuery({});
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 0.5 },
    { field: "role", headerName: "Role", flex: 0.5 },
    { field: "courses", headerName: "Purchased Courses", flex: 0.5 },
  
    {
      field: "delete",
      headerName: "Delete",
      flex: 0.2,
      renderCell: (params) => (
        <Button>
          <AiOutlineDelete className="dark:text-white text-black" size={20} />
        </Button>
      ),
    },
    {
      field: "Email",
      headerName: "Email",
      flex: 0.2,
      renderCell: (params) => (
        <Button>
          <MdOutlineAttachEmail className="dark:text-white text-black" size={20} />
        </Button>
      ),
    },
  ];

  const rows: GridRowsProp = 
  data
    ? data?.users?.map((item: Course) => ({
        id: item._id,
        name: item.name,
        email: item.email,
        role: item.role,
 courses: item.courses.length,
      }))
    :
     [];

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
        </Box>
      )}
    </div>
  );
};

export default AllUsers;
