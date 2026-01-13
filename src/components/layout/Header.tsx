import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bell, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="px-8 py-5 flex items-center justify-between">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
        Welcome back, Combina
      </h1>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search across campaigns, partners, or assets..."
            className="
              pl-9 pr-4 w-80 h-9
              rounded-full
              bg-gray-50
              border-none
              text-sm
              placeholder:text-gray-400
              focus-visible:ring-1
              focus-visible:ring-gray-200
            "
          />
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="relative rounded-full hover:bg-gray-100"
          >
            <Bell className="w-5 h-5 text-gray-500" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </Button>

          <div className="flex items-center gap-3 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://ui-avatars.com/api/?name=Velto&background=random" />
              <AvatarFallback>V</AvatarFallback>
            </Avatar>

            <div className="flex flex-col leading-none">
              <span className="text-[10px] uppercase text-gray-400">
                Name: Velto
              </span>
              <span className="text-[10px] uppercase text-gray-400 mt-0.5">
                ID: 5732
              </span>
            </div>

            <Badge
              className="
                ml-1
                bg-green-100
                text-green-700
                text-[10px]
                font-bold
                uppercase
                rounded-full
                px-2
                py-0.5
                border-none
              "
            >
              In progress
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
