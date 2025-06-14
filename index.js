document.addEventListener("DOMContentLoaded", () => {
  const updateCursorClasses = () => {
    if (isMobileOrTablet()) {
      // Remove cursor-none class from all elements
      document.querySelectorAll("[data-cursor], .cursor-none").forEach((el) => {
        el.classList.remove("cursor-none");
        if (el.hasAttribute("data-cursor")) {
          el.removeAttribute("data-cursor");
        }
      });
    }
  };
  // Data
  const menuItems = [
    {
      id: "info",
      icon: '<img src="img/svg/human.svg" alt="Info icon" class="w-7 h-7" />',
      label: "Info",
    },
    {
      id: "skills",
      icon: '<img src="img/svg/skill.svg" alt="Skills Icon" class="w-7 h-7" />',
      label: "Skills",
    },
    {
      id: "projects",
      icon: '<img src="img/svg/rocket.svg" alt="Projects Icon" class="w-7 h-7" />',
      label: "Projects",
    },
    {
      id: "contact",
      icon: '<img src="img/svg/mail.svg" alt="Contact Icon" class="w-7 h-7" />',
      label: "Contact",
    },
  ];

  const projects = [
    {
      title: "Tachikawa City",
      description: "2カラムレイアウトの立川市の情報サイト",
      fullDescription: `
        <div class="space-y-4">
          <p data-cursor="text">このウェブサイトは、東京西部にある立川市を紹介するために作成されました。立川市は充実した都市機能を持ち、公共交通機関から公園、モールまで、生活に必要なあらゆる施設が整っています。ウェブサイトは2カラムレイアウトを採用し、様々なデバイスに対応するレスポンシブデザインとなっています。トップページには印象的な大きなビジュアルを配置しており、サイトにアクセスした瞬間から訪問者の目を引き、立川市の魅力を伝えます。</p>

          <div class="flex flex-col space-y-2">
            <div class="flex items-center">
              <span class="text-white">サイトのリンク先：</span>
              <a href="https://tachikawacity.anhnangcuaem.com" target="_blank" class="inline-flex">
                <button class="link-btn">こちら</button>
              </a>
            </div>
            
            <div class="flex items-center">
              <span class="text-white">Github:</span>
              <a href="https://github.com/AnhNangCuaEm/TachikawaCity" target="_blank"class="inline-flex">
                <button class="link-btn">こちら</button>
              </a>
            </div>
          </div>

            <p class="text-sm text-gray-400">※このサイトは、学習プロジェクトです。</p>
        </div>
      `,
      image:
        "img/project-img/tachikawacity/Screenshot 2025-06-11 162739.jpg",
      gallery: [
        "img/project-img/tachikawacity/Screenshot 2025-06-11 162739.jpg",
        "img/project-img/tachikawacity/Screenshot 2025-06-11 162757.jpg",
        "img/project-img/tachikawacity/Screenshot 2025-06-11 162809.jpg",
        "img/project-img/tachikawacity/Screenshot 2025-06-11 162827.jpg",
      ],
      tech: ["JavaScript", "HTML", "Tailwind CSS"],
      team: [
        {
          name: "Le Ly Thanh Hai",
          role: "Frontend Developer",
          responsibilities: "All",
        },
      ],
    },
    {
      title: "MusicPlayer",
      description: "オンラインで音楽を楽しむためのWebアプリケーション",
      fullDescription: `
        <div class="space-y-4">
          <p data-cursor="text">MusicPlayerは、オンライン音楽プレイヤーの機能を提供するWebアプリケーションです。再生、シャッフル、次へ、前へ、リピートなどの基本的な操作をサポートしています。プレイリストから曲をクリックするとその曲を再生できます。また、歌詞の表示機能がありリアルタイム歌ってるところをハイライトされています。</p>
          
          <div class="flex flex-col space-y-2">
            <div class="flex items-center">
              <span class="text-white">サイトのリンク先：</span>
              <a href="https://musicplayer.anhnangcuaem.com" target="_blank" data-cursor="block" class="inline-flex">
                <button class="link-btn" data-cursor="block">こちら</button>
              </a>
            </div>
            
            <div class="flex items-center">
              <span class="text-white">Github：</span>
              <a href="https://github.com/AnhNangCuaEm/MusicPlayer" target="_blank" data-cursor="block" class="inline-flex">
                <button class="link-btn" data-cursor="block">こちら</button>
              </a>
            </div>
          </div>

            <p class="text-sm text-gray-400">※このサイトは、学習プロジェクトです。</p>
        </div>
      `,
      image:
        "img/project-img/musicplayer/Screenshot 2025-03-10 at 10.50.03 PM.png",
      gallery: [
        "img/project-img/musicplayer/Screenshot 2025-03-10 at 10.42.51 PM.png",
        "img/project-img/musicplayer/Screenshot 2025-03-10 at 10.43.07 PM.png",
        "img/project-img/musicplayer/Screenshot 2025-03-10 at 10.43.25 PM.png",
      ],
      tech: ["JavaScript", "HTML", "CSS"],
      team: [
        {
          name: "Le Ly Thanh Hai",
          role: "Frontend Developer",
          responsibilities: "All",
        },
      ],
    },
    {
      title: "GreenSpace",
      description:
        "公園施設とイベント情報を提供する総合ポータルサイトと管理システム",
      fullDescription: `
        <div class="space-y-4">
          <p>GreenSpaceは、あらゆるデバイスに最適化されたモダンなレスポンシブデザインを採用し、直感的な操作性を実現しています。リアルタイム検索機能により、ユーザーは必要な公園やイベント情報にスムーズにアクセスできます。管理者向けには、データベースの専門知識がなくても簡単に情報を管理できる専用システムを実装。さらに、アクセス解析やユーザーフィードバックの可視化機能により、効果的な運営をサポートします。堅牢なアカウント管理システムにより、安全性と使いやすさを両立させています。</p>
            <div class="flex items-center">
              <span class="text-white">Github：</span>
              <a href="https://github.com/AnhNangCuaEm/GREENSPACE" target="_blank" data-cursor="block" class="inline-flex">
                <button class="link-btn" data-cursor="block">こちら</button>
              </a>
            </div>
          </div>
          
          <p class="text-sm text-gray-400">※このサイトは、学習プロジェクトです。</p>
        </div>
      `,
      image: "img/project-img/greenspace/greenspace.jpg",
      gallery: [
        "img/project-img/greenspace/greenspace1.png",
        "img/project-img/greenspace/greenspace2.jpg",
        "img/project-img/greenspace/greenspace3.jpg",
        "img/project-img/greenspace/greenspace4.jpg",
      ],
      tech: ["PHP", "JavaScript", "MySQL", "CSS", "HTML"],
      team: [
        {
          name: "Le Ly Thanh Hai",
          role: "Full Stack Developer",
          responsibilities: "All",
        },
      ],
    },
    {
      title: "DeepShinjuku",
      description: "新宿の都市伝説と怪談を紐解く没入型ウェブ体験",
      fullDescription: `
        <div class="space-y-4">
          <p>「DEEP新宿 - 新宿怪談集」は、新宿区に伝わる不思議な物語と都市伝説を現代的な視点で紹介するウェブサイトです。長い歴史の中で織りなされてきた数々の怪談や都市伝説を通じて、新宿という街が持つ独特の文化的深層に迫ります。現代都市の喧騒の中に潜む神秘的な物語の数々が、訪れる人々を魅了する新しい新宿の一面を提示します。</p>
          
          <div class="flex flex-col space-y-2">
            <div class="flex items-center">
              <span class="text-white">サイトのリンク先：</span>
              <a href="https://deepshinjuku.anhnangcuaem.com" target="_blank" data-cursor="block" class="inline-flex">
                <button class="link-btn" data-cursor="block">こちら</button>
              </a>
            </div>
            
            <div class="flex items-center">
              <span class="text-white">Github：</span>
              <a href="https://github.com/AnhNangCuaEm/Deep-Shinjuku" target="_blank" data-cursor="block" class="inline-flex">
                <button class="link-btn" data-cursor="block">こちら</button>
              </a>
            </div>
          </div>
          
          <p class="text-sm text-gray-400">※このサイトは、学習プロジェクトです。</p>
        </div>
      `,
      image: "img/project-img/deepshinjuku/deepshinjuku.jpeg",
      gallery: [
        "img/project-img/deepshinjuku/deepshinjuku1.jpg",
        "img/project-img/deepshinjuku/deepshinjuku2.jpg",
        "img/project-img/deepshinjuku/deepshinjuku3.png",
        "img/project-img/deepshinjuku/deepshinjuku4.jpg",
      ],
      tech: ["PHP", "JavaScript", "CSS", "HTML"],
      team: [
        {
          name: "Le Ly Thanh Hai",
          role: "Backend Developer",
          responsibilities: "Like and Comment Function, ...",
        },
        {
          name: "LIUCHIAWEI",
          role: "Frontend Developer",
          responsibilities: "Index Page, Animation, ...",
        },
        {
          name: "李森",
          role: "UI/UX Designer",
          responsibilities: "UI/UX Design, ...",
        },
        {
          name: "KAUNGTHAR",
          role: "Photographer",
          responsibilities: "Photo, Presentation, ...",
        },
        {
          name: "鍾嘉朗",
          role: "Frontend Developer",
          responsibilities: "Intro Page, ...",
        },
        {
          name: "若林真緒",
          role: "Planner",
          responsibilities: "Plan, ...",
        },
      ],
    },
    {
      title: "Boulangeries",
      description: "西新宿のベーカリーの魅力を伝えるブランドサイト",
      fullDescription: `
        <div class="space-y-4">
          <p>西新宿に位置するベーカリーの魅力を余すことなく伝えるウェブサイトです。こだわりの商品メニュー、店舗へのアクセス、最新ニュースなど、パン好きの心をくすぐる情報を丁寧に紹介しています。</p>
          
          <div class="flex flex-col space-y-2">
            <div class="flex items-center">
              <span class="text-white">サイトのリンク先：</span>
              <a href="https://boulangeries.anhnangcuaem.com" target="_blank" class="inline-flex">
                <button class="link-btn">こちら</button>
              </a>
            </div>
            
            <div class="flex items-center">
              <span class="text-white">Github:</span>
              <a href="https://github.com/AnhNangCuaEm/Boulangerie" target="_blank" class="inline-flex">
                <button class="link-btn">こちら</button>
              </a>
            </div>
          </div>
          
          <p class="text-sm text-gray-400">※このサイトは、学習プロジェクトです。</p>
        </div>
      `,
      image: "img/project-img/boulangerie/boulangerie.jpg",
      gallery: [
        "img/project-img/boulangerie/boulangerie1.jpg",
        "img/project-img/boulangerie/boulangerie2.jpg",
        "img/project-img/boulangerie/boulangerie3.jpg",
        "img/project-img/boulangerie/boulangerie4.jpg",
      ],
      tech: ["JavaScript", "Tailwind CSS", "HTML"],
      team: [
        {
          name: "Le Ly Thanh Hai",
          role: "Frontend Developer",
          responsibilities: "All",
        },
      ],
    },
    {
      title: "Artist",
      description:
        "アーティストの創造世界を表現するクリエイティブポートフォリオ",
      fullDescription: `
        <div class="space-y-4">
          <p>アーティストの独創性と芸術世界を最大限に引き出すよう設計された、モダンでインタラクティブなポートフォリオサイトです。作品展示やプロフィール、SNSフィード、今後のイベント情報など、アーティストの活動を多角的に発信します。洗練されたアニメーションとレスポンシブデザインにより、デバイスを問わず没入感のある閲覧体験を提供します。</p>
          
          <p class="text-sm text-gray-400">※このサイトは、学習プロジェクトです。</p>
        </div>
      `,
      image: "img/project-img/artistsite/artissite.jpg",
      gallery: [
        "img/project-img/artistsite/artistsite1.jpg",
        "img/project-img/artistsite/artistsite2.jpg",
      ],
      tech: ["JavaScript", "CSS", "HTML"],
      team: [
        {
          name: "Le Ly Thanh Hai",
          role: "Frontend Developer",
          responsibilities: "All",
        },
      ],
    },
    {
      title: "CocoonTower",
      description: "コクーンタワーの魅力を発信する総合情報サイト",
      fullDescription: `
        <div class="space-y-4">
          <p>コクーンタワーの施設情報、テナント情報、教育機関情報を一元化した総合情報ポータルです。洗練された直感的なデザインにより、求める情報へのアクセスを容易にしています。視覚的にわかりやすいアクセスマップと施設案内により、初めての来訪者でも迷うことなく目的地へ到着できるよう配慮されています。</p>
          
          <p class="text-sm text-gray-400">※このサイトは、学習プロジェクトです。</p>
        </div>
      `,
      image: "img/project-img/cocoonsite/cocoonsite.jpg",
      gallery: [
        "img/project-img/cocoonsite/cocoonsite1.jpg",
        "img/project-img/cocoonsite/cocoonsite2.jpg",
        "img/project-img/cocoonsite/cocoonsite3.jpg",
      ],
      tech: ["CSS", "HTML"],
      team: [
        {
          name: "Le Ly Thanh Hai",
          role: "Frontend Developer",
          responsibilities: "Frontend development, ...",
        },
        {
          name: "程世豪",
          role: "UI/UX Designer",
          responsibilities: "UI/UX Design, Logo Design, ...",
        },
        {
          name: "有薗柊哉",
          role: "Photographer",
          responsibilities: "Photo, ...",
        },
        {
          name: "若林真緒",
          role: "Planner",
          responsibilities: "Plan, ...",
        },
      ],
    },
    {
      title: "MovieSite",
      description: "映画「Interstellar」の公式プロモーションサイト",
      fullDescription: `
        <div class="space-y-4">
          <p>映画「Interstellar」の魅力を伝える公式サイトです。作品概要、キャスト情報、レビューなど、映画の世界観を余すことなく紹介します。宇宙をモチーフにしたUIデザインにより、作品の壮大なスケールを視覚的に表現しています。</p>
          
          <p class="text-sm text-gray-400">※このサイトは、学習プロジェクトです。</p>
        </div>
      `,
      image: "img/project-img/moviesite/moviesite.jpg",
      gallery: [
        "img/project-img/moviesite/moviesite1.jpg",
        "img/project-img/moviesite/moviesite2.jpg",
        "img/project-img/moviesite/moviesite3.jpg",
      ],
      tech: ["CSS", "HTML"],
      team: [
        {
          name: "Le Ly Thanh Hai",
          role: "Frontend Developer",
          responsibilities: "All",
        },
      ],
    },
    {
      title: "CafeSite",
      description: "架空のカフェを演出する雰囲気重視の情報サイト",
      fullDescription: `
        <div class="space-y-4">
          <p>架空のカフェの世界観を表現したウェブサイトです。カフェならではの温かみのある雰囲気をUIデザインで表現し、メニュー情報、アクセス情報、ニュースなど、実在するかのような臨場感のある情報を提供します。</p>
          
          <p class="text-sm text-gray-400">※このサイトは、学習プロジェクトです。</p>
        </div>
      `,
      image: "img/project-img/cafesite/cafesite.png",
      gallery: [
        "img/project-img/cafesite/cafesite1.jpg",
        "img/project-img/cafesite/cafesite2.jpg",
        "img/project-img/cafesite/cafesite3.jpg",
        "img/project-img/cafesite/cafesite4.jpg",
      ],
      tech: ["CSS", "HTML"],
      team: [
        {
          name: "Le Ly Thanh Hai",
          role: "Frontend Developer",
          responsibilities: "All",
        },
      ],
    },
  ];

  // Main layout
  document.body.className =
    "bg-gradient-to-br from-purple-900 to-black min-h-screen flex items-center justify-center p-4";

  // Side Menu
  const sideMenu = `
        <div class="relative">
            <!-- Main menu container -->
            <div id="sideMenu" class="fixed left-4 top-1/2 -translate-y-1/2 h-fit w-64 bg-white/5 rounded-2xl backdrop-blur-xl border border-white/10 p-6 
                transform -translate-x-full lg:-translate-x-full z-50 transition-transform duration-500 ease-out flex flex-col justify-center">
                <div class="flex flex-col items-center mb-8">
                    <h1 class="text-white text-2xl font-bold mb-4">Portfolio</h1>
                </div>
                <nav class="space-y-4">
                    ${menuItems
                      .map(
                        (item) => `
                        <button 
                            data-section="${item.id}"
                            data-cursor="block"
                            class="cursor-none menu-item w-full text-center text-gray-300 p-4 rounded-xl transition-all flex flex-col items-center space-y-2
                                   ${item.id === "info" ? "bg-white/10" : ""}"
                        >
                            <span class="text-2xl">${item.icon}</span>
                            <span>${item.label}</span>
                        </button>
                    `
                      )
                      .join("")}
                </nav>
            </div>
        </div>
        <button id="menuToggle" class="cursor-none fixed left-[275px] top-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-xl p-2 hover:border-violet-500 rounded-lg border border-white/10 
            text-white transition-all duration-300 lg:hidden z-50 transform -translate-x-64">
            <svg id="menuIcon" class="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
        </button>
    `;

  // Content Area
  const contentArea = `
        <div id="content" class="flex-1 lg:ml-64">
            ${renderInfo()} <!-- Default content -->
        </div>
    `;

  // Combine layouts
  document.body.innerHTML = `
        ${sideMenu}
        <div class="flex flex-col w-full max-w-7xl mx-auto">
            ${contentArea}
        </div>
    `;

  const style = document.createElement("style");
  style.textContent = `
      @keyframes fadeInUp {
         from {
            opacity: 0;
            transform: translateY(20px);
         }
         to {
            opacity: 1;
            transform: translateY(0);
         }
      }

      .animate-content {
         animation: fadeInUp 0.6s ease-out forwards;
      }

      /* Project Cards Animation */
      .project-card {
         transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      
      .project-card.show {
         opacity: 1;
         transform: translateY(0);
      }

      /* Contact Form Success Animation */
      .success-animation {
         margin: 20px auto;
      }

      .success-checkmark {
         width: 80px;
         height: 80px;
         margin: 0 auto;
         position: relative;
      }

      .check-icon {
         width: 80px;
         height: 80px;
         position: relative;
         border-radius: 50%;
         box-sizing: content-box;
         border: 4px solid #4CAF50;
      }

      .check-icon::before {
         top: 3px;
         left: -2px;
         width: 30px;
         transform-origin: 100% 50%;
         border-radius: 100px 0 0 100px;
      }

      .check-icon::after {
         top: 0;
         left: 30px;
         width: 60px;
         transform-origin: 0 50%;
         border-radius: 0 100px 100px 0;
         animation: rotate-circle 4.25s ease-in;
      }

      .check-icon::before, .check-icon::after {
         content: '';
         height: 100px;
         position: absolute;
         background: transparent;
         transform: rotate(-45deg);
      }

      .icon-line {
         height: 5px;
         background-color: #4CAF50;
         display: block;
         border-radius: 2px;
         position: absolute;
         z-index: 10;
      }

      .line-tip {
         top: 46px;
         left: 14px;
         width: 25px;
         transform: rotate(45deg);
         animation: icon-line-tip 0.75s;
      }

      .line-long {
         top: 38px;
         right: 8px;
         width: 47px;
         transform: rotate(-45deg);
         animation: icon-line-long 0.75s;
      }

      .icon-circle {
         top: -4px;
         left: -4px;
         z-index: 10;
         width: 80px;
         height: 80px;
         border-radius: 50%;
         position: absolute;
         box-sizing: content-box;
         border: 4px solid rgba(76, 175, 80, .5);
      }

      .icon-fix {
         top: 8px;
         width: 5px;
         left: 26px;
         z-index: 1;
         height: 85px;
         position: absolute;
         transform: rotate(-45deg);
         background-color: transparent;
      }

      .link-btn {
        cursor: none;
         background-color: rgb(143 143 143 / 50%);
         color: white;
         border: none;
         padding: 8px 10px;
         margin-left: 7px;
         border-radius: 14px;}

      .link-btn:hover {
          background-color: rgb(143 143 143 / 70%);
          color: white;
          transition: all 0.3s ease;
          }

      @keyframes rotate-circle {
         0% {
            transform: rotate(-45deg);
         }
         5% {
            transform: rotate(-45deg);
         }
         12% {
            transform: rotate(-405deg);
         }
         100% {
            transform: rotate(-405deg);
         }
      }

      @keyframes icon-line-tip {
         0% {
            width: 0;
            left: 1px;
            top: 19px;
         }
         54% {
            width: 0;
            left: 1px;
            top: 19px;
         }
         70% {
            width: 50px;
            left: -8px;
            top: 37px;
         }
         84% {
            width: 17px;
            left: 21px;
            top: 48px;
         }
         100% {
            width: 25px;
            left: 14px;
            top: 45px;
         }
      }

      @keyframes icon-line-long {
         0% {
            width: 0;
            right: 46px;
            top: 54px;
         }
         65% {
            width: 0;
            right: 46px;
            top: 54px;
         }
         84% {
            width: 55px;
            right: 0px;
            top: 35px;
         }
         100% {
            width: 47px;
            right: 8px;
            top: 38px;
         }
      }

      .error-animation {
         margin: 20px auto;
         width: 80px;
         height: 80px;
         position: relative;
      }

      .error-icon {
         width: 80px;
         height: 80px;
         position: relative;
         border-radius: 50%;
         box-sizing: content-box;
         border: 4px solid #FF5252;
         animation: error-circle 0.5s;
      }

      .error-x {
         position: relative;
         width: 80px;
         height: 80px;
      }

      .error-x:before, .error-x:after {
         position: absolute;
         content: '';
         width: 5px;
         height: 40px;
         background-color: #FF5252;
         border-radius: 2px;
         top: 20px;
         left: 37px;
      }

      .error-x:before {
         transform: rotate(45deg);
         animation: error-x-left 0.5s;
      }

      .error-x:after {
         transform: rotate(-45deg);
         animation: error-x-right 0.5s;
      }

      @keyframes error-circle {
         from {
            transform: scale(0);
            opacity: 0;
         }
         to {
            transform: scale(1);
            opacity: 1;
         }
      }

      @keyframes error-x-left {
         from {
            transform: rotate(45deg) scale(0);
         }
         to {
            transform: rotate(45deg) scale(1);
         }
      }

      @keyframes error-x-right {
         from {
            transform: rotate(-45deg) scale(0);
         }
         to {
            transform: rotate(-45deg) scale(1);
         }
      }
   `;
  document.head.appendChild(style);

  const scrollStyle = document.createElement("style");
  scrollStyle.textContent = `
      .project-card {
         opacity: 0;
         transform: translateY(20px);
         transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
      }
      
      .project-card.show {
         opacity: 1;
         transform: translateY(0);
         transition: opacity 0.5s ease-out, transform 0.5s ease-out;
      }

      .project-card:hover {
         transform: scale(1.02);
         box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      }
   `;
  document.head.appendChild(scrollStyle);

  // Content Renderers
  function renderInfo() {
    return `
          <div class="w-full p-2 sm:p-4 animate-fade-in-up">
              <div class="bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-8 border border-white/10 shadow-2xl 
                          opacity-0 translate-y-4 animate-content">
                  <div class="flex flex-col items-center gap-6 sm:gap-8">
                      <div class="w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-purple-500/30">
                          <img src="img/avatar.png" alt="Profile" class="w-full h-full object-cover mt-2.5">
                      </div>
                      <div class="text-center">
                          <h1 class="text-2xl sm:text-4xl font-bold text-white mb-2">Le Ly Thanh Hai</h1>
                          <h2 class="text-xl sm:text-2xl font-bold text-white mb-2">レリタン ハイ</h2>
                          <p class="text-lg sm:text-xl text-purple-400 mb-4">Full Stack Developer</p>
                          
                          <!-- Education -->
                          <div class="mb-6">
                              <h2 class="text-xl text-white font-semibold mb-2">Education</h2>
                              <p class="text-gray-300">
                                  HAL Tokyo - WEB学科
                                  <span class="text-purple-400 block text-sm">2024 - 現在</span>
                              </p>
                          </div>

                          <!-- About Me -->
                          <p class="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mb-6">
                              Web開発を学習中です。フロントエンドではHTML/CSS/JavaScript、バックエンドではPHP/MySQLを使用してプロジェクトを開発しています。
                              現在、NextjsとLaravelの学習に取り組んでおり、モダンな開発技術の習得に励んでいます。
                              <br><br>
                              新しい技術に対する強い興味と、チーム開発への意欲を持っています。ユーザー目線のWeb開発を心がけ、価値あるサービスの創造を目指しています。
                          </p>

                          <!-- Interests -->
                          <div class="mb-6">
                              <h2 class="text-xl text-white font-semibold mb-3">Interests</h2>
                              <div class="flex flex-wrap justify-center gap-3">
                                  <span class="px-4 py-2 bg-white/5 rounded-full text-gray-300 border border-white/10">
                                      <i class="fas fa-camera mr-2"></i>Photography
                                  </span>
                                  <span class="px-4 py-2 bg-white/5 rounded-full text-gray-300 border border-white/10">
                                      <i class="fas fa-plane-departure mr-2"></i>Traveling
                                  </span>
                                  <span class="px-4 py-2 bg-white/5 rounded-full text-gray-300 border border-white/10">
                                      <i class="fas fa-music mr-2"></i>Music
                                  </span>
                                  <span class="px-4 py-2 bg-white/5 rounded-full text-gray-300 border border-white/10">
                                      <i class="fas fa-code mr-2"></i>Coding
                                  </span>
                              </div>
                          </div>

                          <!-- Current Learning -->
                          <div class="mb-6">
                              <h2 class="text-xl text-white font-semibold mb-3">Currently Learning</h2>
                              <div class="flex flex-wrap justify-center gap-3">
                                  <span class="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300">Nextjs</span>
                                  <span class="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300">Laravel</span>
                              </div>
                          </div>

                          <!-- Contact Links -->
                          <div class="flex flex-wrap justify-center gap-4 mt-6">
                              <a href="https://github.com/AnhNangCuaEm" target="_blank" 
                                 class="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                                  <i class="fab fa-github text-xl sm:text-2xl"></i>
                                  <span>GitHub</span>
                              </a>
                              <a href="https://www.linkedin.com/in/haile1302/" target="_blank" 
                                 class="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                                  <i class="fab fa-linkedin text-xl sm:text-2xl"></i>
                                  <span>LinkedIn</span>
                              </a>
                            <div class="flex items-center text-gray-300 relative group" 
                                id="emailContainer" 
                                onclick="copyEmailToClipboard('thanhhailth1302@gmail.com')">
                                <i class="fas fa-envelope text-xl sm:text-2xl mr-2"></i>
                                <span class="text-sm sm:text-base">thanhhailth1302@gmail.com</span>
                                <!-- Tooltip -->
                                <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-xl text-white text-xs py-1 px-2 rounded opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-white/10">
                                    Click to copy to clipboard
                                </div>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      `;
  }

  function renderSkills() {
    const skills = [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "PHP", level: 80 },
      { name: "MySQL", level: 70 },
      { name: "Git", level: 70 },
      { name: "Figma", level: 70 },
      { name: "Tailwind CSS", level: 60 },
      { name: "Adobe Photoshop", level: 60 },
      { name: "Adobe Illustrator", level: 60 },
      { name: "Adobe Premiere Pro", level: 60 },
    ];

    return `
            <div class="w-full">
                <div class="grid md:grid-cols-2 gap-6">
                    ${skills
                      .map(
                        (skill) => `
                        <div class="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 shadow-lg">
                            <div class="flex justify-between mb-2">
                                <span class="text-white">${skill.name}</span>
                                <span class="text-purple-400 skill-percentage" data-target="${skill.level}">0%</span>
                            </div>
                            <div class="w-full bg-gray-700/30 rounded-full h-2.5">
                                <div class="bg-purple-500 h-2.5 rounded-full skill-bar" style="width: 0%"></div>
                            </div>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            </div>
        `;
  }

  function renderProjects() {
    return `
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           ${projects
             .map(
               (project, index) => `
              <div class="project-card bg-gray-800/30 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700/30 
                        cursor-pointer opacity-0 translate-y-4 w-full relative h-80"
                   data-show-delay="${index * 100}"
                   onclick="openProjectModal(${index})">
                 <img src="${project.image}" alt="${
                 project.title
               }" class="w-full h-full object-cover">
                 <div class="absolute inset-0 bg-black/45 backdrop-blur-[2px] p-6 flex flex-col justify-end">
                     <p class="text-2xl text-white font-bold mb-2">${
                       project.title
                     }</p>
                     <p class="text-gray-300 mb-4">${project.description}</p>
                     <div class="flex flex-wrap gap-2">
                         ${project.tech
                           .map(
                             (t) => `
                             <span class="px-3 py-1 bg-purple-800/70 text-purple-300 rounded-full text-sm">${t}</span>
                         `
                           )
                           .join("")}
                     </div>
                 </div>
              </div>
           `
             )
             .join("")}
        </div>

        <!-- Project Modal -->
        <div id="projectModal" class="fixed inset-0 z-50 hidden">
           <div class="container mx-auto min-h-full flex items-center justify-center py-8 px-4">
              <div class="bg-white/5 backdrop-blur-xl rounded-3xl max-w-4xl mx-auto border border-white/10 shadow-2xl 
                          transform scale-0 opacity-0 transition-all duration-300 ease-out">
                 <div class="relative">
                    <button onclick="closeProjectModal()" 
                            class="cursor-none absolute -right-0 -top-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-2 
                                   text-white hover:text-purple-400 transition-colors duration-300 hover:border-purple-400/50 z-10">
                       <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                       </svg>
                    </button>
                    <div id="modalContent" class="p-8 bg-black/30 rounded-3xl border border-white/10 shadow-2xl">
                    </div>
                 </div>
              </div>
           </div>
        </div>
     `;
  }

  function renderContact() {
    return `
        <div class="max-w-2xl mx-auto">
            <div class="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl
                        opacity-0 translate-y-4 animate-content">
                <form id="contactForm" class="space-y-6">
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <input type="text" 
                                name="from_name"
                                placeholder="Your Name" 
                                required
                                class="w-full bg-gray-900/50 border border-gray-700/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500">
                        </div>
                        <div>
                            <input type="email" 
                                name="from_email"
                                placeholder="Email" 
                                required
                                class="w-full bg-gray-900/50 border border-gray-700/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500">
                        </div>
                    </div>
                    <div>
                        <textarea 
                            name="message"
                            placeholder="Message" 
                            rows="5"
                            required
                            class="w-full bg-gray-900/50 border border-gray-700/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"></textarea>
                    </div>
                    <div id="successMessage" class="hidden success-animation">
                        <div class="success-checkmark">
                            <div class="check-icon">
                                <span class="icon-line line-tip"></span>
                                <span class="icon-line line-long"></span>
                                <div class="icon-circle"></div>
                                <div class="icon-fix"></div>
                            </div>
                        </div>
                        <p class="text-green-500 text-center mt-4">Message sent successfully!</p>
                    </div>
                    <div id="errorMessage" class="hidden">
                        <div class="error-animation">
                            <div class="error-icon">
                                <div class="error-x"></div>
                            </div>
                        </div>
                        <p class="text-red-500 text-center mt-4">Failed to send message. Please try again later.</p>
                    </div>
                    <button type="submit" class="cursor-none w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg transition-colors">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    `;
  }

  // Move the event listener setup into a function
  function setupModalListeners() {
    const modal = document.getElementById("projectModal");
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target.id === "projectModal") {
          closeProjectModal();
        }
      });

      // Add escape key listener
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal.classList.contains("hidden")) {
          closeProjectModal();
        }
      });
    }
  }

  // Update the menu click handler to call setupModalListeners
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      document
        .querySelectorAll(".menu-item")
        .forEach((i) => i.classList.remove("bg-white/10"));

      e.currentTarget.classList.add("bg-white/10");

      const section = e.currentTarget.dataset.section;
      const contentDiv = document.getElementById("content");

      switch (section) {
        case "info":
          contentDiv.innerHTML = renderInfo();
          break;
        case "skills":
          contentDiv.innerHTML = renderSkills();
          animateSkills();
          break;
        case "projects":
          contentDiv.innerHTML = renderProjects();
          initProjectsAnimation();
          setupModalListeners();
          break;
        case "contact":
          contentDiv.innerHTML = renderContact();
          initContactForm();
          break;
      }

      // Automatically close the side menu after clicking a menu item
      const sideMenu = document.getElementById("sideMenu");
      const menuToggle = document.getElementById("menuToggle");
      const menuIcon = document.getElementById("menuIcon");

      // Check if the menu is open
      if (!sideMenu.classList.contains("-translate-x-full")) {
        sideMenu.classList.add("-translate-x-full");
        menuToggle.classList.add("-translate-x-64");
        menuIcon.style.transform = "rotate(0deg)";
      }
    });
  });

  // Mobile menu toggle
  document.getElementById("menuToggle").addEventListener("click", () => {
    const sideMenu = document.getElementById("sideMenu");
    const menuToggle = document.getElementById("menuToggle");
    const menuIcon = document.getElementById("menuIcon");
    const isOpen = !sideMenu.classList.contains("-translate-x-full");

    if (isOpen) {
      sideMenu.classList.add("-translate-x-full");
      menuToggle.classList.add("-translate-x-64");
      menuIcon.style.transform = "rotate(0deg)";
    } else {
      sideMenu.classList.remove("-translate-x-full");
      menuToggle.classList.remove("-translate-x-64");
      menuIcon.style.transform = "rotate(180deg)";
    }
  });

  function animateSkills() {
    const skillBars = document.querySelectorAll(".skill-bar");
    const skillPercentages = document.querySelectorAll(".skill-percentage");

    skillBars.forEach((bar, index) => {
      const target = parseInt(skillPercentages[index].dataset.target);
      let width = 0;
      const duration = 1500;
      const interval = 10;
      const increment = (target / duration) * interval;

      const animation = setInterval(() => {
        if (width >= target) {
          clearInterval(animation);
          return;
        }
        width += increment;
        if (width > target) width = target;

        bar.style.width = `${width}%`;
        skillPercentages[index].textContent = `${Math.round(width)}%`;
      }, interval);
    });
  }

  function initProjectsAnimation() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.showDelay;
            setTimeout(() => {
              entry.target.classList.add("show");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    document.querySelectorAll(".project-card").forEach((card) => {
      observer.observe(card);
    });
  }

  function initContactForm() {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitButton = form.querySelector('button[type="submit"]');
      submitButton.disabled = true;
      submitButton.innerHTML = "Sending...";

      successMessage.classList.add("hidden");
      errorMessage.classList.add("hidden");

      const formData = {
        from_name: form.from_name.value,
        from_email: form.from_email.value,
        message: form.message.value,
      };

      try {
        const result = await emailjs.sendForm(
          "service_uno6zzf",
          "template_svg8ahb",
          form, // Gửi form trực tiếp thay vì formData
          "2QtkhVZdrh0jfJEBt"
        );

        if (result.status === 200) {
          successMessage.classList.remove("hidden");
          form.reset();
        } else {
          errorMessage.classList.remove("hidden");
        }
      } catch (error) {
        errorMessage.classList.remove("hidden");
      } finally {
        // Restore button state
        submitButton.disabled = false;
        submitButton.innerHTML = "Send Message";
      }
    });
  }

  window.openProjectModal = function (index) {
    const project = projects[index];
    const modal = document.getElementById("projectModal");
    const modalContent = document.getElementById("modalContent");
    const modalContainer = modalContent.parentElement.parentElement;

    // Update modal structure with max-height and scrollable content
    modal.classList =
      "fixed inset-0 z-50 hidden flex items-center justify-center p-4";
    modal.innerHTML = `
         <div class="absolute inset-0" onclick="closeProjectModal()"></div>
         <div class="bg-white/5 backdrop-blur-xl rounded-3xl w-full max-w-3xl mx-auto border border-white/10 shadow-2xl 
                     transform scale-0 opacity-0 transition-all duration-300 ease-out relative max-h-[90vh]">
            <div class="relative rounded-3xl">
                <button onclick="closeProjectModal()" 
                        class="cursor-none absolute -right-0 -top-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-2 
                               text-white hover:text-purple-400 transition-colors duration-300 hover:border-purple-400/50 z-10">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
                <div id="modalContent" class="p-8 bg-black/30 rounded-3xl border border-white/10 shadow-2xl">
                </div>
            </div>
         </div>
      `;

    // Set content with scrollable area
    document.getElementById("modalContent").innerHTML = `
         <div class="space-y-6 max-h-[calc(85vh-4rem)] overflow-y-auto rounded-xl">
            <!-- Image Gallery -->
            <div class="relative">
                <div class="flex space-x-4 overflow-x-auto rounded-xl">
                    <img src="${project.image}" alt="${
      project.title
    }" class="max-h-[300px] w-auto object-cover rounded-xl aspect-16/9">
                    ${
                      project.gallery
                        ? project.gallery
                            .map(
                              (img) => `
                        <img src="${img}" alt="${project.title}" class="max-h-[300px] w-auto object-cover rounded-xl aspect-16/9">
                    `
                            )
                            .join("")
                        : ""
                    }
                </div>
                <div class="w-full text-center text-white text-sm mt-2">Swipe to see more</div>
            </div>

            <!-- Rest of the content -->
            <div>
                <h2 class="text-3xl font-bold text-white mb-4">${
                  project.title
                }</h2>
                <p class="text-gray-300 mb-6 text-warp">${
                  project.fullDescription || project.description
                }</p>

                <!-- Technologies -->
                <h4 class="text-xl font-bold text-white mb-3">Technologies Used</h4>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${project.tech
                      .map(
                        (t) => `
                        <span class="px-3 py-1 bg-purple-800/70 text-purple-300 rounded-full border border-purple-500/30">${t}</span>
                    `
                      )
                      .join("")}
                </div>

                <!-- Team Members -->
                ${
                  project.team
                    ? `
                    <h3 class="text-xl font-bold text-white mb-3">Team Members</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        ${project.team
                          .map(
                            (member) => `
                            <div class="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
                                <h4 class="text-lg font-semibold text-white">${member.name}</h4>
                                <p class="text-purple-400">${member.role}</p>
                                <p class="text-gray-400 mt-2">${member.responsibilities}</p>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                `
                    : ""
                }
            </div>
         </div>
      `;

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    // Add scale and fade-in animation
    const newModalContainer = modal.querySelector(".bg-white\\/5");
    requestAnimationFrame(() => {
      newModalContainer.classList.remove("scale-0", "opacity-0");
      newModalContainer.classList.add("scale-100", "opacity-100");
    });
  };

  window.closeProjectModal = function () {
    const modal = document.getElementById("projectModal");
    const modalContainer = modal.querySelector(".bg-white\\/5");

    // Add scale and fade-out animation
    modalContainer.classList.remove("scale-100", "opacity-100");
    modalContainer.classList.add("scale-0", "opacity-0");

    setTimeout(() => {
      modal.classList.add("hidden");
      document.body.style.overflow = "auto";
    }, 300);
  };

  // Add animation for side menu on page load (PC only)
  function initSideMenuAnimation() {
    const sideMenu = document.getElementById("sideMenu");
    if (window.innerWidth >= 1024) {
      // lg breakpoint
      setTimeout(() => {
        sideMenu.style.transform = "translate(16px, -50%)";
      }, 300);
    } else {
      sideMenu.style.transform = ""; // Reset transform on mobile
    }
  }

  // Add resize listener to handle responsive behavior
  window.addEventListener("resize", () => {
    const sideMenu = document.getElementById("sideMenu");
    const menuToggle = document.getElementById("menuToggle");
    const menuIcon = document.getElementById("menuIcon");

    if (window.innerWidth >= 1024) {
      // On desktop view
      sideMenu.style.transform = "translate(16px, -50%)";
      sideMenu.classList.remove("-translate-x-full"); // Ensure menu is visible on desktop

      // Reset the menuToggle button position and rotation regardless of previous state
      menuToggle.classList.add("-translate-x-64");
      menuIcon.style.transform = "rotate(0deg)";
    } else {
      // On mobile view
      sideMenu.style.transform = ""; // Reset transform
      sideMenu.classList.add("-translate-x-full"); // Ensure menu is hidden

      // Reset toggle button position for mobile view
      menuToggle.classList.add("-translate-x-64");
      menuIcon.style.transform = "rotate(0deg)";
    }
  });

  initSideMenuAnimation();

  function isMobileOrTablet() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile =
      /iphone|ipad|ipod|android|blackberry|windows phone|opera mini|silk/i.test(
        userAgent
      );
    const isTablet = /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/i.test(
      userAgent
    );
    return (
      isMobile ||
      isTablet ||
      "ontouchstart" in window ||
      window.innerWidth < 1024
    );
  }

  // Only initialize the cursor on desktop devices
  if (!isMobileOrTablet()) {
    import("https://unpkg.com/ipad-cursor@latest").then(({ initCursor }) =>
      initCursor()
    );
  }

  // Copy email to clipboard
  window.copyEmailToClipboard = function (email) {
    navigator.clipboard
      .writeText(email)
      .then(function () {
        // Show success feedback
        const emailContainer = document.getElementById("emailContainer");
        const tooltip = emailContainer.querySelector("div");

        // Store original text
        const originalText = tooltip.textContent;

        // Change text and styling to indicate success
        tooltip.textContent = "Copied!";
        tooltip.classList.add("bg-green-500/20");
        tooltip.classList.add("border-green-500/30");

        // Reset after 5 seconds
        setTimeout(() => {
          tooltip.textContent = originalText;
          tooltip.classList.remove("bg-green-500/20");
          tooltip.classList.remove("border-green-500/30");
        }, 5000);
      })
      .catch(function (err) {
        console.error("Could not copy text: ", err);

        // Show error feedback
        const emailContainer = document.getElementById("emailContainer");
        const tooltip = emailContainer.querySelector("div");

        // Store original text
        const originalText = tooltip.textContent;

        // Change text and styling to indicate error
        tooltip.textContent = "Failed to copy";
        tooltip.classList.add("bg-red-500/20");
        tooltip.classList.add("border-red-500/30");

        // Reset after 5 seconds
        setTimeout(() => {
          tooltip.textContent = originalText;
          tooltip.classList.remove("bg-red-500/20");
          tooltip.classList.remove("border-red-500/30");
        }, 5000);
      });
  };

  updateCursorClasses();
  window.addEventListener("resize", updateCursorClasses);
});
