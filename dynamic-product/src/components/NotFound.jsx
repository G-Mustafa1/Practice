import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="h-screen flex items-center justify-center flex-col bg-gray-100">
    <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
    <p className="text-gray-600 mt-3">The page you are looking for does not exist.</p>
    <Link to="/" className="mt-5 px-4 py-2 bg-blue-600 text-white rounded">Go Home</Link>
  </div>
)

export default NotFound;
