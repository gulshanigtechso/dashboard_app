import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const KeyMetrics = ({ data }) => {
  return (
    <Tabs defaultValue={data.metrics[2].label} className="w-full">
      <TabsList
        className="
          flex w-full justify-between
          bg-transparent
          h-15
          p-0
          rounded-none
        "
      >
        {data.metrics.map((m) => (
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
