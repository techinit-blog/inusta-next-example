import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex">
              <div className="flex shrink-0 items-center">
                <Image src="/logo.png" width={80} height={30} alt="logo" />
              </div>
            </div>
            <div className="space-x-8">
              <Link
                href="/login"
                className="inline-flex items-center border-indigo-400 px-1 pt-1 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out focus:border-indigo-700 focus:outline-none"
              >
                ログイン
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center border-indigo-400 px-1 pt-1 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out focus:border-indigo-700 focus:outline-none"
              >
                会員登録
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}
