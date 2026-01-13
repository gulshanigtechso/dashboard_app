import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { capitalize } from "@/lib/utils";
import { useState } from "react";

const PartnerTabs = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const tabs = ["overview", "database", "rebate", "contracts", "retailers"];

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full gap-0 pt-1 px-4 md:px-0"
    >
      {/* Mobile Select */}
      <div className="md:hidden py-2">
        <Select value={activeTab} onValueChange={setActiveTab}>
          <SelectTrigger className="w-full rounded-xl bg-gray-50 border-gray-100 text-sm font-medium">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {tabs.map((tab) => (
              <SelectItem key={tab} value={tab} className="text-sm">
                {tab === "rebate" ? "Rebate Journey" : capitalize(tab)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Desktop Tabs */}
      <TabsList className="hidden md:flex h-auto bg-transparent p-0 overflow-x-auto scrollbar-hide justify-start">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab}
            value={tab}
            className="
              relative rounded-none mr-6
              text-sm font-medium text-gray-500
              data-[state=active]:shadow-none
              data-[state=active]:bg-transparent
              data-[state=active]:text-black
              data-[state=active]:after:absolute
              data-[state=active]:after:left-0
              data-[state=active]:after:-bottom-px
              data-[state=active]:after:h-0.5
              data-[state=active]:after:w-full
              data-[state=active]:after:bg-black
              hover:text-black
              flex-none
            "
          >
            {tab === "rebate" ? "Rebate Journey" : capitalize(tab)}
          </TabsTrigger>
        ))}
      </TabsList>

      {["overview", "database", "rebate", "contracts", "retailers"].map(
        (tab) => (
          <TabsContent key={tab} value={tab} />
        )
      )}
    </Tabs>
  );
};

export default PartnerTabs;
