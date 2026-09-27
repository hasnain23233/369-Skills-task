import { useState } from "react";
import { ChevronDown, ExternalLink, CheckCircle2, Clock } from "lucide-react";

const projects = [
  {
    name: "Website Redesign",
    client: "ABC Company",
    status: "Completed",
    progress: 100,
    updated: "2 days ago",
  },
  {
    name: "CRM Dashboard",
    client: "XYZ Solutions",
    status: "In Progress",
    progress: 62,
    updated: "5 hours ago",
  },
  {
    name: "E-commerce Website",
    client: "Demo Store",
    status: "Completed",
    progress: 100,
    updated: "1 week ago",
  },
  {
    name: "Mobile Banking App",
    client: "FinTrust Bank",
    status: "In Progress",
    progress: 34,
    updated: "1 hour ago",
  },
  {
    name: "Inventory Management System",
    client: "Retail Hub",
    status: "In Progress",
    progress: 78,
    updated: "3 hours ago",
  },
  {
    name: "Brand Identity Package",
    client: "Northwind Co.",
    status: "Completed",
    progress: 100,
    updated: "2 weeks ago",
  },
  {
    name: "Learning Management Portal",
    client: "EduSphere",
    status: "In Progress",
    progress: 19,
    updated: "yesterday",
  },
  {
    name: "Restaurant Booking App",
    client: "TableTime",
    status: "Completed",
    progress: 100,
    updated: "3 weeks ago",
  },
];

const statusStyles = {
  Completed: "bg-green-100 text-green-700",
  "In Progress": "bg-yellow-100 text-yellow-700",
};

const RecentProjects = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="rounded-xl border bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="border-b px-5 py-4">
        <h3 className="font-semibold text-slate-800">Recent Projects</h3>
      </div>

      <div className="divide-y">
        {projects.map((project, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={project.name}
              style={{ animation: `fadeSlideIn 0.4s ease-out ${i * 80}ms both` }}
              className="group"
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full flex-col gap-2 px-5 py-4 text-left transition-colors duration-200 hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-3">
                  <ChevronDown
                    size={16}
                    className={`shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                  <div>
                    <h4 className="font-medium text-slate-800 transition-colors duration-200 group-hover:text-blue-600">
                      {project.name}
                    </h4>
                    <p className="text-sm text-slate-500">{project.client}</p>
                  </div>
                </div>

                <span
                  className={`flex w-fit items-center gap-1 rounded-full px-3 py-1 text-xs font-medium transition-transform duration-200 group-hover:scale-105 ${
                    statusStyles[project.status]
                  }`}
                >
                  {project.status === "Completed" ? (
                    <CheckCircle2 size={12} />
                  ) : (
                    <Clock size={12} className="animate-pulse" />
                  )}
                  {project.status}
                </span>
              </button>

              {/* Expandable details */}
              <div
                className="grid overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="min-h-0">
                  <div className="space-y-3 px-5 pb-5 pl-10">
                    <div>
                      <div className="mb-1 flex justify-between text-xs text-slate-500">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-1.5 rounded-full transition-all duration-700 ease-out ${
                            project.status === "Completed"
                              ? "bg-green-500"
                              : "bg-yellow-500"
                          }`}
                          style={{ width: isOpen ? `${project.progress}%` : "0%" }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>Updated {project.updated}</span>
                      <button className="flex items-center gap-1 font-medium text-blue-600 transition-colors hover:text-blue-700">
                        View project <ExternalLink size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );        
};

export default RecentProjects;