import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 mb-10 whitespace-nowrap">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 md:mr-10">
          <Link href="/" className="flex-col text-white no-underline">
            <h1 className="text-2xl font-bold">Apple News</h1>
            <p>We deliver the juice</p>
          </Link>
        </div>
        <nav className="md:space-x-16 space-x-8 md:text-xl">
          <Link
            href="/sports"
            className="hover:text-gray-300 text-white no-underline"
          >
            Sports
          </Link>
          <Link
            href="/food"
            className="hover:text-gray-300 text-white no-underline"
          >
            Food
          </Link>
          <Link
            href="/business"
            className="hover:text-gray-300 text-white no-underline"
          >
            Economy
          </Link>
          <Link
            href="/entertainment"
            className="hover:text-gray-300 text-white no-underline"
          >
            Entertainment
          </Link>
          <Link
            href="/bookmarks"
            className="hover:text-gray-300 text-white no-underline"
          >
            Bookmarks
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
