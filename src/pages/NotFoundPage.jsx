import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-9xl font-extrabold text-blue-600 mb-6">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
