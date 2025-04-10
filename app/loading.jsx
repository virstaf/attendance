import LoadingSpinner from "@/components/ui/loading-spinner";

export default function DashboardLoading() {
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}
