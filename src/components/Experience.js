const Experience = () => {
    return (
        <div className="text-white p-5 ">
            <h2 className="text-center text-3xl mb-5 text-white font-bold">Work Experience</h2>
            <div className="flex flex-col items-center  rounded-lg">
                <div className="p-5 bg-green-dark rounded-lg">
                    <p className="text-start text-3xl font-bold mb-5 underline">
                        <a href="https://www.1stle.com/" target="_blank" rel="noreferrer">
                            1st Light Energy, Inc.
                        </a>
                    </p>
                    <h5 className="text-xl">Software Developer</h5>
                    <p className="mb-5">May 2022 - Present</p>
                    <h5 className="text-xl mb-1">Achievements</h5>
                    <div className="px-5 mb-5">
                        <ul className="list-disc">
                            <li>Fullstack MERN Web App - Sole Developer</li>
                            <li>React Native Mobile App - Sole Developer</li>
                            <li>Scripts and Automations to the Company's CRM - Contributor</li>
                            <li>Fullstack Spring Boot Apps - Contributor</li>
                        </ul>
                    </div>

                    <h5 className="text-xl mb-1">Tech Used</h5>
                    <div className="px-5">
                        <ul className="list-disc">
                            <li>Languages: Java, Javascript, TypeScript, Python</li>
                            <li>Frameworks and Libraries: React, Express, Spring Boot, Odoo, React Native</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
