// app/loading.tsx
export default function LoadingRoot() {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-(--color-overlay) flex items-center justify-center px-16 py-8 overflow-auto"
    >
      <div className="relative h-auto overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-28 h-28 border-4 border-t-transparent border-pink-400 rounded-full animate-spin mx-auto" />
        </div>
      </div>
    </div>
  );
}
