import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { capitalize } from "@/lib/utils";

const PartnerTabs = () => {
  return (
    <Tabs defaultValue="overview" className="w-full gap-0 pt-1">
      <TabsList className="h-auto bg-transparent p-0">
        {["overview", "database", "rebate", "contracts", "retailers"].map(
          (tab) => (
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
            "
            >
              {tab === "rebate" ? "Rebate Journey" : capitalize(tab)}
            </TabsTrigger>
          )
        )}
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
