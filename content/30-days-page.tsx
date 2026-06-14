"use client";

// ============================================================================
// Creator OS — 30 Days of Claude Code page
// ----------------------------------------------------------------------------
// HOW TO USE THIS FILE:
//   1. In your `content-automation` project, create a folder: app/30-days/
//   2. Save this file inside it as:  app/30-days/page.tsx
//   3. Visit  /30-days  in your dashboard.
//
// It is fully self-contained (no extra imports, no Tailwind required) so it
// renders correctly no matter how your app is set up. Once it's in, ask Claude
// to "restyle the /30-days page to match /daily-post" and it will match exactly.
// ============================================================================

import { useEffect, useState } from "react";

type Day = {
  d: number; m: "M1" | "M2" | "M3" | "M4"; fmt: string; pur: string;
  teach: string; did: string; v: string; os: string; cap: string; cta: string;
};

const MODULES: Record<string, { name: string; color: string }> = {
  M1: { name: "Module 1 · Your first Website (Days 1–7)", color: "#5b8def" },
  M2: { name: "Module 2 · A Funnel that collects emails (Days 8–14)", color: "#7c5cff" },
  M3: { name: "Module 3 · A real App (Days 15–22)", color: "#2bb673" },
  M4: { name: "Module 4 · Ship & Grow (Days 23–30)", color: "#d97757" },
};

