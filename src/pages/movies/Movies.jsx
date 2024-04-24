import { Flex } from "antd";
import CommonCard from "../../components/commonCard/CommonCard";
import Title from "antd/es/typography/Title";
import { useContext, useState } from "react";
import { TrendingContext } from "../../context/Context";
import { API_KEY, AdditionApi, instanse } from "../../api/API";
import { useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
const Movies = () => {
  const { movies, setMovies } = useContext(TrendingContext);
  const [page, setPage] = useState(1);
  const handlePageClick = (event) => {
    console.log(event.selected + 1);
    setPage(event.selected + 1);
  };
  const getMovies = async () => {
    const response = await instanse.get(AdditionApi.Movies(page) + API_KEY);
    setMovies(response);
    console.log(response);
    return response;
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getMovies"],
    queryFn: getMovies,
  });
  const moviesData = movies?.data?.results;
  return (
    <section>
      <Flex align="start" vertical>
        <Title level={2} style={{ color: "#fff", marginBottom: 16 }}>
          Movies
        </Title>
        <Flex align="center" gap={40} wrap="wrap">
          {moviesData &&
            moviesData.map((item) => {
              return <CommonCard key={item.id} item={item} />;
            })}
        </Flex>
        <ReactPaginate
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          activeClassName={"activeClas"}
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

export default Movies;
