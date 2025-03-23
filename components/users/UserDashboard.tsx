import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, Bell, Calendar, Heart, Settings, LogOut } from "lucide-react";

interface UserDashboardProps {
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
}

const UserDashboard = ({ user }: UserDashboardProps) => {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "events", label: "My Events", icon: Calendar },
    { id: "donations", label: "My Donations", icon: Heart },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative h-16 w-16 rounded-full overflow-hidden">
                <Image
                  src={user.avatar || "/placeholder.svg?height=64&width=64"}
                  alt={user.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">{user.name}</h3>
                <p className="text-gray-600 text-sm">{user.email}</p>
              </div>
            </div>

            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-3 w-full px-3 py-2 rounded-md ${
                    activeTab === tab.id
                      ? "bg-red-100 text-red-700 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              ))}

              <button className="flex items-center space-x-3 w-full px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </nav>
          </div>

          <div className="bg-red-50 rounded-lg p-6">
            <h4 className="font-bold text-red-700 mb-2">Need Help?</h4>
            <p className="text-gray-700 mb-4 text-sm">
              Contact our support team for assistance with your account or
              donations.
            </p>
            <Link
              href="/contact"
              className="inline-block text-red-600 hover:text-red-800 font-medium text-sm"
            >
              Contact Support
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:w-3/4">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {activeTab === "profile" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">My Profile</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={user.name}
                      readOnly
                      className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={user.email}
                      readOnly
                      className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Member Since
                    </label>
                    <input
                      type="text"
                      value="January 15, 2023"
                      readOnly
                      className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Subscription Status
                    </label>
                    <div className="flex items-center">
                      <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                      <span>Active</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Your Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      Emergency Response
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      Medical Aid
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      Children{"'"}s Health
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      Refugee Support
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md transition-colors">
                    Edit Profile
                  </button>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Notifications</h2>
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">
                          New Emergency Response in Sudan
                        </h4>
                        <p className="text-gray-600 text-sm mt-1">
                          MSF has launched a new emergency response to address
                          the growing humanitarian crisis in Sudan.
                        </p>
                      </div>
                      <span className="text-gray-500 text-sm">2 days ago</span>
                    </div>
                  </div>

                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">
                          Thank You for Your Donation
                        </h4>
                        <p className="text-gray-600 text-sm mt-1">
                          Your recent donation of $50 is helping provide medical
                          care to those in need.
                        </p>
                      </div>
                      <span className="text-gray-500 text-sm">1 week ago</span>
                    </div>
                  </div>

                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Upcoming Virtual Event</h4>
                        <p className="text-gray-600 text-sm mt-1">
                          Join us for a virtual panel discussion on global
                          health challenges on June 15.
                        </p>
                      </div>
                      <span className="text-gray-500 text-sm">2 weeks ago</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "events" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">My Events</h2>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">
                          Virtual Panel: Global Health Challenges
                        </h4>
                        <div className="flex items-center text-gray-600 text-sm mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>June 15, 2023 • 2:00 PM - 4:00 PM</span>
                        </div>
                      </div>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        Registered
                      </span>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">
                          Fundraising Gala: A Night for Medical Aid
                        </h4>
                        <div className="flex items-center text-gray-600 text-sm mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>July 22, 2023 • 7:00 PM - 10:00 PM</span>
                        </div>
                      </div>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        Registered
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "donations" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">My Donations</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Campaign
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Receipt
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          May 10, 2023
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          $50.00
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Emergency Response Fund
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Completed
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 hover:text-red-800">
                          <a href="#">Download</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          March 15, 2023
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          $100.00
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Gaza Crisis Appeal
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Completed
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 hover:text-red-800">
                          <a href="#">Download</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          January 5, 2023
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          $25.00
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Monthly Donation
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Completed
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 hover:text-red-800">
                          <a href="#">Download</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Account Settings</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Email Preferences
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input
                          id="newsletter"
                          type="checkbox"
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                          defaultChecked
                        />
                        <label
                          htmlFor="newsletter"
                          className="ml-3 text-gray-700"
                        >
                          Newsletter
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="events"
                          type="checkbox"
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                          defaultChecked
                        />
                        <label htmlFor="events" className="ml-3 text-gray-700">
                          Events and Webinars
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="emergency"
                          type="checkbox"
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                          defaultChecked
                        />
                        <label
                          htmlFor="emergency"
                          className="ml-3 text-gray-700"
                        >
                          Emergency Appeals
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="donation"
                          type="checkbox"
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                          defaultChecked
                        />
                        <label
                          htmlFor="donation"
                          className="ml-3 text-gray-700"
                        >
                          Donation Receipts
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Password</h3>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors">
                      Change Password
                    </button>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Delete Account</h3>
                    <p className="text-gray-600 mb-4">
                      Once you delete your account, there is no going back.
                      Please be certain.
                    </p>
                    <button className="bg-red-100 hover:bg-red-200 text-red-800 font-medium py-2 px-4 rounded-md transition-colors">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
