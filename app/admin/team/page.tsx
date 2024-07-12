import AllUsers from "@/app/components/admin/users/AllUsers";

const AdminUsersPage: React.FC = () => {
  return (
    <div>
      <AllUsers isAdmin={"admin"} />
    </div>
  );
}

export default AdminUsersPage;