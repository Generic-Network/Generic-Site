// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-screen bg-blue-900 text-white flex flex-col justify-center items-center font-mono p-8 text-center">
      <div className="max-w-lg">
        <h1 className="text-6xl mb-6">:(</h1>
        <p className="text-md mb-4">
          404 PAGE NOT FOUND
        </p>
        <p className="text-lg mb-4">
          The page you tried to enter is not present.
        </p>
        <p className="text-sm mb-8">
          Check your Spelling or Contact a Server Administrator under<br />
          <Link href={'https://discord.gg/5tZpmCzvtX'} className="font-semibold">GENERIC_NETWORK_DISCORD</Link>
        </p>
        <Link
          href="/"
          className="underline text-white hover:text-blue-300 transition"
        >
          ← Back to Home
        </Link>
        <p className="text-[0.5rem]">This is not a real Bluescreen! </p>
      </div>
    </div>
  );
}
