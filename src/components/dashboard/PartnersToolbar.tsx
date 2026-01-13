import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, Search, Filter, Download, ChevronDown } from "lucide-react";

const PartnersToolbar = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-4 py-3 border-t">
      <div className="flex items-center justify-between w-full md:w-auto gap-2">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Select defaultValue="overview">
            <SelectTrigger className="px-2 h-8 text-[11px] font-semibold rounded-full bg-white border-gray-200 min-w-36 shadow-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="overview">Partners / Overview</SelectItem>
              <SelectItem value="database">Partners / Database</SelectItem>
            </SelectContent>
          </Select>

          <Separator orientation="vertical" className="hidden sm:block h-5!" />
          <span className="hidden sm:inline whitespace-nowrap overflow-hidden text-ellipsis">
            Last synced:{" "}
            <span className="font-medium text-gray-700">Just now</span>
          </span>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-1.5">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full border-gray-100 bg-white"
          >
            <Calendar className="h-3.5 w-3.5 text-gray-600" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full border-gray-100 bg-white"
          >
            <Filter className="h-3.5 w-3.5 text-gray-600" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full border-gray-100 bg-white"
          >
            <Download className="h-3.5 w-3.5 text-gray-600" />
          </Button>
        </div>
      </div>

      <div className="relative w-full md:w-80 order-last md:order-0">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search Partners..."
          className="h-8 pl-8 text-xs bg-gray-50 border-gray-200 rounded-lg w-full"
        />
      </div>

      <div className="hidden md:flex items-center gap-2 text-xs">
        <Button
          variant="outline"
          size="sm"
          className="h-8 px-3 text-[11px] font-semibold gap-2 rounded-full border-gray-100"
        >
          <Calendar className="h-3.5 w-3.5" />
          Oct 1 - Oct 31
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>

        <Separator orientation="vertical" className="h-5!" />

        <Button
          variant="ghost"
          size="sm"
          className="h-8 text-[11px] font-semibold px-2 hover:bg-gray-100 rounded-full"
        >
          Filter
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="h-8 text-[11px] font-semibold px-2 hover:bg-gray-100 rounded-full"
        >
          Export
        </Button>

        <Separator orientation="vertical" className="h-5!" />

        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PartnersToolbar;
