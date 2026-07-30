(function () {
  const isHome = () => {
    const path = window.location.pathname.replace(/\/+$/, '/')
    return path === '/Software-Jed/' || path === '/'
  }

  const isAbout = () => {
    const path = window.location.pathname.replace(/\/+$/, '/')
    return path === '/Software-Jed/about/' || path === '/about/'
  }

  const profileMap = document.querySelector('#jed-profile-map')
  if (isAbout() && profileMap && !profileMap.querySelector('.jed-profile__map')) {
    profileMap.innerHTML = `
      <div class="jed-profile__panel jed-profile__map" aria-label="工程能力地圖">
        <div class="jed-profile__map-center">
          <span>Core</span>
          <strong>Backend<br>Engineer</strong>
        </div>
        <div class="jed-profile__map-items">
          <div style="--score: 96"><span>Python</span><strong>16</strong></div>
          <div style="--score: 78"><span>Backend</span><strong>6</strong></div>
          <div style="--score: 68"><span>Security</span><strong>4</strong></div>
          <div style="--score: 58"><span>AI</span><strong>3</strong></div>
          <div style="--score: 52"><span>DevOps</span><strong>2</strong></div>
          <div style="--score: 66"><span>Data</span><strong>6</strong></div>
        </div>
        <p>依文章主題覆蓋度整理，用來呈現「長期寫作證據」，不是考試分數。</p>
      </div>
    `
  }

  if (!isHome() || document.querySelector('.jed-guide')) return

  const heroTitle = document.querySelector('#site-title')
  if (heroTitle && !document.querySelector('.jed-hero-note')) {
    const heroNote = document.createElement('div')
    heroNote.className = 'jed-hero-note'
    heroNote.innerHTML = `
      <div>每天 0.1% 或 10% 都是進步</div>
      <div>風景圖：新北福隆外海</div>
    `
    heroTitle.insertAdjacentElement('afterend', heroNote)
  }

  const root = '/Software-Jed/'
  const posts = {
    interview: {
      label: '面試官 / 主管',
      noteTitle: '快速看出工程判斷力',
      note: '如果你想在短時間內理解這個 Blog 的含金量，建議先看職涯表達、Survey 方法、系統穩定性與後端安全文章。',
      links: [
        ['從 Junior 到 Senior：履歷與技術表達該如何升級？', '看技術經驗如何被整理成可溝通、可評估的能力。', '2026/04/29/從%20Junior%20到%20Senior：履歷與技術表達該如何升級？/'],
        ['工程師做 Survey 時，老闆真正想聽的是什麼？', '看成本、風險、業務、維護性的技術選型思考。', '2026/05/19/工程師做-Survey-時，老闆真正想聽的是什麼/'],
        ['Retry 不是重試三次就好：Backoff 與 Jitter 的設計思考', '看服務穩定性、驚群問題與 trade-off。', '2026/05/11/Retry-不是重試三次就好：Backoff-與-Jitter-的設計思考/'],
        ['Log 別亂寫：結構化 Log 如何救除錯與分析', '看可觀測性、除錯與分析思維。', '2026/05/22/Log-別亂寫：結構化-Log-如何救除錯與分析/'],
        ['AI 時代下，初階工程師正在消失嗎？', '看對市場變化、AI 工具與工程師定位的觀察。', '2026/05/13/AI-時代下，初階工程師正在消失嗎？一般工程師的生存思考以及觀測到台灣職場正在改變/'],
        ['後端服務開發安全筆記：路徑遍歷 (Path Traversal)', '看資安意識如何轉成後端防禦設計。', '2026/05/06/後端服務開發安全筆記：路徑遍歷-Path-Traversal/'],
        ["你的專案在慢性發炎", "用七個症狀看技術債、測試、部署與團隊工程健康。", "2026/07/10/%E4%BD%A0%E7%9A%84%E5%B0%88%E6%A1%88%E5%9C%A8%E6%85%A2%E6%80%A7%E7%99%BC%E7%82%8E/"],
        ["架構模式BFF(Backend for Frontend)是什麼?", "看多端產品下的 API 邊界、聚合層與架構取捨。", "2026/07/08/%E6%9E%B6%E6%A7%8B%E6%A8%A1%E5%BC%8FBFF(Backend-for-Frontend)%E6%98%AF%E4%BB%80%E9%BA%BC/"],
        ["從Concurrency與Parallelism概念去了解Python: Multiprocessing、Threading、Coroutine、asyncio", "看能不能把抽象概念講成可理解的工程判斷。", "2026/07/22/%E5%BE%9EConcurrency%E8%88%87Parallelism%E6%A6%82%E5%BF%B5%E5%8E%BB%E4%BA%86%E8%A7%A3Python-Multiprocessing%E3%80%81Threading%E3%80%81Coroutine%E3%80%81asyncio/"],
        ["圖解 AI 搜尋引擎背後的 ANN 演算法，HNSW、IVF 與 PQ 向量檢索技術", "看 AI 系統底層資料檢索與工程化理解。", "2026/07/28/%E5%9C%96%E8%A7%A3-AI-%E6%90%9C%E5%B0%8B%E5%BC%95%E6%93%8E%E8%83%8C%E5%BE%8C%E7%9A%84-ANN-%E6%BC%94%E7%AE%97%E6%B3%95%EF%BC%8CHNSW%E3%80%81IVF-%E8%88%87-PQ-%E5%90%91%E9%87%8F%E6%AA%A2%E7%B4%A2%E6%8A%80%E8%A1%93/"]
      ]
    },
    backend: {
      label: '後端工程師',
      noteTitle: '從 API 到服務穩定性',
      note: '這條路線聚焦在後端日常會遇到的 token、重試、log、API 設計與安全邊界。',
      links: [
        ['JWT 不是無狀態嗎？前後端分離下，如何處理「User登出」的 Token 管理難題？', 'Access Token、Refresh Token、黑名單與 token version 的取捨。', '2026/05/18/JWT-不是無狀態嗎？前後端分離下，如何處理「User登出」的-Token-管理難題/'],
        ['Retry 不是重試三次就好：Backoff 與 Jitter 的設計思考', '重試不是 try 三次，還要考慮退避、抖動與冪等性。', '2026/05/11/Retry-不是重試三次就好：Backoff-與-Jitter-的設計思考/'],
        ['Log 別亂寫：結構化 Log 如何救除錯與分析', '為什麼 log 應該結構化，以及哪些欄位值得固定。', '2026/05/22/Log-別亂寫：結構化-Log-如何救除錯與分析/'],
        ['Web API設計 - 設計與挑戰', 'API 設計、可維護性與服務邊界的基礎思考。', '2025/01/19/Web-API設計-設計與挑戰/'],
        ['API防禦性程式設計', '從 API 入口思考防禦與參數驗證。', '2025/01/19/API防禦性程式設計/'],
        ['Design by Contract (DbC)', '用契約式設計思考程式邊界與責任。', '2025/01/19/Design-by-Contract-DbC/'],
        ["RFC 10008: HTTP新增QUERY方法", "理解 HTTP QUERY 如何補上 GET 與 POST 之間的查詢語意缺口。", "2026/06/29/RFC-10008-HTTP%E6%96%B0%E5%A2%9EQUERY%E6%96%B9%E6%B3%95/"],
        ["架構模式BFF(Backend for Frontend)是什麼?", "多端 API、資料聚合、服務邊界與維護成本的架構筆記。", "2026/07/08/%E6%9E%B6%E6%A7%8B%E6%A8%A1%E5%BC%8FBFF(Backend-for-Frontend)%E6%98%AF%E4%BB%80%E9%BA%BC/"],
        ["bytebytego沒告訴你的細節之輪詢 vs 長輪詢 vs Webhooks vs SSE", "從 Pull / Push 與同步節奏選輪詢、Webhook、SSE 或 WebSocket。", "2026/07/16/bytebytego%E6%B2%92%E5%91%8A%E8%A8%B4%E4%BD%A0%E7%9A%84%E7%B4%B0%E7%AF%80%E4%B9%8B%E8%BC%AA%E8%A9%A2-vs-%E9%95%B7%E8%BC%AA%E8%A9%A2-vs-Webhooks-vs-SSE/"],
        ["從Concurrency與Parallelism概念去了解Python: Multiprocessing、Threading、Coroutine、asyncio", "I/O bound、CPU bound、GIL 與 Python 併發模型整理。", "2026/07/22/%E5%BE%9EConcurrency%E8%88%87Parallelism%E6%A6%82%E5%BF%B5%E5%8E%BB%E4%BA%86%E8%A7%A3Python-Multiprocessing%E3%80%81Threading%E3%80%81Coroutine%E3%80%81asyncio/"]
      ]
    },
    security: {
      label: '資安 / API',
      noteTitle: '從攻擊視角回頭修設計',
      note: '這條路線適合想看後端安全意識的人：JWT、Path Traversal、OAuth2 與 API 防禦。',
      links: [
        ['你的 JWT 真的安全嗎？常見 JWT 驗證漏洞整理（上）', '未驗簽、alg none、弱金鑰與 JWK/JKU 注入。', '2026/05/15/你的-JWT-真的安全嗎？常見-JWT-驗證漏洞整理（上）/'],
        ['後端服務開發安全筆記：路徑遍歷 (Path Traversal)', '路徑穿越、double encoding 與後端防禦方式。', '2026/05/06/後端服務開發安全筆記：路徑遍歷-Path-Traversal/'],
        ['JWT 不是無狀態嗎？前後端分離下，如何處理「User登出」的 Token 管理難題？', 'JWT 登出、撤銷與 token 生命週期管理。', '2026/05/18/JWT-不是無狀態嗎？前後端分離下，如何處理「User登出」的-Token-管理難題/'],
        ['OAuth2.0', 'OAuth2 流程與授權概念整理。', '2025/01/19/OAuth2-0/'],
        ['何謂JWT?', 'JWT 基礎概念與結構整理。', '2024/08/12/何謂JWT/'],
        ['API防禦性程式設計', '以後端 API 視角理解防禦性設計。', '2025/01/19/API防禦性程式設計/'],
        ["DevSecOps 實踐：Pac實踐與漏洞掃描", "Checkov、OPA Conftest、Trivy 與 Policy as Code 掃描流程。", "2026/06/04/DevSecOps-%E5%AF%A6%E8%B8%90%EF%BC%9APac%E5%AF%A6%E8%B8%90%E8%88%87%E6%BC%8F%E6%B4%9E%E6%8E%83%E6%8F%8F/"]
      ]
    },
    ai: {
      label: 'AI / 生成式 AI',
      noteTitle: 'AI 工具與工程實作',
      note: '這條路線適合想看 AI 工具如何進入工程實務、生成式 AI 模型概念，以及 AI 對職涯的影響。',
      links: [
        ['Checkpoint、LoRA、VAE 到底是什麼？理解生成式 AI 模型', '用實務角度理解生成式 AI 模型元件。', '2026/05/20/Checkpoint-LoRA-VAE-到底是什麼？理解生成式-AI-模型/'],
        ['邊緣裝置 AI 小應用', 'Raspberry、NLP、STT、YOLOv8 的邊緣裝置實作。', '2026/02/23/邊緣裝置-AI-小應用/'],
        ['AI 時代下，初階工程師正在消失嗎？', 'AI 對台灣軟體職場與一般工程師職涯的觀察。', '2026/05/13/AI-時代下，初階工程師正在消失嗎？一般工程師的生存思考以及觀測到台灣職場正在改變/'],
        ['macOS 透過 langchain 在 local 使用llama 模型', 'Local LLM、LangChain 與早期 AI 工程探索。', '2025/01/19/macOS-透過-langchain-在-local-使用llama-模型/'],
        ['Python 3.15 將加入 Explicit Lazy Imports：lazy import 解決了什麼？', '語言演進與工程效率的交界。', '2026/05/14/Python-3-15-將加入-Explicit-Lazy-Imports：lazy-import-解決了什麼/'],
        ['BigQuery - 基礎語法篇', '資料分析與雲端資料倉儲基礎。', '2025/01/19/BigQuery-基礎語法篇/'],
        ["Browser Extension 如何在瀏覽器本地跑 AI？Wasm、WebGPU 與 WebNN 的角色", "從 Extension 架構看 Wasm、WebGPU、WebNN 與本地 AI 推論。", "2026/05/26/Browser-Extension-%E5%A6%82%E4%BD%95%E5%9C%A8%E7%80%8F%E8%A6%BD%E5%99%A8%E6%9C%AC%E5%9C%B0%E8%B7%91-AI%EF%BC%9AWasm%E3%80%81WebGPU-%E8%88%87-WebNN-%E7%9A%84%E8%A7%92%E8%89%B2/"],
        ["圖解 AI 搜尋引擎背後的 ANN 演算法，HNSW、IVF 與 PQ 向量檢索技術", "用圖解理解向量搜尋、HNSW、IVF、PQ 與 ANN。", "2026/07/28/%E5%9C%96%E8%A7%A3-AI-%E6%90%9C%E5%B0%8B%E5%BC%95%E6%93%8E%E8%83%8C%E5%BE%8C%E7%9A%84-ANN-%E6%BC%94%E7%AE%97%E6%B3%95%EF%BC%8CHNSW%E3%80%81IVF-%E8%88%87-PQ-%E5%90%91%E9%87%8F%E6%AA%A2%E7%B4%A2%E6%8A%80%E8%A1%93/"]
      ]
    },
    python: {
      label: 'Python 學習者',
      noteTitle: '從語法特性到工程習慣',
      note: '這條路線適合想看 Python 特性、乾淨程式碼、context manager、dataclass 與未來語法的人。',
      links: [
        ['Python 3.15 將加入 Explicit Lazy Imports：lazy import 解決了什麼？', 'Python lazy import 的設計目的與使用限制。', '2026/05/14/Python-3-15-將加入-Explicit-Lazy-Imports：lazy-import-解決了什麼/'],
        ['Python @dataclass', 'dataclass 的用途、語法與實務場景。', '2025/01/19/Python-dataclass/'],
        ['Python Context manager', 'with 語法背後的資源管理模型。', '2025/01/19/Python-Context-manager/'],
        ['Python Clean Code 概念以及淺談', 'Python 程式碼可讀性與維護性整理。', '2025/01/19/Python-Clean-Code-概念以及淺談/'],
        ['Python Property', 'property 的封裝語義與使用時機。', '2025/01/19/Python-Property/'],
        ['Python iterable、iterator、sequence', '理解 Python 迭代模型與序列概念。', '2025/01/19/Python-iterable、iterator、sequence/'],
        ['Python Anti-pattern', '常見反模式與維護性問題。', '2025/01/19/Python-Anti-pattern/'],
        ["從Concurrency與Parallelism概念去了解Python: Multiprocessing、Threading、Coroutine、asyncio", "用 Python 例子拆解 threading、multiprocessing、coroutine 與 asyncio。", "2026/07/22/%E5%BE%9EConcurrency%E8%88%87Parallelism%E6%A6%82%E5%BF%B5%E5%8E%BB%E4%BA%86%E8%A7%A3Python-Multiprocessing%E3%80%81Threading%E3%80%81Coroutine%E3%80%81asyncio/"]
      ]
    }
  }

  const section = document.createElement('section')
  section.className = 'jed-guide'
  section.innerHTML = `
    <div class="jed-guide__inner">
      <div class="jed-guide__header">
        <p class="jed-guide__eyebrow">START HERE</p>
        <h2 class="jed-guide__title">你是誰？我幫你挑最值得先看的文章</h2>
        <p class="jed-guide__summary">這個 Blog 主要記錄後端、Python、資安、AI 與工程師職涯觀察。選一個入口，快速看對你最有價值的文章。</p>
      </div>
      <div class="jed-guide__personas"></div>
      <div class="jed-guide__body">
        <div class="jed-guide__note">
          <h3 class="jed-guide__note-title"></h3>
          <p class="jed-guide__note-text"></p>
          <div class="jed-guide__actions">
            <button class="jed-guide__shuffle" type="button" aria-label="換一批推薦文章">換一批</button>
          </div>
        </div>
        <div class="jed-guide__list"></div>
      </div>
    </div>
  `

  const personas = section.querySelector('.jed-guide__personas')
  const noteTitle = section.querySelector('.jed-guide__note-title')
  const noteText = section.querySelector('.jed-guide__note-text')
  const list = section.querySelector('.jed-guide__list')
  const shuffleButton = section.querySelector('.jed-guide__shuffle')
  let currentKey = 'interview'
  let lastShown = []

  const sampleLinks = links => {
    if (links.length <= 4) return links
    const pool = links
      .map((link, index) => ({ link, index, score: Math.random() }))
      .sort((a, b) => a.score - b.score)
      .map(item => item.link)

    const next = pool.slice(0, 4)
    if (lastShown.length && next.every(link => lastShown.includes(link[0]))) {
      return pool.slice(1, 5)
    }
    return next
  }

  const render = key => {
    currentKey = key
    const data = posts[key]
    section.querySelectorAll('.jed-guide__persona').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.key === key)
    })
    noteTitle.textContent = data.noteTitle
    noteText.textContent = data.note
    const visibleLinks = sampleLinks(data.links)
    lastShown = visibleLinks.map(link => link[0])
    list.innerHTML = visibleLinks.map(([title, desc, href]) => `
      <a class="jed-guide__link" href="${root}${href}">
        <span class="jed-guide__link-title">${title}</span>
        <span class="jed-guide__link-desc">${desc}</span>
      </a>
    `).join('')
  }

  Object.entries(posts).forEach(([key, data]) => {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'jed-guide__persona'
    button.dataset.key = key
    button.textContent = data.label
    button.addEventListener('click', () => render(key))
    personas.appendChild(button)
  })

  shuffleButton.addEventListener('click', () => render(currentKey))

  const mount = document.querySelector('#content-inner') || document.querySelector('main')
  if (mount && mount.parentNode) {
    mount.parentNode.insertBefore(section, mount)
    render('interview')
  }
})()
