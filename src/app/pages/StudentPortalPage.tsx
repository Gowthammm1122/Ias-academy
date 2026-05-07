import { User, BookOpen, FileText, Calendar, Download, Bell } from 'lucide-react';
import { useState } from 'react';

export function StudentPortalPage() {
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Student Portal login functionality will be integrated with backend');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="text-white py-16" style={{ background: 'linear-gradient(to right, #5159b8, #6269C9, #5159b8)' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Student Portal</h1>
          <p className="text-xl text-white/90">Access your learning materials and track your progress</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Login Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#6269C9' }}>Student Login</h2>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Username / Registration ID</label>
                <input
                  type="text"
                  required
                  value={loginData.username}
                  onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
                  onFocus={(e) => e.currentTarget.style.outline = '2px solid #6269C9'}
                  onBlur={(e) => e.currentTarget.style.outline = 'none'}
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  required
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
                  onFocus={(e) => e.currentTarget.style.outline = '2px solid #6269C9'}
                  onBlur={(e) => e.currentTarget.style.outline = 'none'}
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full text-white py-3 rounded-lg font-bold transition hover:opacity-90"
                style={{ backgroundColor: '#6269C9' }}
              >
                Login to Portal
              </button>
              <div className="text-center">
                <a href="#" className="text-sm hover:underline" style={{ color: '#6269C9' }}>Forgot Password?</a>
              </div>
            </form>
          </div>

          {/* Portal Features */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Portal Features</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow p-6 flex items-start gap-4">
                <div className="rounded-full p-3 flex-shrink-0" style={{ backgroundColor: 'rgba(98, 105, 201, 0.1)' }}>
                  <BookOpen size={24} style={{ color: '#6269C9' }} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Study Materials</h3>
                  <p className="text-gray-600">Access comprehensive study materials, notes, and reference books</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6 flex items-start gap-4">
                <div className="rounded-full p-3 flex-shrink-0" style={{ backgroundColor: 'rgba(98, 105, 201, 0.1)' }}>
                  <FileText size={24} style={{ color: '#6269C9' }} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Test Series</h3>
                  <p className="text-gray-600">Take online tests and track your performance with detailed analytics</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6 flex items-start gap-4">
                <div className="rounded-full p-3 flex-shrink-0" style={{ backgroundColor: 'rgba(98, 105, 201, 0.1)' }}>
                  <Calendar size={24} style={{ color: '#6269C9' }} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Class Schedule</h3>
                  <p className="text-gray-600">View your daily class timetable and upcoming sessions</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6 flex items-start gap-4">
                <div className="rounded-full p-3 flex-shrink-0" style={{ backgroundColor: 'rgba(98, 105, 201, 0.1)' }}>
                  <Download size={24} style={{ color: '#6269C9' }} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Download Resources</h3>
                  <p className="text-gray-600">Download current affairs, magazines, and study guides</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6 flex items-start gap-4">
                <div className="rounded-full p-3 flex-shrink-0" style={{ backgroundColor: 'rgba(98, 105, 201, 0.1)' }}>
                  <Bell size={24} style={{ color: '#6269C9' }} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Notifications</h3>
                  <p className="text-gray-600">Get updates on classes, tests, and important announcements</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6 flex items-start gap-4">
                <div className="rounded-full p-3 flex-shrink-0" style={{ backgroundColor: 'rgba(98, 105, 201, 0.1)' }}>
                  <User size={24} style={{ color: '#6269C9' }} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Profile Management</h3>
                  <p className="text-gray-600">Update your profile, contact details, and preferences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
