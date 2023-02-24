import { ReactNode } from "react";

const Aside = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <aside className="w-full xl:w-1/4">
      <h2 className="mb-3 text-sm font-semibold md:text-lg">{title}</h2>
      <div className="bg-white rounded-xl shadow-[-4px_4px_8px_rgba(226,226,226,0.2),4px_4px_8px_rgba(226,226,226,0.2)] p-5">
        {children}
      </div>
    </aside>
  );
};

export default Aside;
