import Navigation from "@/components/layouts/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <main>{children}</main>
    </div>
  );
}
