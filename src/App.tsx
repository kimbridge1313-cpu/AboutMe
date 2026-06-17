import { useState, type ReactNode } from "react";

type DemoItem = {
  title: string;
  tags: string[];
  summary: string;
  problem: string;
  goal: string;
  role: string;
};

type PageId = "letter" | "about" | "profile" | "work";

type StoryImage = {
  src: string;
  alt: string;
};

type CapabilityCard = {
  number: string;
  en: string;
  zh: string;
  description: string;
  skills: string[];
  relatedLabel: string;
  relatedText: string;
  examples?: { title: string; url: string }[];
  images?: StoryImage[];
};

type LetterSection = {
  title?: string;
  body: ReactNode;
  note?: string;
};

function PageShell({ children }: { children: ReactNode }) {
  return <div className="rounded-[24px] border border-zinc-200 bg-white p-4 shadow-sm">{children}</div>;
}

function WatercolorDecoration() {
  return (
    <div className="pointer-events-none absolute right-0 top-2 h-48 w-44 overflow-hidden opacity-80">
      <div className="absolute right-0 top-8 h-20 w-32 rotate-[-10deg] rounded-[34px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(177,206,247,0.24)_18%,rgba(111,161,230,0.38)_55%,rgba(76,119,199,0.12)_100%)] blur-[8px]" />
      <div className="absolute right-10 top-24 h-14 w-28 rotate-[12deg] rounded-[30px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(197,220,251,0.18)_12%,rgba(121,170,236,0.28)_52%,rgba(72,116,197,0.12)_100%)] blur-[7px]" />
      <div className="absolute right-4 top-[132px] h-12 w-20 rotate-[6deg] rounded-[28px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(180,209,247,0.14)_18%,rgba(115,160,224,0.22)_60%,rgba(76,118,193,0.08)_100%)] blur-[7px]" />
    </div>
  );
}

function HeroPhoto() {
  return (
    <div className="overflow-hidden rounded-full border border-white/85 bg-white shadow-[0_16px_36px_-24px_rgba(63,84,120,0.35)] backdrop-blur-sm">
      <img
        src="https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/hero/Personal-photo.jpg"
        alt="Lowen Hsu 個人照片"
        className="h-28 w-28 object-cover object-center"
        onError={(e) => {
          const img = e.currentTarget;
          img.style.display = "none";
          const next = img.nextElementSibling as HTMLElement | null;
          if (next) next.style.display = "flex";
        }}
      />
      <div className="hidden h-28 w-28 items-center justify-center bg-zinc-50 text-center text-xs leading-5 text-zinc-400">
        個人照片
        <br />
        暫時無法載入
      </div>
    </div>
  );
}

function StoryImagePair({ images }: { images: StoryImage[] }) {
  const isSingle = images.length === 1;

  return (
    <div className={isSingle ? "pt-1" : "grid grid-cols-2 gap-3 pt-1"}>
      {images.map((image) => (
        <figure key={image.src} className="overflow-hidden rounded-[18px] border border-zinc-200 bg-white shadow-sm">
          <img
            src={image.src}
            alt={image.alt}
            className={isSingle ? "h-52 w-full object-cover" : "h-36 w-full object-cover"}
            onError={(e) => {
              const img = e.currentTarget;
              img.style.display = "none";
              const next = img.nextElementSibling as HTMLElement | null;
              if (next) next.style.display = "flex";
            }}
          />
          <div
            className={
              isSingle
                ? "hidden h-52 w-full items-center justify-center bg-zinc-50 px-3 text-center text-xs leading-5 text-zinc-400"
                : "hidden h-36 w-full items-center justify-center bg-zinc-50 px-3 text-center text-xs leading-5 text-zinc-400"
            }
          >
            圖片暫時無法載入
          </div>
        </figure>
      ))}
    </div>
  );
}

