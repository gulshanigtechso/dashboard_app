import { useState } from "react";
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

export default function Dashboard() {
  const { data, isLoading, error } = useDashboard();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
    <div>
      <ActivityTicker />

      <div className="bg-slate-50 px-8 py-2 mt-2 mb-8">
        <KeyMetrics data={data} />
        <div className="border rounded-b-2xl">
          <PartnerTabs />
          <PartnersToolbar />
        </div>
      </div>

      <div className="flex gap-6 items-start">
        <div className="flex-1 min-w-0 space-y-6">
          <ApprovalQueue data={data} />
          <div className="grid grid-cols-12 gap-6">
            <PayoutChart data={data} />
            <PartnerFunnel data={data} />
          </div>
          <Metrics data={data} />
          <ProgramGrowth data={data} />
        </div>

        <div
          className={cn(
            "transition-all duration-500 ease-in-out sticky top-8 shrink-0 overflow-visible",
            isSidebarOpen ? "w-90" : "w-16"
          )}
        >
          <ActivitySidebar
            data={data}
            isOpen={isSidebarOpen}
            onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>
      </div>
    </div>
  );
}
