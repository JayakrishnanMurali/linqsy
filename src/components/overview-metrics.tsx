"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowDown,
  ArrowUp,
  CreditCard,
  DollarSign,
  Users,
} from "lucide-react";
import { useRef, useState, type ReactNode } from "react";

function TiltCard({
  children,
  className = "",
  gradient = "from-violet-500 to-purple-500",
}: {
  children: ReactNode;
  className?: string;
  gradient?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className="perspective-1000 group relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <Card
        className={`relative overflow-hidden rounded-xl border-none bg-gradient-to-br ${gradient} text-white shadow-xl transition-all duration-200 ease-out ${className} ${isHovered ? "shadow-2xl" : ""} `}
        style={{
          transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
            : "rotateX(0deg) rotateY(0deg)",
        }}
      >
        <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
        {children}
      </Card>
    </div>
  );
}

export function OverviewMetrics() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <TiltCard>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-white/90">
            Total Spend
          </CardTitle>
          <DollarSign className="h-4 w-4 text-white/70" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold tracking-tight">$24,685</div>
          <p className="mt-2 text-xs text-white/70">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-1 text-emerald-300">
              <ArrowUp className="h-3 w-3" />
              +2.5%
            </span>
            <span className="ml-2">from last month</span>
          </p>
        </CardContent>
      </TiltCard>

      <TiltCard gradient="from-blue-500 to-cyan-500">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-white/90">
            Active Subscriptions
          </CardTitle>
          <CreditCard className="h-4 w-4 text-white/70" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold tracking-tight">45</div>
          <p className="mt-2 text-xs text-white/70">
            <span className="inline-flex items-center gap-1 rounded-full bg-red-500/20 px-2 py-1 text-red-300">
              <ArrowDown className="h-3 w-3" />
              -1
            </span>
            <span className="ml-2">from last month</span>
          </p>
        </CardContent>
      </TiltCard>

      <TiltCard gradient="from-amber-500 to-orange-500">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-white/90">
            Team Members
          </CardTitle>
          <Users className="h-4 w-4 text-white/70" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold tracking-tight">128</div>
          <p className="mt-2 text-xs text-white/70">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-1 text-emerald-300">
              <ArrowUp className="h-3 w-3" />
              +12
            </span>
            <span className="ml-2">from last month</span>
          </p>
        </CardContent>
      </TiltCard>

      <TiltCard gradient="from-pink-500 to-rose-500">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-white/90">
            Upcoming Renewals
          </CardTitle>
          <CreditCard className="h-4 w-4 text-white/70" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold tracking-tight">8</div>
          <p className="mt-2 text-xs text-white/70">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-1">
              Next 30 days
            </span>
          </p>
        </CardContent>
      </TiltCard>
    </div>
  );
}
