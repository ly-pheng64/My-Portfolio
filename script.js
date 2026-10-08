// Mobile Hamburger Menu Toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
}

// Project Data
const webProjects = [
  {
    "img": "./assets/p1.png",
    "title": "Thmey Thmey New Clone",
    "tags": [
      "-HTML",
      "-CSS"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/thmeythmey-new-clone"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/thmeythmey-new-clone/"
      }
    ]
  },
  {
    "img": "./assets/p2.png",
    "title": "Sabay New Clone",
    "tags": [
      "-HTML",
      "-CSS"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/sabay-new-clone"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/sabay-new-clone/"
      }
    ]
  },
  {
    "img": "./assets/p4.png",
    "title": "Animated Login",
    "tags": [
      "-HTML",
      "-CSS"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/Animated-Login-Form"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/Animated-Login-Form/"
      }
    ]
  },
  {
    "img": "./assets/p6.png",
    "title": "Glassmorphism",
    "tags": [
      "-HTML",
      "-CSS",
      "-JavaScript"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/CSS-Glassmorphism"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/CSS-Glassmorphism//"
      }
    ]
  },
  {
    "img": "./assets/p5.png",
    "title": "Hover Effects",
    "tags": [
      "-HTML",
      "-CSS"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/CSS-3D-Card-Hover-Effects"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/CSS-3D-Card-Hover-Effects/"
      }
    ]
  },
  {
    "img": "./assets/p7.png",
    "title": "Infinite Wavy",
    "tags": [
      "-HTML",
      "-CSS"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/Infinite-Wavy-Border-Animation"
      },
      {
        "label": "Live\r\n                Demo",
        "url": "https://ly-pheng64.github.io/Infinite-Wavy-Border-Animation/"
      }
    ]
  },
  {
    "img": "./assets/p8.png",
    "title": "Navigation Bar",
    "tags": [
      "-HTML",
      "-CSS"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/Navigation-Bar"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/Navigation-Bar/"
      }
    ]
  },
  {
    "img": "./assets/p9.png",
    "title": "Navigation Bar",
    "tags": [],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/Section-Card-Hover-Effects"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/Section-Card-Hover-Effects/"
      }
    ]
  },
  {
    "img": "./assets/p10.png",
    "title": "CSS Animation Effects",
    "tags": [
      "-HTML",
      "-CSS"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/CSS-Animation-Effects"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/CSS-Animation-Effects/"
      }
    ]
  },
  {
    "img": "./assets/p11.png",
    "title": "Checkbox",
    "tags": [
      "-HTML",
      "-CSS"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/Custom-Checkbox"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/Custom-Checkbox/"
      }
    ]
  },
  {
    "img": "./assets/p12.png",
    "title": "Calculator",
    "tags": [
      "-HTML",
      "-CSS",
      "-JavaScript"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/Calculator-With-JavaScript"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/Calculator-With-JavaScript/"
      }
    ]
  },
  {
    "img": "./assets/p13.png",
    "title": "Curve Outside Card UI",
    "tags": [
      "-HTML",
      "-CSS"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/Curve-Outside-Card-UI"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/Curve-Outside-Card-UI/"
      }
    ]
  },
  {
    "img": "./assets/p14.png",
    "title": "Text-Shadow-Animation",
    "tags": [
      "-HTML",
      "-CSS"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/-Text-Shadow-Animation"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/-Text-Shadow-Animation/"
      }
    ]
  },
  {
    "img": "./assets/p15.png",
    "title": "Drag-Drop-Tic-Tac-Toe-Game",
    "tags": [
      "-HTML",
      "-CSS",
      "-JavaScript"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/Drag-Drop-Tic-Tac-Toe-Game"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/Drag-Drop-Tic-Tac-Toe-Game/"
      }
    ]
  },
  {
    "img": "./assets/p19.png",
    "title": "Aniwave Clone",
    "tags": [
      "-HTML",
      "-CSS"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/Aniwave-Clone"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/Aniwave-Clone/"
      }
    ]
  },
  {
    "img": "./assets/p21.png",
    "title": "To Do List",
    "tags": [
      "-HTML",
      "-CSS",
      "-JavaScript"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/To-Do-List"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/To-Do-List/"
      }
    ]
  },
  {
    "img": "./assets/p22.png",
    "title": "3D-Tilt-Effects",
    "tags": [
      "-HTML",
      "-CSS",
      "-JavaScript"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/3D-Tilt-Hover-Effects"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/3D-Tilt-Hover-Effects/"
      }
    ]
  },
  {
    "img": "./assets/p23.png",
    "title": "3D Menu",
    "tags": [
      "-HTML",
      "-CSS",
      "-JavaScript"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/3D-menu"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/3D-menu/"
      }
    ]
  },
  {
    "img": "./assets/p24.png",
    "title": "Cursor In & Out",
    "tags": [
      "-HTML",
      "-CSS",
      "-JavaScript"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/Cursor-In-Out-Ripple-Effect"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/Cursor-In-Out-Ripple-Effect/"
      }
    ]
  },
  {
    "img": "./assets/p25.png",
    "title": "Text-Animation-Effects",
    "tags": [
      "-HTML",
      "-CSS"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/Wavy-Text-Animation-Effects"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/Wavy-Text-Animation-Effects/"
      }
    ]
  },
  {
    "img": "./assets/p26.png",
    "title": "Text-Animation-Effects",
    "tags": [
      "-HTML",
      "-CSS"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/-Card-Hover-Effects"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/-Card-Hover-Effects/"
      }
    ]
  },
  {
    "img": "./assets/p27.png",
    "title": "Glowing-Corner",
    "tags": [
      "-HTML",
      "-CSS"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/CSS-Glowing-Corner"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/CSS-Glowing-Corner/"
      }
    ]
  },
  {
    "img": "./assets/p28.png",
    "title": "Glowing-Corner",
    "tags": [
      "-HTML",
      "-CSS"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/Ambient-Light-Effects"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/Ambient-Light-Effects/"
      }
    ]
  },
  {
    "img": "./assets/p29.png",
    "title": "Infinite-Stairwa",
    "tags": [
      "-HTML",
      "-CSS"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/Infinite-Stairwa"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/Infinite-Stairwa/"
      }
    ]
  },
  {
    "img": "./assets/p30.png",
    "title": "Animated-css",
    "tags": [
      "-HTML",
      "-CSS"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/Animated-css"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/Animated-css/"
      }
    ]
  },
  {
    "img": "./assets/p31.png",
    "title": "Glowing-Liquid-Glass",
    "tags": [
      "-HTML",
      "-CSS"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/Glowing-Liquid-Glass"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/Glowing-Liquid-Glass/"
      }
    ]
  },
  {
    "img": "./assets/p32.png",
    "title": "Animated",
    "tags": [
      "-HTML",
      "-CSS"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/Animated"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/Animated/"
      }
    ]
  },
  {
    "img": "./assets/p33.png",
    "title": "Card-Hover-Effects",
    "tags": [
      "-HTML",
      "-CSS"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/Card-Hover-Effects"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/Card-Hover-Effects/"
      }
    ]
  },
  {
    "img": "./assets/p34.png",
    "title": "Card-Hover-Effects",
    "tags": [
      "-HTML",
      "-CSS"
    ],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/Animated-Login-Page"
      },
      {
        "label": "Live Demo",
        "url": "https://ly-pheng64.github.io/Animated-Login-Page/"
      }
    ]
  }
];

