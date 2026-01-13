export interface Metric {
    label: string;
    value: string;
    subValue?: string;
    trend?: "up" | "down" | "neutral";
}

export interface ApprovalItem {
    id: string;
    companyName: string;
    action: string;
    initials: string;
    color: string;
    timeAgo: string;
}

export interface PayoutData {
    month: string;
    value: number;
}

export interface FunnelData {
    totalMarket: number;
    prospects: number;
    leads: number;
    sales: number;
    growth: number;
}

export interface Partner {
    name: string;
    partners: number;
    progress: number;
}

export interface ActivityItem {
    id: string;
    user: string;
    avatar: string;
    message: string;
    timeAgo: string;
    isUnread?: boolean;
    badge?: number;
}

export interface DashboardData {
    metrics: Metric[];
    approvals: ApprovalItem[];
    payouts: PayoutData[];
    funnel: FunnelData;
    partners: Partner[];
    activity: ActivityItem[];
}
