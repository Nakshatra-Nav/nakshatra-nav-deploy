
"use client";

import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import { useLocalUser } from "@/hooks/useLocalUser";
import { ArrowRight, Coins, Star, Ticket, Milestone, MapPin, Building2, Sun } from "lucide-react";
import { AchievementCard, type Achievement } from "@/components/rewards/AchievementCard";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const achievements: Achievement[] = [
  {
    icon: Ticket,
    title: "First Ride",
    description: "Verify your first transit journey.",
    isCompleted: true,
  },
  {
    icon: Milestone,
    title: "Metro Explorer",
    description: "Complete 10 verified metro trips.",
    isCompleted: true,
  },
  {
    icon: MapPin,
    title: "Station Hopper",
    description: "Visit 5 different stations.",
    isCompleted: true,
  },
  {
    icon: Building2,
    title: "Urban Wanderer",
    description: "Use both Metro and Bus services.",
    isCompleted: false,
  },
  {
    icon: Sun,
    title: "Early Bird",
    description: "Verify a trip before 8 AM.",
    isCompleted: false,
  },
  {
    icon: Star,
    title: "Reward Enthusiast",
    description: "Redeem your first reward from the store.",
    isCompleted: false,
  },
];


export default function DashboardPage() {
  const { userData, loading } = useLocalUser();

  const progress = (achievements.filter(a => a.isCompleted).length / achievements.length) * 100;

  return (
    <PageWrapper title={`Welcome, ${userData?.displayName || 'Explorer'}!`}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Profile Card & Achievements */}
        <div className="lg:col-span-2 space-y-8">

          {/* User Profile Card */}
          <Card className="shadow-xl overflow-hidden bg-gradient-to-br from-primary via-primary/70 to-secondary border-0">
            <CardContent className="p-6 text-primary-foreground relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/4 translate-x-1/4"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/4 -translate-x-1/4"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold tracking-wider">Nakshatra Nav Pass</h3>
                  <Star className="w-8 h-8" />
                </div>
                <div className="mb-8">
                  <p className="text-sm opacity-80">Current Balance</p>
                  <div className="flex items-center text-4xl font-bold">
                    <Coins className="w-8 h-8 mr-2 text-yellow-300" />
                    {userData?.tp.toLocaleString() ?? '...'} TP
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs uppercase opacity-80">Card Holder</p>
                    <p className="font-semibold text-lg">{userData?.displayName}</p>
                  </div>
                  <Button asChild className="bg-white/90 text-primary hover:bg-white">
                    <Link href="/rewards-store">
                      Spend TP <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Achievements Section */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Achievements</h2>
            <Card className="bg-card">
              <CardContent className="p-6">
                 <div className="flex items-center gap-4 mb-4">
                   <Progress value={progress} className="h-3" indicatorClassName="bg-gradient-to-r from-accent to-secondary" />
                   <span className="text-sm font-semibold text-primary">{Math.round(progress)}%</span>
                 </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {achievements.map((ach, index) => (
                    <AchievementCard key={index} achievement={ach} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

        </div>

        {/* Right Column: Quick Actions */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-card/80">
            <CardContent className="p-6">
              <h3 className="text-xl font-headline text-primary mb-4">Quick Actions</h3>
              <div className="space-y-3">
                 <Button asChild className="w-full justify-start text-base" variant="ghost">
                    <Link href="/tp-collection">
                      <Ticket className="mr-3" /> Verify a New Trip
                    </Link>
                  </Button>
                 <Button asChild className="w-full justify-start text-base" variant="ghost">
                    <Link href="/rewards-store">
                      <Star className="mr-3" /> Browse Rewards
                    </Link>
                  </Button>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </PageWrapper>
  );
}
