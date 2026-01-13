import { AlertCircle, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { DashboardData, ApprovalItem } from "@/types/dashboard";

const ApprovalQueue = ({ data }: { data: DashboardData }) => {
  return (
    <div className="relative rounded-[28px] bg-[#FFFBEB] shadow-sm p-4 md:p-6 before:content-[''] before:absolute before:top-0 before:left-0 before:w-1.5 before:h-full before:bg-orange-300 overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full border border-amber-300 bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
            <AlertCircle className="w-4 h-4" />
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 leading-tight">
              Needs Approval
            </h3>
            <p className="text-sm text-gray-500">
              {data.approvals.length} requests pending your review
            </p>
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="w-full sm:w-auto sm:ml-auto rounded-full text-xs font-bold uppercase text-amber-600 border-amber-200 hover:bg-amber-50"
        >
          Approve All
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.approvals.map((item: ApprovalItem) => (
          <Card
            key={item.id}
            className="rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition"
          >
            <div className="flex items-start justify-between mb-3">
              <Avatar className={`h-8 w-8 ${item.color}`}>
                <AvatarFallback className="text-xs font-semibold">
                  {item.initials}
                </AvatarFallback>
              </Avatar>

              <span className="text-[11px] text-gray-400">{item.timeAgo}</span>
            </div>

            <h4 className="text-sm font-semibold text-gray-900 truncate">
              {item.companyName}
            </h4>
            <p className="text-xs text-gray-500 mb-4 line-clamp-1">
              {item.action}
            </p>

            <Button
              variant="secondary"
              size="sm"
              className="w-full rounded-full text-xs font-medium gap-2 bg-gray-50 text-gray-600 hover:bg-gray-100"
            >
              <CheckCircle className="w-3 h-3" />
              Review
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ApprovalQueue;
