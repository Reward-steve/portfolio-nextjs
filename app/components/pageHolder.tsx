import * as m from "motion/react-client";
export default function PageHolder({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <m.section
      className="w-full flex flex-col gap-10 p-10 text-white rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ borderTop: "0.5px solid #515151" }}
    >
      {children}
    </m.section>
  );
}