const flutterProjects = [
  {
    "img": "./assets/p3.png",
    "title": "CellCard App Clone",
    "tags": [],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/cellcard-app-clone/"
      }
    ]
  },
  {
    "img": "./assets/p18.jpg",
    "title": "Weather-App",
    "tags": [],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/Weather-App"
      }
    ]
  },
  {
    "img": "./assets/p17.jpg",
    "title": "Mini-Grocery-Shop-App",
    "tags": [],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/Mini-Grocery-Shop-App"
      }
    ]
  },
  {
    "img": "./assets/p16.jpg",
    "title": "Food Delivery App",
    "tags": [],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/-Food-Delivery-App"
      }
    ]
  },
  {
    "img": "./assets/p20.png",
    "title": "calculator App",
    "tags": [],
    "btns": [
      {
        "label": "Github",
        "url": "https://github.com/ly-pheng64/Calculator-App"
      }
    ]
  }
];

//  Project Card HTML
function createCard(p) {
  const tagsHtml = p.tags && p.tags.length 
    ? `<div class="dis">${p.tags.map(t => `<p>${t}</p>`).join("")}</div>` 
    : "";
  const btnsHtml = p.btns
    .map(b => `<button class="btn btn-color-2 project-btn" onclick="location.href='${b.url}'">${b.label}</button>`)
    .join("");

  return `
    <div class="details color-container">
      <div class="article-container">
        <img src="${p.img}" alt="${p.title}" class="project-img" />
      </div>
      <h2 class="experience-sub-title project-title">${p.title}</h2>
      ${tagsHtml}
      <div class="btn-container">${btnsHtml}</div>
    </div>
  `;
}

// Render all projects on page load
document.addEventListener("DOMContentLoaded", () => {
  const webContainer = document.querySelector(".web");
  const flutterContainer = document.querySelector(".fultter");

  if (webContainer) webContainer.innerHTML = webProjects.map(createCard).join("");
  if (flutterContainer) flutterContainer.innerHTML = flutterProjects.map(createCard).join("");
});
