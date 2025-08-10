import Link from "next/link";

export default function BreadcrumbDemo() {
  return (
    <nav className="flex text-gray-600 text-sm" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-gray-900">
        Home
      </Link>
      <span className="mx-2">/</span>
      <Link href="/category" className="hover:text-gray-900">
        Category
      </Link>
      <span className="mx-2">/</span>
      <span className="text-gray-900 font-semibold">Current Page</span>
    </nav>
  );
}
