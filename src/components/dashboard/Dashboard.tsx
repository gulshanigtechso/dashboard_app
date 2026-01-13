import { useState, useEffect } from "react";
import { useDashboard } from "@/hooks/useDashboard";
import { cn } from "@/lib/utils";
import Metrics from "./Metrics";
import ApprovalQueue from "./ApprovalQueue";
import PayoutChart from "./PayoutChart";
import PartnerFunnel from "./PartnerFunnel";
import ProgramGrowth from "./ProgramGrowth";
import ActivitySidebar from "./ActivitySidebar";
import KeyMetrics from "./KeyMetrics";
import PartnersToolbar from "./PartnersToolbar";
import PartnerTabs from "./PartnersTab";
import ActivityTicker from "./ActivityTicker";
import { MessageSquare } from "lucide-react";

export default function Dashboard() {
  const { data, isLoading, error } = useDashboard();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    if (isSidebarOpen && isMobile) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.height = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
    };
  }, [isSidebarOpen]);

  if (isLoading)
    return (
      <div className="flex h-[50vh] items-center justify-center text-gray-400">
        Loading dashboard...
      </div>
    );
  if (error)
    return (
      <div className="p-8 text-red-500">Error loading dashboard data.</div>
    );
  if (!data) return null;

  return (
    <div className="w-full max-w-full">
      <ActivityTicker />

      <div className="bg-slate-50 px-4 md:px-8 py-2 mt-2 mb-8 rounded-[28px] overflow-hidden">
        <KeyMetrics data={data} />
        <div className="border rounded-b-2xl">
          <PartnerTabs />
          <PartnersToolbar />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start relative w-full overflow-x-hidden lg:overflow-x-visible">
        <div className="flex-1 min-w-0 space-y-6 w-full max-w-full">
          <ApprovalQueue data={data} />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
            <PayoutChart data={data} />
            <PartnerFunnel data={data} />
          </div>
          <Metrics data={data} />
          <ProgramGrowth data={data} />
        </div>

        {/* Sidebar Backdrop for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <div
          className={cn(
            "transition-all duration-500 ease-in-out shrink-0 z-50",
            "lg:sticky lg:top-8",
            "fixed right-0 top-0 h-dvh lg:static lg:h-auto",
            isSidebarOpen
              ? "w-full max-w-[320px] sm:max-w-100 lg:w-80 translate-x-0"
              : "w-0 lg:w-16 translate-x-full lg:translate-x-0 overflow-hidden lg:overflow-visible"
          )}
        >
          <ActivitySidebar
            data={data}
            isOpen={isSidebarOpen}
            onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>

        {/* Floating toggle button for mobile when sidebar is closed */}
        {!isSidebarOpen && (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="fixed right-6 bottom-6 z-50 p-4 bg-black shadow-2xl rounded-full border border-gray-800 lg:hidden hover:scale-110 transition-transform flex items-center justify-center group"
          >
            <MessageSquare className="w-6 h-6 text-white group-active:scale-95 transition-transform" />
          </button>
        )}
      </div>
    </div>
  );
}
