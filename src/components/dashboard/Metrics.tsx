import { CheckCircle, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const Metrics = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Card className="p-6 border-none shadow-sm">
        <div className="flex justify-between mb-8">
          <span className="text-[10px] uppercase font-bold text-gray-400">
            Outreached
          </span>
          <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
            <div className="w-3 h-3 border-2 border-current rounded-full" />
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <div className="text-3xl font-medium text-gray-900">1,240</div>
            <div className="text-[10px] text-gray-500 mt-1">
              Partners Contacted
            </div>
          </div>
          <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">
            +15%
          </span>
        </div>
      </Card>

      <Card className="p-6 border-none shadow-sm">
        <div className="flex justify-between mb-8">
          <span className="text-[10px] uppercase font-bold text-gray-400">
            Onboarded
          </span>
          <CheckCircle className="w-5 h-5 text-green-400 opacity-20" />
        </div>
        <div className="flex justify-between items-end">
          <div>
            <div className="text-3xl font-medium text-gray-900">85</div>
            <div className="text-[10px] text-gray-500 mt-1">
              Active in Program
            </div>
          </div>
          <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">
            +8%
          </span>
        </div>
      </Card>

      <Card className="p-6 border-none shadow-sm">
        <div className="flex justify-between mb-8">
          <span className="text-[10px] uppercase font-bold text-gray-400">
            Awaiting Deliverables
          </span>
          <Clock className="w-5 h-5 text-orange-400 opacity-20" />
        </div>
        <div className="flex justify-between items-end">
          <div>
            <div className="text-3xl font-medium text-gray-900">12</div>
            <div className="text-[10px] text-gray-500 mt-1">
              Pending Content
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Metrics;
