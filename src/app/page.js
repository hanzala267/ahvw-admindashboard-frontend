import Link from "next/link";

export default function Component() {
  return (
    <div className="flex h-screen w-full items-center justify-center ">
      <div className="flex h-full w-full max-w-7xl sm:flex-row-reverse flex-col-reverse items-center justify-between px-4 md:px-6 lg:px-8">
        <nav className=" h-[70%] sm:h-full flex-col items-end justify-center gap-8 flex">
          <div className="flex flex-col items-end justify-center gap-2">
            <Link
              href="/Admin"
              className="text-4xl font-bold text-gray-600 transition ease-in-out duration-300 hover:text-gray-900 hover:translate-x-2 hover:-translate-y-2 dark:text-gray-50 dark:hover:text-gray-300"
              prefetch={true}
            >
              Admin
            </Link>
            <div className="h-1 w-0 rounded-full bg-gray-900 transition-all duration-300 group-hover:w-full dark:bg-gray-50" />
          </div>
          <div className="flex flex-col items-end justify-center gap-2">
            <Link
              href="/Employee"
              className="text-4xl font-bold text-gray-600 transition ease-in-out duration-300 hover:text-gray-900 hover:translate-x-2 hover:-translate-y-2 dark:text-gray-50 dark:hover:text-gray-300"
              prefetch={true}
            >
              Employee
            </Link>
            <div className="h-1 w-0 rounded-full bg-gray-900 transition-all duration-300 group-hover:w-full dark:bg-gray-50" />
          </div>
          <div className="flex flex-col items-end justify-center gap-2">
            <Link
              href="/Employee"
              className="text-4xl font-bold text-gray-600 transition ease-in-out duration-300 hover:text-gray-900 hover:translate-x-2 hover:-translate-y-2 dark:text-gray-50 dark:hover:text-gray-300"
              prefetch={true}
            >
              Client
            </Link>
            <div className="h-1 w-0 rounded-full bg-gray-900 transition-all duration-300 group-hover:w-full dark:bg-gray-50" />
          </div>
        </nav>
        <div className="hidden flex flex-col items-center justify-center gap-8 md:gap-2">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-50 md:text-6xl lg:text-7xl">
            Welcome
          </h1>
          <p className="hidden  max-w-md text-center text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
            Explore our platform and manage your business with ease.
          </p>
        </div>
      </div>
    </div>
  );
}
