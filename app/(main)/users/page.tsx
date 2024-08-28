import BreadCrumbs from "@/components/layouts/bread-crumbs";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <BreadCrumbs title="オーナー一覧 🐾" />
      <Users />
    </>
  );
}

function Users() {
  return (
    <div className="mx-auto my-8 max-w-5xl bg-white shadow-sm">
      <div className="grid grid-cols-1 gap-1  lg:grid-cols-2">
        {[...Array(10)]
          .map((_, i) => i + 1)
          .map((i) => {
            return (
              <Link href={`/users/${i}`} key={i}>
                <div className="flex bg-white p-4">
                  <Image
                    src="/dogs/dog_11.jpg"
                    className="block aspect-[1/1] rounded-full object-cover"
                    width={96}
                    height={96}
                    alt="user icon"
                  />

                  <div className="pl-4">
                    <div>
                      <p className="text-lg font-semibold text-black">user+1</p>
                      <p className="whitespace-pre-wrap font-medium">
                        こんにちは🐶よろしくお願いします🐕
                      </p>
                      <div className="mt-4 flex">
                        <p className="text-sm font-semibold text-black">
                          投稿10件
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
