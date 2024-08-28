import BreadCrumbs from "@/components/layouts/bread-crumbs";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <BreadCrumbs title="ダッシュボード 🐾" />
      <Dashboard />
    </>
  );
}

function Dashboard() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mt-8 flex bg-white p-4">
        <Image
          className="block aspect-[1/1] size-24 rounded-full object-cover"
          src="/dogs/dog_1.jpg"
          width={96}
          height={96}
          alt="user icon"
        />
        <div className="pl-4">
          <p className="text-lg font-semibold text-black">user+1</p>
          <p className="whitespace-pre-wrap font-medium">
            こんにちは🐶
            <br />
            よろしくお願いします🐕
          </p>
          <div className="mt-4 flex">
            <p className="text-sm font-semibold text-black">投稿10件</p>
            <Link
              href="/profile"
              className="ml-2 rounded border px-2 text-sm font-semibold text-black"
            >
              プロフィールを編集
            </Link>
          </div>
        </div>
      </div>
      <div className="my-8 grid grid-cols-3 gap-1 bg-white">
        {[...Array(10)]
          .map((_, i) => i + 1)
          .map((i) => {
            return (
              <Link href={`/posts/${i}/edit`} key={i}>
                <Image
                  key={i}
                  className="aspect-[1/1] w-full object-cover"
                  src={`/dogs/dog_${i}.jpg`}
                  alt="post"
                  width={300}
                  height={300}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
}
