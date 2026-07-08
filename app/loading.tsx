export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-950">
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 dark:border-gray-700"
          style={{ borderTopColor: '#1565C0' }}
        />
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Loading...
        </p>
      </div>
    </div>
  );
}
