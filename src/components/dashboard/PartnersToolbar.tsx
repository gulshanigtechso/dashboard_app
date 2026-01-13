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
import { Calendar, Search, MoreHorizontal } from "lucide-react";

const PartnersToolbar = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-3 py-2 border-t">
      <div className="flex items-center gap-3 text-xs text-gray-500">
        <Select defaultValue="overview">
          <SelectTrigger className="px-2 text-xs rounded-full bg-white border-gray-200">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="overview">Partners / Overview</SelectItem>
            <SelectItem value="database">Partners / Database</SelectItem>
          </SelectContent>
        </Select>

        <Separator orientation="vertical" className="h-5!" />
        <span>
          Last synced:{" "}
          <span className="font-medium text-gray-700">Just now</span>
        </span>
      </div>

      <div className="relative w-90">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search Partners..."
          className="h-8 pl-8 text-xs bg-gray-50 border-gray-200"
        />
      </div>

      <div className="flex items-center gap-2 text-xs">
        <Button variant="outline" size="sm" className="h-7 px-2 text-xs gap-1">
          <Calendar className="h-3.5 w-3.5" />
          Oct 1 - Oct 31
        </Button>

        <Separator orientation="vertical" className="h-5!" />

        <Button variant="ghost" size="sm" className="h-7 text-xs px-1">
          Filter
        </Button>

        <Button variant="ghost" size="sm" className="h-7 text-xs px-1">
          Export
        </Button>

        <Separator orientation="vertical" className="h-5!" />

        <Button variant="ghost" size="icon" className="h-7 w-7">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PartnersToolbar;
