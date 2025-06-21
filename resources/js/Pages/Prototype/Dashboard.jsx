import Flickity from "react-flickity-component";
import { Helmet } from "react-helmet";
import Authenticated from "@/Layouts/Authenticated/Index";
import FeatureMovie from "@/Components/FeatureMovie";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard() {
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
        <Authenticated>
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
                    {[1, 2, 3, 4].map((i) => {
                        return (
                            <FeatureMovie
                                key={i}
                                category={"komedi"}
                                name={"batman"}
                                slug={"http://google.com"}
                                rating={2.0}
                                thumbnail={"/images/browse-1.png"}
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
                    {[1, 2, 3, 4, 5, 6].map((i) => {
                        return (
                            <MovieCard
                                key={i}
                                category={"komedi"}
                                name={"batman"}
                                slug={"http://google.com"}
                                thumbnail={"/images/browse-1.png"}
                            />
                        );
                    })}
                </Flickity>
            </div>
        </Authenticated>
    );
}