const DAYS: Day[] = [
  { d: 1, m: "M1", fmt: "Talking head + screen", pur: "Growth", teach: "What Claude Code is + the 30-day plan", did: "I had no idea what this was either.", v: "In 30 days you'll build a website, a funnel, and a real app.", os: "Website, funnel, app — in 30 days", cap: "Day 1 of learning Claude Code from zero.", cta: "Follow — we build together" },
  { d: 2, m: "M1", fmt: "Screen-record", pur: "Authority", teach: "What you need first: account + plan", did: "I grabbed Pro and never looked back.", v: "Before you build anything, you need these two things.", os: "Step 0: before you install", cap: "The 2 things to set up before Claude Code.", cta: "Save this checklist" },
  { d: 3, m: "M1", fmt: "Screen-record", pur: "Authority", teach: "Install Claude Code in under 2 minutes", did: "This exact command is how I started.", v: "Here's exactly how to install it in under two minutes.", os: "Install in under 2 minutes", cap: "Copy-paste install, step by step.", cta: "Save for when you install" },
  { d: 4, m: "M1", fmt: "Screen-record", pur: "Authority", teach: "Open terminal + start Claude in a folder", did: "That black screen scared me at first.", v: "Two commands and Claude is running on your computer.", os: "cd + claude = you're in", cap: "How to actually start Claude Code.", cta: "Save this" },
  { d: 5, m: "M1", fmt: "Screen-record", pur: "Authority", teach: "Describe your site in plain English", did: "The paragraph I used to build my site.", v: "Tell it your goal, not step-by-step instructions.", os: "Say the goal, not the steps", cap: "How to describe a website so it builds it.", cta: "Save this prompt tip" },
  { d: 6, m: "M1", fmt: "Screen-record demo", pur: "Authority/Shares", teach: "Build the website live by describing it", did: "My first build was my own website.", v: "Watch a full website appear from one paragraph.", os: "Your first build, no code", cap: "A real website from plain English, start to finish.", cta: "Share with someone who needs a site" },
  { d: 7, m: "M1", fmt: "Screen-record", pur: "Authority", teach: "Deploy it online for free", did: "This is how my site went live.", v: "Your site is useless until it's online — here's the fix.", os: "Laptop → live link", cap: "Step-by-step: get your website a real link.", cta: "Save for launch day" },
  { d: 8, m: "M2", fmt: "Talking head + screen", pur: "Growth", teach: "What a funnel is + why build one", did: "My funnel grows my list while I sleep.", v: "A funnel is just a page that turns visitors into leads.", os: "Build a page that collects emails", cap: "Day 8: we build a funnel that grows a list.", cta: "Follow for the build" },
  { d: 9, m: "M2", fmt: "Screen-record", pur: "Authority", teach: "/init and CLAUDE.md — teach Claude your project", did: "I run /init on every project.", v: "Run this one command so Claude understands your project.", os: "The /init command", cap: "The setup step that makes everything easier.", cta: "Save before your next build" },
  { d: 10, m: "M2", fmt: "Screen-record", pur: "Authority", teach: "Plan Mode — plan the page before building", did: "I plan every page before it's built.", v: "Make Claude show its plan before it changes anything.", os: "Plan before it builds", cap: "See the landing page plan before it's built.", cta: "Save this" },
  { d: 11, m: "M2", fmt: "Screen-record", pur: "Authority/Comments", teach: "Build + connect the opt-in form", did: "This is the exact form on my funnel.", v: "Let's add an email form and make it actually capture.", os: "Add a working opt-in form", cap: "How to collect real emails from your page.", cta: "Comment 'funnel' for the steps" },
  { d: 12, m: "M2", fmt: "Screen-record", pur: "Authority", teach: "Review the diff before accepting", did: "I always read the diff first.", v: "Watch how it edits files and how to check it.", os: "Always check the diff", cap: "What 'accept' means before you click it.", cta: "Save this" },
  { d: 13, m: "M2", fmt: "Screen-record", pur: "Authority", teach: "Preview + fix it in plain words", did: "I tweak pages just by describing.", v: "Preview your page and fix it in plain words.", os: "See it, then fix it by talking", cap: "No design skills? Just describe the change.", cta: "Save this" },
  { d: 14, m: "M2", fmt: "Screen-record", pur: "Authority", teach: "Fix errors (paste the error back)", did: "Every project had errors I fixed this way.", v: "Hit an error? Just paste it back. Here's how.", os: "Errors = copy, paste, fixed", cap: "The 3-second fix for scary error messages.", cta: "Save for your first error" },
  { d: 15, m: "M3", fmt: "Talking head + screen", pur: "Growth/Comments", teach: "Pick an app idea from everyday life", did: "My calorie app solved my own problem.", v: "The best first app solves a problem in your own day.", os: "Turn a daily problem into an app", cap: "Day 15: we build a real app from scratch.", cta: "Comment your app idea" },
  { d: 16, m: "M3", fmt: "Screen-record", pur: "Authority", teach: "Define the MVP (smallest useful version)", did: "I cut mine to one core feature.", v: "Don't build everything — build the smallest useful version.", os: "Build small first", cap: "The mistake that kills most first apps.", cta: "Save this" },
  { d: 17, m: "M3", fmt: "Screen-record", pur: "Authority", teach: "Build the first real feature", did: "How I built my tracker's core.", v: "Add your app's main feature without breaking things.", os: "One feature at a time", cap: "The safe way to grow an app, step by step.", cta: "Save this" },
  { d: 18, m: "M3", fmt: "Screen-record", pur: "Authority/Shares", teach: "Design it with a screenshot", did: "I copied a health app's look.", v: "Paste a screenshot and watch it match the design.", os: "Screenshot → real design", cap: "The design trick that needs zero skill.", cta: "Save this hack" },
  { d: 19, m: "M3", fmt: "Screen-record", pur: "Authority", teach: "Make it responsive (works on phones)", did: "Every app I build is mobile-first.", v: "One request makes your app work on phones.", os: "Make it work on phones", cap: "Don't skip this — most users are on mobile.", cta: "Save this" },
  { d: 20, m: "M3", fmt: "Screen-record", pur: "Authority", teach: "Save work with git (save points)", did: "This is how I never lose work.", v: "Never lose your work — without learning git.", os: "Save points for your project", cap: "How to 'save' so you can always undo.", cta: "Save this" },
  { d: 21, m: "M3", fmt: "Screen-record", pur: "Authority", teach: "Add tests so it proves it works", did: "I added tests to my app this way.", v: "Ask it to prove your app works — automatically.", os: "Make it test itself", cap: "Stop new changes from breaking old ones.", cta: "Save this" },
  { d: 22, m: "M3", fmt: "Screen-record", pur: "Authority", teach: "Slash commands that speed you up", did: "I use these every single day.", v: "Type a slash and unlock shortcuts you'll use daily.", os: "Type / for shortcuts", cap: "The built-in commands worth knowing early.", cta: "Save this list" },
  { d: 23, m: "M4", fmt: "Screen-record demo", pur: "Authority", teach: "Deploy your app online for free", did: "This is how all my apps go live.", v: "Let's put your app on the internet for free.", os: "Laptop → live link", cap: "Step-by-step deploy so anyone can use your app.", cta: "Save for launch day" },
  { d: 24, m: "M4", fmt: "Screen-record", pur: "Authority", teach: "Get your own link (custom domain)", did: "My projects each have a clean link.", v: "Get your own link instead of a long ugly one.", os: "Get your own web address", cap: "Turn that random URL into yourname.com.", cta: "Save this" },
  { d: 25, m: "M4", fmt: "Screen-record", pur: "Authority", teach: "Debug a real bug start to finish", did: "A real user found a bug in my app.", v: "A real user hit a bug — here's how I fixed it fast.", os: "Fixing a real bug live", cap: "Watch the full debug, start to fix.", cta: "Save this approach" },
  { d: 26, m: "M4", fmt: "Screen-record", pur: "Authority", teach: "Write README/docs in one prompt", did: "Claude wrote docs for all my projects.", v: "Generate your project's docs in 30 seconds.", os: "Docs in 30 seconds", cap: "The boring step, done in one prompt.", cta: "Save this" },
  { d: 27, m: "M4", fmt: "Screen-record", pur: "Authority", teach: "Custom slash commands (reusable prompts)", did: "I made commands for my content.", v: "Turn repeated prompts into one-word commands.", os: "Make your own shortcuts", cap: "Save the prompts you use over and over.", cta: "Save this" },
  { d: 28, m: "M4", fmt: "Talking head + screen", pur: "Conversion", teach: "Turn a build into something you sell", did: "How a small app becomes income.", v: "Here's how a free build becomes something you sell.", os: "From build to income", cap: "The steps from a project to a product.", cta: "Comment 'sell' for the breakdown" },
  { d: 29, m: "M4", fmt: "Screen-record demo", pur: "Authority/Growth", teach: "Build a small project start to finish (recap)", did: "The exact process behind everything I built.", v: "Let's build one project from zero using everything so far.", os: "Zero to shipped, full run", cap: "Website, funnel, app — the whole method in one build.", cta: "Save the whole series" },
  { d: 30, m: "M4", fmt: "Talking head + screen", pur: "Growth/Conversion", teach: "Your roadmap — what to build next", did: "What I'm building next, too.", v: "You can build websites, funnels and apps now — here's what's next.", os: "Your next 30 days", cap: "Finished the series? Here's your roadmap.", cta: "Comment 'NEXT' for the guide" },
];

const STORAGE_KEY = "cc30_done_v1";

export default function ThirtyDaysPage() {
  const [done, setDone] = useState<Record<number, boolean>>({});
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setDone(JSON.parse(raw));
    } catch {}
  }, []);

  function toggle(day: number) {
    setDone((prev) => {
      const next = { ...prev };
      if (next[day]) delete next[day];
      else next[day] = true;
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }

  const filmed = Object.keys(done).length;
  const pct = Math.round((filmed / DAYS.length) * 100);
  const filters = [
    { f: "all", label: "All 30" },
    { f: "M1", label: "① Website" },
    { f: "M2", label: "② Funnel" },
    { f: "M3", label: "③ App" },
    { f: "M4", label: "④ Ship & Grow" },
    { f: "todo", label: "Not filmed yet" },
  ];

  return (
    <div className="cc30">
      <style>{CSS}</style>

      <header className="cc30-header">
        <div className="cc30-kicker">Build-Along Series · Instagram Reels</div>
        <h1>30 Days of Claude Code</h1>
        <p className="cc30-sub">
          Teach Claude Code step by step while you build a <b>website</b>, a <b>funnel</b>, and a
          real <b>app</b>. The lesson is the focus — your story is the hook. One reel a day.
        </p>
        <div className="cc30-progress">
          <div className="cc30-progress-top">
            <span>{filmed} of 30 filmed</span>
            <span>{pct}%</span>
          </div>
          <div className="cc30-bar"><i style={{ width: pct + "%" }} /></div>
        </div>
      </header>

      <div className="cc30-filters">
        {filters.map((b) => (
          <button
            key={b.f}
            className="cc30-chip"
            aria-pressed={filter === b.f}
            onClick={() => setFilter(b.f)}
          >
            {b.label}
          </button>
        ))}
      </div>

      <main className="cc30-main">
        {(Object.keys(MODULES) as (keyof typeof MODULES)[]).map((mk) => {
          let list = DAYS.filter((x) => x.m === mk);
          if (filter !== "all" && filter !== "todo" && filter !== mk) return null;
          if (filter === "todo") list = list.filter((x) => !done[x.d]);
          if (!list.length) return null;
          return (
            <section key={mk} className="cc30-module">
              <h2>
                <span className="cc30-dot" style={{ background: MODULES[mk].color }} />
                {MODULES[mk].name}
              </h2>
              <div className="cc30-grid">
                {list.map((x) => (
                  <article
                    key={x.d}
                    className={"cc30-card" + (done[x.d] ? " done" : "")}
                    style={{ borderLeftColor: MODULES[x.m].color }}
                  >
                    <div className="cc30-card-head">
                      <span className="cc30-day">DAY {x.d}</span>
                      <div className="cc30-badges">
                        <span className="cc30-badge">{x.fmt}</span>
                        <span className="cc30-badge purpose">{x.pur}</span>
                      </div>
                    </div>
                    <div className="cc30-teach">{x.teach}</div>
                    <div className="cc30-didi">What I did: {x.did}</div>
                    <div className="cc30-hooks">
                      <div className="cc30-hook"><div className="lab">Verbal hook</div><div className="txt">{x.v}</div></div>
                      <div className="cc30-hook"><div className="lab">On-screen text</div><div className="txt">{x.os}</div></div>
                      <div className="cc30-hook"><div className="lab">Caption hook</div><div className="txt">{x.cap}</div></div>
                    </div>
                    <div className="cc30-cta">CTA: <b>{x.cta}</b></div>
                    <label className="cc30-check">
                      <input type="checkbox" checked={!!done[x.d]} onChange={() => toggle(x.d)} />
                      Mark as filmed
                    </label>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}

const CSS = `
.cc30 { --bg:#0f1115; --card:#181b22; --card-2:#1f232c; --ink:#f3f5f9; --muted:#9aa4b2; --line:#2a2f3a; --accent:#d97757;
  background:var(--bg); color:var(--ink); min-height:100vh;
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; line-height:1.45; }
.cc30 * { box-sizing:border-box; }
.cc30-header { padding:40px 24px 24px; max-width:1180px; margin:0 auto; }
.cc30-kicker { color:var(--accent); font-weight:700; letter-spacing:.12em; text-transform:uppercase; font-size:12px; }
.cc30-header h1 { margin:8px 0 6px; font-size:30px; }
.cc30-sub { color:var(--muted); max-width:720px; }
.cc30-progress { margin-top:22px; background:var(--card); border:1px solid var(--line); border-radius:14px; padding:16px 18px; }
.cc30-progress-top { display:flex; justify-content:space-between; align-items:center; font-size:14px; color:var(--muted); }
.cc30-bar { height:10px; border-radius:999px; background:var(--card-2); margin-top:10px; overflow:hidden; }
.cc30-bar > i { display:block; height:100%; background:linear-gradient(90deg,var(--accent),#f0a98e); transition:width .3s ease; }
.cc30-filters { max-width:1180px; margin:0 auto; padding:0 24px 8px; display:flex; gap:8px; flex-wrap:wrap; }
.cc30-chip { border:1px solid var(--line); background:var(--card); color:var(--muted); padding:7px 13px; border-radius:999px; font-size:13px; cursor:pointer; }
.cc30-chip[aria-pressed="true"] { color:var(--ink); border-color:var(--accent); background:#241c19; }
.cc30-main { max-width:1180px; margin:0 auto; padding:8px 24px 80px; }
.cc30-module { margin-top:30px; }
.cc30-module h2 { font-size:16px; display:flex; align-items:center; gap:10px; margin:0 0 14px; }
.cc30-dot { width:11px; height:11px; border-radius:3px; display:inline-block; }
.cc30-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(330px,1fr)); gap:14px; }
.cc30-card { background:var(--card); border:1px solid var(--line); border-left-width:4px; border-radius:14px; padding:15px 16px; transition:transform .12s ease; }
.cc30-card:hover { transform:translateY(-2px); }
.cc30-card.done { opacity:.55; }
.cc30-card-head { display:flex; align-items:center; justify-content:space-between; gap:10px; }
.cc30-day { font-size:12px; color:var(--muted); font-weight:700; letter-spacing:.04em; }
.cc30-badges { display:flex; gap:6px; flex-wrap:wrap; }
.cc30-badge { font-size:11px; padding:3px 8px; border-radius:999px; border:1px solid var(--line); color:var(--muted); white-space:nowrap; }
.cc30-badge.purpose { color:var(--ink); }
.cc30-teach { font-size:15.5px; font-weight:650; margin:9px 0 4px; }
.cc30-didi { font-size:12.5px; color:var(--muted); font-style:italic; margin-bottom:12px; }
.cc30-hooks { display:grid; gap:8px; }
.cc30-hook { background:var(--card-2); border-radius:9px; padding:8px 10px; }
.cc30-hook .lab { font-size:10px; text-transform:uppercase; letter-spacing:.1em; color:var(--accent); font-weight:700; }
.cc30-hook .txt { font-size:13.5px; }
.cc30-cta { margin-top:12px; font-size:13px; }
.cc30-cta b { color:var(--accent); }
.cc30-check { display:flex; align-items:center; gap:8px; margin-top:13px; font-size:13px; color:var(--muted); cursor:pointer; user-select:none; }
.cc30-check input { width:17px; height:17px; accent-color:var(--accent); cursor:pointer; }
@media (max-width:560px){ .cc30-header h1{font-size:24px;} }
`;
