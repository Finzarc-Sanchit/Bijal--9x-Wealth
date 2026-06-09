export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#ebe6de]">
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-2 border-brand-navy/20 border-t-brand-navy" />
        <p className="text-sm font-medium text-brand-navy">Loading 9X Wealth…</p>
      </div>
    </div>
  );
}
