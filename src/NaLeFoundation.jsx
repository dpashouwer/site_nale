import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Shirt } from "lucide-react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function NaLeLogo({ className = "w-12 h-12" }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="NaLe Foundation Logo"
    >
      <circle cx="60" cy="60" r="58" fill="#0f172a" />
      <path
        d="M48 34l12-8 12 8 10 8-8 10v26a6 6 0 0 1-6 6H52a6 6 0 0 1-6-6V52l-8-10 10-8z"
        fill="#fbbf24"
        opacity="0.95"
      />
      <rect x="28" y="66" width="8" height="18" rx="1.5" fill="#38bdf8" />
      <rect x="40" y="60" width="8" height="24" rx="1.5" fill="#38bdf8" />
      <rect x="52" y="54" width="8" height="30" rx="1.5" fill="#38bdf8" />
      <rect x="64" y="50" width="8" height="34" rx="1.5" fill="#38bdf8" />
      <rect x="76" y="56" width="8" height="28" rx="1.5" fill="#38bdf8" />
    </svg>
  );
}

const bySchool = [
  { school: "Thabakgone", uniforms: 120 },
  { school: "Mahlanhle", uniforms: 95 },
  { school: "Mamabolo", uniforms: 130 },
];

const monthly = [
  { month: "Jul", donations: 12 },
  { month: "Aug", donations: 18 },
  { month: "Sep", donations: 26 },
  { month: "Oct", donations: 20 },
  { month: "Nov", donations: 34 },
  { month: "Dec", donations: 42 },
];

const allocation = [
  { name: "Uniform Sets", value: 70 },
  { name: "Shoes", value: 20 },
  { name: "Ops & Visits", value: 10 },
];

const PIE_COLORS = ["#38bdf8", "#fbbf24", "#34d399"];

