import { FaJava, FaPython } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiCplusplus, SiJavascript, SiMongodb } from "react-icons/si";
import LangugeContainer from "./LanguageContainer";

const languageData = [
    {
        name: "Python",
        icon: (
            <FaPython
                style={{ width: "100%", height: "100%" }}
                color="#252323"
            ></FaPython>
        ),
        uses: ["Data Scraping", "Data Science", "Scripting / Automation"],
    },
    {
        name: "C++",
        icon: (
            <SiCplusplus
                color="#252323"
                style={{ width: "100%", height: "100%" }}
            />
        ),
        uses: ["Game Development", "LeetCode / Programming Challenges"],
    },
    {
        name: "JS/TS",
        icon: (
            <SiJavascript
                color="#252323"
                style={{ zIndex: "-1", width: "100%", height: "100%" }}
            />
        ),
        uses: ["MERN", "Fullstack Development", "Mobile Development"],
    },
    {
        name: "Databases",
        icon: (
            <>
                <SiMongodb
                    color="#252323"
                    style={{ zIndex: "-1", width: "100%", height: "100%" }}
                />
                <DiMysql
                    color="#252323"
                    style={{ zIndex: "-1", width: "100%", height: "100%" }}
                />
            </>
        ),
        uses: ["SQL and NoSQL", "Design", "Management", "Web APIs"],
    },
    {
        name: "Java",
        icon: (
            <FaJava
                color="#252323"
                style={{ zIndex: "-1", width: "100%", height: "100%" }}
            />
        ),
        uses: ["Spring Boot", "Fullstack Development"],
    },
];

function Languages(props) {
    return (
        <div className="flex flex-col items-center justify-center p-5  text-white">
            <h2 className="text-center text-3xl mb-5 font-bold">Skills</h2>
            <div className="grid grid-cols-2  lg:grid-cols-3 gap-2 justify-center items-center">
                {languageData
                    ? languageData.map((mapData) => (
                          <LangugeContainer
                              languageIcon={mapData.icon}
                              languageName={mapData.name}
                              listOfUses={mapData.uses}
                          />
                      ))
                    : null}
            </div>
        </div>
    );
}

export default Languages;
