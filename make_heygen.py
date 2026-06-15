#!/usr/bin/env python3
import re, os
from docx import Document
from docx.shared import Pt, RGBColor

INK=RGBColor(0x1a,0x17,0x14); ACCENT=RGBColor(0xc2,0x41,0x0c); MUTED=RGBColor(0x6b,0x62,0x59)

order=[
 ("Module 0 — Welcome","masterclass/scripts/module-00-welcome.md"),
 ("Week 1 — Foundation","masterclass/scripts/module-01-foundation.md"),
 ("Week 2 — Projects","masterclass/scripts/module-02-projects.md"),
 ("Week 3 — Content","masterclass/scripts/module-03-content-engine.md"),
 ("Week 4 — Cowork","masterclass/scripts/module-04-cowork.md"),
 ("Week 5 — Claude Code (Finale)","masterclass/scripts/module-05-code.md"),
 ("Bonus — Claude Essentials","masterclass/scripts/bonus-foundations.md"),
]
SKIP=("note","resource","provide","bonus resources","phase 3 part","model note","flagship","this is the finale","already-using","off-the-shelf")

def clean(t):
    t=re.sub(r"\*\*(.+?)\*\*",r"\1",t); t=re.sub(r"\*(.+?)\*",r"\1",t)
    return t.replace("`","").strip()

def extract(path):
    out=[]  # list of (lesson_title, [paragraphs])
    cur=None; cap=False; buf=[]
    def flush():
        nonlocal cur,buf
        if cur is not None: out.append((cur," ".join(buf).strip()))
        buf=[]
    for ln in open(path,encoding="utf-8").read().splitlines():
        s=ln.rstrip()
        if s.startswith("## "):
            flush(); cur=clean(s[3:]); cap=False
        elif s.strip()=="NARRATION":
            cap=True
        elif cap and s.startswith(">"):
            t=clean(s[1:].strip())
            if t and not t.lower().startswith(SKIP): buf.append(t)
        elif cap and (s.startswith("[DEMO]") or s.startswith("##") or s.strip()=="---" or s.startswith("✅") or s.startswith("Resource")):
            cap=False
    flush()
    return out

# Markdown output
md=["# Built in a Day — HeyGen Voiceover Scripts",
"*Paste each block into HeyGen to generate your presenter. One block = one lesson. Record the matching screen separately, then lay the HeyGen video over it.*","",
"---",""]
# Docx output
doc=Document(); doc.styles["Normal"].font.name="Calibri"; doc.styles["Normal"].font.size=Pt(11)
t=doc.add_paragraph(); r=t.add_run("Built in a Day — HeyGen Voiceover Scripts"); r.bold=True; r.font.size=Pt(26); r.font.color.rgb=INK
sub=doc.add_paragraph(); r=sub.add_run("Paste each block into HeyGen to generate your presenter. One block = one lesson. Record the matching screen separately, then overlay the HeyGen video."); r.italic=True; r.font.size=Pt(10.5); r.font.color.rgb=MUTED

for sect,path in order:
    if not os.path.exists(path): continue
    md+=[f"## {sect}",""]
    p=doc.add_paragraph(); p.space_before=Pt(12); r=p.add_run(sect); r.bold=True; r.font.size=Pt(20); r.font.color.rgb=ACCENT
    for title,text in extract(path):
        if not text: continue
        md+=[f"### {title}","",text,""]
        h=doc.add_paragraph(); r=h.add_run(title); r.bold=True; r.font.size=Pt(13); r.font.color.rgb=INK
        b=doc.add_paragraph(); r=b.add_run(text); r.font.size=Pt(11.5)
    doc.add_page_break()

open("masterclass/heygen-voiceover-scripts.md","w",encoding="utf-8").write("\n".join(md))
doc.save("masterclass/Built-in-a-Day-HEYGEN-SCRIPTS.docx")
print("wrote md + docx")
