import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Replace with real data from your context/API
const initialUsers = [
  { id: 1, name: 'Ayesha Khan', email: 'ayesha@example.com', role: 'Admin', status: 'Active', joined: 'Jan 12, 2026' },
  { id: 2, name: 'Bilal Ahmed', email: 'bilal@example.com', role: 'Editor', status: 'Active', joined: 'Feb 03, 2026' },
  { id: 3, name: 'Sara Malik', email: 'sara@example.com', role: 'Viewer', status: 'Invited', joined: 'Aug 20, 2026' },
  { id: 4, name: 'Usman Tariq', email: 'usman@example.com', role: 'Editor', status: 'Suspended', joined: 'Mar 28, 2026' },
  { id: 5, name: 'Hina Raza', email: 'hina@example.com', role: 'Viewer', status: 'Active', joined: 'Jun 09, 2026' },
]

const statusStyles = {
  Active: 'bg-emerald-50 text-emerald-600 ring-emerald-200',
  Invited: 'bg-amber-50 text-amber-600 ring-amber-200',
  Suspended: 'bg-rose-50 text-rose-600 ring-rose-200',
}

const initials = (name) =>
  name.split(' ').map((n) => n[0]).slice(0, 2).join('').toUpperCase()

const UsersPage = () => {
  const navigate = useNavigate()
  const [users] = useState(initialUsers)
  const [query, setQuery] = useState('')

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Users</h1>
            <p className="mt-1 text-sm text-slate-500">
              Manage who has access to your dashboard.
            </p>
          </div>

          <button
            onClick={() => navigate('/users/new')}
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            + Invite User
          </button>
        </div>

        {/* Stats row */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-5 shadow-lg">
            <p className="text-sm text-slate-500">Total Users</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">{users.length}</p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-lg">
            <p className="text-sm text-slate-500">Active</p>
            <p className="mt-1 text-2xl font-bold text-emerald-600">
              {users.filter((u) => u.status === 'Active').length}
            </p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-lg">
            <p className="text-sm text-slate-500">Pending Invites</p>
            <p className="mt-1 text-2xl font-bold text-amber-600">
              {users.filter((u) => u.status === 'Invited').length}
            </p>
          </div>
        </div>

        {/* Table card */}
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <div className="mb-5">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search users by name or email..."
              className="w-full max-w-sm rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-slate-500">
                  <th className="pb-3 font-medium">Name</th>
                  <th className="pb-3 font-medium">Role</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Joined</th>
                  <th className="pb-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((user) => (
                  <tr key={user.id} className="border-b border-slate-50 last:border-0">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-600">
                          {initials(user.name)}
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">{user.name}</p>
                          <p className="text-xs text-slate-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-slate-700">{user.role}</td>
                    <td className="py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${statusStyles[user.status]}`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 text-slate-500">{user.joined}</td>
                    <td className="py-4 text-right">
                      <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                        Manage
                      </button>
                    </td>
                  </tr>
                ))}

                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-slate-500">
                      No users match your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsersPage