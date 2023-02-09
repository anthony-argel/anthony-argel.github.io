import blogimg from "../assets/images/blog.png";
import asmrdbimg from "../assets/images/asmrdbv2.png";
import rpgimg from "../assets/images/rpgengine.png";
import dlsiteimg from "../assets/images/dlsite.jpeg";

function Projects(props) {
    const projects = [
        {
            title: "Dungeon Crawler RPG Engine",
            description: "A video game engine made in C++.",
            img: rpgimg,
            url: "https://www.youtube.com/watch?v=RFxn00Do2zo",
        },
        {
            title: "ASMR database",
            description:
                "A wiki-esque website for ASMR enthusiasts to gather data, search for new content, and discuss all things ASMR.",
            img: asmrdbimg,
            url: "https://www.asmrdb.net/",
            backend: "https://github.com/anthony-argel/asmrdb-api",
            frontend: "https://github.com/anthony-argel/asmrdb-next",
        },
        {
            title: "DLSite Scraper",
            description:
                "A web scraper that collects sales data from a popular Japanese site.",
            img: dlsiteimg,
            url: "https://www.youtube.com/watch?v=fsdmvGr1AiE",
        },
    ];

    return (
        <div className="row projects w-100 gx-0">
            <h2 className="text-center mt-5">Projects</h2>
            {projects.map((value, index) => {
                return (
                    <div className="col-12 p-0" key={index}>
                        <div
                            className={
                                index % 2 === 0
                                    ? "row p-5 gx-0"
                                    : "row p-5 gray-project flex-row-reverse gx-0"
                            }
                        >
                            <div className="col-12 col-lg-6 p-3 d-flex justify-content-center align-items-center">
                                <img
                                    src={value.img}
                                    alt="project thumbnail"
                                ></img>
                            </div>
                            <div className="col-12 col-lg-6 p-1 d-flex flex-column justify-content-center align-items-center">
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                                <div className="d-flex justify-content-center">
                                    <a
                                        href={value.url}
                                        className="my-btn demo-btn mx-2 p-2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Demonstration
                                    </a>
                                    {typeof value.frontend !== "undefined" ? (
                                        <a
                                            href={value.frontend}
                                            className="my-btn code-btn mx-2 p-2 text-center"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Frontend Code
                                        </a>
                                    ) : null}
                                    {typeof value.backend !== "undefined" ? (
                                        <a
                                            href={value.backend}
                                            className="my-btn code-btn mx-2 p-2 text-center"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Backend Code
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Projects;