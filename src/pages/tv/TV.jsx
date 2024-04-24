import { Flex } from "antd";
import CommonCard from "../../components/commonCard/CommonCard";
import Title from "antd/es/typography/Title";
import { useContext, useState } from "react";
import { TrendingContext } from "../../context/Context";
import { useQuery } from "@tanstack/react-query";
import { API_KEY, AdditionApi, instanse } from "../../api/API";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import ReactPaginate from "react-paginate";

const TVPage = () => {
  const { tvSerial, setTV } = useContext(TrendingContext);
  const [page, setPage] = useState(1);
  const handlePageClick = (event) => {
    console.log(event.selected + 1);
    setPage(event.selected + 1);
  };
  const getTV = async () => {
    const response = await instanse.get(AdditionApi.Tv(page) + API_KEY);
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
        <ReactPaginate
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          activeClassName={"active"}
          breakLabel="..."
          nextLabel={<MdOutlineNavigateNext />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={10}
          previousLabel={<GrFormPrevious />}
          renderOnZeroPageCount={null}
          pageLinkClassName={"linkPage"}
          disabledClassName={"disabledButton"}
        />
      </Flex>
    </section>
  );
};

export default TVPage;