export default function LowenResumeDemoHub() {
  const demos: DemoItem[] = [
    {
      title: "員工打卡系統",
      tags: ["手機打卡", "班表", "補卡申請", "管理者審核"],
      summary: "將員工出勤、排班與補卡流程整理成手機可操作的管理工具，降低人工彙整與紀錄遺漏。",
      problem: "員工上下班紀錄分散，補卡與排班資訊需要人工整理，管理端難以即時回查。",
      goal: "讓員工用手機完成打卡，管理者能回查紀錄、審核補卡，並降低人工彙整成本。",
      role: "流程整理、介面設計、資料欄位規劃、前端原型、Firebase 串接、Vercel 部署。",
    },
    {
      title: "財務記帳系統",
      tags: ["每日記帳", "部門分類", "收入支出", "月結貨款"],
      summary: "將日常現金流、部門收支與月結資料結構化，讓管理者可以快速查詢與彙總。",
      problem: "每日記帳格式混亂，資料散落，部門損益與月結貨款需要人工整理。",
      goal: "建立一致的記帳結構，讓資料可以被查詢、彙總與追蹤。",
      role: "流程拆解、欄位設計、前端介面、報表邏輯整理、部署測試。",
    },
    {
      title: "商品 / 進退貨系統",
      tags: ["商品主檔", "掃碼進貨", "價格查詢", "進貨紀錄"],
      summary: "將商品資料、進退貨紀錄與價格查詢整合，讓現場作業可以從手機完成。",
      problem: "商品價格、進貨紀錄與貨卡製作分散，查詢與更新都需要人工處理。",
      goal: "讓現場人員能用手機掃碼進貨，管理者能查詢紀錄，並直接延伸到貨卡輸出。",
      role: "流程整理、資料結構規劃、介面設計、前端原型、部署測試。",
    },
    {
      title: "貨卡列印流程",
      tags: ["商品資料", "條碼", "價格標示", "小票機輸出"],
      summary: "將後台商品資料轉成現場可直接使用的貨架標示，減少手動排版與重複輸入。",
      problem: "貨架標籤需要重複排版，價格更新與條碼輸出流程不一致。",
      goal: "將商品主檔資料直接轉成列印輸出，減少人工處理與錯誤。",
      role: "版面規劃、列印邏輯整理、資料串接測試、輸出格式調整。",
    },
  ];

  const pages: { id: PageId; label: string }[] = [
    { id: "letter", label: "經歷說明" },
    { id: "profile", label: "簡歷" },
    { id: "work", label: "核心能力" },
    { id: "about", label: "關於我" },
  ];

  const capabilityHeroTags = ["Flavor", "Equipment", "SOP", "Brand", "Packaging", "Web", "Experience"];

  const capabilityCards: CapabilityCard[] = [
    {
      number: "01",
      en: "Flavor & Beverage",
      zh: "風味與飲品研發",
      description:
        "具備茶、咖啡、酒類與草本香料的跨品類風味經驗，能從香氣、厚度、乾淨度、尾韻與應用場景判斷產品定位，並思考其在門市商品與標準化流程中的可能性。",
      skills: ["茶葉品評", "咖啡品評", "感官分析", "風味描述", "飲品研發", "調飲應用", "草本香料", "菜單開發", "季節性商品"],
      relatedLabel: "Related Experience",
      relatedText: "茶葉品評、咖啡品評、飲品研發、調飲應用",
      images: [
        {
          src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/field/tasting1.jpg",
          alt: "風味測試照片 1",
        },
        {
          src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/field/testing.jpg",
          alt: "風味測試照片 2",
        },
      ],
    },
    {
      number: "02",
      en: "Extraction & Equipment",
      zh: "萃取設備與現場測試",
      description:
        "熟悉咖啡機、萃茶設備與手作器具的操作與培訓，能從萃取參數、出品速度、穩定性、清潔維護、吧檯動線與人員學習成本評估設備是否適合現場使用。",
      skills: ["萃茶設備", "咖啡機操作", "半自動咖啡機", "自動咖啡機", "Steampunk", "Curtis", "Thermoplan", "La Marzocco", "手沖器具", "萃取參數", "出品穩定性", "設備培訓", "清潔維護"],
      relatedLabel: "Related Experience",
      relatedText: "王力咖啡設備培訓、萃茶機與咖啡機測試、客戶培訓",
      images: [
        {
          src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/field/jas1.JPG",
          alt: "設備與現場測試照片 1",
        },
        {
          src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/field/jas2.JPG",
          alt: "設備與現場測試照片 2",
        },
      ],
    },
    {
      number: "03",
      en: "SOP & Training",
      zh: "SOP 建立與人員培訓",
      description:
        "能將飲品製作、設備操作、清潔維護與異常處理轉化成門市人員看得懂、學得會、做得到的 SOP 與訓練內容，降低不同操作人員造成的品質落差。",
      skills: ["飲品 SOP", "設備 SOP", "清潔維護流程", "客戶培訓", "門市人員訓練", "新員工教學", "教學文件", "培訓簡報", "異常回報流程", "門市開店支援", "吧檯動線"],
      relatedLabel: "Related Experience",
      relatedText: "設備培訓、菜單 SOP、門市籌備、人員訓練",
      images: [
        {
          src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/field/Coffee%20Boy.jpg",
          alt: "SOP 與培訓照片 1",
        },
        {
          src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/field/sop.png",
          alt: "SOP 文件照片 2",
        },
      ],
    },
    {
      number: "04",
      en: "Brand & Visual Design",
      zh: "品牌與視覺設計",
      description:
        "具備品牌識別、Logo、菜單、海報、文宣、活動視覺與品牌延伸設計經驗，能協助品牌將產品定位轉化為清楚、可辨識、可被記住的視覺語言。",
      skills: ["VI 設計", "Logo 設計", "品牌識別", "品牌視覺延伸", "海報設計", "菜單設計", "文宣設計", "社群素材", "活動視覺", "展場視覺", "商品攝影", "商業攝影", "地方品牌"],
      relatedLabel: "Related Works",
      relatedText: "品牌 Logo、菜單設計、文宣設計、網站視覺、商品攝影",
      examples: [
        {
          title: "VI 設計案例｜坔 LAM Brand System",
          url: "https://www.figma.com/proto/os3yPaDquaz9CCPaLvaQmC/LAM-Brand-System%EF%BD%9CLogo-%C3%97-Bird-Canvas-Transfer-Test?node-id=69-4560&t=8bJx7JokmaiDvJir-1&scaling=scale-down-width&content-scaling=fixed&page-id=35%3A2",
        },
      ],
    },
    {
      number: "05",
      en: "Product & Packaging Design",
      zh: "產品包裝與商品化設計",
      description:
        "具備食品禮盒與商品包裝設計經驗，曾設計餅乾禮盒、千層蛋糕盒等產品包裝。能從商品內容、送禮情境、陳列效果、尺寸結構、印刷材質與品牌視覺一致性出發，將產品轉化為可販售、可展示、可被記住的商品形式。",
      skills: ["食品包裝", "禮盒設計", "餅乾禮盒", "千層蛋糕盒", "包裝結構", "商品化提案", "尺寸規劃", "印刷完稿", "材質溝通", "陳列思考", "送禮情境", "品牌一致性"],
      relatedLabel: "Related Works",
      relatedText: "餅乾禮盒設計、千層蛋糕盒設計、食品包裝設計",
      images: [
        { src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/product/product4.JPG", alt: "產品包裝設計照片 1" },
        { src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/product/product5.JPG", alt: "產品包裝設計照片 2" },
        { src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/product/product6.JPG", alt: "產品包裝設計照片 3" },
        { src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/product/product7.JPG", alt: "產品包裝設計照片 4" },
      ],
    },
    {
      number: "06",
      en: "Web & System Design",
      zh: "網頁與系統工具設計",
      description:
        "能將現場重複、易錯或資訊斷裂的工作拆解為流程、表單、資料結構與簡易管理工具。曾協助建立財務管理、員工打卡、商品管理、進退貨與貨卡列印等 web app 原型。",
      skills: ["網頁設計", "Web App 原型", "前端介面", "後台設計", "表單設計", "資料欄位規劃", "React", "Vite", "Firebase", "GitHub", "Vercel", "財務管理", "員工打卡", "商品管理", "進退貨", "貨卡列印", "流程自動化"],
      relatedLabel: "Related Works",
      relatedText: "財務管理系統、員工打卡系統、商品管理系統、進退貨管理、貨卡列印工具",
      examples: [
        {
          title: "案例｜員工打卡系統 Demo",
          url: "https://demo-attendance-system.vercel.app/",
        },
      ],
    },
    {
      number: "07",
      en: "Experience & Event Design",
      zh: "體驗活動設計與帶領",
      description:
        "曾協助社區設計與帶領體驗活動，能從活動主題、參與流程、現場節奏與體驗感受出發，整理出更容易被理解、被參與的活動內容。",
      skills: ["活動企劃", "體驗活動設計", "活動帶領", "活動流程", "現場執行", "地方體驗"],
      relatedLabel: "Related Experience",
      relatedText: "社區體驗活動設計、地方體驗活動帶領",
      examples: [{ title: "活動簡報｜荒草重生", url: "https://canva.link/mjejmvvgyoblhpn" }],
      images: [
        { src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/field/Experience%20-activities.JPG", alt: "體驗活動照片 1" },
        { src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/field/Experience%20-activities-2.jpg", alt: "體驗活動照片 2" },
      ],
    },
  ];

  const letterSections: LetterSection[] = [
    {
      body: (
        <>
          <p>您好，我是 Lowen。</p>
          <p>我想應徵方圓的「萃茶系統產品負責人」。</p>
          <p>
            我會對這個職務有興趣，是因為我覺得透過一台萃茶機，把複雜的現場變因整理成可複製的系統，是一件很有趣也極具挑戰性的事。我本身熱愛茶葉，對我來說，機器的加入反而讓茶風味有了更多想像力。加上我天生喜歡「把事情理順並建立系統」，也渴望接觸不同地方的茶文化，這正是我想投入的下一個挑戰。
          </p>
          <p>我過去累積的這些經驗，和這個職位需要的特質其實很接近。</p>
          <p>以下是我過去幾段經歷的具體說明：</p>
        </>
      ),
    },
    {
      title: "我的起點，是飲品與設備培訓",
      body: (
        <>
          <div className="rounded-[18px] border border-zinc-200 bg-white px-4 py-3 shadow-sm">
            <div className="space-y-1 text-zinc-900">
              <div className="font-medium">王力咖啡（上海）有限公司</div>
              <div className="text-sm text-zinc-600">應用研發專員 / 培訓專員（2018 - 2020）</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium text-zinc-900">1. 原物料風味測試</div>
            <p className="text-sm leading-7 text-zinc-700">
              具備 CQI Q Grader（國際咖啡品質鑑定師）、中國國家茶葉品評員及台灣茶葉感官品評能力鑑定認證。任職於應用研發實驗室，負責 Walters Bay 斯里蘭卡茶及台灣、中國在地茶等多種原物料的感官品評與風味特性分析。具備將茶湯的香氣、厚度與風味缺陷，精準轉譯為客觀品評數據的能力，並協同業務端共同向 B2B 客戶進行商業風味提案與推薦。
            </p>
          </div>
          <StoryImagePair
            images={[
              { src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/credentials/grader-certificate.jpg", alt: "Q Grader 證照照片" },
              { src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/credentials/coffee-tranning.jpg", alt: "咖啡訓練照片" },
            ]}
          />
          <StoryImagePair
            images={[
              { src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/tasting/tea-samples-lineup.jpg", alt: "茶樣排列照片" },
              { src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/tasting/tea.jpg", alt: "茶樣與沖泡照片" },
            ]}
          />

          <div className="space-y-2">
            <div className="text-sm font-medium text-zinc-900">2. 飲品菜單研發（商品化應用）</div>
            <p className="text-sm leading-7 text-zinc-700">
              主導原物料（茶葉、咖啡、糖漿、粉料）的商品化應用。擅長從基底技術變化（如：氮氣茶、冷萃、茶濃縮、氣泡等）出發，延伸至創意調飲與茶酒應用，靈活運用不同茶感與咖啡特性，打造符合客戶需求的菜單，協同業務進行提案。
            </p>
          </div>
          <StoryImagePair images={[{ src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/drink/dink.jpg", alt: "萃茶飲品照片" }]} />

          <div className="space-y-2">
            <div className="text-sm font-medium text-zinc-900">3. 設備與菜單培訓（跨設備標準化）</div>
            <p className="text-sm leading-7 text-zinc-700">
              身處頂尖設備商，接觸過極為多元的機器類型（如 Thermoplan、La Marzocco、Steampunk 等頂級自動化咖啡與萃茶設備）。負責跨設備的設備培訓與參數校正，深諳設備在「實驗室環境」與「門市極端環境」下的變因，並據此建立相應的設備調整、菜單出杯 SOP。
            </p>
          </div>
          <StoryImagePair
            images={[
              { src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/equipment/equipment-control-panel.jpg", alt: "設備控制面板" },
              { src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/equipment/equipment.jpg", alt: "咖啡與萃取設備" },
            ]}
          />
        </>
      ),
    },
    {
      title: "從地方現場出發，練習把想法落地",
      body: (
        <>
          <div className="rounded-[18px] border border-zinc-200 bg-white px-4 py-3 shadow-sm">
            <div className="space-y-1 text-zinc-900">
              <div className="font-medium">自由接案</div>
              <div className="text-sm text-zinc-600">獨立設計師（2021 - 2023）</div>
            </div>
          </div>
          <p>從解決實際問題出發，用設計與數位工具陪伴地方社區與傳統店家。</p>
          <p>
            這段期間我以獨立接案的身分生存，服務對象多為地方社區發展協會、青年返鄉品牌以及傳統店家。我習慣跟在地夥伴站在一起，觀察日常痛點，用設計和簡單的工具幫大家解決問題。
          </p>

          <div className="space-y-2">
            <div className="text-sm font-medium text-zinc-900">品牌視覺設計</div>
            <p className="text-sm leading-7 text-zinc-700">
              協助傳統店家與青年返鄉、社區品牌進行平面視覺、產品包裝與官方網站的規劃。專注於把老闆們珍貴的經營理念，轉化為消費者容易看懂的視覺與流暢的網頁介面，幫老店和新品牌在市場上建立的形象。
            </p>
            <button
              type="button"
              onClick={() => goToCapability("04")}
              className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50"
            >
              核心能力｜04 Brand & Visual Design
            </button>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium text-zinc-900">社區設計與體驗活動（與社區青年共同協作）</div>
            <p className="text-sm leading-7 text-zinc-700">
              與在地的社區青年緊密合作，共同參與、為地方社區發展協會設計線下體驗活動。從釐清活動目標、設計互動流程到現場執行，大家一起分工搞定。這讓我累積了跨界協作經驗，也更懂得站在一般大眾的角度，打造有共鳴的地方體驗。
            </p>
            <button
              type="button"
              onClick={() => goToCapability("07")}
              className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50"
            >
              核心能力｜07 Experience & Event Design
            </button>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium text-zinc-900">流程數位化（微型系統開發）</div>
            <p className="text-sm leading-7 text-zinc-700">
              在陪伴店家與社區的過程中，發現許多傳統流程非常混亂。於是嘗試幫合作的店面開發簡單的 Web App 工具，把原本重複、繁雜的紙本或日常作業，整理成好操作的線上表單與後台管理介面。這段幫在地夥伴「把混亂變順暢」的過程，是我對「做產品」產生熱情的起點。
            </p>
          </div>
        </>
      ),
    },
    {
      title: "門市籌備經驗，學習所有環節的串連",
      body: (
        <>
          <div className="rounded-[18px] border border-zinc-200 bg-white px-4 py-3 shadow-sm">
            <div className="space-y-1 text-zinc-900">
              <div className="font-medium">先生手作千層（濟南）</div>
              <div className="text-sm text-zinc-600">海外落地專案經理（2024 - 2026）</div>
            </div>
          </div>

          <p>主導品牌跨市場落地，融合空間工程、在地化商品研發與數位工具開發。</p>

          <div className="space-y-2">
            <div className="text-sm font-medium text-zinc-900">1. 海外品牌落地與空間工程管理</div>
            <p className="text-sm leading-7 text-zinc-700">
              主導 3 家連鎖門市從 0 到 1 的籌備與落地。獨立負責跨部門與外部廠商的溝通整合，確保工程與設備完美對接。
            </p>
          </div>
          <StoryImagePair
            images={[
              { src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/store/store%EF%BC%92.jpg", alt: "濟南門市照片 1" },
              { src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/store/store%EF%BC%93.JPG", alt: "濟南門市照片 2" },
            ]}
          />

          <div className="space-y-2">
            <div className="text-sm font-medium text-zinc-900">吧台動線與水電配置</div>
            <p className="text-sm leading-7 text-zinc-700">
              依據門市現場環境，規劃吧台管線走向與設備進場立面。優化員工出餐動線（Workflow）。
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium text-zinc-900">硬體設備對接與校正</div>
            <p className="text-sm leading-7 text-zinc-700">
              負責與裝修公司、原物料及設備供應商對接。從安裝到維護，保證餐飲設備在門市能穩定使用。
            </p>
          </div>
          <StoryImagePair
            images={[
              { src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/field/store-bar-layout.jpg", alt: "門市吧台動線與配置照片" },
              { src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/field/furnish.jpg", alt: "門市現場與陳設照片" },
            ]}
          />

          <div className="space-y-2">
            <div className="text-sm font-medium text-zinc-900">法規與合規性審查</div>
            <p className="text-sm leading-7 text-zinc-700">
              對接山東當地消防、衛生與食品安全法規，保證空間設計的合法性，確保門市順利取得營業執照、食品經營許可證。
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium text-zinc-900">2. 在地化商品研發與異業合作</div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium text-zinc-900">菜單設計</div>
            <p className="text-sm leading-7 text-zinc-700">
              負責吧台飲品設計與季節新品研發，依據當地市場口味進行微調，在不脫離品牌邏輯的前提下，推出符合在地市場的季節商品。
            </p>
          </div>
          <a
            href="http://xhslink.com/o/5ljoGjuspbQ"
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50"
          >
            小紅書筆記｜🍧在濟南！人均 20+ 拿下超美觀景位
          </a>
          <StoryImagePair
            images={[
              { src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/product/product.jpg", alt: "門市產品照片 1" },
              { src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/product/product3.JPG", alt: "門市產品照片 2" },
            ]}
          />

          <div className="space-y-2">
            <div className="text-sm font-medium text-zinc-900">多元商品團購</div>
            <p className="text-sm leading-7 text-zinc-700">
              除了外賣渠道，為了增加業績，針對團購零食、甜點等不同消費場景，延伸開發「千層盒子、餅乾罐罐、餅乾禮盒」等全新商品形態，並導入「快團團」社群團購工具進行通路拓展，帶動單季業績成長 5%。
            </p>
            <button
              type="button"
              onClick={() => goToCapability("05")}
              className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50"
            >
              核心能力｜05 Product & Packaging Design
            </button>
          </div>
          <StoryImagePair
            images={[
              { src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/product/product2.JPG", alt: "門市產品與陳列照片 1" },
              { src: "https://raw.githubusercontent.com/kimbridge1313-cpu/AboutMe/main/public/images/product/product5.JPG", alt: "門市產品與陳列照片 2" },
            ]}
          />

          <div className="space-y-2">
            <div className="text-sm font-medium text-zinc-900">空間選品與體驗升級</div>
            <p className="text-sm leading-7 text-zinc-700">
              為了提升門市內用質感，主動邀請濟南在地的質感家居品牌，將精緻的碗盤餐具引進店內。透過「器皿Ｘ甜點」的視覺體驗升級，創造空間的豐富度並帶動門市整體業績。
            </p>
          </div>
          <a
            href="http://xhslink.com/o/9iW8b8gjJtu"
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50"
          >
            小紅書筆記｜濟南經三路探店 × 先生手作千層
          </a>

          <div className="space-y-2">
            <div className="text-sm font-medium text-zinc-900">3. 數位體驗與流程產品化</div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium text-zinc-900">線上用戶體驗</div>
            <p className="text-sm leading-7 text-zinc-700">
              主導門市線上訂餐與會員小程序的頁面視覺與互動流程設計（UI/UX），打通線上到線下的消費觸點。
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium text-zinc-900">內部管理系統</div>
            <p className="text-sm leading-7 text-zinc-700">
              針對營運痛點，獨立設計並開發 Web App、表單管理工具（排班考勤系統、原物料自動化月訂貨表），將原本仰賴經驗的現場作業，整理成可規模化複製的自動化系統。
            </p>
          </div>
        </>
      ),
    },
    {
      title: "所以如果要說我為什麼想應徵這個角色",
      body: (
        <>
          <p>應徵「萃茶系統產品負責人」是一個非常有趣的挑戰，因為這個職位需要的複合技能，幾乎沒有任何一個既有科系能單獨培養。</p>

          <div className="space-y-2">
            <div className="text-sm font-medium text-zinc-900">既要懂風味，又要能產品化</div>
            <p className="text-sm leading-7 text-zinc-700">
              既要懂茶葉風味的感官語言，與研發團隊協作新品的萃取邏輯；又要能將其轉化為萃茶系統的標準化參數與異常檢核機制。
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium text-zinc-900">既要進得去前線，又要能跳出來看全局</div>
            <p className="text-sm leading-7 text-zinc-700">
              既要親自參與過門市從無到有、極度碎雜的籌備，理解如何讓設備融入日常作業；又要能跳出來用系統邏輯，建立一套連海外代理商都能快速上手的安裝、訓練與故障處理流程。
            </p>
          </div>

          <p>我雖然不是機電或工程背景出身，但我過去累積的經驗，恰好讓我成為了那個最關鍵的「整合者」。</p>
          <p>我覺得一套好的萃茶系統，核心價值不在於「機器可以泡茶」，而是讓品牌想要的風味，在不同門市、人員與海外市場條件下，都能被穩定重現。</p>
          <p>我想參與的，正是這種不只把產品做出來，而是一起把它建立成「能被現場使用、培訓、維護，且持續變好」的系統。這是我希望能參與方圓這個職務的原因。</p>
        </>
      ),
    },
  ];

  const [activePage, setActivePage] = useState<PageId>("letter");
  const [activeDemoIndex, setActiveDemoIndex] = useState(2);
  const activeDemo = demos[activeDemoIndex];

  const goToCapability = (number: string) => {
    setActivePage("work");
    window.setTimeout(() => {
      const target = document.getElementById(`capability-${number}`);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const manualTestCases = [
    "頁首可正常渲染。",
    "切換分頁不會出現 JSX 語法錯誤。",
    "經歷說明頁各段落可正常顯示。",
    "多元商品團購段落的 05 按鈕可正常顯示。",
    "核心能力頁 7 張卡片與案例連結可正常顯示。",
  ];
  void manualTestCases;

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto w-full max-w-[430px] px-3 py-4">
        <header className="mb-4 overflow-hidden rounded-[28px] border border-zinc-200 bg-[#fcfbf8] shadow-[0_18px_40px_-34px_rgba(63,84,120,0.28)]">
          <div className="relative overflow-hidden border-b border-zinc-200 bg-[linear-gradient(180deg,#fcfbf8_0%,#f7f6f2_48%,#f4f8ff_100%)] px-4 pb-5 pt-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0)_34%)]" />
            <WatercolorDecoration />
            <div className="absolute right-4 top-4 z-10">
              <HeroPhoto />
            </div>

            <div className="relative max-w-[68%] space-y-4">
              <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">Lowen Resume</div>
              <div className="space-y-1.5">
                <h1 className="text-[40px] font-semibold leading-[1.02] tracking-tight text-slate-900">Lowen Hsu</h1>
                <div className="text-[15px] font-medium tracking-[0.08em] text-slate-500">許益瑄</div>
              </div>
              <p className="max-w-[92%] text-sm leading-7 text-slate-600">一位喜歡冒險與挑戰的人類</p>
            </div>
          </div>

          <div className="bg-[#fbfaf7] px-3 py-3">
            <nav className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {pages.map((page) => {
                const isActive = activePage === page.id;
                return (
                  <button
                    key={page.id}
                    onClick={() => setActivePage(page.id)}
                    className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition ${
                      isActive ? "bg-slate-900 text-white" : "border border-zinc-200 bg-white text-zinc-700"
                    }`}
                  >
                    {page.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </header>

        <main className="space-y-4">
          {activePage === "letter" ? (
            <PageShell>
              <div className="text-sm font-medium text-zinc-500">給舒帆的一封經歷說明</div>
              <div className="mt-5 space-y-4">
                {letterSections.map((section, index) => (
                  <section key={`${section.title ?? "intro"}-${index}`} className="rounded-[20px] border border-zinc-200 bg-zinc-50 p-4">
                    {section.title ? <h3 className="mb-3 text-lg font-semibold leading-7 tracking-tight text-zinc-950">{section.title}</h3> : null}
                    <div className="space-y-4 text-[15px] leading-8 text-zinc-700">{section.body}</div>
                    {section.note ? <div className="mt-4 text-xs tracking-[0.08em] text-zinc-400">— {section.note}</div> : null}
                  </section>
                ))}
              </div>
            </PageShell>
          ) : null}

          {activePage === "about" ? (
            <PageShell>
              <div className="text-sm font-medium text-zinc-500">關於我</div>
              <div className="mt-5 space-y-5 text-[15px] leading-8 text-zinc-700">
                <p>我是一個喜歡冒險與挑戰的人類。</p>
                <p>比起只用眼睛看世界，我好像更常是用聲音、氣味、風味和直覺去記住事情。</p>
                <p>我喜歡音樂，尤其喜歡古典樂。從小學鋼琴，也學過長笛，高中參加行進管樂團，大學時也參加過室內樂團。最近又開始學小提琴。很多時候，比起看見什麼，我更容易先聽見什麼。</p>
                <p>有一段時間很喜歡攝影。喜歡構圖，也喜歡從景窗裡看世界。透過一個小小的框，好像可以把平常太複雜、太混亂的日常，重新整理成一個比較清楚的畫面。</p>
                <p>也可能是因為在那個熱血沸騰的幾年，我很喜歡旅行，尤其喜歡獨旅和打工換宿。你永遠不知道會遇到誰、會和誰對話。因為在一個地方停留一段時間，所以更能透過生活去體會不同的文化。那也讓我變得比較有包容性，慢慢覺得很多事情不一定只有對與錯。</p>
                <p>「愛茶」這個標籤，好像是身邊熟人一定會幫我貼上的標籤。</p>
                <p>從小我就喜歡喝茶。我一直記得小時候第一次喝到 Whittard 伯爵紅茶時，那種香氣在鼻腔裡慢慢散開的感覺。那個記憶一直留到後來，以至於當我真的在工作裡接觸喝茶、評茶、評咖啡、評酒時，我覺得那是非常快樂的事情。能夠細細分辨一個味道從哪裡來、它怎麼變化、又留下什麼感受，對我來說是一件很迷人的事。</p>
                <p>我也曾經幫社區設計過一場體驗活動，叫做「荒草重生」。那場活動透過在地植物冬青菊，帶大家一起採茶、製茶、品茶。那個過程讓我覺得很有趣，因為茶不僅是喝到嘴裡的味道，它也可以是一個地方的植物、一段生活經驗，甚至是一群人重新理解土地的方式。</p>
                <p>另一個持續很久的興趣，是研究命理。生命靈數、紫微斗數、八字、易經，我都曾經研究過，也一直到現在都還在研究。雖然大家常說那是算命，但我更著迷的其實是它背後的推理。因為一個人是這樣的人，所以遇到某些事情時，可能就會那樣選擇、那樣反應。那種從性格、時間和事件之間找出脈絡的過程，讓我有一種抽離出來看人生的感覺。</p>
                <p>如果要說我是一個怎樣的人，我想我是一個對世界很有感覺的人。喜歡聽，喜歡聞，喜歡品嘗，喜歡觀察，也喜歡推理。我喜歡把自己放進新的經驗裡，然後在那些聲音、氣味、風景、味道和人的故事裡，一點一點理解世界，也理解自己。</p>
              </div>
            </PageShell>
          ) : null}

          {activePage === "profile" ? (
            <PageShell>
              <div className="text-sm font-medium text-zinc-500">簡歷摘要</div>
              <div className="mt-5 space-y-5">
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">許益瑄</h2>
                  <div className="mt-1 text-base text-zinc-500">Lowen Hsu</div>
                </div>
                <div className="space-y-3 text-sm leading-7 text-zinc-700">
                  <div><span className="font-medium text-zinc-950">性別</span>｜女</div>
                  <div><span className="font-medium text-zinc-950">生日</span>｜1996/01/18</div>
                  <div><span className="font-medium text-zinc-950">Email</span>｜hsulowen@gmail.com</div>
                  <div><span className="font-medium text-zinc-950">學歷</span>｜中山醫學大學職業安全衛生學系</div>
                  <div><span className="font-medium text-zinc-950">關鍵字</span>｜飲品研發與設備、門市流程、Web App 原型、前端設計、流程工具化</div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      window.setTimeout(() => window.print(), 50);
                    }}
                    className="rounded-full border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-800"
                  >
                    列印
                  </button>
                </div>
              </div>

              <div className="mt-8 border-t border-zinc-200 pt-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-zinc-500">經歷</div>
                  <div className="text-xs text-zinc-400">2016–2026</div>
                </div>
                <div className="mt-4 space-y-2.5">
                  {[
                    ["2016–2018", "中華民國大專生涯發展協會", "執行秘書 & 公關企劃"],
                    ["2016", "勤智企管顧問有限公司", "行銷實習生"],
                    ["2016–2018", "中山醫學大學風險管理研究室", "教授助理"],
                    ["105年度", "勞動部｜批次製程設備維護及安全防護評估技術探討", "兼任助理"],
                    ["106年度", "化學局｜我國化學物質管理風險溝通模式研析——以毒物及化學物質基金徵收與企業溝通為例", "專任助理"],
                    ["2018", "王力咖啡（上海）有限公司", "培訓專員"],
                    ["2019–2020", "王力咖啡（上海）有限公司", "實驗室研發專員"],
                    ["2021", "湖口飯吃產地餐廳", "設計企劃"],
                    ["2024.01–2026.03", "先生手作千層", "海外落地專案經理", "島嶼餐飲（濟南）有限公司"],
                  ].map(([year, company, role, note]) => (
                    <div key={`${year}-${company}-${role}`} className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                      <div className="text-[11px] font-medium tracking-[0.12em] text-zinc-400">{year}</div>
                      <div className="mt-1 flex items-center gap-2 text-sm leading-6 text-zinc-900">
                        <span>{company}</span>
                        {note ? <span className="text-[11px] text-zinc-400">{note}</span> : null}
                      </div>
                      <div className="text-sm leading-6 text-zinc-600">{role}</div>
                    </div>
                  ))}
                </div>
              </div>
            </PageShell>
          ) : null}

          {activePage === "work" ? (
            <div className="space-y-5">
              <div className="grid grid-cols-1 gap-4">
                {capabilityCards.map((card) => (
                  <section
                    id={`capability-${card.number}`}
                    key={card.number}
                    className="rounded-[22px] border border-zinc-200 bg-[#fcfcfb] p-4 shadow-[0_10px_24px_-22px_rgba(24,24,27,0.2)]"
                  >
                    <div className="text-[11px] font-medium tracking-[0.18em] text-zinc-400">{card.number}</div>
                    <div className="mt-3 space-y-1">
                      <div className="text-lg font-semibold tracking-tight text-zinc-950">{card.en}</div>
                      <div className="text-sm text-zinc-500">{card.zh}</div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-zinc-700">{card.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {card.skills.map((skill) => (
                        <span key={skill} className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[11px] text-zinc-600">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 rounded-[18px] border border-zinc-200 bg-zinc-50 p-3">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">{card.relatedLabel}</div>
                      <div className="mt-2 text-sm leading-7 text-zinc-700">{card.relatedText}</div>
                      {card.examples?.length ? (
                        <div className="mt-3 space-y-2">
                          {card.examples.map((example) => (
                            <a
                              key={example.url}
                              href={example.url}
                              target="_blank"
                              rel="noreferrer"
                              className="block rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50"
                            >
                              {example.title}
                            </a>
                          ))}
                        </div>
                      ) : null}
                      {card.images?.length ? (
                        <div className="mt-3 grid grid-cols-2 gap-2">
                          {card.images.map((image) => (
                            <figure key={image.src} className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="h-28 w-full object-cover"
                                onError={(e) => {
                                  const img = e.currentTarget;
                                  img.style.display = "none";
                                  const next = img.nextElementSibling as HTMLElement | null;
                                  if (next) next.style.display = "flex";
                                }}
                              />
                              <div className="hidden h-28 w-full items-center justify-center bg-zinc-50 px-2 text-center text-[11px] leading-5 text-zinc-400">
                                圖片暫時無法載入
                              </div>
                            </figure>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          ) : null}
        </main>
      </div>
    </div>
  );
}
