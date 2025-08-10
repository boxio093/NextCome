"use client";

type FormInputProps = {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
};

export default function FormInput({
  label,
  id,
  type = "text",
  placeholder,
}: FormInputProps) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-md text-gray-900 dark:text-gray-100 dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}
