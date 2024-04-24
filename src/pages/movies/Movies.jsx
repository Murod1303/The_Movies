import { Flex } from "antd";
import CommonCard from "../../components/commonCard/CommonCard";
import Title from "antd/es/typography/Title";

const Movies = () => {
  return (
    <section>
      <Flex align="start" vertical>
        <Title level={2} style={{ color: "#fff", marginBottom: 16 }}>
          Movies
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
    </section>
  );
};

export default Movies;
