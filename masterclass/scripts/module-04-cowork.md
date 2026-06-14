# Module 4 — Week 4: Cowork (Hand Over the Work) — SCRIPT
*Read NARRATION aloud. [DEMO] = real Claude on screen (desktop app → Cowork). 🟦 GAMMA OUTLINE = paste into Gamma.*

> Flagship build this week: a **scheduled daily brief** that runs itself.

---

## V4.1 — Chat vs. Cowork = agency (4 min)

🟦 GAMMA OUTLINE
```
Title: The real difference is AGENCY
Slide: Chat — you manage every step (prompt → review → decide → prompt)
Slide: Cowork — you hand over a goal; it plans, executes, returns done
Slide: Cowork = complex, multi-step jobs you walk away from
Example: "Triage my inbox, draft replies, and build a Notion deal tracker"
```

NARRATION
> You've mastered Chat — you type, it responds, you decide what's next. This week is Cowork, and the difference comes down to one word: agency.
>
> In Chat, you're the connective tissue — you prompt, review, decide, prompt again. In Cowork, you hand over a *goal*. Claude builds a plan, works through each step, makes decisions along the way, and comes back when it's done. You're not in the loop — you come back to a finished output. Something like "go through my emails, triage by urgency, draft the replies that need it, and build a Notion dashboard of the deals you found" — that's a Cowork job. Chat could help with each step; Cowork does all of them while you focus on something else.

[DEMO] Open the desktop app → show where Cowork lives.

---

## V4.2 — Set up the workspace + guardrails (4 min)

🟦 GAMMA OUTLINE
```
Title: Cowork lives on YOUR computer — setup matters
Slide: Create a "Cowork" folder + an "Inbox" subfolder
Slide: Settings → Cowork → Global Instructions (paste the template)
Slide: Guardrails — never delete/send without asking; save outputs as files
```

NARRATION
> Chat lives in the cloud. Cowork lives on your computer — it reads and writes real files, which is what makes it powerful, and also why setup matters more here.
>
> First, create a folder called Cowork — in Documents or your cloud storage — and inside it a subfolder called Inbox, where outputs land. Then the step that makes Cowork actually safe: go to Settings, Cowork, Global Instructions, and paste the template below this video. It gives Claude a startup routine, safety rules — never permanently delete, never send anything irreversible without confirmation — and a consistent way to name and save outputs. Without this, Cowork has no guardrails. With it, it's a careful operator.

[DEMO] Create folder + Inbox → Settings → Cowork → paste Global Instructions → save.
Resource: `prompt-library.md` → "Week 4 — Cowork Global Instructions".

✅ Actions: folder + Inbox · global instructions saved.

---

## V4.3 — Give Cowork a brain: CLAUDE.md + MEMORY.md (6 min)

🟦 GAMMA OUTLINE
```
Title: Cowork starts cold every session
Slide: It can't read your Projects — give it a file instead
Slide: CLAUDE.md = who you are + how you work (<400 words)
Slide: MEMORY.md = durable learnings across sessions
```

NARRATION
> Important: Cowork can't read the Projects you built in week two. Every new Cowork session starts cold unless you give it a file to read first. That file is your CLAUDE.md — a short brief, under four hundred words, of who you are, how you work, your tools, and your hard limits. Claude reads it automatically at the start of every session.
>
> Build it by running the prompt below *in Chat*, since Chat already has your context from week two. Review it, then save it into your Cowork folder. Then have Cowork create one more file — MEMORY.md — where it stores durable learnings over time, always asking before it adds anything.

[DEMO] Run the CLAUDE.md builder in Chat → save to Cowork folder → in Cowork, run the MEMORY.md creation prompt.
Resources: `prompt-library.md` → "Week 4 — Build your CLAUDE.md" and "Create MEMORY.md".

✅ Actions: CLAUDE.md saved · MEMORY.md created.

---

## V4.4 — Plan the daily brief (in Chat) (5 min)

🟦 GAMMA OUTLINE
```
Title: Plan in Chat, run in Cowork
Slide: 4 decisions — what's in it · how often/when · where your data lives · delivery & length
Slide: Connectors — Settings → Customise → Connectors
Slide: Claude writes you a ready-to-run Cowork prompt
```

NARRATION
> Now the flagship build — a daily brief that runs on a schedule and pulls from your calendar, email, and news before you sit down to work. We plan it in Chat first, because planning is a conversation and Chat is faster and cheaper for that.
>
> Run the planner below. It walks you through four decisions — what goes in your brief, how often and when, where each data source lives and whether your connectors are active, and where you want it delivered and how long. At the end, Claude writes you a complete, ready-to-run Cowork prompt. Copy that.

[DEMO] Run the 4-decision planner in Chat → copy the generated Cowork prompt.
Resource: `prompt-library.md` → "Week 4 — Daily Brief Planner".

✅ Action: copy your generated Cowork prompt.

---

## V4.5 — Run, fix, schedule (5 min)

🟦 GAMMA OUTLINE
```
Title: First run will be wrong — that's expected
Slide: Paste the prompt into Cowork (folder selected so it reads CLAUDE.md)
Slide: Give specific feedback → run v2
Slide: "Turn this into a scheduled task at [time]"
Slide: Caveats — runs only when computer is awake; multi-source = more tokens
```

NARRATION
> Open Cowork, make sure your Cowork folder is selected so it reads your CLAUDE.md, and paste the prompt. It'll run your brief. The first version *will* get things wrong — mine pulled month-old news and the wrong calendar. That's expected. Give it specific feedback, run it again, and version two is dramatically better.
>
> Once you're happy, ask Cowork to schedule it. Two things to know: scheduled tasks only run when your computer is awake — turn on "keep computer awake" if you need it before you open your laptop — and a multi-source brief uses more tokens, so trim categories if you hit limits.

[DEMO] Paste prompt in Cowork → run → give feedback → run v2 → "Turn this into a scheduled task at 6:30am."
Resource: `prompt-library.md` → "Week 4 — Schedule the brief".

✅ Action: brief built, iterated once, scheduled.

---

## V4.6 — Week 4 check-in (2 min)

NARRATION
> By the end of this week you've got a Cowork folder with an Inbox, global instructions saved, a CLAUDE.md, a MEMORY.md ready to fill, and a daily brief that's built, iterated, and scheduled. The first morning it runs automatically, you'll open your laptop to maybe two and a half hours of work already done while you slept. That's one task — and after it, you start seeing everything else on your plate differently.

✅ Checklist: folder+Inbox · global instructions · CLAUDE.md · MEMORY.md · brief scheduled.
