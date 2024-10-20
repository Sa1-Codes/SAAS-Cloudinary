import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <div className="text-3xl">Welcome to VidCompressor</div>
      <div className="flex gap-2">
        <Link href={'/sign-in'} className="border border-white px-4 py-2 rounded-lg hover:text-black/80 hover:bg-gray-300">
          Sign In
        </Link>
        <Link href={'/sign-up'} className="border border-white px-4 py-2 rounded-lg text-black/80 bg-gray-300 hover:text-gray-300 hover:bg-neutral">
          Sign up
        </Link>
      </div>
    </div>
  );
}
