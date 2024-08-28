import BreadCrumbs from "@/components/layouts/bread-crumbs";
import PostsCreateForm from "@/components/pages/posts/posts-create-form";

export default function Page() {
  return (
    <>
      <BreadCrumbs title="投稿作成 🐾" />
      <div className="mx-auto max-w-5xl">
        <PostsCreateForm />
      </div>
    </>
  );
}
