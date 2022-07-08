import React from "react";

const App = () => {
  const [pageNum, setPageNum] = React.useState(0);
  const learningData = () => (
    <div className="flex gap-3 w-min mx-auto items-center">
      <svg fill="#979eab" viewBox="0 0 16 16" className="w-6 h-6">
        <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
      </svg>
      <h1 className="text-xl font-medium text-[#979eab] whitespace-nowrap">
        학습자료
      </h1>
    </div>
  );
  const pages = [
    {
      PATH: "/",
      COMPONENT: learningData,
    },
  ];
  return (
    <div className="min-h-screen flex">
      <nav className="w-[15%] bg-[#20252c] h-screen">
        <div className="p-10 grid gap-y-2">
          <div className="flex gap-3 w-min mx-auto items-center">
            <svg fill="#979eab" viewBox="0 0 16 16" className="w-8 h-8">
              <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
            </svg>
            <a href="/">
              <h1 className="text-xl font-medium text-[#979eab]">
                KyungheeWiki
              </h1>
            </a>
          </div>
          {pages.map((page, index) => (
            <a
              key={index}
              className={`${
                index === pageNum
                  ? "backdrop-invert-0 bg-white/30 rounded-md py-2 px-3 w-min mx-auto"
                  : ""
              }`}
              href={page.PATH}
              onClick={() => setPageNum(index)}
            >
              <page.COMPONENT />
            </a>
          ))}
        </div>
      </nav>
      <div className="w-[85%] bg-[#282c34] h-screen"></div>
    </div>
  );
};

export default App;
