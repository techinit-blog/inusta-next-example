export default function PostsCreateForm() {
  return (
    <form className="mt-8 bg-white p-4">
      <label className="mb-2 block text-sm font-medium text-gray-700">
        画像
      </label>
      <input
        type="file"
        className="w-full rounded bg-gray-100 font-medium text-gray-500 file:mr-4 file:border-0 file:bg-gray-800 file:px-4 file:py-2.5 file:text-white"
        name="image"
      />
      <label className="mb-2 mt-4 block text-sm font-medium text-gray-700">
        キャプション
      </label>
      <textarea
        className="w-full rounded border border-gray-300 p-2.5 focus:border-blue-500 focus:ring-blue-500"
        name="caption"
        rows={8}
        placeholder="キャプションを入力してください..."
      ></textarea>
      <button
        type="submit"
        className="mt-4 inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900"
      >
        公開
      </button>
    </form>
  );
}
