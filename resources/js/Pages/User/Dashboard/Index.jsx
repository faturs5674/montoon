import Flickity from "react-flickity-component";
import { Helmet } from "react-helmet";
import Authenticated from "@/Layouts/Authenticated/Index";
import FeatureMovie from "@/Components/FeatureMovie";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard({ auth, featuredMovies, movies }) {
    const flicityOption = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <Authenticated auth={auth}>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <title>Dashboard</title>
            </Helmet>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity
                    className="gap-[30px] __scroll-selector"
                    options={flicityOption}
                >
                    {featuredMovies?.map((featuredMovie) => {
                        return (
                            <FeatureMovie
                                key={featuredMovie.id}
                                category={featuredMovie.category}
                                name={featuredMovie.name}
                                slug={featuredMovie.slug}
                                rating={featuredMovie.rating}
                                thumbnail={featuredMovie.thumbnail}
                            />
                        );
                    })}
                </Flickity>
            </div>
            <div className="mt-[50px]">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity
                    className="gap-[30px] __scroll-selector"
                    options={flicityOption}
                >
                    {movies.map((movie) => {
                        return (
                            <MovieCard
                                key={movie.id}
                                category={movie.category}
                                name={movie.name}
                                slug={movie.slug}
                                thumbnail={movie.thumbnail}
                            />
                        );
                    })}
                </Flickity>
            </div>
        </Authenticated>
    );
}
