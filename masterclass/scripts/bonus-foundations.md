# Bonus Track — "Claude Essentials" (from the Claude Mastery Guide, Opus 4.8) — SCRIPTS
*Short, demo-led reference videos. Members watch anytime. 🟦 GAMMA OUTLINE = paste into Gamma.*
*Current models referenced: Opus 4.8 · Sonnet 4.6 · Haiku 4.5.*

---

## B1 — Chat vs Cowork vs Code: pick the right mode (4 min)
🟦 GAMMA OUTLINE
```
Title: Which mode? A simple rule
Table: Think/brainstorm → Chat · Files/docs/data → Cowork · Build a tool → Code
Slide: Research → Chat (research mode) · Automate recurring → Cowork scheduled task
Slide: Not sure? Ask Chat — it'll suggest the mode.
```
NARRATION
> Quick one: which mode do you use? If you want to think, brainstorm, or get advice — Chat, inside the relevant Project. To organise files, create documents, or work with data on your computer — Cowork. To build a tool, app, or automation — Code. For research, start in Chat's research mode. To automate something recurring, Cowork on a schedule. And if you're not sure, just ask Chat — it'll point you to the right mode.
[DEMO] Show the same task started in two modes to feel the difference.

---

## B2 — Which model? Haiku / Sonnet / Opus (4 min)
🟦 GAMMA OUTLINE
```
Title: Opus to plan, Sonnet to execute, Haiku for speed
Slide: Haiku 4.5 — fast/cheap: quick Q&A, reformatting, summaries, classification
Slide: Sonnet 4.6 — the default: writing, coding, analysis (extended thinking for hard ones)
Slide: Opus 4.8 — deepest reasoning: strategy, architecture, building from scratch
Rule: Start with Sonnet → escalate to Opus when output isn't good enough
```
NARRATION
> Claude isn't one model — it's a family. Haiku is fastest and cheapest: great for quick questions, reformatting, summaries, and classification. Sonnet is where most people live — writing, coding, analysis, research — and for the hard stuff, turn on extended thinking. Opus is the most capable: deep strategic reasoning, architecture, building from scratch. The community rule of thumb is "Opus to plan, Sonnet or Haiku to execute." Practically: start with Sonnet, and switch to Opus only when the output isn't good enough. Most people find Sonnet handles eighty to ninety percent of their work.
[DEMO] Show switching the model in the bottom corner of a chat.

---

## B3 — What Claude can actually do (5 min)
🟦 GAMMA OUTLINE
```
Title: The capability tour
Slides (one each): Answer & explore · Analyse docs/images · Web research (live) ·
Code + charts · Writing in any tone · Artifacts (interactive React/HTML/SVG side panel)
```
NARRATION
> A fast tour of what Claude does. It answers and explores with depth. It analyses documents, images, and text — summarising reports, pulling insights, reviewing code. It searches the web in real time for current information. It writes code in virtually any language and builds charts from your data. It writes in any tone or format. And it creates Artifacts — interactive React components, HTML/CSS, SVGs, diagrams — right in a side panel where you can preview, iterate, and export.
[DEMO] Build a small Artifact live and tweak it.

---

## B4 — Why Claude over other LLMs (3 min)
🟦 GAMMA OUTLINE
```
Title: A reviewer, not a cheerleader
Slide: Most models people-please — they agree and dodge friction
Slide: Anthropic actively reduces sycophancy
Slide: Claude pushes back, flags weak logic, says "I'm not sure"
```
NARRATION
> Most AI models default to people-pleasing — they agree with you, praise your work, and avoid friction. That's useless for real thinking. Anthropic has made reducing that an active design priority, so Claude is more likely to push back on weak reasoning, flag gaps in your logic, and say "I'm not sure" instead of faking confidence. That matters most when you need honest feedback — stress-testing a plan, debugging logic, tightening a draft. Treat it like a thoughtful reviewer, not a cheerleader.

---

## B5 — Prompt engineering core (6 min)
🟦 GAMMA OUTLINE
```
Title: The building blocks of a great prompt
Slides: Be direct · Assign a role · Use XML tags · Few-shot examples ·
Chain-of-thought ("think step by step") · Control length & format · Output primers ·
"Answer if known, else say you don't know"
```
NARRATION
> Six building blocks that instantly improve your prompts. Be direct — skip the pleasantries, state the task. Assign a role to focus the answer. Use XML tags to separate instructions from input so Claude knows what's what. Give few-shot examples — showing beats describing. Add chain-of-thought — "think step by step" — for anything logical. Control length and format explicitly. Prime the output by starting the response for it. And to curb hallucination, add "answer if known, else say you don't know." Watch a weak prompt become a strong one as I layer these on.
[DEMO] Build one prompt up through each layer; show the output improving.
Resource: `prompt-library.md` → "Claude Essentials — 30 Prompt Principles".

