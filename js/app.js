/**
 * Mood Record - 情緒詞彙記錄系統
 * Dedicated to Observers in 3-role narrative sessions
 */

// 完整 4 象限情緒詞庫 (依使用者提供之耶魯情緒儀色彩對應)
const MOOD_METER_DATA = [
  {
    id: 'red',
    colorName: '紅色',
    title: '高能量 / 低愉悅',
    icon: 'fa-fire-flame-curved',
    cssClass: 'cat-red',
    words: [
      { zh: '憤怒的', en: 'Enraged' },
      { zh: '驚慌失措的', en: 'Panicked' },
      { zh: '壓力很大的', en: 'Stressed' },
      { zh: '緊張不安的', en: 'Jittery' },
      { zh: '震驚的', en: 'Shocked' },
      { zh: '暴怒的', en: 'Livid' },
      { zh: '氣沖沖的', en: 'Furious' },
      { zh: '沮喪的', en: 'Frustrated' },
      { zh: '神經緊繃的', en: 'Tense' },
      { zh: '錯愕的', en: 'Stunned' },
      { zh: '火冒三丈的', en: 'Fuming' },
      { zh: '受到驚嚇的', en: 'Frightened' },
      { zh: '生氣的', en: 'Angry' },
      { zh: '緊張的', en: 'Nervous' },
      { zh: '坐立難安的', en: 'Restless' },
      { zh: '焦慮的', en: 'Anxious' },
      { zh: '憂慮不安的', en: 'Apprehensive' },
      { zh: '擔心的', en: 'Worried' },
      { zh: '被激怒的', en: 'Irritated' },
      { zh: '被惹惱的', en: 'Annoyed' },
      { zh: '反感的', en: 'Repulsed' },
      { zh: '困擾的', en: 'Troubled' },
      { zh: '在意的', en: 'Concerned' },
      { zh: '忐忑不安的', en: 'Uneasy' },
      { zh: '不太高興', en: 'Peeved' }
    ]
  },
  {
    id: 'yellow',
    colorName: '黃色',
    title: '高能量 / 高愉悅',
    icon: 'fa-sun',
    cssClass: 'cat-yellow',
    words: [
      { zh: '驚喜的', en: 'Surprised' },
      { zh: '振奮的', en: 'Upbeat' },
      { zh: '歡慶的', en: 'Festive' },
      { zh: '心花怒放的', en: 'Exhilarated' },
      { zh: '欣喜若狂的', en: 'Ecstatic' },
      { zh: '亢奮的', en: 'Hyper' },
      { zh: '愉悅的', en: 'Cheerful' },
      { zh: '有動力的', en: 'Motivated' },
      { zh: '受到啟發的', en: 'Inspired' },
      { zh: '興高采烈的', en: 'Elated' },
      { zh: '精力充沛的', en: 'Energized' },
      { zh: '生氣勃勃的', en: 'Lively' },
      { zh: '興奮的', en: 'Excited' },
      { zh: '樂觀的', en: 'Optimistic' },
      { zh: '熱情洋溢的', en: 'Enthusiastic' },
      { zh: '開心的', en: 'Pleased' },
      { zh: '集中的', en: 'Focused' },
      { zh: '快樂的', en: 'Happy' },
      { zh: '驕傲的', en: 'Proud' },
      { zh: '興奮激動的', en: 'Thrilled' },
      { zh: '令人愉快的', en: 'Pleasant' },
      { zh: '欣喜的', en: 'Joyful' },
      { zh: '有希望的', en: 'Hopeful' },
      { zh: '好玩的', en: 'Playful' },
      { zh: '幸福的', en: 'Blissful' }
    ]
  },
  {
    id: 'blue',
    colorName: '藍色',
    title: '低能量 / 低愉悅',
    icon: 'fa-cloud-rain',
    cssClass: 'cat-blue',
    words: [
      { zh: '厭惡的', en: 'Disgusted' },
      { zh: '死氣沉沉的', en: 'Glum' },
      { zh: '失望的', en: 'Disappointed' },
      { zh: '低落的', en: 'Down' },
      { zh: '提不起勁的', en: 'Apathetic' },
      { zh: '悲觀的', en: 'Pessimistic' },
      { zh: '鬱鬱寡歡的', en: 'Morose' },
      { zh: '洩氣的', en: 'Discouraged' },
      { zh: '難過的', en: 'Sad' },
      { zh: '無聊的', en: 'Bored' },
      { zh: '疏離的', en: 'Alienated' },
      { zh: '悲慘的', en: 'Miserable' },
      { zh: '孤單的', en: 'Lonely' },
      { zh: '心灰意冷的', en: 'Disheartened' },
      { zh: '疲累的', en: 'Tired' },
      { zh: '消沉的', en: 'Despondent' },
      { zh: '抑鬱的', en: 'Depressed' },
      { zh: '悶悶不樂的', en: 'Sullen' },
      { zh: '精疲力盡的', en: 'Exhausted' },
      { zh: '疲勞的', en: 'Fatigued' },
      { zh: '絕望的', en: 'Despairing' },
      { zh: '無望的', en: 'Hopeless' },
      { zh: '孤寂的', en: 'Desolate' },
      { zh: '疲憊不堪的', en: 'Spent' },
      { zh: '被榨乾的', en: 'Drained' }
    ]
  },
  {
    id: 'green',
    colorName: '綠色',
    title: '低能量 / 高愉悅',
    icon: 'fa-seedling',
    cssClass: 'cat-green',
    words: [
      { zh: '自在的', en: 'At Ease' },
      { zh: '隨和的', en: 'Easygoing' },
      { zh: '知足的', en: 'Content' },
      { zh: '充滿愛的', en: 'Loving' },
      { zh: '心滿意足的', en: 'Fulfilled' },
      { zh: '平靜的', en: 'Calm' },
      { zh: '安全的', en: 'Secure' },
      { zh: '滿意的', en: 'Satisfied' },
      { zh: '滿懷感謝的', en: 'Grateful' },
      { zh: '感動的', en: 'Touched' },
      { zh: '放鬆的', en: 'Relaxed' },
      { zh: '冷靜的', en: 'Chill' },
      { zh: '寧靜的', en: 'Restful' },
      { zh: '有福氣的', en: 'Blessed' },
      { zh: '平衡的', en: 'Balanced' },
      { zh: '柔和的', en: 'Mellow' },
      { zh: '考慮周到的', en: 'Thoughtful' },
      { zh: '平和的', en: 'Peaceful' },
      { zh: '舒服的', en: 'Comfortable' },
      { zh: '無憂無慮的', en: 'Carefree' },
      { zh: '昏昏欲睡的', en: 'Sleepy' },
      { zh: '自鳴得意的', en: 'Complacent' },
      { zh: '靜謐的', en: 'Tranquil' },
      { zh: '舒適的', en: 'Cozy' },
      { zh: '安詳的', en: 'Serene' }
    ]
  }
];

