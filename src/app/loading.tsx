export default function Loading() {
  return (
    <div className="min-h-screen animate-pulse">
      {/* Navbar bar */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 z-50" />

      {/* Hero skeleton */}
      <div className="pt-40 pb-16 px-4 max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
        <div className="h-7 w-40 bg-slate-200 dark:bg-slate-800 rounded-full" />
        <div className="h-12 w-4/5 bg-slate-200 dark:bg-slate-800 rounded-2xl" />
        <div className="h-12 w-3/5 bg-slate-200 dark:bg-slate-800 rounded-2xl" />
        <div className="h-5 w-2/3 bg-slate-200 dark:bg-slate-800 rounded-full" />
        <div className="h-5 w-1/2 bg-slate-200 dark:bg-slate-800 rounded-full" />
        <div className="flex gap-3 mt-2">
          <div className="h-12 w-36 bg-slate-200 dark:bg-slate-800 rounded-xl" />
          <div className="h-12 w-32 bg-slate-200 dark:bg-slate-800 rounded-xl" />
        </div>
      </div>

      {/* Cards section skeleton */}
      <div className="px-4 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pb-16">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-44 bg-slate-200 dark:bg-slate-800 rounded-2xl"
          />
        ))}
      </div>
    </div>
  );
}
