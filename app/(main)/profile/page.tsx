import BreadCrumbs from "@/components/layouts/bread-crumbs";
import ProfileEditForm from "@/components/pages/profile/profile-form";

export default async function Page() {
  const user = {
    name: "user+1",
    email: "user+1@example.com",
    image: null,
    description: "こんにちは🐶よろしくお願いします🐕",
  };
  return (
    <>
      <BreadCrumbs title="プロフィール編集 🐾" />
      <div className="mx-auto mt-8 max-w-5xl bg-white p-4">
        <header>
          <h2 className="text-lg font-medium text-gray-900">アカウント情報</h2>
          <p className="mt-1 text-sm text-gray-600">
            アカウント情報やメールアドレスの更新
          </p>
        </header>
        <ProfileEditForm user={user} />
      </div>
    </>
  );
}
