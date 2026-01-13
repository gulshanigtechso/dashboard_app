import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Printer } from "lucide-react";

const Header = () => {
  return (
    <header className="px-4 md:px-8 py-5 flex flex-col lg:flex-row items-center justify-between gap-6">
      <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 shrink-0 lg:w-1/4">
        Welcome back, Combina
      </h1>

      <div className="relative w-full max-w-md lg:absolute lg:left-1/2 lg:-translate-x-1/2">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input
          placeholder="Search across campaigns, partners, or assets..."
          className="
            pl-9 pr-4 w-full h-10
            rounded-full
            bg-gray-50
            border-none
            text-sm
            placeholder:text-gray-400
            focus-visible:ring-1
            focus-visible:ring-gray-200
            shadow-sm
          "
        />
      </div>

      <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 w-full lg:w-auto">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-gray-50 border border-gray-100 hover:bg-gray-100 shrink-0"
        >
          <Printer className="w-4 h-4 text-gray-500" />
        </Button>

        <div className="flex items-center space-x-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 text-[10px] whitespace-nowrap">
          <span className="text-gray-400 font-bold tracking-wider">NAME:</span>
          <span className="text-gray-900 font-extrabold">Velto</span>
        </div>

        <div className="flex items-center space-x-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 text-[10px] whitespace-nowrap">
          <span className="text-gray-400 font-bold tracking-wider">ID:</span>
          <span className="text-gray-900 font-extrabold">5732</span>
        </div>

        <div className="flex items-center space-x-2 bg-[#E6FAF2] px-3 py-1.5 rounded-full text-[10px] whitespace-nowrap">
          <span className="text-[#68C4A5] font-bold tracking-wider uppercase">
            Status:
          </span>
          <span className="text-[#2F8569] font-extrabold">In progress</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
