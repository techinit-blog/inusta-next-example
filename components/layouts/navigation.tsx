"use client";

import NavigationMenu from "@/components/layouts/navigation-menu";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex shrink-0 items-center">
              <Link href="/dashboard">
                <Image src="/logo.png" width={80} height={30} alt="logo" />
              </Link>
            </div>

            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
              <Link
                href="/dashboard"
                className={clsx(
                  "inline-flex items-center border-gray-600 px-1 pt-1 text-sm font-medium text-gray-900 focus:border-gray-900",
                  {
                    "border-b": pathname === "/dashboard",
                  },
                )}
              >
                ダッシュボード
              </Link>
              <Link
                href="/profile"
                className={clsx(
                  "inline-flex items-center border-gray-600 px-1 pt-1 text-sm font-medium text-gray-900 focus:border-gray-900",
                  {
                    "border-b": pathname === "/profile",
                  },
                )}
              >
                プロフィール
              </Link>
              <Link
                href="/posts/create"
                className={clsx(
                  "inline-flex items-center border-gray-600 px-1 pt-1 text-sm font-medium text-gray-900 focus:border-gray-900",
                  {
                    "border-b": pathname === "/posts/create",
                  },
                )}
              >
                新規作成
              </Link>
              <Link
                href="/posts"
                className={clsx(
                  "inline-flex items-center border-gray-600 px-1 pt-1 text-sm font-medium text-gray-900 focus:border-gray-900",
                  {
                    "border-b": pathname === "/posts",
                  },
                )}
              >
                新着投稿
              </Link>
              <Link
                href="/users"
                className={clsx(
                  "inline-flex items-center border-gray-600 px-1 pt-1 text-sm font-medium text-gray-900 focus:border-gray-900",
                  {
                    "border-b": pathname === "/users",
                  },
                )}
              >
                オーナー
              </Link>
            </div>
          </div>
          <NavigationMenu />
        </div>
      </div>
    </nav>
  );
}
