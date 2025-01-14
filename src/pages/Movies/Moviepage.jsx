import React, { useState } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useDiscoverMovieQuery } from "../../hooks/useDiscoverMovie";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import { Alert, Container, Row, Col, Spinner, Dropdown } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";

const Moviepage = () => {
    const [page, setPage] = useState(1);
    const [selectedGenre, setSelectedGenre] = useState(null); // 장르 필터 상태
    const [sortOrder, setSortOrder] = useState(""); // 정렬 상태
    const [searchParams] = useSearchParams(); // URL 기반 키워드 검색
    const keyword = searchParams.get("q") || ""; // URL에서 `q` 파라미터 값 가져오기

    const handlePageClick = ({ selected }) => {
        setPage(selected + 1); // 페이지 업데이트
    };

    const handleGenreSelect = (genreId) => {
        setSelectedGenre(genreId); // 장르 선택 상태 업데이트
        setPage(1); // 첫 페이지로 리셋
    };

    const handleSort = (order) => {
        setSortOrder(order); // 정렬 상태 업데이트
        setPage(1); // 첫 페이지로 리셋
    };

    // 키워드 검색 데이터 가져오기
    const {
        data: searchData,
        isLoading: isSearchLoading,
        isError: isSearchError,
        error: searchError,
    } = useSearchMovieQuery({
        keyword,
        page,
    });

    // 장르 필터링 데이터 가져오기
    const {
        data: discoverData,
        isLoading: isDiscoverLoading,
        isError: isDiscoverError,
        error: discoverError,
    } = useDiscoverMovieQuery({
        genre: selectedGenre,
        page,
    });

    // 장르 데이터 가져오기
    const {
        data: genreData,
        isLoading: isGenreLoading,
        isError: isGenreError,
        error: genreError,
    } = useMovieGenreQuery();

    if (isSearchLoading || isDiscoverLoading || isGenreLoading) {
        return (
            <div className="spinner-area">
                <Spinner
                    animation="border"
                    variant="danger"
                    style={{ width: "5rem", height: "5rem" }}
                />
            </div>
        );
    }

    if (isSearchError || isDiscoverError || isGenreError) {
        return (
            <Alert variant="danger">
                {searchError?.message || discoverError?.message || genreError?.message || "Something went wrong!"}
            </Alert>
        );
    }

    // 데이터 병합 및 필터링
    let combinedResults = [];
    if (keyword) {
        // 키워드 검색 결과에서 장르 필터 적용
        combinedResults = searchData?.results.filter((movie) =>
            selectedGenre ? movie.genre_ids.includes(selectedGenre) : true
        );
    } else {
        // 장르 필터만 적용
        combinedResults = discoverData?.results || [];
    }

    // 정렬 로직
    const sortedMovies = combinedResults
        ? [...combinedResults].sort((a, b) => {
            if (sortOrder === "most") {
                return b.popularity - a.popularity;
            } else if (sortOrder === "least") {
                return a.popularity - b.popularity;
            }
            return 0;
        })
        : [];

    return (
        <Container>
            <Row className="mb-4">
                <Col lg={4} xs={12}>
                    {/* 정렬 드롭다운 */}
                    <Dropdown className="mb-3">
                        <Dropdown.Toggle variant="dark" id="sort-dropdown" className="w-100">
                            {sortOrder === "most"
                                ? "Most Popular"
                                : sortOrder === "least"
                                ? "Least Popular"
                                : "Sort by Popularity"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="w-100">
                            <Dropdown.Item onClick={() => handleSort("most")}>
                                Most popular movies
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSort("least")}>
                                Least popular movies
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSort("")}>Default Order</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    {/* 장르 드롭다운 */}
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" id="genre-dropdown" className="w-100">
                            {selectedGenre
                                ? genreData?.find((genre) => genre.id === selectedGenre)?.name || "Select Genre"
                                : "Filter by Genre"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="w-100">
                            {genreData?.map((genre) => (
                                <Dropdown.Item key={genre.id} onClick={() => handleGenreSelect(genre.id)}>
                                    {genre.name}
                                </Dropdown.Item>
                            ))}
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={() => setSelectedGenre(null)}>Clear Genre Filter</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>

                <Col lg={8} xs={12}>
                    {/* 영화 목록 */}
                    <Row>
                        {sortedMovies.map((movie) => (
                            <Col key={movie.id} lg={4} xs={12} className="mb-4">
                                <MovieCard movie={movie} />
                            </Col>
                        ))}
                    </Row>

                    {/* 페이지네이션 */}
                    <ReactPaginate
                        className="pagination d-flex justify-content-center"
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5} // Always display 5 page numbers
                        marginPagesDisplayed={0} // No extra pages at the start or end
                        pageCount={keyword ? searchData?.total_pages : discoverData?.total_pages}
                        previousLabel="< prev"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel={null} // Removes ellipses (breaks)
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                        forcePage={page - 1}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Moviepage;
