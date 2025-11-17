import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading: isLoggingOut } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      // /remove all the quieries from the cache to prevent stealing data
      // when the user is logged out
      queryClient.removeQueries();
      toast.success("Logged Out Successfully");
      //{ replace: true } to erase the place we were earlier
      navigate("/login", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { logout, isLoggingOut };
}
