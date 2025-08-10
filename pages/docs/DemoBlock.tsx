interface DemoBlockProps {
  children: React.ReactNode;
}

export default function DemoBlock({ children }: DemoBlockProps) {
  return (
    <div className="border rounded-lg p-6 mb-4 bg-white shadow-sm">
      {children}
    </div>
  );
}
