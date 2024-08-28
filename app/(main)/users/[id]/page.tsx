import BreadCrumbs from "@/components/layouts/bread-crumbs";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <BreadCrumbs title="オーナー 🐾" />
      <UserDetail />
    </>
  );
}

async function UserDetail() {
  const user = {
    name: "user+1",
    image: "/dogs/dog_1.jpg",
    description: "こんにちは🐶よろしくお願いします🐕",
    posts: [{ id: 1, image: "/dogs/dog_2.jpg" }],
  };
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mt-8 flex bg-white p-4">
        {user.image && (
          <Image
            className="block aspect-[1/1] rounded-full object-cover"
            src={user.image}
            width={96}
            height={96}
            alt="user icon"
          />
        )}

        <div className="pl-4">
          <p className="text-lg font-semibold text-black">{user.name}</p>
          <p className="whitespace-pre-wrap font-medium">{user.description}</p>
          <div className="mt-4 flex">
            <p className="text-sm font-semibold text-black">
              投稿{user.posts.length}件
            </p>
          </div>
        </div>
      </div>
      <div className="my-8 bg-white">
        <div className="grid grid-cols-3 gap-1">
          {user.posts.map((post) => {
            return (
              <Link href={`/posts/${post.id}`} key={post.id}>
                <Image
                  className="aspect-[1/1] w-full object-cover"
                  src={post.image}
                  width={400}
                  height={400}
                  alt="user icon"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
