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
            description: "A wiki-esque website for ASMR enthusiasts to gather data, search for new content, and discuss all things ASMR.",
            img: asmrdbimg,
            url: "https://www.asmrdb.net/",
            backend: "https://github.com/anthony-argel/asmrdb-api",
            frontend: "https://github.com/anthony-argel/asmrdb-next",
        },
        {
            title: "DLSite Scraper",
            description: "A web scraper that collects sales data from a popular Japanese site.",
            img: dlsiteimg,
            url: "https://www.youtube.com/watch?v=fsdmvGr1AiE",
        },
    ];

    return (
        <div className="text-white p-5 h-full">
            <h2 className="text-center text-3xl mb-5 font-bold">Projects</h2>
            <div className="flex flex-col gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
                {projects.map((value, index) => {
                    return (
                        <div key={index} className="bg-black-light p-5 rounded-lg flex flex-col h-full">
                            <div className="basis-1/2 flex items-center">
                                <img src={value.img} alt="project thumbnail" className="w-full h-auto"></img>
                            </div>
                            <div className="basis-1/2 p-5 flex flex-col justify-center items-center gap-3">
                                <h3 className="text-2xl ">{value.title}</h3>
                                <p>{value.description}</p>
                                <div className="flex flex-wrap justify-center items-center gap-3">
                                    <p className="pt-2">
                                        <a
                                            href={value.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-blue-700 hover:bg-blue-800 rounded-lg text-center">
                                            Demonstration
                                        </a>
                                    </p>
                                    {typeof value.frontend !== "undefined" ? (
                                        <p className="pt-2">
                                            <a
                                                href={value.frontend}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-teal-800 hover:bg-teal-900 rounded-lg text-center">
                                                Frontend Code
                                            </a>
                                        </p>
                                    ) : null}
                                    {typeof value.backend !== "undefined" ? (
                                        <p className="pt-2">
                                            <a
                                                href={value.backend}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-teal-800 hover:bg-teal-900 rounded-lg text-center">
                                                Backend Code
                                            </a>
                                        </p>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Projects;
