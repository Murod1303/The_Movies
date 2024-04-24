import { Flex } from "antd";
import CommonCard from "../../components/commonCard/CommonCard";
import Title from "antd/es/typography/Title";

const Watchlist = () => {
  return (
    <Flex align="center" vertical gap={50}>
      <Flex align="start" vertical>
        <Title level={2} style={{ color: "#fff", marginBottom: 16 }}>
          Bookmarked Movies
        </Title>
        <Flex align="center" gap={40} wrap="wrap">
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
        </Flex>
      </Flex>
      <Flex align="start" vertical>
        <Title level={2} style={{ color: "#fff", marginBottom: 16 }}>
          Bookmarked TV serial
        </Title>
        <Flex align="center" gap={40} wrap="wrap">
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Watchlist;
