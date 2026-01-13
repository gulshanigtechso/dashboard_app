import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

interface GrowthItem {
  name: string;
  partners: number;
  progress: number;
}

interface GrowthListProps {
  data?: GrowthItem[];
}

const GrowthList = ({ data = [] }: GrowthListProps) => {
  return (
    <div className="space-y-5">
      {data.map((item, i) => (
        <div key={i} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-medium text-gray-900">
              {item.name}
            </span>
            <span className="text-xs text-gray-400">
              {item.partners} Partners
            </span>
          </div>

          <div className="h-3 w-full rounded-full bg-[#ECECEC] overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ease-out ${
                item.progress > 70
                  ? "bg-black/80"
                  : item.progress > 60
                  ? "bg-black/50"
                  : item.progress > 40
                  ? "bg-black/20"
                  : "bg-black/10"
              }`}
              style={{ width: `${item.progress}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const ProgramGrowth = ({ data }) => {
  return (
    <Card className="border-none rounded-2xl">
      <CardContent className="p-6">
        <Tabs defaultValue="application">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Program Growth
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                New partner acquisition breakdown
              </p>
            </div>

            <TabsList className="bg-gray-50 rounded-full p-1">
              {["application", "product", "campaign"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="
                text-[10px] px-3 py-1.5 font-semibold rounded-full
                text-gray-400
                data-[state=active]:bg-white
                data-[state=active]:text-gray-900
                data-[state=active]:shadow-sm
              "
                >
                  {tab.toUpperCase()}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="flex items-center gap-3 mt-6 mb-7">
            <span className="text-4xl font-medium text-gray-900">+124</span>
            <Badge className="bg-green-50 text-green-600 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3" />
              This Month
            </Badge>
          </div>

          <TabsContent value="application">
            <GrowthList data={data.partners ?? []} />
          </TabsContent>

          <TabsContent value="product">
            <GrowthList data={data.partners ?? []} />
          </TabsContent>

          <TabsContent value="campaign">
            <GrowthList data={data.partners ?? []} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProgramGrowth;
