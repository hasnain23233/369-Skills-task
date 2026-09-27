import { useState } from 'react'

const tabs = ['Profile', 'Account', 'Notifications', 'Security']

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('Profile')
  const [name, setName] = useState('Ayesha Khan')
  const [email, setEmail] = useState('ayesha@example.com')
  const [emailNotifs, setEmailNotifs] = useState(true)
  const [pushNotifs, setPushNotifs] = useState(false)

  const handleSave = (e) => {
    e.preventDefault()
    // wire up to your API/context here
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage your profile, account and preferences.
          </p>
        </div>

        <div className="rounded-xl bg-white shadow-lg">
          {/* Tabs */}
          <div className="flex gap-1 border-b border-slate-100 px-6 pt-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-t-lg px-4 py-2.5 text-sm font-medium transition ${
                  activeTab === tab
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-6 sm:p-8">
            {activeTab === 'Profile' && (
              <form onSubmit={handleSave} className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-lg font-semibold text-blue-600">
                    {name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                  </div>
                  <button
                    type="button"
                    className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  >
                    Change Photo
                  </button>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Bio
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us a little about yourself"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </form>
            )}

            {activeTab === 'Account' && (
              <form onSubmit={handleSave} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Current Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                >
                  Update Password
                </button>

                <div className="mt-8 border-t border-slate-100 pt-6">
                  <h3 className="mb-2 text-sm font-semibold text-rose-600">Danger Zone</h3>
                  <p className="mb-4 text-sm text-slate-500">
                    Deleting your account is permanent and cannot be undone.
                  </p>
                  <button
                    type="button"
                    className="rounded-lg border border-rose-300 px-5 py-2.5 text-sm font-medium text-rose-600 hover:bg-rose-50"
                  >
                    Delete Account
                  </button>
                </div>
              </form>
            )}

            {activeTab === 'Notifications' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-900">Email Notifications</p>
                    <p className="text-sm text-slate-500">
                      Get updates about your projects via email.
                    </p>
                  </div>
                  <button
                    onClick={() => setEmailNotifs(!emailNotifs)}
                    className={`relative h-6 w-11 rounded-full transition ${
                      emailNotifs ? 'bg-blue-600' : 'bg-slate-300'
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${
                        emailNotifs ? 'left-5' : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <p className="font-medium text-slate-900">Push Notifications</p>
                    <p className="text-sm text-slate-500">
                      Receive push alerts on your devices.
                    </p>
                  </div>
                  <button
                    onClick={() => setPushNotifs(!pushNotifs)}
                    className={`relative h-6 w-11 rounded-full transition ${
                      pushNotifs ? 'bg-blue-600' : 'bg-slate-300'
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${
                        pushNotifs ? 'left-5' : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'Security' && (
              <div className="space-y-6">
                <div>
                  <p className="font-medium text-slate-900">Two-Factor Authentication</p>
                  <p className="mb-3 text-sm text-slate-500">
                    Add an extra layer of security to your account.
                  </p>
                  <button className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                    Enable 2FA
                  </button>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <p className="font-medium text-slate-900">Active Sessions</p>
                  <p className="mb-3 text-sm text-slate-500">
                    You're currently signed in on 2 devices.
                  </p>
                  <button className="rounded-lg border border-rose-300 px-5 py-2.5 text-sm font-medium text-rose-600 hover:bg-rose-50">
                    Sign Out All Devices
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage