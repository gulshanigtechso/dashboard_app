import type {
  Metric,
  ApprovalItem,
  PayoutData,
  FunnelData,
  Partner,
  ActivityItem,
} from "@/types/dashboard";

export const MOCK_METRICS: Metric[] = [
  { label: "Outreached", value: "1,240", subValue: "Partners Contacted", trend: "up" },
  { label: "Onboarded", value: "85", subValue: "Active in Program", trend: "up" },
  { label: "Awaiting", value: "12", subValue: "Pending Content", trend: "neutral" },
  { label: "Performance", value: "$334.4k" },
  { label: "Social", value: "24M Views" },
  { label: "Partners", value: "422 rebates" },
  { label: "Campaigns", value: "1500 review" },
  { label: "Content", value: "30k assets" },
  { label: "Inbox", value: "40 unreads" },
  { label: "Operations", value: "12 Active" },
  { label: "Expenses", value: "20 requests" },
];

export const MOCK_APPROVALS: ApprovalItem[] = [
  {
    id: "1",
    companyName: "UrbanFit Life",
    action: "Approve Content",
    initials: "U",
    color: "bg-orange-100 text-orange-600",
    timeAgo: "2h ago",
  },
  {
    id: "2",
    companyName: "TechSavvy Mom",
    action: "Approve Commission",
    initials: "T",
    color: "bg-blue-100 text-blue-600",
    timeAgo: "5h ago",
  },
  {
    id: "3",
    companyName: "Daily Gadgets",
    action: "Validate Lead",
    initials: "D",
    color: "bg-purple-100 text-purple-600",
    timeAgo: "1d ago",
  },
  {
    id: "4",
    companyName: "Yoga with Jen",
    action: "Approve Invoice",
    initials: "Y",
    color: "bg-green-100 text-green-600",
    timeAgo: "1d ago",
  },
];

export const MOCK_PAYOUTS: PayoutData[] = [
  { month: "01.23", value: 100 },
  { month: "02.23", value: 120 },
  { month: "03.23", value: 90 },
  { month: "04.23", value: 170 },
  { month: "05.23", value: 240 },
  { month: "06.23", value: 110 },
  { month: "07.23", value: 130 },
  { month: "08.23", value: 280 },
  { month: "09.23", value: 220 },
];

export const MOCK_FUNNEL: FunnelData = {
  totalMarket: 142382,
  prospects: 87027,
  leads: 48027,
  sales: 32027,
  growth: 37,
};

export const MOCK_PARTNERS: Partner[] = [
  { name: "Levanta", partners: 45, progress: 75 },
  { name: "Impact", partners: 32, progress: 60 },
  { name: "Social Snowball", partners: 28, progress: 50 },
  { name: "Shopify Collabs", partners: 19, progress: 30 },
];

export const MOCK_ACTIVITY: ActivityItem[] = [
  {
    id: "1",
    user: "Sarah Jenkins",
    avatar: "https://i.pravatar.cc/150?u=1",
    message:
      "The new assets for the campaign look amazing! Can we schedule a call to discuss the rollout?",
    timeAgo: "2m ago",
    isUnread: true,
    badge: 2,
  },
  {
    id: "2",
    user: "Mike Ross",
    avatar: "https://i.pravatar.cc/150?u=2",
    message:
      "Just sent over the revised agreement. Let me know if you need anything else modified.",
    timeAgo: "1h ago",
  },
  {
    id: "3",
    user: "Elena Fisher",
    avatar: "https://i.pravatar.cc/150?u=3",
    message:
      'I have some questions about the attribution window for the "Summer Glow" bundle.',
    timeAgo: "3h ago",
    badge: 5,
  },
  {
    id: "4",
    user: "David Kim",
    avatar: "https://i.pravatar.cc/150?u=4",
    message:
      "The referral links are working perfectly now. Thanks for the quick fix on the tracking!",
    timeAgo: "5h ago",
    badge: 1,
  },
  {
    id: "5",
    user: "Alex Morgan",
    avatar: "https://i.pravatar.cc/150?u=5",
    message: "Can we push the meeting to next Tuesday?",
    timeAgo: "6h ago",
  },
  {
    id: "6",
    user: "Jessica Lee",
    avatar: "https://i.pravatar.cc/150?u=6",
    message: "Invoice #4022 has been paid. Thanks!",
    timeAgo: "1d ago",
    badge: 3,
  },
];

export const fetchDashboardData = async () => {
  return new Promise<{
    metrics: Metric[];
    approvals: ApprovalItem[];
    payouts: PayoutData[];
    funnel: FunnelData;
    partners: Partner[];
    activity: ActivityItem[];
  }>((resolve) => {
    setTimeout(() => {
      resolve({
        metrics: MOCK_METRICS,
        approvals: MOCK_APPROVALS,
        payouts: MOCK_PAYOUTS,
        funnel: MOCK_FUNNEL,
        partners: MOCK_PARTNERS,
        activity: MOCK_ACTIVITY,
      });
    }, 800);
  });
};
