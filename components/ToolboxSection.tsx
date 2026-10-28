export default function ToolboxSection() {
  return (
    <section id="toolbox" className="py-24 bg-[#FAFAFF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5B2CCB] mb-2 block">SKILLS & TECHNOLOGIES</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111747]">
              My toolbox.
            </h2>
          </div>
          <p className="text-sm text-[#515578] max-w-sm mt-4 md:mt-0">
            A carefully curated stack reflecting hands-on professional experience in software engineering, systems, and AI.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-card border border-[#DCD3FF] hover:shadow-soft transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#F0EEFF] text-[#5B2CCB] flex items-center justify-center font-bold">
                <i className="fa-solid fa-code"></i>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-[#111747]">Languages</h3>
                <p className="text-xs text-[#515578]">Core programming languages</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Python</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">TypeScript</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">JavaScript</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">SQL</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">C / C++</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Java</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-card border border-[#DCD3FF] hover:shadow-soft transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#F0EEFF] text-[#5B2CCB] flex items-center justify-center font-bold">
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-[#111747]">Frontend</h3>
                <p className="text-xs text-[#515578]">User interfaces & web apps</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">React</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Next.js</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">HTML5 / CSS3</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Tailwind CSS</span>
                            <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Shadcn</span>

              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Bootstrap</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Expo (Mobile)</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-card border border-[#DCD3FF] hover:shadow-soft transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#F0EEFF] text-[#5B2CCB] flex items-center justify-center font-bold">
                <i className="fa-solid fa-server"></i>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-[#111747]">Backend</h3>
                <p className="text-xs text-[#515578]">APIs and server logic</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Django</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Django REST Framework</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Node.js</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Express.js</span>


              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">REST APIs</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">GraphQL</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Celery & Redis</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-card border border-[#DCD3FF] hover:shadow-soft transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#F0EEFF] text-[#5B2CCB] flex items-center justify-center font-bold">
                <i className="fa-solid fa-database"></i>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-[#111747]">Databases</h3>
                <p className="text-xs text-[#515578]">Data persistence & querying</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">MySQL</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">PostgreSQL</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">MongoDB</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Oracle Database</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-card border border-[#DCD3FF] hover:shadow-soft transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#F0EEFF] text-[#5B2CCB] flex items-center justify-center font-bold">
                <i className="fa-solid fa-network-wired"></i>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-[#111747]">Cloud & DevOps Foundations</h3>
                <p className="text-xs text-[#515578]">Cloud, DevOps & Systems Administration</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Google Cloud Platform (GCP)</span>

              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Docker</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Kubernetes</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Terraform</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Nginx</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Git & GitHub</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Linux Systems</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-card border border-[#DCD3FF] hover:shadow-soft transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#F0EEFF] text-[#5B2CCB] flex items-center justify-center font-bold">
                <i className="fa-solid fa-wand-magic-sparkles"></i>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-[#111747]">AI & Systems</h3>
                <p className="text-xs text-[#515578]">AI Fundamentals & Intelligent systems</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Data Analysis</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Machine Learning</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Computer Vision (YOLO)</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">LLMs Fundamentals</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">AI Fluency</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">AI-Assited Development</span>
            </div>
          </div>
           <div className="bg-white p-6 rounded-2xl shadow-card border border-[#DCD3FF] hover:shadow-soft transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#F0EEFF] text-[#5B2CCB] flex items-center justify-center font-bold">
                <i className="fa-solid fa-users-gear"></i>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-[#111747]">Project Management</h3>
                <p className="text-xs text-[#515578]">Agile Practices & Project Organization</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium"> Agile Methodologies</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Scrum</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Trello</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Notion</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] text-xs font-medium">Software Documentation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