class MoodRecordApp {
  constructor() {
    // 時間設定 (預設 90 秒，支援自訂)
    this.totalSeconds = 90;
    this.remainingSeconds = 90;
    this.timerId = null;
    this.isRunning = false;
    this.soundEnabled = true;

    // 明暗主題 (預設明亮模式)
    this.currentTheme = localStorage.getItem('mood_record_theme') || 'light';

    // 詞彙面板折疊狀態（預設全收起）
    this.collapsedStates = {
      red: true,
      yellow: true,
      blue: true,
      green: true
    };

    // 模式狀態：'countdown' (倒數計時) | 'realtime' (非計時，記錄系統時間)
    this.mode = 'countdown';
    this.realtimeTimerId = null;

    // 記錄數據
    this.recordedWords = {}; // { word: count }
    this.timeline = []; // [{ word, second, formattedTime, category }]
    this.notes = '';

    this.audioCtx = null;

    this.initTheme();
    this.initDOM();
    this.renderCategoryBlocks();
    this.bindEvents();
    this.initMascotDraggable();
    this.updateTimerDisplay();
    this.startRealtimeClock();
  }

  initTheme() {
    document.documentElement.setAttribute('data-theme', this.currentTheme);
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    localStorage.setItem('mood_record_theme', this.currentTheme);
    this.updateThemeButtonIcon();
    this.showToast(`已切換為${this.currentTheme === 'dark' ? '暗色模式' : '明亮模式'}`);
  }

  updateThemeButtonIcon() {
    if (!this.btnThemeToggle) return;
    if (this.currentTheme === 'light') {
      this.btnThemeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
      this.btnThemeToggle.title = '切換至暗色模式';
    } else {
      this.btnThemeToggle.innerHTML = '<i class="fa-solid fa-sun" style="color:#f59e0b;"></i>';
      this.btnThemeToggle.title = '切換至明亮模式';
    }
  }

