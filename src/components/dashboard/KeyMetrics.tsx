import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useState } from "react";
import type { DashboardData, Metric } from "@/types/dashboard";

const KeyMetrics = ({ data }: { data: DashboardData }) => {
  const [activeMetric, setActiveMetric] = useState(data.metrics[2].label);

  return (
    <Tabs
      value={activeMetric}
      onValueChange={setActiveMetric}
      className="w-full"
    >
      {/* Mobile Select */}
      <div className="md:hidden py-4 px-4 bg-white border-b border-gray-100 rounded-t-2xl">
        <p className="text-[10px] uppercase font-bold text-gray-400 mb-2">
          Select Metric View
        </p>
        <Select value={activeMetric} onValueChange={setActiveMetric}>
          <SelectTrigger className="w-full h-11 rounded-xl bg-gray-50 border-gray-100 px-4">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {data.metrics.map((m: Metric) => (
              <SelectItem key={m.label} value={m.label}>
                <div className="flex justify-between items-center w-60">
                  <span className="font-medium text-sm">{m.label}</span>
                  <span className="text-xs font-bold bg-gray-100 px-2 py-0.5 rounded-full">
                    {m.value}
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Desktop Tabs */}
      <TabsList
        className="
          hidden md:flex w-full justify-start md:justify-between
          bg-transparent
          h-15
          p-0
          rounded-none
          overflow-x-auto
          scrollbar-hide
          gap-2 md:gap-0
        "
      >
        {data.metrics.map((m: Metric) => (
          <TabsTrigger
            key={m.label}
            value={m.label}
            className={cn(
              `
              group
              flex flex-col items-start
              px-5
              rounded-t-2xl
              rounded-b-none
              transition-all duration-200
              data-[state=inactive]:bg-transparent
              data-[state=inactive]:shadow-none
              data-[state=inactive]:text-gray-400
              data-[state=active]:bg-[#C7F000]
              data-[state=active]:text-black
              data-[state=active]:shadow-sm
              flex-none md:flex-1
              `
            )}
          >
            <span
              className={cn(
                "text-sm font-medium leading-none",
                "data-[state=inactive]:text-gray-400",
                "data-[state=active]:text-black"
              )}
            >
              {m.label}
            </span>

            <span
              className={cn(
                "text-xs font-semibold",
                "data-[state=inactive]:text-gray-500",
                "data-[state=active]:text-black"
              )}
            >
              {m.value}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default KeyMetrics;
