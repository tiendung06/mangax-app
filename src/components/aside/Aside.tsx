import { ReactNode } from "react";

const Aside = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <aside className="w-full xl:w-1/4">
      <h2 className="mb-3 text-sm font-semibold md:text-lg">{title}</h2>
      <div className="bg-white rounded-xl shadow-[-4px_4px_8px_rgba(226,226,226,0.2),4px_4px_8px_rgba(226,226,226,0.2)] p-5 dark:bg-darkSecondary dark:shadow-[0px_16px_30px_rgba(33,25,25,0.17),0px_30px_60px_rgba(1,2,9,0.2)]">
        {children}
      </div>
    </aside>
  );
};

export default Aside;