---

## B6 — Prompt chaining (4 min)
🟦 GAMMA OUTLINE
```
Title: Break big tasks into a chain
Slide: Research → Outline → Draft → Review
Slide: Pass each step's output to the next (use tags)
Slide: Isolate and fix the weak step
```
NARRATION
> For anything complex, don't ask for everything at once — chain it. Break the task into sequential steps — research, outline, draft, review — and pass each step's output into the next, using tags to keep the handoff clean. You get higher accuracy and, if something's off, you can isolate the one weak step and fix just that. Great for research synthesis, multi-draft content, and document analysis.
[DEMO] Run a 3-step chain live.

---

## B7 — Skills, deep dive (6 min)
🟦 GAMMA OUTLINE
```
Title: How Skills actually work
Slide: SKILL.md = YAML frontmatter (name + description = the trigger) + Markdown body
Slide: Body — when to use · steps · examples · error handling · limits
Slide: Progressive disclosure — scan ~100 tokens → activate ~5k → execute on demand
Slide: Enable in Settings → Capabilities (paid plan + code execution)
```
NARRATION
> Skills, under the hood. A skill is a folder with a SKILL.md. The top is YAML frontmatter — a name and a description, and that description is the trigger, so make it specific and action-oriented. The body is the instructions: when to use it, the steps, examples of good output, error handling, and limits. The clever part is progressive disclosure — Claude only scans the names and descriptions (about a hundred tokens each), loads the full skill (around five thousand tokens) only when your request matches, and pulls extra files only when needed. That's why Skills are far leaner than stuffing everything into a Project. To use custom Skills, enable "Code execution and file creation" under Settings, Capabilities — on a paid plan.
[DEMO] Build a skill with the built-in `skill-creator`.

---

## B8 — Projects, deep dive (5 min)
🟦 GAMMA OUTLINE
```
Title: What's inside a Project
Slide: Instructions (always-on behaviour) — keep lean, no contradictions
Slide: Knowledge files (reference) — name them clearly; RAG kicks in automatically
Slide: Conversations — NOT shared chat-to-chat; the Project is the shared context
Slide: One Project per domain
```
NARRATION
> Projects have three parts. Instructions are the always-on behaviour — role, tone, rules — put here only what's true for every conversation, and keep it lean and contradiction-free. Knowledge files are your reference library — style guides, specs, examples — and clear filenames matter because Claude searches by name; on big knowledge bases, RAG kicks in automatically to pull only what's relevant. Conversations are grouped, but they don't share memory chat-to-chat — the shared context comes from the Project itself. Golden rule: one Project per domain, not one mega-project for everything.
[DEMO] Show a well-written instruction block vs. a vague one, and the output difference.

---

## B9 — Connectors / MCP (5 min)
🟦 GAMMA OUTLINE
```
Title: Connect Claude to your real tools
Slide: Notion · Google Drive · GitHub · Slack · Linear · Zapier
Slide: 2-min OAuth — kills the copy-paste-explain loop
Slide: Read is stronger than write · scope permissions (least privilege)
```
NARRATION
> Connectors — built on MCP — let Claude reach into your actual tools instead of you pasting everything in. Notion, Google Drive, GitHub, Slack, Linear, Zapier, and more. Setup is a two-minute OAuth approval. Then you just ask — "summarise the Q1 plan in Notion" — and Claude searches, reads, and answers, no tab-switching. Two notes: reading is more reliable than writing right now, and scope your permissions tightly — grant only the folders Claude needs, keep personal stuff out.
[DEMO] "Summarise the [page] in Notion" live with a connector.

---

## B10 — The full stack: Projects + Skills + Connectors (4 min)
🟦 GAMMA OUTLINE
```
Title: Put it all together
Slide: Projects = what Claude KNOWS · Skills = how Claude WORKS · Connectors = where Claude REACHES
Slide: One prompt that uses all three
Example: pull a topic from Notion → apply a formatting Skill → in a client Project's voice
```
NARRATION
> Here's the payoff. Projects give Claude persistent context — what it knows. Skills give it repeatable workflows — how it works. Connectors give it live data — where it can reach. Together they turn Claude from a general assistant into a specialised operator. One prompt: "check my content calendar in Notion, pick the first undrafted topic, and write a LinkedIn post using my formatter skill." Claude pulls the live data, applies your Project's voice, runs your Skill's format, and hands you a finished draft. One prompt, no setup — every layer doing its job.
[DEMO] Run an all-three prompt end to end.
Resource: `prompt-library.md` → "Claude Essentials — Strategic Uses" and "Mega-Prompts".
