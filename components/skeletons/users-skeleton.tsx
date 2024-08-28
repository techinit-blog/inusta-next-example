import IconSkeleton from "@/components/skeletons/icon-skeleton";

export default function UsersSkeleton() {
  return (
    <div className="mx-auto my-8 max-w-5xl bg-white shadow-sm">
      <div className="grid grid-cols-2 gap-1">
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  );
}

function User() {
  return (
    <div className="flex animate-pulse bg-white p-4">
      <IconSkeleton />
      <div className="pl-4">
        <div>
          <div className="my-4 h-2.5 w-48 rounded-full bg-gray-200"></div>
          <div className="my-4 h-2.5 w-48 rounded-full bg-gray-200"></div>
          <div className="my-4 h-2.5 w-48 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}