export default function NaLeFoundation() {
  return (
    <div className="min-h-screen bg-rose-50 text-slate-900">
      <nav className="sticky top-0 z-40 bg-white/80 text-slate-900 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <NaLeLogo className="w-9 h-9" />
            <span className="font-semibold tracking-wide">NaLe Foundation</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm">
            <a href="#impact" className="hover:text-white">Impact</a>
            <a href="#mission" className="hover:text-white">Mission</a>
            <a href="#uniforms" className="hover:text-white">Uniforms</a>
            <a href="#team" className="hover:text-white">Team</a>
            <a href="#sponsors" className="hover:text-white">Sponsors</a>
            <a href="#donate" className="hover:text-white">Donate</a>
          </div>
          <Button className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-4 py-2 text-sm">
            Donate
          </Button>
          <Button className="bg-slate-900 hover:bg-slate-950 text-white rounded-full px-4 py-2 text-sm">
            Apply for a Student
          </Button>
        </div>
      </nav>

      <header className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
            >
              Empowering children, one uniform at a time.
            </motion.h1>
            <p className="mt-4 text-slate-600">
              A data-driven charity in <strong>South Africa</strong> providing school uniforms to learners at <strong>Thabakgone</strong>, <strong>Mahlanhle</strong>, and <strong>Mamabolo</strong> Schools. Teachers identify children in need; our Operations visits confirm and fulfill.
            </p>
            <div className="mt-6 flex gap-3">
              <Button className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-6 py-3">
                Donate Once
              </Button>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-6 py-3">
                Recurring Sponsor
              </Button>
              <Button className="bg-slate-900 hover:bg-slate-950 text-white rounded-full px-6 py-3">
                Apply for a Student
              </Button>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              100% of donations fund uniforms; operations are supported by partner grants.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="shadow-sm">
              <CardContent className="p-5">
                <p className="text-xs uppercase text-slate-500">Uniforms Delivered (YTD)</p>
                <p className="text-3xl font-semibold">345</p>
                <p className="text-xs text-emerald-600 mt-1">+18% vs last year</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-5">
                <p className="text-xs uppercase text-slate-500">Active Monthly Sponsors</p>
                <p className="text-3xl font-semibold">76</p>
                <p className="text-xs text-emerald-600 mt-1">+12 this quarter</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-5">
                <p className="text-xs uppercase text-slate-500">Avg. Cost / Uniform</p>
                <p className="text-3xl font-semibold">R275.00</p>
                <p className="text-xs text-slate-500 mt-1">Includes shirt, trousers/skirt</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-5">
                <p className="text-xs uppercase text-slate-500">Schools Supported</p>
                <p className="text-3xl font-semibold">3</p>
                <p className="text-xs text-slate-500 mt-1">Thabakgone • Mahlanhle • Mamabolo</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </header>

      <section id="uniforms" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">School Uniform Sets</h2>
        <p className="text-slate-600 max-w-3xl">
          Each NaLe uniform set is thoughtfully put together so learners can arrive at school
          with confidence and comfort. Your donation covers a full, formal school outfit that
          matches the requirements of Thabakgone, Mahlanhle, and Mamabolo schools.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="shadow-sm">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-sm font-semibold">
                U
              </div>
                <h3 className="text-lg font-semibold">Full Uniform Set</h3>
              </div>
              <p className="text-sm text-slate-600 flex-1">
                Includes formal shirt, trousers or skirt, and jersey. Designed for everyday
                classroom wear and school assemblies.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-900">From R275 per learner</p>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-sm font-semibold">
                  G
                </div>
                <h3 className="text-lg font-semibold">Girls&apos; Formal Uniform</h3>
              </div>
              <p className="text-sm text-slate-600 flex-1">
                Skirt or tunic, shirt, jersey, and socks in school colours, with optional tie
                where required by the school.
              </p>
              <p className="mt-4 text-sm text-slate-500">
                Tailored for comfort and movement during a full school day.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-semibold">
                  Shoes
                </div>
                <h3 className="text-lg font-semibold">Formal School Shoes</h3>
              </div>
              <p className="text-sm text-slate-600 flex-1">
                Classic black lace-up or buckle school shoes, durable soles, and easy to polish
                for a neat, formal look.
              </p>
              <p className="mt-4 text-sm text-slate-500">
                Laces or straps are chosen to match the learner&apos;s age and comfort.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="impact" className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h2 className="text-2xl font-semibold">Impact Dashboard</h2>
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              Live snapshot of NaLe&apos;s support
            </span>
          </div>

          <p className="text-slate-600 max-w-3xl">
            Every rand you give becomes a visible change in a learner&apos;s life. This dashboard
            highlights how your support translates into real impact across Thabakgone,
            Mahlanhle, and Mamabolo schools.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">Learners Reached</p>
                <p className="text-3xl font-bold text-slate-900">324</p>
                <p className="mt-2 text-sm text-slate-600">
                  Children who now have complete, dignified school uniforms through NaLe.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="p-6">
                <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">Uniform Sets Provided</p>
                <p className="text-3xl font-bold text-slate-900">487</p>
                <p className="mt-2 text-sm text-slate-600">
                  Full uniform sets including shirts, bottoms, jerseys, socks, and school shoes.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="p-6">
                <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">Schools Partnered</p>
                <p className="text-3xl font-bold text-slate-900">3</p>
                <p className="mt-2 text-sm text-slate-600">
                  Thabakgone, Mahlanhle, and Mamabolo schools working with us to identify learners.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="p-6">
                <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">New Learners This Year</p>
                <p className="text-3xl font-bold text-slate-900">96</p>
                <p className="mt-2 text-sm text-slate-600">
                  Learners who received uniforms for the first time this school year.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Added Metrics Graphs */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-12">
            {/* Bar Chart: Uniforms by School */}
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Uniforms Distributed by School</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={bySchool}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="school" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="uniforms" fill="#38bdf8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Line Chart: Monthly Donations */}
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Monthly Donations</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={monthly}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="donations" stroke="#fbbf24" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Pie Chart: Allocation Breakdown */}
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Allocation Breakdown</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie data={allocation} dataKey="value" nameKey="name" outerRadius={90} label>
                      {allocation.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

            <section id="team" className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-1">Matemane Enea Kgopa</h3>
              <p className="text-rose-600 mb-2">Operations Manager</p>
              <p className="text-sm text-slate-600">Leads home visits, verifies needs, and ensures every uniform reaches the right child.</p>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-1">Mathiba Kgopa</h3>
              <p className="text-rose-600 mb-2">Marketing Manager</p>
              <p className="text-sm text-slate-600">Oversees donor relations, outreach campaigns, and community partnerships.</p>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-1">Dustin Pashouwer</h3>
              <p className="text-rose-600 mb-2">Data Analytics Manager</p>
              <p className="text-sm text-slate-600">Builds dashboards, analyzes program impact, and ensures transparency in reporting.</p>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-1">David Kgopa</h3>
              <p className="text-rose-600 mb-2">Distribution Manager</p>
              <p className="text-sm text-slate-600">Coordinates purchasing, storage, and delivery so every uniform arrives on time and in full.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="sponsors" className="bg-rose-50/70 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">Our Sponsors</h2>
          <p className="max-w-3xl mx-auto text-slate-600">
            We are deeply grateful to our sponsors who make our work possible. Every contribution, whether big or small, ensures that children in South African communities attend school with dignity and confidence. Our sponsors include individuals, families, and businesses committed to changing lives through education and opportunity.
          </p>
          <p className="mt-4 text-slate-600">
            Corporate partners and local organizations in Limpopo have also stepped in to donate uniforms, shoes, and school supplies. Together, we are building a stronger, more hopeful future—one child at a time.
          </p>
        </div>
      </section>

      <section id="donate" className="bg-gradient-to-r from-rose-500 via-orange-400 to-amber-400 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-semibold mb-3">Support the Mission</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Choose to make a one-time donation or become a recurring sponsor. Your support directly funds school uniforms for learners in South African communities.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-6 py-3">
              Donate Once
            </Button>
            <Button className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-6 py-3">
              Recurring Sponsor
            </Button>
          </div>
          <p className="mt-4 text-xs text-white/70">Secure payments • Cancel anytime • Amounts in South African Rand (ZAR)</p>
        </div>
      </section>

      <footer className="bg-slate-900 text-white/80 text-center py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <NaLeLogo className="w-7 h-7" />
            <span className="text-sm">NaLe Foundation</span>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} NaLe Foundation • South African communities</p>
        </div>
      </footer>
    </div>
  );
}
