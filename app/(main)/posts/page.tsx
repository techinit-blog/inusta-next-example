import BreadCrumbs from "@/components/layouts/bread-crumbs";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <BreadCrumbs title="新着投稿 🐾" />
      <Posts />
    </>
  );
}

function Posts() {
  return (
    <div className="mx-auto my-8 max-w-5xl bg-white">
      <div className="grid grid-cols-3 gap-1">
        {[...Array(10)]
          .map((_, i) => i + 1)
          .map((i) => {
            return (
              <Link key={i} href={`/posts/${i}`}>
                <Image
                  className="aspect-[1/1] w-full object-cover"
                  src={`/dogs/dog_${i}.jpg`}
                  alt="posts"
                  width={400}
                  height={400}
                />
                <div className="flex items-center justify-between border p-1">
                  <div className="flex items-center">
                    <Image
                      className="block aspect-square size-6 rounded-full object-cover"
                      src="/dogs/dog_5.jpg"
                      width={32}
                      height={32}
                      alt="user icon"
                    />
                    <p className="ml-2 text-sm font-semibold text-black">
                      user+1
                    </p>
                  </div>
                  <p className="hidden text-xs text-gray-500 md:block">
                    {new Date().toLocaleString("ja-JP")}
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
