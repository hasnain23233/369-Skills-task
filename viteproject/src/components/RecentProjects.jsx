const projects = [
  {
    name: "Website Redesign",
    client: "ABC Company",
    status: "Completed",
  },
  {
    name: "CRM Dashboard",
    client: "XYZ Solutions",
    status: "In Progress",
  },
  {
    name: "E-commerce Website",
    client: "Demo Store",
    status: "Completed",
  },
];

const RecentProjects = () => {
  return (
    <div className="rounded-xl border bg-white shadow-sm">
      <div className="border-b px-5 py-4">
        <h3 className="font-semibold text-slate-800">
          Recent Projects
        </h3>
      </div>

      <div className="divide-y">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h4 className="font-medium text-slate-800">
                {project.name}
              </h4>

              <p className="text-sm text-slate-500">
                {project.client}
              </p>
            </div>

            <span
              className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${
                project.status === "Completed"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {project.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;