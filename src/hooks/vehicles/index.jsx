import { useMutation, useQuery } from "@tanstack/react-query";
import { GetFile, GetList, Register } from "./endPoints";
import toast from "react-hot-toast";
import { queryClient } from "../..";

export const UseAddVehicle = (SuccessCallback) => {
  const mutation = useMutation({
    mutationFn: Register,
    onSuccess: (data) => {
      if (data?.error) {
        toast.success(data?.error, {
          position: "bottom-left",
        });
      } else {
        toast.success("New Vehicle has been added", {
          position: "bottom-left",
        });

        queryClient.setQueryData(["VehicleList"], (oldData) =>
          oldData ? oldData.concat(data.data) : [data?.data]
        );
        if (SuccessCallback) SuccessCallback(data);
      }
    },
  });
  return mutation;
};

export const UseGetListVehicle = () => {
  const query = useQuery({
    queryKey: ["VehicleList"],
    queryFn: GetList,
  });
  return query;
};

export const UseGetFileVehicle = (id) => {
  const query = useQuery({
    enabled: id ? true : false,
    queryKey: ["VehicleFile", { id }],
    queryFn: async () => await GetFile(id),
  });
  return query;
};
