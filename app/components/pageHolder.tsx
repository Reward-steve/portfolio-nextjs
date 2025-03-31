import * as m from "motion/react-client";
export default function PageHolder({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <m.section
      className="w-full flex flex-col gap-10 p-10 bg-gray-800 text-white rounded-xl shadow-lg border-1 border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </m.section>
  );
}
