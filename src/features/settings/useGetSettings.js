import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useGetSettings() {
  const { data: settings, isLoading } = useQuery({
    queryFn: getSettings,
    queryKey: ["settings"],
  });
  return { settings, isLoading };
}
