export default function AvatarDemo() {
  return (
    <div className="flex items-center space-x-4">
      <img
        src="https://i.pravatar.cc/48"
        alt="User avatar"
        className="w-12 h-12 rounded-full"
      />
      <div>
        <p className="font-semibold">Jane Doe</p>
        <p className="text-gray-500 text-sm">janedoe@example.com</p>
      </div>
    </div>
  );
}
