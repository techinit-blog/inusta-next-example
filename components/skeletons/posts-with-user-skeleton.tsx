export default function PostsWithUserSkeleton() {
  return (
    <div className="mx-auto my-8 max-w-5xl bg-white">
      <div className="grid grid-cols-3 gap-1">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

function Post() {
  return (
    <div>
      <div className="flex aspect-[1/1] animate-pulse items-center justify-center bg-gray-300 dark:bg-gray-700">
        <svg
          className="size-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="flex items-center justify-between border p-1">
        <div className="flex items-center">
          <div className="flex aspect-[1/1] h-6 items-center justify-center rounded-full bg-gray-300 dark:bg-gray-700">
            <svg
              className="size-3 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div className="ml-2 h-2 w-16 max-w-[460px] rounded-full bg-gray-400"></div>
        </div>
        <div className="ml-2 h-2 w-24 max-w-[460px] rounded-full bg-gray-200"></div>
      </div>
    </div>
  );
}
