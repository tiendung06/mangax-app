import { FC, useState } from "react";

type TabsProps = {
  tabs: {
    label: string;
    index: number;
    Component: any;
  }[];
};

const Tab: FC<TabsProps> = ({ tabs = [] }) => {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

  return (
    <div>
      <div className="flex items-center w-full h-10 mb-6 bg-white shadow-sm lg:mb-9 lg:h-20 dark:bg-darkSecondary">
        <div className="flex gap-6 text-xs font-medium lg:text-sm spacing lg:gap-16 text-text3">
          {tabs.map(({ label, index }) => (
            <button
              className={
                selectedTab === index ? "text-secondary font-semibold" : ""
              }
              onClick={() => setSelectedTab(index)}
              key={index}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="spacing">
        {tabs.map(({ index, Component }) => (
          <div key={index}>{index === selectedTab && Component}</div>
        ))}
      </div>
    </div>
  );
};
export default Tab;
