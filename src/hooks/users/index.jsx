import { useMutation, useQuery } from "@tanstack/react-query";
import { GetUser, GetLogin } from "./endPoints";
import { useEffect } from "react";

export const UseLogin = (SuccessCallback) => {
  const mutation = useMutation({
    mutationFn: GetLogin,
    onSuccess: (data) => {
      SuccessCallback(data);
    },
  });
  return mutation;
};

export const UseGetUser = () => {
  const query = useQuery({
    retry: false,
    refetchOnWindowFocus: false,
    queryKey: ["user"],
    queryFn: async () => await GetUser(),
  });
  return query;
};