  initDOM() {
    // 主題按鈕
    this.btnThemeToggle = document.getElementById('btnThemeToggle');
    this.updateThemeButtonIcon();

    // 模式切換器與容器
    this.tabModeCountdown = document.getElementById('tabModeCountdown');
    this.tabModeRealtime = document.getElementById('tabModeRealtime');
    this.countdownContainer = document.getElementById('countdownContainer');
    this.realtimeContainer = document.getElementById('realtimeContainer');
    this.timeSettingsSection = document.getElementById('timeSettingsSection');
    this.modeHeaderTitle = document.getElementById('modeHeaderTitle');
    this.modeHeaderIcon = document.getElementById('modeHeaderIcon');
    this.realtimeDigitsEl = document.getElementById('realtimeDigits');

    // 觀察時間設定折疊
    this.btnToggleTimeSettings = document.getElementById('btnToggleTimeSettings');
    this.timeCustomToolbar = document.getElementById('timeCustomToolbar');
    this.currentTimeBadge = document.getElementById('currentTimeBadge');

    // 計時器核心元件
    this.timerDigitsEl = document.getElementById('timerDigits');
    this.timerProgressEl = document.getElementById('timerProgress');
    this.btnTimerToggle = document.getElementById('btnTimerToggle');
    this.btnTimerReset = document.getElementById('btnTimerReset');
    this.btnSoundToggle = document.getElementById('btnSoundToggle');
    this.soundIcon = document.getElementById('soundIcon');
    this.customTimeInput = document.getElementById('customTimeInput');
    this.presetButtons = document.querySelectorAll('.btn-time-preset');

    // 詞彙與輸入
    this.categoryContainer = document.getElementById('categoryContainer');
    this.btnToggleAllCategories = document.getElementById('btnToggleAllCategories');
    this.customInputEl = document.getElementById('customEmotionInput');
    this.btnAddCustom = document.getElementById('btnAddCustom');
    this.recordedCloudEl = document.getElementById('recordedCloud');
    this.timelineFeedEl = document.getElementById('timelineFeed');
    this.totalCountBadge = document.getElementById('totalCountBadge');

    // 速記筆記
    this.notesTextarea = document.getElementById('quickNotes');

    // 總結彈窗與操作
    this.btnOpenReport = document.getElementById('btnOpenReport');
    this.btnClearRecord = document.getElementById('btnClearRecord');
    this.reportModal = document.getElementById('reportModal');
    this.btnCloseModal = document.getElementById('btnCloseModal');
    this.btnCopyReport = document.getElementById('btnCopyReport');
    this.btnDownloadTxt = document.getElementById('btnDownloadTxt');
    this.reportContentEl = document.getElementById('reportContent');

    // 吉祥物
    this.mascotEl = document.getElementById('mascotLiyu');
  }

