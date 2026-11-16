/* ============================================================
   PORTFOLIO CONTENT: edit this file to update the site.
   - Text lives here; layout lives in index.html.
   - Images and video go in img/, downloadable files in files/.
   - Status values: "in-progress", "complete", "side-project", "upcoming".
   ============================================================ */
window.PORTFOLIO = {
  lastUpdated: "November 2026",

  profile: {
    name: "Sonu K Yadav",
    headline: "Mechanical Engineering student · Texas State University",
    lede: "I'm curious about how everything works, picky about getting the details right, and happiest when I'm learning from people who know more than I do.",
    summary: "Anything that moves is my favorite rabbit hole, cars and robots most of all. I'm studying mechanical engineering at Texas State, I ask a lot of questions (sorry in advance), and I'm set on growing into the kind of engineer a team can hand a hard problem to.",
    /* Slideshow under the intro: one design per slide, with the approach or finding behind it */
    showcase: [
      { src: "img/hex-assembly.jpg", project: "Hexacopter Traffic Controller", title: "Two parts at a time, then the part that holds them.", detail: "Built from scratch in SolidWorks, checking tolerances and interference at every step. 2nd place, $3,000." },
      { src: "img/engine-animation-poster.jpg", project: "Four-cylinder engine", title: "Model every moving part, then prove it turns.", detail: "Pistons, rings, pins, rods, caps and crankshaft, animated through a full rotation to check alignment." },
      { src: "img/hex-exploded.jpg", project: "Hexacopter Traffic Controller", title: "Pull it apart to see how it goes together.", detail: "The exploded view is where fit problems show up before they become real ones." },
      { src: "img/lab-photoelasticity.jpg", project: "Materials lab", title: "Stress you can actually see.", detail: "Under polarized light, the fringes crowd together right where the load concentrates." },
      { src: "img/hex-stator.jpg", project: "Hexacopter Traffic Controller", title: "Down to the copper windings.", detail: "The motors were modelled part by part, not dropped in as a block." },
      { src: "img/lab-fatigue-readout.jpg", project: "Materials lab", title: "329,167 cycles at 56,410 psi.", detail: "One rotating-beam fatigue run. Counting cycles to failure is how S-N curves get made." },
      { src: "img/cam-milled-part.jpg", project: "Mastercam to CNC", title: "From toolpath to a real part.", detail: "Modelled and programmed in Mastercam, then cut on the CNC mini mill." }
    ],
    portrait: { src: "img/me-instron.jpg", alt: "Sonu smiling beside an Instron test frame in the materials lab", caption: "In the materials lab, where I help run the tests every week." },
    location: "San Marcos, TX",
    degree: "B.S. Mechanical Engineering",
    graduation: "Dec 2027",
    email: "sonuyadavtxst@gmail.com",
    linkedin: "https://www.linkedin.com/in/sy03",
    linkedinLabel: "linkedin.com/in/sy03",
    github: "https://github.com/Sonuuuuuydv",
    githubLabel: "github.com/Sonuuuuuydv"
  },

  about: {
    headline: "I knew it wouldn't be easy. So I made a plan and stuck to it.",
    intro: "The plan was simple: learn something new every semester, get my hands on real machines, and keep building, even when nobody assigned it. Here's what keeps me going.",
    traits: [
      ["I analyze everything around me", "Give me a few minutes near a machine and I'm already wondering where the load goes, why a part is shaped the way it is, and what would fail first. It's a habit I don't see often anymore, and it's the one I'm proudest of."],
      ["Close enough isn't done", "I chase perfection in my work. If two parts are off by a hair, I go back and fix it, because that's the difference between a nice-looking model and something that actually works."],
      ["Other views sharpen mine", "I love hearing how someone else sees a problem. Half the time it flips how I understand it, and the design usually comes out better for it."],
      ["I learn by jumping in", "My best learning happens when I dive in, however clueless I am, next to people who already know the subject or have mastered it. Put me on a team like that and I'll grow fast."]
    ],
    photo: { src: "img/me-admet.jpg", caption: "Me with the ADMET frame in the materials lab" },
    numbers: [
      { value: "5", label: "lab and research roles since 2024" },
      { value: "46", label: "cells in the EV battery module I'm cooling" },
      { value: "$3,000", label: "prize for 2nd place in Texas State's Mechanical Design competition" },
      { value: "$1,000", label: "Honors College research grant for my underwater drone" }
    ]
  },

  /* Engineering analysis projects. Each phase: done before "current", in progress at "current". */
  analyses: [
    {
      id: "ev-cooling",
      title: "EV Battery Liquid Cooling",
      course: "Heat Transfer",
      dates: "Fall 2026",
      status: "in-progress",
      summary: "Batteries are picky about temperature, and so am I. I'm designing liquid cooling for a 46-cell lithium-ion module built from 2170 cells, the same format used in a lot of EVs. I worked out how much heat the module makes and the minimum coolant flow from an energy balance, then picked a cold plate with six parallel channels. Now I'm building it in SolidWorks so I can run thermal simulations in ANSYS, and then compare it against a sidewall-cooled second design.",
      stats: [
        { value: "46", unit: "cells", label: "2170 lithium-ion module" },
        { value: "230", unit: "W", label: "Heat the module makes" },
        { value: "2", unit: "L/min", label: "Coolant flow (0.76 minimum)" },
        { value: "915", unit: "g", label: "Cooling hardware, under a 2 kg limit" }
      ],
      specs: [
        ["Cold plate", "220 × 175 × 8 mm, 6061-T6 aluminium"],
        ["Channels", "6 parallel, 6 × 6 mm"],
        ["Cell model", "7 bodies, matched to the real 68.6 g cell"],
        ["Tools", "SolidWorks, ANSYS, hand calcs"]
      ],
      current: 2,
      phases: [
        "Hand calcs: heat load and coolant flow",
        "Model the 2170 cell in SolidWorks",
        "Model the cold plate and full module",
        "Check one cell in ANSYS against hand calcs",
        "Thermal simulation of the full module",
        "Second design and trade study",
        "Write up the results"
      ],
      gallery: [],
      downloads: []
    },
    {
      id: "control-arm",
      title: "Lower Control Arm Design & Analysis",
      course: "Machine Design",
      dates: "Fall 2026",
      status: "in-progress",
      summary: "Old-school car, new-school analysis. I'm taking the front lower control arm from a BMW E30 and asking a simple question: can it be lighter without giving up strength? I set up five load cases from braking, cornering and bumps. Next I'll stress-test the stock arm and lighter versions in FEA, check fatigue life, and compare what each one would cost to make.",
      stats: [
        { value: "5", unit: "load cases", label: "Including 0.8 g braking, 0.7 g cornering, 2× bump" },
        { value: "10", unit: "% lighter", label: "Mass reduction target" },
        { value: "2.0", unit: "", label: "Minimum safety factor on yield" },
        { value: "1.5", unit: "", label: "Minimum safety factor on fatigue" }
      ],
      specs: [
        ["Car", "BMW E30 (1982–1994 3 Series)"],
        ["Part", "Front lower control arm"],
        ["Analysis", "FEA per load case, fatigue life"],
        ["Comparison", "Stock vs. lighter designs, mass and cost"]
      ],
      current: 1,
      phases: [
        "Define load cases and targets",
        "Model the stock arm",
        "Stress test each load case in FEA",
        "Fatigue analysis",
        "Design lighter versions",
        "Compare cost to manufacture",
        "Write up the results"
      ],
      gallery: [],
      downloads: []
    }
  ],

  /* Built projects with photos or video. "kind": "gallery" or "video". */
  caseStudies: [
    {
      id: "hexacopter",
      kind: "gallery",
      title: "Hexacopter Traffic Controller",
      course: "Mechanical Design competition, Texas State University",
      dates: "Spring 2024",
      status: "complete",
      award: "2nd place · $3,000 prize",
      story: "My favorite build so far, and I did it from scratch: a hexacopter that teams up with a traffic light base unit to help monitor and manage traffic. I treated it as an exercise in real engineering approach. Bring two parts together, design the third part that holds them, then check tolerances and interference before moving on. Repeat until every motor, propeller, rotor ring, battery and fastener sits exactly where it should. Seeing the whole thing come together cleanly was a huge moment, and the judges liked it too: 2nd place and a $3,000 prize at Texas State's Mechanical Design competition.",
      specs: [
        ["Result", "2nd place, $3,000 prize"],
        ["Built", "From scratch in SolidWorks, every part"],
        ["Method", "Two parts at a time, then the part that joins them"],
        ["Checked", "Tolerances and interference at every step"]
      ],
      downloads: [
        { label: "Download SolidWorks files", href: "https://sonuuuuuydv.github.io/files/Hexacopter_SolidWorks.zip", size: "11 MB" },
        { label: "Extra lab-computer copies", href: "https://sonuuuuuydv.github.io/files/Hexacopter_SolidWorks_Lab_Copies.zip", minor: true }
      ],
      media: [
        { src: "img/hex-assembly.jpg", caption: "The full hexacopter on its traffic light base" },
        { src: "img/hex-exploded.jpg", caption: "Exploded view of the whole system" },
        { src: "img/hex-motor-exploded.jpg", caption: "Brushless motor, pulled apart" },
        { src: "img/hex-stator.jpg", caption: "Motor stator with copper windings" },
        { src: "img/hex-rotor.jpg", caption: "Rotor bell with magnets" },
        { src: "img/hex-motor-housing.jpg", caption: "Motor housing and shaft" },
        { src: "img/hex-propeller.jpg", caption: "Propeller" }
      ]
    },
    {
      id: "engine",
      kind: "video",
      title: "Four-Cylinder Engine",
      course: "Just for fun",
      dates: "",
      status: "side-project",
      story: "Nobody assigned this one. I wanted to understand how an engine actually moves, so I modelled every moving part of an inline four-cylinder in SolidWorks: pistons, rings, pins, connecting rods, rod caps and the crankshaft. Then I put it all together and animated it to check the alignment. In the second video, recorded on my phone, you can catch me pushing my chair back with a sigh. That's the moment it finally turned over cleanly.",
      specs: [
        ["Layout", "Inline four, four-stroke"],
        ["Parts", "Piston, ring, pin, connecting rod, rod cap, crankshaft"],
        ["Check", "Full-rotation animation for alignment"]
      ],
      downloads: [
        { label: "Download SolidWorks files", href: "https://sonuuuuuydv.github.io/files/Engine_4Stroke_SolidWorks.zip", size: "2 MB" }
      ],
      videos: [
        { src: "img/engine-animation.mp4", poster: "img/engine-animation-poster.jpg", caption: "SolidWorks animation of the crank, rods and pistons", autoplay: true },
        { src: "img/engine.mp4", poster: "img/engine-poster.jpg", caption: "The moment it worked, on my phone (sound on)" }
      ]
    }
  ],

  projects: [
    {
      title: "From Mastercam to a Real Part",
      course: "CAD/CAM class",
      status: "complete",
      summary: "My first time going all the way from screen to a real part: I modelled it and programmed the toolpaths in Mastercam, then cut it on the CNC mini mill. Four stars, a sword and a flower in one panel. Hearing the cutter follow my toolpath for the first time was a little nerve-racking, in the best way.",
      media: [
        { src: "img/cam-milled-part.jpg", caption: "The finished part, cut on the CNC mini mill" },
        { src: "img/cam-mastercam.jpg", caption: "Setting it up in Mastercam" }
      ]
    }
  ],

  upNext: [
    {
      title: "High-Speed Underwater Drone with Gripper",
      course: "Year-long independent research",
      dates: "Starting after this semester",
      award: "$1,000 Honors College grant",
      summary: "A year-long study of the structural loads and reliability of a high-speed underwater drone with a gripper. Funded by a $1,000 Honors College grant, with more coming from my research professor."
    }
  ],

  research: {
    title: "Robots, straight out of the box",
    org: "Safety Autonomy and Mobility Systems Lab",
    role: "Undergraduate Research Assistant",
    dates: "Since Nov 2026",
    story: "This is the part of my week I look forward to most. Our lab is brand new, so I get to be there from day one: unboxing robot kits, helping put the chassis together, wiring up cameras, sensors and compute boards, and hunting down every connection bug until a robot finally rolls across the floor on its own. Next up is the research itself, working with LiDAR and SLAM toward safe autonomous mobility. I'm learning from researchers who really know this field, and I'm soaking up everything I can.",
    tags: ["Robot assembly", "Hardware debugging", "Networking", "LiDAR", "SLAM"],
    media: [
      { src: "img/sams-robot-3.jpg", caption: "One of the robots with its sensors mounted" },
      { src: "img/sams-robot-1.jpg", caption: "Mobile robot with camera and display" },
      { src: "img/sams-robot-2.jpg", caption: "Chassis and compute board mid-build" }
    ]
  },

  /* Materials lab: one section, no sub-sections. */
  lab: {
    title: "My second home: the materials lab",
    role: "Undergraduate Instructional Assistant · Mechanical Behavior of Materials Lab",
    dates: "Since Aug 2026",
    paragraphs: [
      "If you can't find me, I'm probably here. I set up the Instron and ADMET machines, prepare and load specimens, fix fixtures when they misbehave, and help my classmates turn their raw data into something that makes sense.",
      "We pull, twist, bend, compress and cycle materials until they give up: tensile, torsion, fatigue, digital image correlation, photoelasticity and plenty more. I even got to create and run the torsion lab myself. There's nothing like watching a specimen you prepared hit its limit right where the numbers said it would."
    ],
    photos: [
      { src: "img/me-admet.jpg", caption: "Me at the ADMET frame" },
      { src: "img/lab-tensile.jpg", caption: "A specimen ready for a tensile test" },
      { src: "img/lab-photoelasticity.jpg", caption: "Stress fringes in a loaded beam (photoelasticity)" },
      { src: "img/lab-dic.jpg", caption: "Tracking strain with digital image correlation" },
      { src: "img/lab-fatigue-rig.jpg", caption: "The rotating-beam fatigue machine" },
      { src: "img/lab-fatigue-readout.jpg", caption: "A fatigue run: 329,167 cycles at 56,410 psi" }
    ]
  },

  /* Leadership and activities. Image is optional. */
  activities: [
    {
      title: "Treasurer & Project Lead",
      org: "Engineers for a Sustainable World",
      summary: "I keep the chapter's budget in order and lead our projects. Engineering that's good for people and the planet is worth the extra spreadsheets, and presenting our work at the poster session was a highlight.",
      image: { src: "img/esw-poster.jpg", caption: "Presenting our ESW projects poster" }
    },
    {
      title: "Human Resources & Liaison Officer",
      org: "IEEE, Texas State",
      summary: "I work on the people side of the chapter and act as the go-between with other groups. Turns out good engineering teams need good connections, not just good parts.",
      image: { src: "" }
    }
  ],

  experience: [
    {
      role: "Undergraduate Research Assistant",
      org: "Safety Autonomy and Mobility Systems Lab",
      dates: "Nov 2026 – Present", current: true,
      points: [
        "Helping set up the lab: assembling mobile robots and debugging hardware and connectivity.",
        "Getting ready for research on LiDAR, SLAM and autonomous mobility."
      ]
    },
    {
      role: "Undergraduate Instructional Assistant",
      org: "Mechanical Behavior of Materials Lab",
      dates: "Aug 2026 – Present", current: true,
      points: [
        "Set up and run tensile, compression, torsion and fatigue tests on Instron and ADMET machines.",
        "Guide students through PASCO shear and photoelasticity labs and help them read their data."
      ]
    },
    {
      role: "Undergraduate Instructional Assistant",
      org: "Engineering Graphics & CAD/CAM",
      dates: "Jan 2025 – Dec 2025",
      points: [
        "Helped students fix SolidWorks assemblies, GD&T drawings and Mastercam toolpaths.",
        "Supported CNC mini mill, waterjet and 3D printing work and kept the equipment running."
      ]
    },
    {
      role: "Physics Laboratory Instructor",
      org: "General Physics",
      dates: "Aug 2024 – Dec 2024",
      points: ["Led hands-on mechanics labs: measurement, data, uncertainty and lab safety."]
    },
    {
      role: "Undergraduate Instructional Assistant",
      org: "Digital Mechanical Engineering",
      dates: "Jan 2024 – Dec 2024",
      points: ["Helped students with digital design assignments and problem solving."]
    }
  ],

  skills: [
    { group: "Design & making", items: ["SolidWorks", "Creo", "AutoCAD", "GD&T", "Engineering drawings", "Mastercam", "CNC milling", "Waterjet", "3D printing"] },
    { group: "Analysis & testing", items: ["ANSYS", "FEA", "CFD", "Instron", "ADMET", "PASCO", "Fatigue testing", "DIC", "Photoelasticity"] },
    { group: "Code, data & robots", items: ["MATLAB", "LabVIEW", "NI DAQ", "Arduino", "Robot assembly", "LiDAR", "SLAM"] }
  ],

  education: {
    school: "Texas State University",
    degree: "B.S. Mechanical Engineering",
    detail: "Graduating December 2027 · San Marcos, TX",
    coursework: ["Heat Transfer", "Machine Design", "Computational Fluid Dynamics", "CAD/CAM", "Mechanical Behavior of Materials", "Smart Instrumentation & Measurement"]
  },

  /* What I'm looking for. Kept broad so it fits many teams. */
  seeking: {
    title: "Let's build something.",
    text: "I'm looking for internships and co-ops now, and a full-time engineering role when I graduate in December 2027. I want a team that builds real hardware, teaches hard and expects a lot. Give me that, and I'll grow into the engineer you need. If you design, test or build things that move, carry load or need to stay cool, I'd love to talk.",
    areas: ["Mechanical design", "Vehicles", "Robotics & automation", "Thermal & fluids", "Structures & test", "Manufacturing", "Research & development"]
  }
};
