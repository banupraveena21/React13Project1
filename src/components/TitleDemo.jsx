import useTitle from "../hooks/useTitle";

export default function Page() {
  useTitle("My Page Title");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold">Welcome to My Page!</h1>
    </div>
  );
}
