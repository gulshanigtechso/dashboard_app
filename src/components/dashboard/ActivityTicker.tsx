import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, Bell } from "lucide-react";
import clsx from "clsx";

const updates = [
  {
    role: "CreativeDir",
    initials: "CD",
    color: "bg-cyan-500",
    message: "Q4 Brand Assets are live ...",
  },
  {
    role: "Editor",
    initials: "ED",
    color: "bg-red-500",
    message: "First draft of the “Unboxi...”",
  },
  {
    role: "MediaBuyer",
    initials: "MB",
    color: "bg-rose-500",
    message: "ROAS is up 15% on the ...",
  },
  {
    role: "Sarah J.",
    avatar: "/avatar.jpg",
    message: "Velto Inc. approved the ...",
  },
  {
    role: "MediaTeam",
    initials: "MT",
    color: "bg-orange-500",
    message: "Premium inventory secured ...",
  },
  {
    role: "SocialBot",
    initials: "SB",
    color: "bg-green-500",
    message: "Instagram engagement up ...",
  },
];

const ActivityTicker = () => {
  return (
    <div className="flex items-center gap-0 px-2 md:px-4 py-1.5 bg-white rounded-full border border-gray-100 shadow-sm overflow-hidden h-12 w-full">
      <div className="flex items-center gap-2 px-3 py-1 mr-2 rounded-full text-xs font-semibold shrink-0 z-10">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
          <Bell className="h-3 w-3" />
        </span>
        <div className="leading-tight hidden sm:block">
          <p className="text-[10px] font-bold">LATEST</p>
          <p className="text-[9px] text-gray-500">Updates</p>
        </div>
      </div>

      <Separator orientation="vertical" />

      <div className="relative flex-1 overflow-x-auto scrollbar-hide lg:overflow-hidden mask-fade-tight lg:mask-none h-full">
        <div className="flex items-center gap-4 animate-marquee-triple lg:animate-none whitespace-nowrap min-w-full lg:justify-between lg:gap-2 h-full">
          {[...updates, ...updates, ...updates].map((item, i) => (
            <div
              key={i}
              className={clsx(
                "flex items-center gap-2 group cursor-pointer transition-colors shrink-0",
                i >= updates.length && "lg:hidden",
                "lg:px-3 lg:py-1 lg:rounded-full lg:bg-white lg:border lg:border-gray-100 lg:shadow-sm lg:hover:border-blue-100 h-full lg:h-8"
              )}
            >
              <div className="relative flex-none">
                <Avatar className="h-6 w-6">
                  {item.avatar ? (
                    <AvatarImage src={item.avatar} />
                  ) : (
                    <AvatarFallback
                      className={clsx(
                        "text-white text-[10px] font-bold",
                        item.color
                      )}
                    >
                      {item.initials}
                    </AvatarFallback>
                  )}
                </Avatar>
              </div>

              <div className="max-w-48 lg:max-w-36">
                {/* Desktop */}
                <div className="hidden lg:block leading-tight">
                  <p className="text-[10px] font-bold text-gray-900 truncate">
                    {item.role}
                  </p>
                  <p className="text-[9px] text-gray-400 truncate">
                    {item.message}
                  </p>
                </div>

                {/* Mobile */}
                <div className="lg:hidden">
                  <span className="text-[11px] font-bold text-gray-900">
                    {item.role}:
                  </span>
                  <span className="text-[11px] text-gray-500 ml-1">
                    {item.message}
                  </span>
                </div>
              </div>

              {/* Status Dot on desktop */}
              <div className="hidden lg:block ml-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              </div>

              {/* Separator dot on mobile */}
              <div className="w-1.5 h-1.5 rounded-full bg-gray-200 mx-2 lg:hidden shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Scroll Button */}
      <div className="hidden lg:flex items-center ml-2 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 rounded-full border border-gray-100 hover:bg-gray-50"
        >
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </Button>
      </div>
    </div>
  );
};

export default ActivityTicker;
