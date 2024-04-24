import { Flex } from "antd";
import CommonCard from "../../components/commonCard/CommonCard";
import Title from "antd/es/typography/Title";
import { useContext, useState } from "react";
import { TrendingContext } from "../../context/Context";
import { API_KEY, AdditionApi, instanse } from "../../api/API";
import { useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";

const Movies = () => {
  const { movies, setMovies } = useContext(TrendingContext);
  const [page, setPage] = useState(1);
  const handlePageClick = (e) => {
    console.log(e);
  };
  const getMovies = async () => {
    const response = await instanse.get(AdditionApi.Movies(page) + API_KEY);
    setMovies(response);
    return response;
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getMovies"],
    queryFn: getMovies,
  });
  const moviesData = movies?.data?.results;
  const pageCount = movies?.data?.page;
  console.log(movies);
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
          breakLabel="..."
          nextLabel=">"
          onPageChange={() => handlePageClick()}
          pageRangeDisplayed={3}
          pageCount={pageCount || 0}
          previousLabel=">"
          renderOnZeroPageCount={null}
        />
      </Flex>
    </section>
  );
};

export default Movies;
