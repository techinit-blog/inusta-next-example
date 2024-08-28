export default function ProfileEditForm({
  user,
}: {
  user: {
    name: string;
    email: string;
    image: string | null;
    description: string | null;
  };
}) {
  return (
    <form className="relative mt-6 space-y-6">
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="name"
        >
          名前
        </label>
        <input
          defaultValue={user.name}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          name="name"
          type="text"
          required
        />
      </div>

      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="email"
        >
          メールアドレス
        </label>
        <input
          defaultValue={user.email}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          name="email"
          type="email"
          required
        />
      </div>

      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="description"
        >
          自己紹介
        </label>
        <textarea
          className="mt-1 w-full rounded border border-gray-300 p-2.5 focus:border-blue-500 focus:ring-blue-500"
          name="description"
          rows={6}
          defaultValue={user.description ?? ""}
        ></textarea>
      </div>

      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="icon"
        >
          アイコン
        </label>
        <input
          type="file"
          className="mt-1 w-full rounded bg-gray-100 font-medium text-gray-500 file:mr-4 file:border-0 file:bg-gray-800 file:px-4 file:py-2.5 file:text-white"
          name="image"
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900"
        >
          保存
        </button>
      </div>
    </form>
  );
}
