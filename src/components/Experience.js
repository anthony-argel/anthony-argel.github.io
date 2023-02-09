import firstLightLogo from "../assets/images/1stlightlogo.png";

const Experience = () => {
    return (
        <div className="row projects w-100 gx-0 pb-4">
            <h2 className="text-center mt-5 mb-3">Experience</h2>
            <div className="col-12 p-0 d-flex flex-columns justify-content-center">
                <div className="text-center">
                    <p className="p-3 m-0">
                        <a
                            href="https://www.1stle.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {" "}
                            <img
                                src={firstLightLogo}
                                alt="1st light logo"
                                className="w-50 h-auto"
                            />
                        </a>
                    </p>
                    <h4>
                        Software Developer <br /> May 2022 - Present
                    </h4>
                    <h5 className="mt-3">Achievements</h5>
                    <ul className="text-start">
                        <li>
                            Singlehandedly created a company internal tool (web
                            app) using React, Express/Node, and AWS(SQL).
                        </li>
                        <li>
                            Saved the company money by singlehandedly creating a
                            mobile app to replace a subscription-based app that
                            the company was using.
                        </li>
                        <li>
                            Added scripts and automations to the company's CRM.
                        </li>
                        <li>
                            Updated the company's code base, primarily Spring
                            Boot code, to ensure it meets current needs.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;
