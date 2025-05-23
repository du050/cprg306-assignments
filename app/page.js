import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">CPRG 306: Web Development 2 - Assignments</h1>
      <p>By Maria Xavier</p>
      <Link href="/week-2">
        <p className="text-lg text-blue-500 hover:text-blue-700">Go to Week 2 Assignments</p>
      </Link>
      <Link href="/week-3">
        <p className="text-lg text-blue-500 hover:text-blue-700">Go to Week 3 Assignments</p>
      </Link>
      <Link href="/week-4">
        <p className="text-lg text-blue-500 hover:text-blue-700">Go to Week 4 Assignments</p>
      </Link>
      <Link href="/week-5">
        <p className="text-lg text-blue-500 hover:text-blue-700">Go to Week 5 Assignments</p>
      </Link>
      <Link href="/week-6">
        <p className="text-lg text-blue-500 hover:text-blue-700">Go to Week 6 Assignments</p>
      </Link>
      <Link href="/week-7">
        <p className="text-lg text-blue-500 hover:text-blue-700">Go to Week 7 Assignments</p>
      </Link>
      <Link href="/week-8">
        <p className="text-lg text-blue-500 hover:text-blue-700">Go to Week 8 Assignments</p>
      </Link>
      <Link href="/week-9">
        <p className="text-lg text-blue-500 hover:text-blue-700">Go to Week 9 Assignments</p>
      </Link>
      <Link href="/week-10">
        <p className="text-lg text-blue-500 hover:text-blue-700">Go to Week 10 Assignments</p>
      </Link>
    </div>
  );
}