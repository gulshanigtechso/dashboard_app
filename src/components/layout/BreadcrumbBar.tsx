import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Menu } from "lucide-react";

const BreadcrumbBar = () => {
  return (
    <div className="flex items-center gap-3 px-6 py-3 border-b border-gray-100 text-xs text-gray-500">
      <Button variant="ghost" size="icon" className="h-6 w-6 hover:text-black">
        <Menu className="h-4 w-4" />
      </Button>

      <span className="text-gray-300">|</span>

      <Breadcrumb>
        <BreadcrumbList className="gap-2">
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="text-gray-500 hover:text-black">
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator className="text-gray-300">
            &gt;
          </BreadcrumbSeparator>

          <BreadcrumbItem>
            <BreadcrumbPage className="font-medium text-black">
              Overview
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbBar;
