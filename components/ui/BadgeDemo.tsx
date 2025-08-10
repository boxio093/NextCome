export default function BadgeDemo() {
  return (
    <div className="flex items-center space-x-4">
      <span className="inline-block bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
        Success
      </span>
      <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
        Warning
      </span>
      <span className="inline-block bg-red-200 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
        Error
      </span>
    </div>
  );
}