  bindEvents() {
    // 主題切換
    if (this.btnThemeToggle) {
      this.btnThemeToggle.addEventListener('click', () => this.toggleTheme());
    }

    // 模式切換
    if (this.tabModeCountdown) {
      this.tabModeCountdown.addEventListener('click', () => this.switchMode('countdown'));
    }
    if (this.tabModeRealtime) {
      this.tabModeRealtime.addEventListener('click', () => this.switchMode('realtime'));
    }

    // 設定觀察時間折疊切換
    if (this.btnToggleTimeSettings) {
      this.btnToggleTimeSettings.addEventListener('click', () => this.toggleTimeSettings());
    }

    // 計時操作
    this.btnTimerToggle.addEventListener('click', () => this.toggleTimer());
    this.btnTimerReset.addEventListener('click', () => this.resetTimer());
    if (this.btnSoundToggle) {
      this.btnSoundToggle.addEventListener('click', () => {
        this.soundEnabled = !this.soundEnabled;
        if (this.soundEnabled) {
          this.btnSoundToggle.classList.add('active');
          if (this.soundIcon) this.soundIcon.className = 'fa-solid fa-volume-high';
          this.btnSoundToggle.title = '提示音效：已開啟 (點擊切換靜音)';
          this.showToast('提示音效已開啟');
          this.playTone(600, 0.1, 'sine');
        } else {
          this.btnSoundToggle.classList.remove('active');
          if (this.soundIcon) this.soundIcon.className = 'fa-solid fa-volume-xmark';
          this.btnSoundToggle.title = '提示音效：已靜音 (點擊切換開啟)';
          this.showToast('提示音效已靜音');
        }
      });
    }

    // 預設時間按鈕切換
    this.presetButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const secs = parseInt(btn.getAttribute('data-seconds'), 10);
        this.setCustomTime(secs);
        this.presetButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (this.customTimeInput) this.customTimeInput.value = secs;
      });
    });

    // 自訂時間輸入框
    if (this.customTimeInput) {
      this.customTimeInput.addEventListener('change', (e) => {
        let val = parseInt(e.target.value, 10);
        if (isNaN(val) || val < 5) val = 90;
        if (val > 3600) val = 3600;
        e.target.value = val;
        this.setCustomTime(val);

        // 更新 preset active 樣式
        this.presetButtons.forEach(b => {
          if (parseInt(b.getAttribute('data-seconds'), 10) === val) {
            b.classList.add('active');
          } else {
            b.classList.remove('active');
          }
        });
      });
    }

    // 全部展開 / 全部收起切換
    if (this.btnToggleAllCategories) {
      this.btnToggleAllCategories.addEventListener('click', () => this.toggleAllCategories());
    }

    // 自訂情緒詞輸入
    this.btnAddCustom.addEventListener('click', () => this.handleCustomAdd());
    this.customInputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.handleCustomAdd();
      }
    });

    // 速記筆記
    if (this.notesTextarea) {
      this.notesTextarea.addEventListener('input', (e) => this.notes = e.target.value);
    }

    // 總結與清理
    this.btnOpenReport.addEventListener('click', () => this.generateAndOpenReport());
    this.btnClearRecord.addEventListener('click', () => this.confirmClear());
    this.btnCloseModal.addEventListener('click', () => this.closeReportModal());
    this.reportModal.addEventListener('click', (e) => {
      if (e.target === this.reportModal) this.closeReportModal();
    });
    this.btnCopyReport.addEventListener('click', () => this.copyReportToClipboard());
    this.btnDownloadTxt.addEventListener('click', () => this.downloadReportAsTxt());

    // 鍵盤空白鍵暫停/開始計時（在非輸入框狀態下，僅在倒數模式有效）
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        if (this.mode === 'countdown') {
          e.preventDefault();
          this.toggleTimer();
        }
      }
    });
  }

  // 切換模式：倒數計時 vs 系統時間
  switchMode(newMode) {
    if (this.mode === newMode) return;
    this.mode = newMode;

    if (newMode === 'countdown') {
      this.tabModeCountdown.classList.add('active');
      this.tabModeRealtime.classList.remove('active');
      this.countdownContainer.style.display = 'flex';
      this.realtimeContainer.style.display = 'none';
      if (this.timeSettingsSection) this.timeSettingsSection.style.display = 'block';
      if (this.modeHeaderTitle) this.modeHeaderTitle.textContent = '敘事者觀察計時器';
      if (this.modeHeaderIcon) this.modeHeaderIcon.className = 'fa-solid fa-stopwatch';
      this.showToast('已切換為「倒數計時模式」');
    } else {
      this.pauseTimer(); // 暫停倒數
      this.tabModeRealtime.classList.add('active');
      this.tabModeCountdown.classList.remove('active');
      this.countdownContainer.style.display = 'none';
      this.realtimeContainer.style.display = 'flex';
      if (this.timeSettingsSection) this.timeSettingsSection.style.display = 'none';
      if (this.modeHeaderTitle) this.modeHeaderTitle.textContent = '系統時間記錄器';
      if (this.modeHeaderIcon) this.modeHeaderIcon.className = 'fa-regular fa-clock';
      this.updateRealtimeDisplay();
      this.showToast('已切換為「非計時模式：記錄系統時間」');
    }
  }

  // 系統時間即時時鐘
  startRealtimeClock() {
    this.updateRealtimeDisplay();
    setInterval(() => {
      this.updateRealtimeDisplay();
    }, 1000);
  }

  updateRealtimeDisplay() {
    if (!this.realtimeDigitsEl) return;
    const now = new Date();
    this.realtimeDigitsEl.textContent = now.toLocaleTimeString('zh-TW', { hour12: false });
  }

  // 設定觀察時間折疊切換
  toggleTimeSettings() {
    if (!this.timeCustomToolbar) return;
    const isNowCollapsed = this.timeCustomToolbar.classList.toggle('is-collapsed');
    if (this.timeSettingsSection) {
      if (!isNowCollapsed) {
        this.timeSettingsSection.classList.add('is-open');
      } else {
        this.timeSettingsSection.classList.remove('is-open');
      }
    }
  }

  // 設定自訂時間
  setCustomTime(seconds) {
    this.pauseTimer();
    this.totalSeconds = seconds;
    this.remainingSeconds = seconds;
    if (this.currentTimeBadge) {
      this.currentTimeBadge.textContent = `${seconds} 秒`;
    }
    this.updateTimerDisplay();
    this.showToast(`觀察時間已設定為 ${seconds} 秒`);
  }

  // 渲染分類情緒標籤（預設收起，簡約清爽）
  renderCategoryBlocks() {
    this.categoryContainer.innerHTML = '';

    MOOD_METER_DATA.forEach(cat => {
      const block = document.createElement('div');
      block.className = `category-block ${cat.cssClass}`;
      block.id = `catBlock_${cat.id}`;
      if (!this.collapsedStates[cat.id]) {
        block.classList.add('is-expanded');
      }

      // 標題列 (Click to Toggle Accordion - 不顯示詞數)
      const header = document.createElement('div');
      header.className = 'cat-header-clickable';
      header.innerHTML = `
        <div class="cat-title-left">
          <span class="color-indicator-dot"></span>
          <i class="fa-solid ${cat.icon}"></i>
          <span class="cat-title-text">${cat.colorName}區：${cat.title}</span>
        </div>
        <div class="cat-chevron">
          <i class="fa-solid fa-chevron-down"></i>
        </div>
      `;

      header.addEventListener('click', () => {
        const isNowExpanded = block.classList.toggle('is-expanded');
        this.collapsedStates[cat.id] = !isNowExpanded;
      });

      // 內容折疊區
      const body = document.createElement('div');
      body.className = 'category-body';

      const tagsGrid = document.createElement('div');
      tagsGrid.className = 'emotion-tags';

      cat.words.forEach(item => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'emotion-chip';
        chip.innerHTML = `
          <span class="chip-zh">${item.zh}</span>
          <span class="chip-en">${item.en}</span>
        `;
        chip.title = `記錄：${item.zh} (${item.en})`;
        chip.addEventListener('click', (e) => {
          e.stopPropagation();
          this.recordEmotion(item.zh, cat.id, item.en);
        });
        tagsGrid.appendChild(chip);
      });

      body.appendChild(tagsGrid);
      block.appendChild(header);
      block.appendChild(body);
      this.categoryContainer.appendChild(block);
    });
  }

  // 全部展開 / 全部收起切換
  toggleAllCategories() {
    const allExpanded = Object.values(this.collapsedStates).every(state => state === false);
    const targetState = allExpanded; // 如果全部已展開，則全部收起；否則全部展開

    MOOD_METER_DATA.forEach(cat => {
      this.collapsedStates[cat.id] = targetState;
      const el = document.getElementById(`catBlock_${cat.id}`);
      if (el) {
        if (!targetState) {
          el.classList.add('is-expanded');
        } else {
          el.classList.remove('is-expanded');
        }
      }
    });

    if (this.btnToggleAllCategories) {
      if (targetState) {
        this.btnToggleAllCategories.innerHTML = '<i class="fa-solid fa-angles-down"></i>';
        this.btnToggleAllCategories.title = '展開全部詞彙';
        this.showToast('已收起所有情緒詞彙');
      } else {
        this.btnToggleAllCategories.innerHTML = '<i class="fa-solid fa-angles-up"></i>';
        this.btnToggleAllCategories.title = '收起全部詞彙';
        this.showToast('已展開所有情緒詞彙');
      }
    }
  }

  // 記錄情緒詞
  recordEmotion(word, categoryKey = 'custom', enWord = '') {
    const trimmed = word.trim();
    if (!trimmed) return;

    // 更新次數
    this.recordedWords[trimmed] = (this.recordedWords[trimmed] || 0) + 1;

    // 計算時間戳：系統時間模式取現在時分秒，倒數模式取流逝秒數
    let timeFormatted = '';
    let secondElapsed = 0;

    if (this.mode === 'realtime') {
      const now = new Date();
      timeFormatted = now.toLocaleTimeString('zh-TW', { hour12: false });
      secondElapsed = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    } else {
      secondElapsed = this.totalSeconds - this.remainingSeconds;
      const minutes = Math.floor(secondElapsed / 60);
      const seconds = secondElapsed % 60;
      timeFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    // 推入時間軸
    this.timeline.unshift({
      id: Date.now() + Math.random(),
      word: trimmed,
      en: enWord,
      second: secondElapsed,
      timeStr: timeFormatted,
      category: categoryKey
    });

    // 點擊回饋微音
    this.playTone(800, 0.05, 'triangle');

    // 更新介面
    this.renderRecordedCloud();
    this.renderTimeline();
    this.showToast(`已記錄：${trimmed} (${timeFormatted})`);
  }

  handleCustomAdd() {
    const val = this.customInputEl.value.trim();
    if (!val) return;
    this.recordEmotion(val, 'custom');
    this.customInputEl.value = '';
    this.customInputEl.focus();
  }

  // 渲染已統計的情緒標籤雲 (清楚易讀的高對比按鈕)
  renderRecordedCloud() {
    const words = Object.keys(this.recordedWords);
    const totalCount = Object.values(this.recordedWords).reduce((sum, count) => sum + count, 0);
    this.totalCountBadge.textContent = totalCount;

    if (words.length === 0) {
      this.recordedCloudEl.innerHTML = `
        <div class="empty-placeholder">
          <i class="fa-solid fa-clipboard-list"></i>
          <span>點選展開上方情緒詞彙，或自訂輸入即時累積</span>
        </div>`;
      return;
    }

    this.recordedCloudEl.innerHTML = '';
    // 按次數降冪排序
    words.sort((a, b) => this.recordedWords[b] - this.recordedWords[a]);

    words.forEach(word => {
      const count = this.recordedWords[word];
      const chip = document.createElement('div');
      chip.className = 'active-record-chip';
      chip.title = '點擊增加次數，右鍵或按叉叉減少次數';
      chip.innerHTML = `
        <span>${word}</span>
        <span class="chip-count">${count}</span>
        <i class="fa-solid fa-xmark chip-remove" title="減少或移除"></i>
      `;

      // 點擊再 +1
      chip.addEventListener('click', (e) => {
        if (e.target.classList.contains('chip-remove')) {
          this.decrementEmotion(word);
        } else {
          this.recordEmotion(word);
        }
      });

      // 右鍵減少次數
      chip.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        this.decrementEmotion(word);
      });

      this.recordedCloudEl.appendChild(chip);
    });
  }

  decrementEmotion(word) {
    if (!this.recordedWords[word]) return;
    this.recordedWords[word]--;
    if (this.recordedWords[word] <= 0) {
      delete this.recordedWords[word];
    }
    this.renderRecordedCloud();
  }

  // 渲染時間軸列表
  renderTimeline() {
    if (this.timeline.length === 0) {
      this.timelineFeedEl.innerHTML = `
        <div class="empty-placeholder">
          <i class="fa-solid fa-clock-rotate-left"></i>
          <span>敘事者發言時，記錄將依秒數即時排序列出</span>
        </div>`;
      return;
    }

    this.timelineFeedEl.innerHTML = '';
    this.timeline.forEach(item => {
      const entry = document.createElement('div');
      entry.className = 'timeline-entry';
      entry.innerHTML = `
        <span class="timeline-time">
          <i class="fa-regular fa-clock"></i> ${item.timeStr}
        </span>
        <span class="timeline-word">${item.word} ${item.en ? `<span style="font-size:0.75rem; opacity:0.75;">(${item.en})</span>` : ''}</span>
      `;
      this.timelineFeedEl.appendChild(entry);
    });
  }

  // 計時器核心
  toggleTimer() {
    if (this.isRunning) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer() {
    if (this.isRunning) return;
    if (this.remainingSeconds <= 0) {
      this.remainingSeconds = this.totalSeconds;
    }

    this.isRunning = true;
    this.btnTimerToggle.innerHTML = '<i class="fa-solid fa-pause"></i> <span>暫停</span>';
    this.btnTimerToggle.classList.replace('btn-primary', 'btn-secondary');

    this.timerId = setInterval(() => {
      this.remainingSeconds--;
      this.updateTimerDisplay();

      // 剩餘 10 秒提醒
      if (this.remainingSeconds === 10) {
        this.playTone(440, 0.2, 'sine');
      }

      // 時間到
      if (this.remainingSeconds <= 0) {
        this.finishTimer();
      }
    }, 1000);
  }

  pauseTimer() {
    this.isRunning = false;
    clearInterval(this.timerId);
    this.btnTimerToggle.innerHTML = '<i class="fa-solid fa-play"></i> <span>開始計時</span>';
    this.btnTimerToggle.classList.replace('btn-secondary', 'btn-primary');
  }

  resetTimer() {
    this.pauseTimer();
    this.remainingSeconds = this.totalSeconds;
    this.updateTimerDisplay();
    this.showToast(`計時器已重置為 ${this.totalSeconds} 秒`);
  }

  finishTimer() {
    this.pauseTimer();
    this.playTone(587.33, 0.4, 'sine'); // D5
    setTimeout(() => this.playTone(880, 0.6, 'sine'), 250); // A5
    this.showToast(`${this.totalSeconds} 秒敘事時間結束！請對話者進行回應。`);
  }

  updateTimerDisplay() {
    const mins = Math.floor(this.remainingSeconds / 60);
    const secs = this.remainingSeconds % 60;
    this.timerDigitsEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    // 更新圓環進度 (周長 = 2 * PI * 90 ≈ 565.48)
    const circumference = 565.48;
    const progress = this.remainingSeconds / this.totalSeconds;
    const offset = circumference * (1 - progress);
    this.timerProgressEl.style.strokeDashoffset = offset;

    // 漸變顏色
    if (this.remainingSeconds <= 15) {
      this.timerProgressEl.style.stroke = '#ef4444'; // 紅色警戒
    } else if (this.remainingSeconds <= 35) {
      this.timerProgressEl.style.stroke = '#f59e0b'; // 黃色注意
    } else {
      this.timerProgressEl.style.stroke = '#06b6d4'; // 正常青藍色
    }
  }

  // Web Audio 提示音
  playTone(freq, duration, type = 'sine') {
    if (!this.soundEnabled) return;
    try {
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.audioCtx = new AudioContext();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.15, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      console.warn('Audio play failed', e);
    }
  }

  // 總結報告生成
  generateReportText() {
    const now = new Date();
    const dateStr = now.toLocaleString('zh-TW', { hour12: false });
    const words = Object.keys(this.recordedWords);
    words.sort((a, b) => this.recordedWords[b] - this.recordedWords[a]);

    const totalWordsCount = Object.values(this.recordedWords).reduce((sum, c) => sum + c, 0);

    let report = `===============================\n`;
    report += `【Mood Record 觀察者記錄報告】\n`;
    report += `記錄時間：${dateStr}\n`;
    if (this.mode === 'realtime') {
      report += `記錄模式：系統時間記錄模式\n`;
    } else {
      report += `記錄模式：倒數計時模式 (設定時長：${this.totalSeconds} 秒)\n`;
    }
    report += `===============================\n\n`;

    report += `【出現情緒詞彙統計 (共 ${totalWordsCount} 次)】\n`;
    if (words.length === 0) {
      report += `（本次對話未記錄到顯著情緒詞彙）\n\n`;
    } else {
      words.forEach((w, i) => {
        report += `${i + 1}. ${w} : ${this.recordedWords[w]} 次\n`;
      });
      report += `\n`;
    }

    report += `【時間軸軌跡】\n`;
    if (this.timeline.length === 0) {
      report += `（無時間戳記錄）\n\n`;
    } else {
      const reversedTimeline = [...this.timeline].reverse();
      reversedTimeline.forEach(item => {
        report += `[${item.timeStr}] ${item.word} ${item.en ? `(${item.en})` : ''}\n`;
      });
      report += `\n`;
    }

    report += `【觀察筆記速記】\n`;
    report += `${this.notes.trim() ? this.notes.trim() : '（無特定補充備註）'}\n\n`;
    report += `===============================\n`;
    report += `系統紀錄由 Mood Record 產生\n`;
    report += `Copyright © Liyuchiutiger Gongminshen\n`;

    return report;
  }

  generateAndOpenReport() {
    const text = this.generateReportText();
    this.reportContentEl.textContent = text;
    this.reportModal.classList.add('active');
  }

  closeReportModal() {
    this.reportModal.classList.remove('active');
  }

  copyReportToClipboard() {
    const text = this.reportContentEl.textContent;
    navigator.clipboard.writeText(text).then(() => {
      this.showToast('報告已成功複製到剪貼簿！');
    }).catch(() => {
      this.showToast('複製失敗，請手動全選複製。');
    });
  }

  downloadReportAsTxt() {
    const text = this.reportContentEl.textContent;
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `MoodRecord_Report_${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    this.showToast('已下載純文字報告檔案');
  }

  confirmClear() {
    if (confirm('確定要清空本次記錄的情緒詞彙、時間軸與筆記嗎？')) {
      this.recordedWords = {};
      this.timeline = [];
      this.notes = '';
      if (this.notesTextarea) this.notesTextarea.value = '';
      this.resetTimer();
      this.renderRecordedCloud();
      this.renderTimeline();
      this.showToast('紀錄已全部清空');
    }
  }

  showToast(msg) {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color:var(--accent)"></i> <span>${msg}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.3s, transform 0.3s';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  // =========================================================
  // 吉祥物自由拖曳互動 (滑鼠與觸控支援)
  // =========================================================
  initMascotDraggable() {
    if (!this.mascotEl) return;

    let isDragging = false;
    let startX, startY;
    let initialLeft, initialTop;

    // 嘗試載入先前的記憶位置
    const savedPos = localStorage.getItem('mascot_pos');
    if (savedPos) {
      try {
        const { left, top } = JSON.parse(savedPos);
        const maxLeft = window.innerWidth - this.mascotEl.offsetWidth;
        const maxTop = window.innerHeight - this.mascotEl.offsetHeight;
        const boundedLeft = Math.max(10, Math.min(left, maxLeft - 10));
        const boundedTop = Math.max(10, Math.min(top, maxTop - 10));

        this.mascotEl.style.left = `${boundedLeft}px`;
        this.mascotEl.style.top = `${boundedTop}px`;
        this.mascotEl.style.bottom = 'auto';
      } catch (e) {
        console.warn('Load mascot pos error', e);
      }
    }

    const onStart = (clientX, clientY) => {
      isDragging = true;
      this.mascotEl.classList.add('is-dragging');

      const rect = this.mascotEl.getBoundingClientRect();
      initialLeft = rect.left;
      initialTop = rect.top;
      startX = clientX;
      startY = clientY;

      this.mascotEl.style.left = `${initialLeft}px`;
      this.mascotEl.style.top = `${initialTop}px`;
      this.mascotEl.style.bottom = 'auto';
    };

    const onMove = (clientX, clientY) => {
      if (!isDragging) return;

      const dx = clientX - startX;
      const dy = clientY - startY;

      let newLeft = initialLeft + dx;
      let newTop = initialTop + dy;

      const maxLeft = window.innerWidth - this.mascotEl.offsetWidth - 5;
      const maxTop = window.innerHeight - this.mascotEl.offsetHeight - 5;

      newLeft = Math.max(5, Math.min(newLeft, maxLeft));
      newTop = Math.max(5, Math.min(newTop, maxTop));

      this.mascotEl.style.left = `${newLeft}px`;
      this.mascotEl.style.top = `${newTop}px`;
    };

    const onEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      this.mascotEl.classList.remove('is-dragging');

      const rect = this.mascotEl.getBoundingClientRect();
      localStorage.setItem('mascot_pos', JSON.stringify({
        left: rect.left,
        top: rect.top
      }));
    };

    // 滑鼠事件
    this.mascotEl.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return;
      onStart(e.clientX, e.clientY);
      e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
      if (isDragging) {
        onMove(e.clientX, e.clientY);
      }
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        onEnd();
      }
    });

    // 觸控事件 (Mobile & Tablet)
    this.mascotEl.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        onStart(touch.clientX, touch.clientY);
      }
    }, { passive: false });

    window.addEventListener('touchmove', (e) => {
      if (isDragging && e.touches.length === 1) {
        const touch = e.touches[0];
        onMove(touch.clientX, touch.clientY);
        e.preventDefault();
      }
    }, { passive: false });

    window.addEventListener('touchend', () => {
      if (isDragging) {
        onEnd();
      }
    });
  }
}

// 頁面載入後初始化
document.addEventListener('DOMContentLoaded', () => {
  window.moodApp = new MoodRecordApp();
});
