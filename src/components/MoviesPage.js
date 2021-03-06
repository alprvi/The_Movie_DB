import React from "react";

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

// Hook
import { useMoviesPageFetch } from "../hooks/useMoviesPageFetch";

// Image
import NoImage from "../images/no_image.jpg";

// Components
import HeroImage from "./MovieHeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar/index";
import Button from "./Button/index";

const MoviesPage = () => {
  const {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setLoadingMore,
  } = useMoviesPageFetch();

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar text="Search Movie" setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            type="movie"
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            id={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={() => setLoadingMore(true)} />
      )}
    </>
  );
};

export default MoviesPage;
