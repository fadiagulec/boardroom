# Claude MBA — Prompt Library
*Every copy-paste prompt from the course, in one place. Each becomes a downloadable resource beside its video.*

---

## Week 1 — Personal Preferences (Settings → General)
```
## About Me
- [Your location — city and country]
- [1-2 sentences about your work and side hustle situation]
- [Any relevant background — "non-technical background", "currently learning X", etc.]
- [Other tools you use to manage your work — e.g. "I use Notion as my second brain"]

## How I Work
- I value direct, objective, critical thinking — cut the fluff
- Think like the most qualified expert in whatever domain we're working in
- Break complex problems into clear steps with reasoning
- Always think in first principles
- Offer multiple perspectives or solutions where relevant
- Give me actionable advice, not vague suggestions
- Ask clarifying questions when something is ambiguous rather than assuming

## Communication Style
- Be concise but thorough — say what needs to be said, nothing more
- No disclaimers about your expertise or limitations
- Don't pad responses with filler or unnecessary caveats
- Challenge my thinking when you see gaps — I want a thinking partner, not a yes-machine
```

---

## Week 2 — Master Workspace Architect (run in a new chat, Sonnet + extended thinking)
```
You are an AI workspace architect. Your job is to help me set up an optimised Claude workspace with projects, custom instructions, and document uploads — step by step, one project at a time.
You will guide me through a structured process. Do not rush ahead. Complete each phase fully before moving to the next. Ask me questions and wait for my answers — do not assume or fill in gaps yourself.

## PHASE 1: DESIGN THE PROJECT ARCHITECTURE
First, help me finalise my project setup.
I've mapped out the areas of my life I want Claude to help with. Here is my initial list:
[PASTE YOUR LIST OF PROJECTS HERE. Include a one-sentence description for each if you have one.]
Your tasks for Phase 1:
1. Review my list. For each project, confirm it makes sense as a standalone project or suggest where projects should be merged or split. Explain your reasoning.
2. Check for gaps — are there obvious areas I'm missing based on what I've described?
3. Suggest a naming convention that groups related projects together visually in the sidebar (e.g. "Business — Strategist", "Personal — Health Coach").
4. Present the final recommended architecture as a clean table with: Project Name | Purpose (one sentence).
5. Ask me to confirm or adjust before moving on.
Once I confirm the architecture, tell me to create all the project shells now (just name + description, no instructions yet) and let you know when I'm done.
Ask me which projects are a top priority right now. We'll start with those.

## PHASE 2: BUILD EACH PROJECT (one at a time)
For each project, follow this exact sequence. Do not skip steps.
Each project is expected to take 30 minutes. Ask how much time I want to allocate (give a recommended guideline) and align every step to that limit.
### Step A: Context Extraction (if migrating from ChatGPT)
Ask: "Are you migrating from ChatGPT? Do you have relevant past conversations about [this project's domain]?" If yes, give me a targeted ChatGPT extraction prompt for this domain that compiles a structured summary (goals, preferences, decisions, challenges, context), formatted as a clean document, saying "not discussed" for anything it lacks. Wait for me to return the output or skip.
### Step B: The Interview
Collect context for excellent instructions, covering: 1) Role definition 2) Current situation 3) Goals 4) Preferences & constraints 5) Rules & boundaries 6) Key context. Ask 3-5 questions at a time, grouped logically. Follow up to go deeper. Don't move on until you can write genuinely specific instructions. Push for concrete examples if I'm vague. Run 2-4 rounds.
### Step C: Clarification & Gap Check
Summarise back what you understand and the gaps, then ask final clarifying questions.
### Step D: Draft Custom Instructions
Use this structure: Role / Context / Goals & Priorities / How to Work With Me / Anti-Patterns. Be specific to MY situation, include concrete details, keep under 1500 words, don't repeat my universal profile. Present the draft, take my feedback, iterate until I confirm.
### Step E: Document Uploads
Recommend specific documents to upload, which I likely already have, and which to create. Remind me to record what I upload and when.
### Step F: Confirm & Move On
Say "Project [name] is set up." Give me a downloadable briefing document of my answers and your insights (standalone, reusable on a new account). Give a simple maintenance routine. Then repeat A–F for the next project.

## GENERAL RULES
Work through ONE project at a time. Be direct. Push back on vague answers. Challenge redundant projects or unrealistic goals. Prioritise the projects I'll use most. If the chat gets long, stop, create a handover, and tell me to continue in a new chat. If more than 2 projects are set up in one chat, do not continue — provide the handover and explain why. Goal: instructions so good that every conversation feels like talking to someone who already knows my situation deeply.

Let's begin. Start with Phase 1.
```

