import Navbar from "@/components/layout/Navbar";

// Shell for every page that shows the navigation bar.
export default function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="page-content">{children}</main>
    </>
  );
}
