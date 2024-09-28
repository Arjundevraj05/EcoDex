import Sidebar from "@/components/Sidebar";
import HeaderBox from "@/components/HeaderBox"; // Import HeaderBox
import RightSidebar from "@/components/RightSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main className="flex flex-col">
      <Sidebar />
      <RightSidebar/>
      <div className="flex-1">{children}</div> 
    </main>
  );
}