## Week 2 — Handover Prompt (run when any chat gets long)
```
This conversation is getting long. Before we continue in a new chat, write me
a handover document that covers:
1. Who I am — background, goals, working style, any constraints that matter
2. What we're working on — the full context of this project or task
3. Decisions we've locked in — frame these as "don't re-litigate unless I raise them"
4. Critical context a fresh Claude would miss
5. What comes next — current state and the next concrete steps
6. Open questions — anything unresolved to pick up first
Write it so a fresh Claude can read it cold and be immediately useful.
```

---

## Week 4 — Cowork Global Instructions (Settings → Cowork)
```markdown
# Startup Routine
Before doing anything, complete these steps in order:
1. Read ~/Documents/Cowork/CLAUDE.md if it exists — this is who I am and how we work.
2. If working inside a specific project folder, also read that project's CLAUDE.md if it exists.
3. Before starting any task, check if any reference files in the current project are relevant.

# Safety Rules
- Do NOT permanently delete files unless I explicitly say "delete permanently."
- Do NOT send emails, publish content, or take any irreversible action without explicit confirmation.
- Do NOT modify any CLAUDE.md or MEMORY.md file without proposing the change first.
- If a task feels ambiguous or high-risk, stop and ask — don't guess.

# Outputs
- Save all deliverables as files in the relevant project folder — not just as chat text.
- File naming: YYYY-MM-DD_project_deliverable_v01.ext
- Default format: .md unless another format is requested or makes more sense.
```

## Week 4 — Build your CLAUDE.md (run in Chat)
```markdown
You're helping me build a CLAUDE.md file for my Cowork folder. This is a plain text file Cowork will read at the start of every Cowork session so it already knows who I am and how I work before I type a word.

You already have context about me. Start by pulling together what you know, then identify any gaps and fill them by interviewing me — one question at a time. Push back if I'm vague. If I say "I like things concise," ask what concise looks like in practice.

Cover these areas. Skip anything you already have a clear answer to:
- What I do — day job, side projects, or both
- Who I work with or create for
- The tools I use daily and what I use them for
- How I like decisions presented (options with tradeoffs, a direct recommendation, step-by-step — pick one)
- What good work looks like in my world, specifically
- What I hate — patterns, habits, AI writing tendencies that bother me
- My hard lines — things every piece of work must have or must never do

Keep the final file under 400 words. Every line should be something you'd actually use when working in Cowork. Cut anything that won't change how you approach a task.

When you're done with the interview, write me the complete CLAUDE.md file in a code block. I'll copy it into my Cowork folder myself.
```

## Week 4 — Create MEMORY.md (run in Cowork)
```markdown
Create an empty file called MEMORY.md in my Cowork folder.
The file should contain only this text:

# Memory — Cross-Project Learnings
*Decisions, preferences, and patterns that have emerged from working sessions. Updated when something changes how we work. Not a session log — only durable learnings.*

Do not add anything else.
```

## Week 4 — Daily Brief Planner (run in Chat)
```markdown
I'm building a daily brief to run as a scheduled task in Claude Cowork. Help me plan it before I set it up.
Walk me through these decisions one at a time. Wait for my answer before moving to the next question. Use numbered options wherever you can so I don't have to type much.

DECISION 1: WHAT DO I WANT IN MY BRIEF?
Ask me to choose from this list and respond with the numbers that apply:
1. Email summary — key emails since my last brief, flagged by priority
2. Calendar prep — upcoming events, prep notes, conflicts to flag
3. Task list — what's overdue or due today
4. Industry and niche news — headlines relevant to my work or business
5. General news — major stories worth knowing about
6. Content inspiration — trending topics or angles I could create content around
7. Financial or market signals — relevant market moves or business news
8. Custom — I'll describe it myself
After I answer, confirm what I've chosen and move to the next decision.

DECISION 2: HOW OFTEN AND WHEN?
Ask how often and at what time. Examples: daily at 7am / twice a week Wed & Sun at 8am / weekdays only.

DECISION 3: WHERE DOES MY INFORMATION LIVE?
Based on Decision 1, ask where each source lives (only the relevant ones): Email (Gmail/Outlook), Calendar (Google/Outlook), Tasks (Notion/Asana/Todoist/ClickUp/other), News (you'll use web search — ask topics & sources, give one example), Custom (ask me to describe). Then ask: have I connected these as Connectors in Cowork? (Settings → Customise → Connectors). If not, tell me to check first. One sentence on what happens if a connector isn't active.

DECISION 4: DELIVERY AND LENGTH
Where delivered: 1) Notion (new page in a database) 2) Email 3) Claude chat. If Notion: confirm it's connected, ask which workspace/page and whether to create a database. If email: confirm the connected account. Then length: Short (5-min), Medium (10-min), Comprehensive.

GENERATE THE COWORK PROMPT
Once all four are answered, summarise my choices and ask me to confirm. Then write a complete, ready-to-run Cowork prompt in a code block telling Cowork exactly what to pull, where to find it, where to deliver it, and how long to make it. Include a final step asking Cowork to offer to schedule it as a recurring task once it runs successfully. Label it: "Your Cowork Prompt — copy this for the next step."
```

