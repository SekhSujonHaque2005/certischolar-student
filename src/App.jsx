import React, { useState } from 'react';
import { 
  GraduationCap, 
  FileCheck, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  ExternalLink,
  ChevronRight,
  UserCheck,
  Search,
  Filter,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const tabs = ["dashboard", "wizard", "vault", "passport"];

  return (
    <div className="min-h-screen bg-[#fbfbfc] text-[#16171b] flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#16171b] flex items-center justify-center text-white font-bold text-sm shadow-sm">
            CS
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-[15px] tracking-tight">CertiScholar Student Portal</span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full border border-slate-200">
                Port 3001
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">Lovely Professional University &bull; Institutional Baseline</p>
          </div>
        </div>

        {/* Role Badge and User Context */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full text-[12px]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-slate-600 font-medium">Role:</span>
            <span className="font-bold text-slate-900">Enrolled Student</span>
          </div>
          <a
            href="http://localhost:3000"
            className="flex items-center gap-1 text-[11px] font-semibold text-slate-600 hover:text-[#ff5a2b] bg-slate-100 hover:bg-slate-200/80 px-3 py-1.5 rounded-full transition-colors"
          >
            <span>&larr; Public Portal</span>
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8 space-y-6">
        {/* Hero Banner */}
        <section className="bg-gradient-to-br from-[#16171b] to-slate-900 text-white rounded-[24px] p-6 sm:p-8 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide text-white/90">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ff5a2b]" />
              <span>Institutional Scope &bull; CS-SRS-002 Compliant</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Student Scholarship Command Center
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Track applications, verify marksheet provenance, sync DigiLocker documents, and claim institutional aid.
            </p>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-[#ff5a2b]/15 to-transparent pointer-events-none" />
        </section>

        {/* Tab Navigation */}
        <nav className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-tight transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#16171b] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/70'
              }`}
            >
              {tab.replace('_', ' ').toUpperCase()}
            </button>
          ))}
        </nav>

        {/* Active Tab Content Area */}
        <section className="bg-white border border-slate-200/80 rounded-[20px] p-6 shadow-sm min-h-[420px]">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
            <div>
              <h2 className="text-base font-bold text-slate-900 capitalize">
                {activeTab.replace('_', ' ')} Workspace
              </h2>
              <p className="text-xs text-slate-500">Live role-scoped data feeds &bull; Server connected on port 3001</p>
            </div>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
              System Ready
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Section 1</span>
              <p className="text-sm font-bold text-slate-800">Operational Queue & Stats</p>
              <p className="text-xs text-slate-500">Real-time status updates scoped to your authenticated tenant token.</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Section 2</span>
              <p className="text-sm font-bold text-slate-800">Actionable Tasks</p>
              <p className="text-xs text-slate-500">Execute verified institutional workflows without cross-role leakage.</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Section 3</span>
              <p className="text-sm font-bold text-slate-800">Audit & Provenance</p>
              <p className="text-xs text-slate-500">All actions are append-only logged under your authenticated identity.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-4 px-6 text-center text-xs text-slate-500">
        CertiScholar &bull; Lovely Professional University Enterprise Multi-Portal System
      </footer>
    </div>
  );
}
