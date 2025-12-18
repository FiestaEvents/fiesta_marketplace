import { Calendar, Heart } from "lucide-react";

export default function DashboardHome() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Hello, Amine 👋</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-blue-50 rounded-full text-blue-600">
            <Calendar />
          </div>
          <div>
            <div className="text-2xl font-bold">2</div>
            <div className="text-sm text-gray-500">Upcoming Events</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-red-50 rounded-full text-red-600">
            <Heart />
          </div>
          <div>
            <div className="text-2xl font-bold">14</div>
            <div className="text-sm text-gray-500">Saved Items</div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h2 className="font-bold text-lg mb-4">Recent Bookings</h2>
        <div className="space-y-4">
          {/* Mock Booking Item */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>{" "}
              {/* Image Placeholder */}
              <div>
                <h4 className="font-bold">Dar El Jeld</h4>
                <p className="text-sm text-gray-500">
                  Nov 24, 2025 • 200 Guests
                </p>
              </div>
            </div>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">
              Pending
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