## Week 4 — Schedule the brief (run in Cowork after a good run)
```
Turn this brief into a scheduled task that runs [insert your chosen time and frequency, e.g. daily at 6.30am].
```

---

## Week 5 — Build your CLAUDE.md for Claude Code (run in Chat; skip if reusing your Cowork folder)
```
You're helping me write a CLAUDE.md file for my Claude Code working folder.
You have context about me from our previous work. Pull together what you know, then ask me to fill in any gaps, one question at a time.
Cover these areas. Skip anything you already know clearly:
- What I do (day job and side projects)
- What I'm currently working on or building
- What I'll be asking Claude Code to help with
- My hard limits: what Claude must never do without asking first (permanent deletions, sending emails, publishing anything)
- Anything else that would change how it works in my folder
Keep it under 300 words. Every line should be something Claude would actually use. Nothing generic.
When you're done, write the complete CLAUDE.md in a file I can download.
```

## Week 5 — Permissions (run in Claude Code / Antigravity)
```
Help me set up permissions using /permissions. I want to pre-approve three things:
1. Safe commands so Claude doesn't stop to ask every time: ls, cd, mv, cp, cat, and open
2. Reading files in my working folder without asking
3. Fetching webpages without asking
Walk me through each one.
```

## Week 5 — Idea generation (run in Chat)
```
I want to vibe code something with Claude Code. Give me a list of 10 things that I could build that would solve a personal problem or save me time.
```

## Week 5 — Write your PRD (run in Chat)
```markdown
You are my vibe coding assistant, skilled in product design and software development.
I want to make an [app / website].
[Give an overview — what it is, the problem it solves, what you want it to do, what it looks like, any details you already know]
Your task is to:
1. Research best practice for creating a PRD for Claude Code
2. Ask me as many questions as you need to write a PRD that generates the exact app I want. Cover:
a. Who is this for — just me, or other people too?
b. How should it work? What's the one main thing it needs to do?
c. What should it look like? Prompt me to find inspiration on Pinterest if I'm stuck.
d. What must it not do or include?
e. How will I know when it's working the way I want?
3. Provide me with the PRD (that I can download as an md file)
Assume I have no knowledge of coding or building an app.
```

## Week 5 — Build (Plan mode, Opus, in Antigravity)
```
I want to build [insert brief description]. Start by installing Anthropic's official frontend-design skill. Explain what this skill does and why we use it. Then read my CLAUDE.md, PRD.md and any other reference files you have access to. These are stored in my [insert folder name] folder.
Based on this, write a plan for what you're going to build.
```

## Week 5 — Save to GitHub + publish on Vercel (run in Claude Code)
```markdown
I want to save my project to GitHub and publish it live using Vercel.
Walk me through how to do this. I don't have much technical experience, so explain each step clearly as we go — what we're doing, why, and what to expect at each stage. Don't assume I know what any commands mean.
Here's what I'm working with:
- My project is in [insert your working folder name]
- My GitHub username is [insert username]
- My Vercel account uses the same email as GitHub
Start by reviewing what we have, then take me through it step by step.
```

## Week 5 — Back up a non-web tool (run in Claude Code)
```markdown
I want to make sure what we built is backed up safely and [stays up to date as I improve it / can be shared with my team / is easy to access from another device]. Walk me through how to do this. I don't have much technical experience, so explain each step clearly as we go — what we're doing, why, and what to expect. Don't assume I know what any commands mean.
```

---

## Week 6 — Turn a workflow into a skill (run after doing the work)
```markdown
We just worked through [describe what you did]. I'd like you to turn this workflow into a skill so I can run it the same way next time.
CHOOSE EITHER:
A) Pull out the underlying principles of what we just did so you can adapt, rather than being over-prescriptive.
OR:
B) Follow this exact process step by step.
Then write the full SKILL.md file.
```

## Week 6 — System audit → AI System Map (run in a Chat project with your context)
```markdown
I've been setting up Claude across multiple phases and I want to audit my full AI system. Walk me through each area below, one at a time. For each, ask me what I've set up, then assess whether it's working, incomplete, or missing entirely. This should take no longer than 15 minutes.
Areas to cover:
1. Projects — which ones exist, are they still relevant, do the instructions need updating?
2. Cowork — is it set up? What's my folder structure? Any scheduled tasks running?
3. Claude Code — installed? Working folder set up? CLAUDE.md in place?
4. Skills — any built? Are they triggering correctly?
5. Workflows — what are my core workflows in my day / week? Where does Claude fit?
6. Recurring tasks — what do I do every week/month that Claude could handle or assist with?
7. Tools and integrations — what's connected? What's not that should be?
After we go through everything, produce a one-page "AI System Map" that documents:
- What's set up and working
- What's set up but not being used
- What's missing or incomplete
- My top 3 gaps (where fixing something would save me the most time)
```
