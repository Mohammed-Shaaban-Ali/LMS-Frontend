"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
} from "@/redux/features/user/userApi";
import { Box, Button } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import DeleteModal from "../../DeleteModal";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineAttachEmail } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { ImUsers } from "react-icons/im";
import Loading from "../../Loading";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  courses: string[];
}

interface AllUsersProps {
  isAdmin?: boolean;
}

const AllUsers: React.FC<AllUsersProps> = ({ isAdmin }) => {
  const [open, setOpen] = useState(false);
  const [userID, setUserID] = useState<string | undefined>(undefined);

  const { theme } = useTheme();

  const { data, isLoading, refetch } = useGetAllUsersQuery(
    {},
    { refetchOnReconnect: true }
  );
  const [deleteUser, { isSuccess }] = useDeleteUserMutation();
  const [
    updateUserRole,
    { isSuccess: isUserRoleSuccess, isLoading: isLoadingUserRole },
  ] = useUpdateUserRoleMutation();

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Name", flex: 0.6 },
    { field: "email", headerName: "Email", flex: 0.5 },
    { field: "courses", headerName: "Purchased Courses", flex: 0.5 },
    {
      field: "Role",
      headerName: "Role",
      flex: 0.4,
      renderCell: (params) => (
        <Button
          onClick={() => {
            handleUpadateRole({ role: params.row.role, id: params.id });
          }}
        >
          {params.row.role === "admin" ? (
            <div className="flex items-center justify-center gap-2 dark:text-white text-black lowercase font-bold">
              <RiAdminFill className="dark:text-white text-black" size={20} />
              Admin
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 dark:text-white text-black lowercase font-bold">
              <ImUsers className="dark:text-white text-black" size={20} /> users
            </div>
          )}
        </Button>
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
            setUserID(params.id as string);
          }}
        >
          <AiOutlineDelete className="dark:text-white text-black" size={20} />
        </Button>
      ),
    },
    {
      field: "Email",
      headerName: "Email",
      flex: 0.2,
      renderCell: (params) => (
        <div className="flex  items-center h-[100%] w-[100%] justify-center">
          <a href={`mailto:${params?.row?.email}`}>
            <MdOutlineAttachEmail
              className="dark:text-white text-black"
              size={20}
            />
          </a>
        </div>
      ),
    },
  ];
  let rows: GridRowsProp =
    data?.users?.map((user: User) => ({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      courses: user.courses.length,
    })) || [];

  if (isAdmin) {
    rows = rows.filter((row) => row.role === "admin");
  }

  const handleDeleteUser = async () => {
    if (userID) {
      await deleteUser(userID);
      setOpen(false);
    }
  };
  const handleUpadateRole = async (datainput: any) => {
    const { id, role } = datainput;
    const data = {
      id,
      role: role === "admin" ? "user" : "admin",
    };

    await updateUserRole(data);
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("User deleted successfully");
      refetch();
    }
    if (isUserRoleSuccess) {
      toast.success("Role updated successfully");
      refetch();
    }
  }, [isSuccess, refetch, isUserRoleSuccess]);
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
            handleDelete={handleDeleteUser}
          />
        </Box>
      )}
    </div>
  );
};

export default AllUsers;
