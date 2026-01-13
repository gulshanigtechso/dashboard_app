import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Zap } from "lucide-react";
import { BarChart, Bar, ResponsiveContainer, Cell, XAxis } from "recharts";
import type { DashboardData, PayoutData } from "@/types/dashboard";

const PayoutChart = ({ data }: { data: DashboardData }) => {
  return (
    <Card className="col-span-1 md:col-span-4 rounded-[28px] p-6 pb-4 border-none shadow-sm bg-white flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <Badge
          variant="secondary"
          className="rounded-full px-3 py-1 text-xs font-semibold flex items-center gap-2 bg-gray-100 text-gray-900"
        >
          <Zap className="w-3 h-3" />
          Payouts last quarter
        </Badge>

        <Avatar className="h-7 w-7">
          <AvatarImage src="https://ui-avatars.com/api/?name=User&background=random" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex items-end justify-between mb-6">
        <span className="text-[56px] font-semibold tracking-tight leading-none text-gray-900">
          +350%
        </span>
        <span className="text-sm font-semibold text-gray-900 mb-2">$2.5 m</span>
      </div>

      <div className="h-56 w-full mt-auto">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data.payouts}
            barGap={10}
            margin={{ left: 0, right: 0, bottom: 0 }}
          >
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#9CA3AF" }}
              interval="preserveStartEnd"
            />

            <Bar dataKey="value" barSize={24} radius={[12, 12, 12, 12]}>
              {data.payouts.map((_: PayoutData, index: number) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    index >= 3 && index <= 7
                      ? "#111111"
                      : index === data.payouts.length - 1
                      ? "#CFFF4D"
                      : "#E5E7EB"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default PayoutChart;
