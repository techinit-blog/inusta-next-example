import Link from "next/link";

export default function RegisterForm() {
  return (
    <form>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          ユーザ名
        </label>
        <input
          name="name"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          メールアドレス
        </label>
        <input
          name="email"
          type="email"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          パスワード
        </label>
        <input
          type="password"
          name="password"
          required
          minLength={8}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          パスワード(確認用)
        </label>
        <input
          type="password"
          name="passwordConfirmation"
          required
          minLength={8}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <div className="mt-8 flex items-center justify-end">
        <Link
          className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          href="/login"
        >
          すでにアカウントをお持ちの方はこちら
        </Link>
        <button
          type="submit"
          className="ml-4 inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900"
        >
          登録
        </button>
      </div>
    </form>
  );
}
