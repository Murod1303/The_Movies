import { Flex, Typography } from "antd";
import CaruselTrending from "../../components/carusel/Carusel";
import CommonCard from "../../components/commonCard/CommonCard";
import { useQuery } from "@tanstack/react-query";
import { API_KEY, AdditionApi, instanse } from "../../api/API";
import { useEffect } from "react";
const { Title } = Typography;
const Trending = () => {
  // const queryClient = useQueryClient();
  const getTrend = async () => {
    const response = await instanse.get(AdditionApi.topRated + API_KEY);
    return response;
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getTrend"],
    queryFn: getTrend,
  });
  useEffect(() => {}, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <section>
      <div className="wrapper">
        <div className="mb-10">
          <Title level={2} style={{ color: "#fff" }}>
            Trending
          </Title>
          <CaruselTrending />
        </div>
        <Flex align="start" vertical className="recomendent__Wrapper">
          <Title level={2} style={{ color: "#fff", marginBottom: 32 }}>
            Recommended for you
          </Title>
          <Flex align="center" gap={40} wrap="wrap">
            <CommonCard />
          </Flex>
        </Flex>
      </div>
    </section>
  );
};

export default Trending;
