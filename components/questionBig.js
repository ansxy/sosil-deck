export default function QuestionBig({ children }) {
  return (
    <div className="flex bg-gray-500">
      <div className="w-3/12 uppercase text-2x1 font-bold tracking-widest">
        {children}
      </div>
    </div>
  );
}
