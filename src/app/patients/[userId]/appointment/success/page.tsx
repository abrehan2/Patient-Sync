// IMPORTS -
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex h-screen max-h-screen px-[5%] justify-center items-center gap-y-6 flex-col">
      <h2 className="header mb-6 max-w-[600px] text-center">
        Your <span className="text-green-500">appointment request</span> has
        been successfully submitted.
      </h2>
      <Link href={"/"} className="font-mono underline tracking-wide">
        Back to home
      </Link>
    </div>
  );
}
