import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import type { DashboardData, ActivityItem } from "@/types/dashboard";

interface ActivitySidebarProps {
  data: DashboardData;
  isOpen: boolean;
  onToggle: () => void;
}

const ActivitySidebar = ({ data, isOpen, onToggle }: ActivitySidebarProps) => {
  return (
    <aside
      className={cn(
        "backdrop-blur-xl bg-white/30 border-2 border-white shadow-md flex flex-col transition-all duration-500 ease-in-out overflow-hidden",
        "w-full h-dvh lg:h-auto",
        "rounded-none lg:rounded-[34px]",
        isOpen ? "px-4" : "px-2"
      )}
    >
      <div className="flex justify-center py-4">
        <Button
          size="icon"
          variant="ghost"
          onClick={onToggle}
          className="h-9 w-9 rounded-full bg-white shadow-sm"
        >
          {isOpen ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div
          className={cn("space-y-3", !isOpen && "flex flex-col items-center")}
        >
          {data.activity.map((item: ActivityItem) => (
            <Card
              key={item.id}
              className={cn(
                "relative backdrop-blur-md bg-white/40 border-2 border-white rounded-[28px] shadow-none",
                isOpen
                  ? "rounded-2xl p-4"
                  : "rounded-full p-2 w-12 h-12 flex items-center justify-center"
              )}
            >
              <div
                className={cn(
                  "flex items-start gap-3",
                  !isOpen && "justify-center"
                )}
              >
                <div className="relative">
                  <Avatar
                    className={cn(
                      "rounded-xl border border-white transition-[width,height] duration-300 ease-out",
                      isOpen ? "h-9 w-9" : "h-10 w-10"
                    )}
                  >
                    <AvatarImage src={item.avatar} />
                    <AvatarFallback>{item.user.slice(0, 2)}</AvatarFallback>
                  </Avatar>

                  {item.badge && (
                    <span className="absolute -top-1 -right-1 bg-lime-300 text-black text-[10px] font-bold rounded-full min-w-4.5 h-4.5 flex items-center justify-center border-2 border-white">
                      {item.badge}
                    </span>
                  )}
                </div>

                {isOpen && (
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-semibold text-gray-900">
                        {item.user}
                      </p>
                      <span className="text-xs text-gray-400">
                        {item.timeAgo}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 leading-snug line-clamp-2">
                      {item.message}
                    </p>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>

      {isOpen && (
        <div className="pt-4 pb-6 space-y-3">
          <div className="relative">
            <Textarea
              placeholder="Quick reply..."
              className="rounded-2xl bg-white pr-12 resize-none"
              rows={3}
            />
            <Button
              size="icon"
              className="absolute bottom-3 right-3 h-8 w-8 rounded-full bg-black text-white"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>

          <Button
            variant="outline"
            className="w-full rounded-xl py-5 text-sm font-medium"
          >
            View Full Inbox
          </Button>

          <Button className="w-full rounded-xl py-5 text-sm font-semibold bg-black text-white">
            ✨ AI Chat Assistant
          </Button>
        </div>
      )}
    </aside>
  );
};

export default ActivitySidebar;
