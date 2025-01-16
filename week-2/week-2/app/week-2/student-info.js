import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <p>Hello! I am Maria Xavier</p>
      <p>
        GitHub Repository:{" "}
        <Link href="https://github.com/du050/cprg306-assignments/tree/main">
         View on GitHub
        </Link>
      </p>
    </div>
  );
}
