import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import type { DashboardData } from "@/types/dashboard";

const PartnerFunnel = ({ data }: { data: DashboardData }) => {
  return (
    <Card className="col-span-1 md:col-span-8 border-none bg-[#CFFF4D] rounded-[32px] p-4 md:p-8 pb-6 shadow-none overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
        <div className="flex items-center gap-2 text-black font-semibold">
          <Zap className="w-4 h-4" />
          <span>Partner Funnel</span>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            className="h-8 px-4 rounded-full bg-black text-[#CFFF4D] text-xs font-semibold hover:bg-black"
          >
            Last quarter
          </Button>

          <Button
            size="sm"
            variant="secondary"
            className="h-8 px-4 rounded-full bg-[#B6E63E] text-black/70 text-xs font-semibold hover:bg-[#B6E63E]"
          >
            What has influenced
          </Button>

          <Button
            size="sm"
            variant="secondary"
            className="h-8 px-4 rounded-full bg-[#B6E63E] text-black/70 text-xs font-semibold hover:bg-[#B6E63E]"
          >
            Forecast
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-end gap-2 md:gap-4 mb-16">
        <span className="text-5xl md:text-[72px] font-semibold tracking-tight text-black leading-none">
          +37%
        </span>
        <span className="text-xs font-semibold text-black max-w-30 leading-snug mb-2">
          6,653 growth in closed sales
        </span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 items-end">
        <div className="flex flex-col gap-1">
          <span className="text-lg md:text-xl font-semibold text-black">
            {data.funnel.totalMarket.toLocaleString()}
          </span>
          <span className="text-[10px] uppercase tracking-wide font-bold text-black/50 mb-3">
            Total Market
          </span>
          <div className="h-20 md:h-24 rounded-2xl bg-[#A9D13D]" />
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-lg md:text-xl font-semibold text-black">
            {data.funnel.prospects.toLocaleString()}
          </span>
          <span className="text-[10px] uppercase tracking-wide font-bold text-black/50 mb-3">
            Prospects
          </span>
          <div className="h-16 md:h-20 rounded-2xl bg-[#BEE35A]" />
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-lg md:text-xl font-semibold text-black">
            {data.funnel.leads.toLocaleString()}
          </span>
          <span className="text-[10px] uppercase tracking-wide font-bold text-black/50 mb-3">
            Leads
          </span>
          <div className="h-10 md:h-14 rounded-2xl bg-[#DDF79A]" />
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-lg md:text-xl font-semibold text-black">
            {data.funnel.sales.toLocaleString()}
          </span>
          <span className="text-[10px] uppercase tracking-wide font-bold text-black/50 mb-3">
            Sales
          </span>
          <div className="h-8 md:h-12 rounded-full bg-[#111111]" />
        </div>
      </div>
    </Card>
  );
};

export default PartnerFunnel;
