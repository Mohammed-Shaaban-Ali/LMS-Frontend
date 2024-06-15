import { useSelector } from "react-redux";

export default function useUserAuth() {
  const user = useSelector((state: any) => state.auth.user);
  return !!user; // Returns true if user exists, otherwise false
}
