import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Replace with real data from your context/API
const initialProjects = [
  {
    id: 1,
    name: 'NextAdmin Dashboard',
    description: 'Internal admin panel for managing users, orders and analytics.',
    status: 'In Progress',
    progress: 68,
    dueDate: 'Oct 15, 2026',
    members: 4,
  },
  {
    id: 2,
    name: 'Marketing Website',
    description: 'Public-facing landing pages and blog for product marketing.',
    status: 'Completed',
    progress: 100,
    dueDate: 'Sep 02, 2026',
    members: 3,
  },
  {
    id: 3,
    name: 'Mobile App Revamp',
    description: 'Redesign of the mobile app onboarding and checkout flow.',
    status: 'Planning',
    progress: 12,
    dueDate: 'Nov 30, 2026',
    members: 5,
  },
  {
    id: 4,
    name: 'API Migration',
    description: 'Migrate legacy REST endpoints to the new GraphQL gateway.',
    status: 'In Progress',
    progress: 40,
    dueDate: 'Oct 28, 2026',
    members: 2,
  },
]

const statusStyles = {
  Completed: 'bg-emerald-50 text-emerald-600 ring-emerald-200',
  'In Progress': 'bg-blue-50 text-blue-600 ring-blue-200',
  Planning: 'bg-amber-50 text-amber-600 ring-amber-200',
}

const ProjectsPage = () => {
  const navigate = useNavigate()
  const [projects] = useState(initialProjects)

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Projects</h1>
            <p className="mt-1 text-sm text-slate-500">
              Manage and track all of your team's projects.
            </p>
          </div>

          <button
            onClick={() => navigate('/projects/new')}
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            + New Project
          </button>
        </div>

        {/* Stats row */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-5 shadow-lg">
            <p className="text-sm text-slate-500">Total Projects</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">{projects.length}</p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-lg">
            <p className="text-sm text-slate-500">In Progress</p>
            <p className="mt-1 text-2xl font-bold text-blue-600">
              {projects.filter((p) => p.status === 'In Progress').length}
            </p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-lg">
            <p className="text-sm text-slate-500">Completed</p>
            <p className="mt-1 text-2xl font-bold text-emerald-600">
              {projects.filter((p) => p.status === 'Completed').length}
            </p>
          </div>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-xl bg-white p-6 shadow-lg transition hover:shadow-xl"
            >
              <div className="mb-3 flex items-start justify-between">
                <h2 className="text-lg font-bold text-slate-900">{project.name}</h2>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${statusStyles[project.status]}`}
                >
                  {project.status}
                </span>
              </div>

              <p className="mb-5 text-sm text-slate-500">{project.description}</p>

              <div className="mb-4">
                <div className="mb-1 flex justify-between text-xs text-slate-500">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-200">
                  <div
                    className="h-2 rounded-full bg-blue-600"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 text-sm text-slate-500">
                <span>Due {project.dueDate}</span>
                <span>{project.members} members</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage