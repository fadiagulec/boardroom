# Module 5 — Week 5: Claude Code (Build a Real Tool) — SCRIPT
*Read NARRATION aloud. [DEMO] = real Claude on screen (Antigravity + Claude Code panel). 🟦 GAMMA OUTLINE = paste into Gamma.*

> Open with a reassurance card: "This is the most technical week — but you only ever talk in plain English. Stuck? Paste the error and ask Claude. 'Cowork is my assistant; Code is my engineer.'"

---

## V5.1 — What Claude Code is (3 min)

🟦 GAMMA OUTLINE
```
Title: Your third mode — the engineer
Slide: Chat (you decide) · Cowork (assistant) · Code (plans, acts, checks its own work)
Slide: Lives in the terminal — but you never write code
Slide: You type `claude` and talk
```

NARRATION
> You've used Chat and Cowork. Claude Code is the third mode. You give it a goal; it figures out the steps, acts on them, checks its own work, and keeps going until the task is done or it needs to ask you something.
>
> If that sounds like Cowork — it is, but think of it this way: Cowork is my assistant for everyday agentic tasks; Code is my engineer, for building real tools and more technical work. It lives in the terminal, which sounds scarier than it is. You still talk in plain English — you're not writing code or memorising commands. The terminal's just where it lives. You open it, type "claude," and you're in.

[DEMO] Open terminal, type `claude`, show the prompt.

---

## V5.2 — Install + Antigravity (6 min)

🟦 GAMMA OUTLINE
```
Title: Set it up (one time)
Slide: Working folder in CLOUD storage (iCloud/Drive/Dropbox)
Slide: Install — one terminal command (Mac curl / Windows irm)
Slide: Antigravity IDE + the "Claude Code for VS Code" extension
Slide: Open your folder → open the Claude panel
```

NARRATION
> Three steps. First, create a working folder inside cloud storage — iCloud, Drive, Dropbox, any of them — because Code works with real files, and a cloud backup means nothing's lost if your computer dies. If you've got a Cowork folder in the cloud, reuse it.
>
> Second, install Code: open your terminal and paste the one-line command for your system — there's a Mac version and a Windows version below this video. Run it, type "claude," and log in.
>
> Third, set up Antigravity. The terminal on its own is a black box — you can't see what's changing. Antigravity is an IDE that gives you a visual layer: your folders in a sidebar, files you can open, changes you can watch happen. Download it, install the official "Claude Code for VS Code" extension, open your working folder, and open the Claude panel. That's your cockpit.

[DEMO] Show cloud folder → run install in terminal → open Antigravity → install extension → open folder → open Claude panel.
Resource: `prompt-library.md` (install commands listed in the course design).

✅ Actions: cloud folder · installed · Antigravity + extension · Claude panel open.

---

## V5.3 — CLAUDE.md + permissions (4 min)

🟦 GAMMA OUTLINE
```
Title: Brief it + free it up
Slide: CLAUDE.md in your working folder (reuse Week 4's, or build a <300-word one)
Slide: /permissions — pre-approve safe commands, file reads, web fetch
Slide: It stops interrupting, but still asks before anything important
```

NARRATION
> Like Cowork, every Code session starts fresh. A CLAUDE.md file in your working folder fixes that — Claude reads it automatically before doing anything. If you built one in week four and it's in this folder, you're done; otherwise run the short builder prompt in Chat and save it here, under three hundred words.
>
> Then permissions. By default Code asks before every action, which gets tedious. Run slash-permissions and pre-approve the harmless stuff — safe commands like ls, cd, move, copy; reading files in your folder; and fetching webpages. Now it moves smoothly but still stops before anything that actually matters.

[DEMO] Show CLAUDE.md in folder → run `/permissions` → pre-approve the three categories.
Resources: `prompt-library.md` → "Week 5 — CLAUDE.md for Claude Code" and "Permissions".

✅ Actions: CLAUDE.md in folder · permissions set.

---

## V5.4 — Spec it first: the PRD (5 min)

🟦 GAMMA OUTLINE
```
Title: The highest-leverage step — the PRD
Slide: "You don't know what you don't know"
Slide: A PRD = clear specs Claude builds from (spend the most time here)
Slide: Save PRD.md + a /references folder (brand, assets, audience)
```

NARRATION
> Now pick what to build — ideally something that solves a real problem: a personal site, a client portal, a reporting dashboard, a tracker. If you're stuck, ask Claude for ten ideas that would save you time.
>
> Then — and this is the step that makes or breaks the build — write a PRD, a product requirements document. Two truths: you don't know what you don't know, and Claude needs a clear brief. A good PRD translates what you want into specs and saves you days of editing a badly built tool. Run the PRD prompt in Chat; it interviews you, then gives you a PRD.md to save in your folder. Add a references subfolder too — brand, assets, audience — anything that personalises the build.

[DEMO] Run idea prompt (optional) → run PRD interview in Chat → save PRD.md → create /references.
Resources: `prompt-library.md` → "Week 5 — Idea generation" and "Write your PRD".

✅ Action: PRD.md saved.

---

## V5.5 — Build it: Plan mode → build (7 min)

🟦 GAMMA OUTLINE
```
Title: Vibe code it
Slide: Switch to PLAN mode (Shift+Tab), start on Opus
Slide: Install Anthropic's frontend-design skill → read CLAUDE.md + PRD.md + references → write a plan
Slide: Review the plan, then "Ask before edits" and let it build
Slide: Watch the context bar → /compact at 50–60%
```

NARRATION
> Time to build. In Antigravity, switch to Plan mode — cycle modes with Shift-Tab — and start on Opus; it'll use more of your limits, but it's worth it for the build. Paste the build prompt: it installs Anthropic's frontend-design skill, reads your CLAUDE.md, PRD, and references, and writes a plan.
>
> Read that plan in full — whatever's in it, Claude will build, so get it right. Edit anything that looks off. Once you're happy, switch to "Ask before edits" and let it build. Watch the little circle at the bottom — that's your context window. When it hits fifty to sixty percent, type slash-compact manually; don't wait for the auto-compact, you'll get better results. And if Claude needs a file that's outside your folder, just drag it into the window.
>
> Your first version might be brilliant. If it's not — remember it just built in minutes what would've taken you weeks. Give specific feedback and iterate.

[DEMO] Plan mode → paste build prompt → review plan → "Ask before edits" → build → give one round of feedback → `/compact`.
Resource: `prompt-library.md` → "Week 5 — Build".

✅ Action: first tool built + one round of feedback.

---

## V5.6 — Save & publish (5 min)

🟦 GAMMA OUTLINE
```
Title: Get it off your computer
Slide: Web app → GitHub (version history) → Vercel (live URL, auto-redeploy)
Slide: Other tools → back up / share per Claude's guidance
Slide: First time ~20–30 min; updates ~30 sec
```

NARRATION
> Right now your project only lives on your computer. If you built a website or web app, let's make it real: GitHub stores your code with version history, and Vercel turns it into a live site that redeploys every time you push an update. Create free accounts on both, then paste the publish prompt — Claude walks you through git, the repo, pushing, connecting Vercel, and getting your live URL. First time takes twenty to thirty minutes; after that, updates take about thirty seconds.
>
> Built something else — a script, an automation, an internal tool? Use the backup prompt instead, and Claude will set up whatever makes sense to keep it safe and easy to update.

[DEMO] Web app: run publish prompt → push to GitHub → deploy on Vercel → open live URL.
Resources: `prompt-library.md` → "Week 5 — Save to GitHub + Vercel" / "Back up a non-web tool".

✅ Action: project backed up / published.

---

## V5.7 — You did it: re-take your AI Audit + what's next (4 min)

🟦 GAMMA OUTLINE
```
Title: You did it — you built a real tool
Slide: Re-score the same 8 areas → compare to your Day-1 baseline /40
Slide: Your weekly rhythm — keep building (one small thing a week)
Slide: Where next — more apps, automations, your own ideas
```

NARRATION
> Look at what you've done. Claude Code running in Antigravity, a working folder in the cloud, your CLAUDE.md, permissions, a PRD, and a real tool — built, iterated, and published. In plain English, with no tech background. That's the whole promise of this course, and you just lived it.
>
> Now go back to the AI Audit you took on day one and score yourself again on the same eight areas. Compare it to your baseline. That jump is real — and more importantly, you can feel the difference in how you work.
>
> From here, keep the momentum with one simple habit: build one small thing a week. A tool, an automation, a tidy-up. That's how you stay the person who builds with AI instead of being replaced by it. You're there. Congratulations.

[DEMO] Re-take the audit live → show before vs. after /40.

✅ Checklist: Code in Antigravity · cloud folder · CLAUDE.md · permissions · PRD.md · tool built & published · audit re-scored (before vs. after).
