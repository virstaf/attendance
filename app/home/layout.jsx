import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthGuard } from "@/components/auth";
import { MemberDobProvider } from "../../contexts/memberDob";

export default function Layout({ children }) {
  return (
    <AuthGuard>
      <MemberDobProvider>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-screen h-screen">
            <Header />
            <SidebarTrigger />
            {children}
            <Footer />
          </main>
        </SidebarProvider>
      </MemberDobProvider>
    </AuthGuard>
  );
}
