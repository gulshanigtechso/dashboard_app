import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
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
    <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-gray-100 shadow-sm">
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-xs font-semibold">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-white text-[10px]">
          L
        </span>
        <div className="leading-tight">
          <p className="text-[10px] font-bold">LATEST</p>
          <p className="text-[9px] text-gray-500">Updates</p>
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
        {updates.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm min-w-max"
          >
            <div className="relative">
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

              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white" />
            </div>

            <div className="max-w-35">
              <p className="text-[10px] font-semibold text-gray-900 truncate">
                {item.role}
              </p>
              <p className="text-[10px] text-gray-400 truncate">
                {item.message}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7 rounded-full border border-gray-100"
      >
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </Button>
    </div>
  );
};

export default ActivityTicker;
