
import os

output_dir = "assets/images/project-svgs"
os.makedirs(output_dir, exist_ok=True)

# Common styles
style = """
<style>
    .bg { fill: #1e1e2e; }
    .primary { fill: #4F46E5; }
    .secondary { fill: #06B6D4; }
    .accent { fill: #EC4899; }
    .text { fill: #CDD6F4; font-family: sans-serif; font-weight: bold; font-size: 24px; text-anchor: middle; }
    .icon { fill: none; stroke: url(#grad1); stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
    .icon-fill { fill: url(#grad1); stroke: none; }
</style>
<defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4F46E5;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#06B6D4;stop-opacity:1" />
    </linearGradient>
</defs>
"""

def create_svg(filename, content, title=""):
    svg_template = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
    <rect width="100%" height="100%" class="bg" fill="#0f172a" />
    {style}
    <g transform="translate(200, 150)">
        {content}
    </g>
    <text x="200" y="270" class="text" fill="rgba(255,255,255,0.7)" font-size="16">{title}</text>
</svg>"""
    
    with open(os.path.join(output_dir, filename), "w") as f:
        f.write(svg_template)

# Define designs
projects = {
    "authoconnectable.svg": {
        "content": """
            <circle cx="-50" cy="0" r="20" class="icon-fill" opacity="0.8"/>
            <circle cx="50" cy="0" r="20" class="icon-fill" opacity="0.8"/>
            <path d="M-30 0 L30 0" stroke="url(#grad1)" stroke-width="4" stroke-dasharray="5,5"/>
            <circle cx="0" cy="-40" r="10" stroke="url(#grad1)" stroke-width="2" fill="none"/>
            <path d="M-50 -20 Q-50 -40 0 -40 Q50 -40 50 -20" stroke="url(#grad1)" fill="none" class="icon"/>
        """,
        "title": "Integration"
    },
    "apprid.svg": {
        "content": """
            <rect x="-60" y="-40" width="120" height="80" rx="10" stroke="url(#grad1)" stroke-width="4" fill="none"/>
            <line x1="-60" y1="-10" x2="60" y2="-10" stroke="url(#grad1)" stroke-width="2"/>
            <circle cx="0" cy="20" r="10" fill="url(#grad1)"/>
            <rect x="-40" y="-80" width="30" height="30" rx="5" fill="#4F46E5" opacity="0.5"/>
            <rect x="10" y="-80" width="30" height="30" rx="5" fill="#06B6D4" opacity="0.5"/>
        """,
        "title": "Full Stack App"
    },
    "arcitron.svg": {
        "content": """
            <polygon points="0,-60 60,-30 60,30 0,60 -60,30 -60,-30" stroke="url(#grad1)" stroke-width="4" fill="none"/>
            <circle cx="0" cy="0" r="15" fill="url(#grad1)"/>
            <path d="M-30 -15 L30 15 M30 -15 L-30 15" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        """,
        "title": "Game Design"
    },
    "authomatek.svg": {
        "content": """
            <rect x="-40" y="-10" width="80" height="60" rx="5" stroke="url(#grad1)" stroke-width="4" fill="none"/>
            <path d="M-20 -10 V-30 A20 20 0 0 1 20 -30 V-10" stroke="url(#grad1)" stroke-width="4" fill="none"/>
            <circle cx="0" cy="20" r="8" fill="url(#grad1)"/>
            <path d="M0 28 V40" stroke="url(#grad1)" stroke-width="4"/>
        """,
        "title": "Security"
    },
    "camplore.svg": {
        "content": """
            <path d="M-50 40 L0 -60 L50 40 L35 40 L0 -30 L-35 40 Z" fill="url(#grad1)" opacity="0.8"/>
            <circle cx="60" cy="-60" r="10" fill="#EC4899" opacity="0.8"/>
            <path d="M-70 50 L70 50" stroke="url(#grad1)" stroke-width="2"/>
        """,
        "title": "Exploration"
    },
    "connectablekit.svg": {
        "content": """
            <rect x="-40" y="-40" width="80" height="80" rx="10" stroke="url(#grad1)" stroke-width="4" fill="none"/>
            <path d="M0 -40 V-60 M-40 0 H-60 M0 40 V60 M40 0 H60" stroke="url(#grad1)" stroke-width="4"/>
            <circle cx="0" cy="0" r="15" fill="url(#grad1)"/>
        """,
        "title": "Connectivity"
    },
    "critique.svg": {
        "content": """
            <path d="M-60 0 Q0 -50 60 0 Q0 50 -60 0 Z" stroke="url(#grad1)" stroke-width="4" fill="none"/>
            <circle cx="0" cy="0" r="20" fill="url(#grad1)"/>
            <path d="M30 -30 L50 -50" stroke="#EC4899" stroke-width="3"/>
            <path d="M-30 30 L-50 50" stroke="#EC4899" stroke-width="3"/>
        """,
        "title": "AI Review"
    },
    "dijital-daraa.svg": {
        "content": """
            <rect x="-40" y="-40" width="80" height="80" stroke="url(#grad1)" stroke-width="2" fill="none" stroke-dasharray="10,5"/>
            <path d="M-20 -20 L20 20 M20 -20 L-20 20" stroke="url(#grad1)" stroke-width="4"/>
            <rect x="-60" y="-60" width="20" height="20" stroke="#ffffff" stroke-width="1" fill="none" opacity="0.5"/>
            <rect x="40" y="40" width="20" height="20" stroke="#ffffff" stroke-width="1" fill="none" opacity="0.5"/>
        """,
        "title": "Augmented Reality"
    },
    "eightthings.svg": {
        "content": """
            <circle cx="0" cy="-25" r="20" stroke="url(#grad1)" stroke-width="4" fill="none"/>
            <circle cx="0" cy="25" r="25" stroke="url(#grad1)" stroke-width="4" fill="none"/>
            <path d="M-25 0 L25 0" stroke="url(#grad1)" stroke-width="2" opacity="0.5"/>
        """,
        "title": "Productivity"
    },
    "prexipay.svg": {
        "content": """
            <circle cx="-20" cy="0" r="30" fill="#4F46E5" opacity="0.6"/>
            <circle cx="20" cy="0" r="30" fill="#06B6D4" opacity="0.6"/>
            <text x="0" y="8" font-family="sans-serif" font-weight="bold" font-size="20" fill="white" text-anchor="middle">$</text>
        """,
        "title": "Finance"
    },
    "sveltekit-trivia-app.svg": {
        "content": """
            <text x="0" y="20" font-family="serif" font-weight="bold" font-size="80" fill="url(#grad1)" text-anchor="middle">?</text>
            <circle cx="0" cy="50" r="5" fill="#EC4899"/>
            <path d="M-40 -40 L-20 -60 M40 -40 L20 -60" stroke="url(#grad1)" stroke-width="3"/>
        """,
        "title": "Trivia"
    },
    "thothr.svg": {
        "content": """
            <path d="M-30 -40 L30 -40 L10 0 L30 40 L-30 40 L-10 0 Z" stroke="url(#grad1)" stroke-width="4" fill="none" stroke-linejoin="round"/>
            <path d="M-10 -30 L10 -30" stroke="url(#grad1)" stroke-width="2"/>
            <circle cx="0" cy="20" r="5" fill="#EC4899" opacity="0.8"/>
        """,
        "title": "Time Capsule"
    },
    "tugcanonbascom.svg": {
        "content": """
            <text x="0" y="15" font-family="sans-serif" font-weight="bold" font-size="40" fill="url(#grad1)" text-anchor="middle">&lt;/&gt;</text>
            <rect x="-60" y="-40" width="120" height="80" rx="5" stroke="rgba(255,255,255,0.1)" stroke-width="2" fill="none"/>
        """,
        "title": "Personal Site"
    },
    "tutkucevikcom.svg": {
        "content": """
            <rect x="-40" y="-50" width="80" height="100" stroke="url(#grad1)" stroke-width="3" fill="none"/>
            <circle cx="0" cy="0" r="20" stroke="#EC4899" stroke-width="2" fill="none"/>
            <path d="M-40 -50 L40 50 M40 -50 L-40 50" stroke="rgba(255,255,255,0.1)"/>
        """,
        "title": "Portfolio"
    }
}

for filename, data in projects.items():
    create_svg(filename, data["content"], data["title"])

print("SVGs created successfully.")
