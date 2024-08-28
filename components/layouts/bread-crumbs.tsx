export default function BreadCrumbs({ title }: { title: string }) {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h2 className="text-md font-semibold leading-tight text-gray-800">
          {title}
        </h2>
      </div>
    </header>
  );
}
