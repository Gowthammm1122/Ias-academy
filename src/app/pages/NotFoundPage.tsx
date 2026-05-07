import { Link } from 'react-router';
import { Home } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4" style={{ color: '#6269C9' }}>404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white px-8 py-3 rounded-lg font-bold transition hover:opacity-90"
          style={{ backgroundColor: '#6269C9' }}
        >
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
