import { useQuery } from "@tanstack/react-query";
import { GetOne } from "./endPoints";

export const UseGetCountryDetails = ({ countryName }) => {
  const query = useQuery({
    retry: false,
    refetchOnWindowFocus: false,
    manual: true,
    enabled: countryName ? true : false,
    queryKey: ["Country", countryName],
    queryFn: async () => await GetOne(countryName),
  });
  return query;
};
