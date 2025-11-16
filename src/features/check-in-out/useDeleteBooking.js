import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { deleteBooking } from "../../services/apiBookings";


export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteExistingBooking } = useMutation({
    mutationFn: (id) => deleteBooking(id),
    onSuccess: () => {
      toast.success("Booking Successfully deleted!");
      //will immediatly fetch cabins again.
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
     
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteExistingBooking };
}
