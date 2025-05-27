import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUser = () => {
  const axiosPublic = useAxiosPublic();
  const email = localStorage.getItem("email");
  const { data: user, isPending: loadingUser } = useQuery({
    queryKey: ["user", email],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/user/${email}`);
      return data;
    },
  });
  return [user, loadingUser];
};
export default useUser;