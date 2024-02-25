"use client";
import { useSearchParams } from "next/navigation";

export default function ErrorPage() {
  const params = useSearchParams();
  const message = params.get('message') || "";
  return (
    <main className="h-[90vh] flex flex-col items-center justify-center">
      <h1 className="text-2xl text-center">Error</h1>
      <p className="pt-10">Sorry, something went wrong</p>
      <p className="pt-10">{message}</p>
    </main>
  );
}
