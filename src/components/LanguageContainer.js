const LangugeContainer = ({ languageIcon, languageName, listOfUses }) => {
    return (
        <div className="p-5 relative bg-green-dark min-h-[20vh] w-full h-full rounded-lg" style={{ zIndex: "1" }}>
            <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full p-2 -z-50">{languageIcon}</div>
            <p className="text-2xl text-center font-bold mb-5">{languageName}</p>
            <ul>
                {listOfUses && listOfUses.length > 0
                    ? listOfUses.map((value, index) => (
                          <li key={index} className="text-sm font-bold">
                              {value}
                          </li>
                      ))
                    : null}
            </ul>
        </div>
    );
};

export default LangugeContainer;
