export default function Header({ children }) {
  return (
    <div className="flex bg-blue-500">
      <div className="w-3/12 uppercase text-2x1 font-semibold tracking-widest">
        {children}
      </div>
    </div>
  );
}
