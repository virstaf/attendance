import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-screen h-screen">
        <Header />
        <SidebarTrigger />
        {children}
        <Footer />
      </main>
    </SidebarProvider>
  );
}
