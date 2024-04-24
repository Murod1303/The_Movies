import { Flex } from "antd";
import CommonCard from "../../components/commonCard/CommonCard";
import Title from "antd/es/typography/Title";
import { useContext } from "react";
import { TrendingContext } from "../../context/Context";
import { useQuery } from "@tanstack/react-query";
import { API_KEY, AdditionApi, instanse } from "../../api/API";

const TVPage = () => {
  const { tvSerial, setTV } = useContext(TrendingContext);
  const getTV = async () => {
    const response = await instanse.get(AdditionApi.Tv(1) + API_KEY);
    setTV(response);
    return response;
  };
  const { isLoading, isError, error } = useQuery({
    queryKey: ["getTV"],
    queryFn: getTV,
  });
  const tvData = tvSerial?.data?.results;
  return (
    <section>
      <Flex align="start" vertical>
        <Title level={2} style={{ color: "#fff", marginBottom: 16 }}>
          TV serial
        </Title>
        <Flex align="center" gap={40} wrap="wrap">
          {tvData &&
            tvData.map((item) => {
              return <CommonCard key={item.id} item={item} />;
            })}
        </Flex>
      </Flex>
    </section>
  );
};

export default TVPage;
