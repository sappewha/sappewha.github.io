// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-people",
          title: "People",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-patents",
          title: "Patents",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/patents/";
          },
        },{id: "nav-r-amp-d",
          title: "R&amp;D",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resndev/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-photo",
          title: "Photo",
          description: "울희의 추억,,,",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "projects-photo",
          title: 'Photo',
          description: "Official Trip to Xi&#39;an, China",
          section: "Projects",handler: () => {
              window.location.href = "/projects/20240324_China/";
            },},{id: "projects-photo",
          title: 'Photo',
          description: "ASK 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/20240523_ASK/";
            },},{id: "projects-photo",
          title: 'Photo',
          description: "2024 IT21 Global Conference",
          section: "Projects",handler: () => {
              window.location.href = "/projects/20240703_IT21/";
            },},{id: "projects-photo",
          title: 'Photo',
          description: "Official Trip to Xi&#39;an, China",
          section: "Projects",handler: () => {
              window.location.href = "/projects/20240724_China/";
            },},{id: "projects-photo",
          title: 'Photo',
          description: "2024 KISIA 정보보호 개발자 해커톤",
          section: "Projects",handler: () => {
              window.location.href = "/projects/20240820_KISA/";
            },},{id: "projects-photo",
          title: 'Photo',
          description: "2024 CVC Workshop",
          section: "Projects",handler: () => {
              window.location.href = "/projects/20241126_CVC/";
            },},{id: "projects-photo",
          title: 'Photo',
          description: "AICompS 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/20241216_AICompS/";
            },},{id: "projects-photo",
          title: 'Photo',
          description: "Mobisec 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/20241217_Mobisec/";
            },},{id: "projects-photo",
          title: 'Photo',
          description: "Official Trip to Xi&#39;an, China",
          section: "Projects",handler: () => {
              window.location.href = "/projects/20250402_China/";
            },},{id: "projects-photo",
          title: 'Photo',
          description: "스승의 날",
          section: "Projects",handler: () => {
              window.location.href = "/projects/20250515_PDay/";
            },},{id: "projects-photo",
          title: 'Photo',
          description: "AI Security &amp; Privacy 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/20250525_AISP/";
            },},{id: "projects-photo",
          title: 'Photo',
          description: "ASK 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/20250529_ASK/";
            },},{id: "projects-photo",
          title: 'Photo',
          description: "2025 CVC Workshop",
          section: "Projects",handler: () => {
              window.location.href = "/projects/20250618_CVC/";
            },},{id: "projects-photo",
          title: 'Photo',
          description: "Official Trip to Xi&#39;an, China",
          section: "Projects",handler: () => {
              window.location.href = "/projects/20250623_Xian/";
            },},{id: "projects-photo",
          title: 'Photo',
          description: "2025 IT21 Global Conference",
          section: "Projects",handler: () => {
              window.location.href = "/projects/20250701_IT21/";
            },},{id: "projects-photo",
          title: 'Photo',
          description: "Korea Computer Congress 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/20250701_KCC/";
            },},{id: "projects-photo",
          title: 'Photo',
          description: "The 26th World Conference on Information Security Applications",
          section: "Projects",handler: () => {
              window.location.href = "/projects/20250820_WISA/";
            },},{id: "projects-photo",
          title: 'Photo',
          description: "2025년 8월 29일 보은의 졸업식",
          section: "Projects",handler: () => {
              window.location.href = "/projects/20250829_BE_grad/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
