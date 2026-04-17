export default function AppLogo() {
  return (
    <>
      <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-white! text-sidebar-primary-foreground">
        <img src="/favicon-180x180.png" alt="t2r logo" />
      </div>
      <div className="ml-1 grid flex-1 text-left text-sm">
        <span className="mb-0.5 truncate leading-tight font-semibold">
          T2R Admin{' '}
        </span>
      </div>
    </>
  );
}
