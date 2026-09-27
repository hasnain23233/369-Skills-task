import StatCard from "../components/stateCard";
import RecentProjects from "../components/RecentProjects";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Welcome back!
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Here is what's happening with your projects today.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Total Projects"
          value="24"
          description="+4 this month"
        />

        <StatCard
          title="Active Users"
          value="18"
          description="+3 this week"
        />

        <StatCard
          title="Completed"
          value="16"
          description="67% completion rate"
        />
      </div>

      <RecentProjects />
    </div>
  );
};

export default Dashboard;