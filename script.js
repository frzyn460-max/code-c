/* =====================================================
   CODE TYPING TRAINER ULTIMATE - JAVASCRIPT
   منطق کامل برنامه با امنیت و بهینه‌سازی
===================================================== */

'use strict'; // استفاده از حالت سخت‌گیرانه JavaScript

/* ================= تنظیمات امنیتی ================= */

// جلوگیری از کنسول در محیط تولید (اختیاری)
// if (location.hostname !== 'localhost') {
//   console.log = console.warn = console.error = () => {};
// }

/* ================= بانک کدها با دسته‌بندی سطح ================= */

const CODE_BANK = {
  html: {
    easy: [
      {
        code: '<h1>Hello World</h1>',
        description: 'یک تگ عنوان اصلی ساده'
      },
      {
        code: '<p>Text here</p>',
        description: 'یک پاراگراف متنی ساده'
      },
      {
        code: '<a href="#">Link</a>',
        description: 'یک لینک ساده'
      }
    ],
    medium: [
      {
        code: '<header><h1>Hello World</h1></header>',
        description: 'یک هدر HTML می‌سازد که داخل آن یک عنوان اصلی (h1) قرار دارد.'
      },
      {
        code: '<ul><li>One</li><li>Two</li></ul>',
        description: 'یک لیست بدون شماره با دو آیتم ایجاد می‌کند.'
      },
      {
        code: "<button class='btn'>Click</button>",
        description: 'یک دکمه HTML با کلاس btn برای استایل‌دهی می‌سازد.'
      }
    ],
    hard: [
      {
        code: '<div class="container"><header><nav><ul><li><a href="#">Home</a></li></ul></nav></header></div>',
        description: 'ساختار پیچیده HTML با کانتینر، هدر و منوی ناوبری'
      },
      {
        code: '<form action="/submit" method="POST"><input type="text" name="email" required /></form>',
        description: 'فرم HTML با ورودی ایمیل و اعتبارسنجی'
      }
    ]
  },
  
  css: {
    easy: [
      {
        code: 'body { margin: 0; }',
        description: 'حذف حاشیه پیش‌فرض بدنه'
      },
      {
        code: '.btn { color: blue; }',
        description: 'تغییر رنگ متن دکمه'
      }
    ],
    medium: [
      {
        code: 'body { margin: 0; background: black; }',
        description: 'حاشیه پیش‌فرض صفحه را حذف کرده و رنگ پس‌زمینه را مشکی می‌کند.'
      },
      {
        code: '.card:hover { transform: scale(1.05); }',
        description: 'هنگام هاور روی کارت، اندازه آن کمی بزرگ‌تر می‌شود.'
      }
    ],
    hard: [
      {
        code: '.container { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; }',
        description: 'گرید ریسپانسیو با ستون‌های خودکار'
      }
    ]
  },
  
  js: {
    easy: [
      {
        code: 'let x = 10;',
        description: 'تعریف یک متغیر ساده'
      },
      {
        code: 'console.log("Hi");',
        description: 'چاپ یک پیام در کنسول'
      }
    ],
    medium: [
      {
        code: 'let count = 0;',
        description: 'یک متغیر قابل تغییر به نام count با مقدار اولیه صفر تعریف می‌کند.'
      },
      {
        code: 'function sum(a, b) { return a + b; }',
        description: 'تابعی تعریف می‌کند که مجموع دو عدد را برمی‌گرداند.'
      },
      {
        code: 'const arr = [1, 2, 3].map(x => x * 2);',
        description: 'آرایه جدیدی با دو برابر کردن هر عنصر'
      }
    ],
    hard: [
      {
        code: 'const fetchData = async () => { const res = await fetch("/api"); return res.json(); };',
        description: 'تابع غیرهمزمان برای دریافت داده از API'
      }
    ]
  },
  
  react: {
    easy: [
      {
        code: 'const App = () => <div>Hello</div>;',
        description: 'کامپوننت React ساده'
      }
    ],
    medium: [
      {
        code: 'const [count, setCount] = useState(0);',
        description: 'استفاده از useState برای مدیریت state'
      },
      {
        code: 'useEffect(() => { console.log("mounted"); }, []);',
        description: 'استفاده از useEffect برای اجرای کد در mount'
      }
    ],
    hard: [
      {
        code: 'const memoizedValue = useMemo(() => computeExpensive(a, b), [a, b]);',
        description: 'بهینه‌سازی با useMemo برای محاسبات سنگین'
      }
    ]
  },
  
  python: {
    easy: [
      {
        code: 'x = 10',
        description: 'تعریف یک متغیر عددی'
      },
      {
        code: 'print("Hello")',
        description: 'چاپ یک پیام'
      }
    ],
    medium: [
      {
        code: 'def greet(name): return f"Hello {name}"',
        description: 'تابع سلام با استفاده از f-string'
      },
      {
        code: 'numbers = [x**2 for x in range(10)]',
        description: 'لیست‌کامپرهنشن برای مربع اعداد'
      }
    ],
    hard: [
      {
        code: 'class Calculator: def __init__(self): self.result = 0',
        description: 'تعریف کلاس با متد سازنده'
      }
    ]
  },
  
  php: {
    easy: [
      {
        code: '<?php echo "Hello World"; ?>',
        description: 'چاپ یک پیام ساده در PHP'
      },
      {
        code: '$name = "Ali";',
        description: 'تعریف یک متغیر رشته‌ای'
      },
      {
        code: '$num = 10 + 5;',
        description: 'عملیات ریاضی ساده'
      }
    ],
    medium: [
      {
        code: 'function sum($a, $b) { return $a + $b; }',
        description: 'تابع محاسبه مجموع دو عدد'
      },
      {
        code: '$arr = array(1, 2, 3, 4, 5);',
        description: 'تعریف یک آرایه'
      },
      {
        code: 'if ($x > 10) { echo "بزرگتر"; }',
        description: 'شرط if برای بررسی مقدار'
      },
      {
        code: 'foreach ($items as $item) { echo $item; }',
        description: 'حلقه foreach برای پیمایش آرایه'
      }
    ],
    hard: [
      {
        code: 'class User { public $name; public function __construct($n) { $this->name = $n; } }',
        description: 'تعریف کلاس User با سازنده'
      },
      {
        code: '$pdo = new PDO("mysql:host=localhost;dbname=test", "user", "pass");',
        description: 'اتصال به پایگاه داده با PDO'
      },
      {
        code: 'try { $result = $db->query($sql); } catch (Exception $e) { echo $e->getMessage(); }',
        description: 'مدیریت خطا با try-catch'
      }
    ]
  }
};

/* ================= دریافت المان‌های DOM ================= */

// هدر و کنترل‌ها
const langSelect = document.getElementById('languageSelect');
const difficultySelect = document.getElementById('difficultySelect');
const themeToggle = document.getElementById('themeToggle');
const settingsBtn = document.getElementById('settingsBtn');

// کارت کد مرجع
const referenceCode = document.getElementById('referenceCode');
const codeDescription = document.getElementById('codeDescription');
const copyCodeBtn = document.getElementById('copyCodeBtn');
const codeLength = document.getElementById('codeLength');
const estimatedTime = document.getElementById('estimatedTime');

// کارت تایپ
const typingInput = document.getElementById('typingInput');
const statusBadge = document.getElementById('statusBadge');
const progressBar = document.getElementById('progressBar');

// آمار
const timeValue = document.getElementById('timeValue');
const accuracyValue = document.getElementById('accuracyValue');
const speedValue = document.getElementById('speedValue');
const errorsValue = document.getElementById('errorsValue');

// دکمه‌ها
const newCodeBtn = document.getElementById('newCodeBtn');
const hintBtn = document.getElementById('hintBtn');
const resetBtn = document.getElementById('resetBtn');

// کارت تحلیل
const coachMessage = document.getElementById('coachMessage');
const analysisList = document.getElementById('analysisList');
const suggestionsList = document.getElementById('suggestionsList');
const totalSessions = document.getElementById('totalSessions');
const avgAccuracy = document.getElementById('avgAccuracy');
const bestSpeed = document.getElementById('bestSpeed');

// پروفایل کاربر
const userLevel = document.getElementById('userLevel');
const userXP = document.getElementById('userXP');
const xpBar = document.getElementById('xpBar');

// مودال تنظیمات
const settingsModal = document.getElementById('settingsModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModalBtn');
const soundToggle = document.getElementById('soundToggle');
const keyboardToggle = document.getElementById('keyboardToggle');
const backspaceToggle = document.getElementById('backspaceToggle');
const fontSizeSelect = document.getElementById('fontSizeSelect');
const resetDataBtn = document.getElementById('resetDataBtn');

// کانتینر توست
const toastContainer = document.getElementById('toastContainer');

/* ================= وضعیت برنامه ================= */

let state = {
  // وضعیت فعلی تمرین
  currentCode: '',
  currentDescription: '',
  currentIndex: 0,
  correctChars: 0,
  totalErrors: 0,
  
  // تایمر
  startTime: null,
  timer: null,
  
  // تحلیل خطاها
  errorsByChar: {},
  
  // وضعیت تمرین
  isActive: false,
  isFinished: false,
  
  // تنظیمات
  settings: {
    sound: true,
    keyboard: false,
    allowBackspace: true,
    fontSize: 'medium'
  },
  
  // آمار کاربر
  user: {
    level: 1,
    xp: 0,
    totalSessions: 0,
    totalAccuracy: [],
    bestSpeed: 0
  }
};

/* ================= مدیریت localStorage با امنیت ================= */

// کلید ذخیره‌سازی
const STORAGE_KEY = 'codeTypingTrainer_v1';

/**
 * بارگذاری داده‌ها از localStorage
 */
function loadData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      
      // اعتبارسنجی داده
      if (parsed.user && typeof parsed.user.level === 'number') {
        state.user = { ...state.user, ...parsed.user };
      }
      
      if (parsed.settings && typeof parsed.settings === 'object') {
        state.settings = { ...state.settings, ...parsed.settings };
      }
      
      console.log('✅ داده‌ها بارگذاری شد');
    }
  } catch (error) {
    console.error('❌ خطا در بارگذاری داده:', error);
    showToast('خطا', 'مشکل در بارگذاری داده‌ها', 'error');
  }
}

/**
 * ذخیره داده‌ها در localStorage
 */
function saveData() {
  try {
    const toSave = {
      user: state.user,
      settings: state.settings,
      lastSaved: new Date().toISOString()
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    console.log('✅ داده‌ها ذخیره شد');
  } catch (error) {
    console.error('❌ خطا در ذخیره داده:', error);
    showToast('خطا', 'مشکل در ذخیره داده‌ها', 'error');
  }
}

/**
 * حذف تمام داده‌ها
 */
function resetData() {
  if (confirm('آیا مطمئنی می‌خوای همه داده‌ها رو پاک کنی؟ این عملیات قابل بازگشت نیست!')) {
    try {
      localStorage.removeItem(STORAGE_KEY);
      
      // ریست state
      state.user = {
        level: 1,
        xp: 0,
        totalSessions: 0,
        totalAccuracy: [],
        bestSpeed: 0
      };
      
      updateUI();
      showToast('موفق', 'تمام داده‌ها پاک شد', 'success');
      
      console.log('✅ داده‌ها ریست شد');
    } catch (error) {
      console.error('❌ خطا در ریست داده:', error);
      showToast('خطا', 'مشکل در حذف داده‌ها', 'error');
    }
  }
}

/* ================= مدیریت تم Dark/Light ================= */

/**
 * بارگذاری تم از localStorage
 */
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  } else if (savedTheme === 'light') {
    document.body.classList.remove('dark');
  } else {
    // تشخیص خودکار از سیستم
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark');
    }
  }
}

/**
 * تغییر تم
 */
function toggleTheme() {
  document.body.classList.toggle('dark');
  
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
  showToast(
    'تم تغییر کرد',
    isDark ? 'حالت تاریک فعال شد' : 'حالت روشن فعال شد',
    'info'
  );
  
  // افکت صدا (اختیاری)
  if (state.settings.sound) {
    playSound('click');
  }
}

/* ================= مدیریت صداها ================= */

/**
 * پخش صدا (با استفاده از Web Audio API)
 * @param {string} type - نوع صدا
 */
function playSound(type) {
  if (!state.settings.sound) return;
  
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // تنظیم فرکانس بر اساس نوع
    switch(type) {
      case 'correct':
        oscillator.frequency.value = 800;
        break;
      case 'wrong':
        oscillator.frequency.value = 200;
        break;
      case 'finish':
        oscillator.frequency.value = 1000;
        break;
      case 'click':
        oscillator.frequency.value = 600;
        break;
      default:
        oscillator.frequency.value = 440;
    }
    
    // تنظیم حجم و مدت
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  } catch (error) {
    console.warn('صدا پخش نشد:', error);
  }
}

/* ================= انتخاب و رندر کد ================= */

/**
 * انتخاب کد تصادفی از بانک
 */
function selectRandomCode() {
  const lang = langSelect.value;
  const difficulty = difficultySelect.value;
  
  // بررسی وجود زبان و سطح
  if (!CODE_BANK[lang] || !CODE_BANK[lang][difficulty]) {
    showToast('خطا', 'کد برای این زبان و سطح وجود ندارد', 'error');
    return null;
  }
  
  const codes = CODE_BANK[lang][difficulty];
  
  if (codes.length === 0) {
    showToast('خطا', 'کدی برای این تنظیمات پیدا نشد', 'error');
    return null;
  }
  
  // انتخاب تصادفی
  const randomIndex = Math.floor(Math.random() * codes.length);
  return codes[randomIndex];
}

/**
 * رندر کد به‌صورت کاراکتری
 */
function renderCode() {
  // پاک کردن محتوای قبلی
  referenceCode.innerHTML = '';
  
  // تبدیل کد به آرایه کاراکتر
  const chars = state.currentCode.split('');
  
  // ساخت span برای هر کاراکتر
  chars.forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.classList.add('char');
    span.dataset.index = index;
    
    // اولین کاراکتر فعال
    if (index === 0) {
      span.classList.add('active');
    }
    
    referenceCode.appendChild(span);
  });
  
  // نمایش توضیح
  codeDescription.textContent = state.currentDescription;
  
  // آمار کد
  codeLength.textContent = state.currentCode.length;
  estimatedTime.textContent = Math.ceil(state.currentCode.length / 5); // تخمین 5 کاراکتر در ثانیه
}

/**
 * شروع تمرین جدید
 */
function startNewSession() {
  // انتخاب کد
  const selected = selectRandomCode();
  
  if (!selected) {
    return;
  }
  
  // ذخیره کد و توضیح
  state.currentCode = selected.code;
  state.currentDescription = selected.description;
  
  // ریست وضعیت
  state.currentIndex = 0;
  state.correctChars = 0;
  state.totalErrors = 0;
  state.errorsByChar = {};
  state.isActive = false;
  state.isFinished = false;
  
  // پاک کردن ورودی
  typingInput.value = '';
  typingInput.disabled = false;
  typingInput.focus();
  
  // ریست تایمر
  if (state.timer) {
    clearInterval(state.timer);
    state.timer = null;
  }
  state.startTime = null;
  
  // رندر کد
  renderCode();
  
  // به‌روزرسانی UI
  updateStats();
  updateStatusBadge('آماده');
  updateProgressBar(0);
  
  // پیام مربی
  updateCoachMessage('آماده‌ای؟ شروع کن با تایپ کردن...');
  
  // پاک کردن تحلیل
  analysisList.innerHTML = '<li class="analysis-item analysis-empty">در حال انتظار برای شروع...</li>';
  
  // صدا
  if (state.settings.sound) {
    playSound('click');
  }
  
  showToast('کد جدید', `کد ${langSelect.value.toUpperCase()} انتخاب شد`, 'info');
}

/* ================= منطق تایپ ================= */

/**
 * شروع تایمر
 */
function startTimer() {
  if (state.timer) return; // جلوگیری از تایمر دوباره
  
  state.startTime = Date.now();
  state.isActive = true;
  
  state.timer = setInterval(() => {
    updateStats();
  }, 100); // به‌روزرسانی هر 100 میلی‌ثانیه
}

/**
 * توقف تایمر
 */
function stopTimer() {
  if (state.timer) {
    clearInterval(state.timer);
    state.timer = null;
  }
  state.isActive = false;
}

/**
 * بررسی کاراکتر تایپ شده
 * @param {string} typedChar - کاراکتر تایپ شده
 */
function checkCharacter(typedChar) {
  const expectedChar = state.currentCode[state.currentIndex];
  const spans = referenceCode.querySelectorAll('.char');
  const currentSpan = spans[state.currentIndex];
  
  if (!currentSpan) return;
  
  // حذف کلاس active
  currentSpan.classList.remove('active');
  
  // بررسی صحت
  if (typedChar === expectedChar) {
    // صحیح
    currentSpan.classList.add('correct');
    currentSpan.classList.remove('wrong');
    state.correctChars++;
    
    if (state.settings.sound) {
      playSound('correct');
    }
  } else {
    // اشتباه
    currentSpan.classList.add('wrong');
    currentSpan.classList.remove('correct');
    state.totalErrors++;
    
    // ثبت خطا
    state.errorsByChar[expectedChar] = (state.errorsByChar[expectedChar] || 0) + 1;
    
    if (state.settings.sound) {
      playSound('wrong');
    }
    
    // هشدار مربی
    updateCoachMessage(`⚠️ دقت کن! کاراکتر صحیح: "${expectedChar}"`);
  }
  
  // رفتن به کاراکتر بعدی
  state.currentIndex++;
  
  // فعال کردن کاراکتر بعدی
  if (spans[state.currentIndex]) {
    spans[state.currentIndex].classList.add('active');
  }
  
  // به‌روزرسانی آمار
  updateStats();
  updateProgressBar((state.currentIndex / state.currentCode.length) * 100);
  
  // بررسی پایان
  if (state.currentIndex >= state.currentCode.length) {
    finishSession();
  }
}

/**
 * پایان تمرین
 */
function finishSession() {
  // توقف تایمر
  stopTimer();
  
  // تنظیم وضعیت
  state.isFinished = true;
  typingInput.disabled = true;
  
  // محاسبه آمار نهایی
  const accuracy = Math.round((state.correctChars / state.currentCode.length) * 100);
  const timeTaken = Math.floor((Date.now() - state.startTime) / 1000);
  const speed = Math.floor((state.currentCode.length / timeTaken) * 60);
  
  // محاسبه XP
  const gainedXP = calculateXP(accuracy, speed);
  state.user.xp += gainedXP;
  
  // به‌روزرسانی آمار کلی
  state.user.totalSessions++;
  state.user.totalAccuracy.push(accuracy);
  
  if (speed > state.user.bestSpeed) {
    state.user.bestSpeed = speed;
  }
  
  // بررسی ارتقا سطح
  const xpForNextLevel = state.user.level * 200;
  if (state.user.xp >= xpForNextLevel) {
    state.user.level++;
    state.user.xp = state.user.xp - xpForNextLevel;
    
    showToast(
      '🎉 تبریک!',
      `به Level ${state.user.level} رسیدی!`,
      'success'
    );
    
    updateCoachMessage(`🎉 عالی! به Level ${state.user.level} ارتقا یافتی!`);
    
    if (state.settings.sound) {
      playSound('finish');
    }
  } else {
    showToast(
      'تمرین تمام شد',
      `+${gainedXP} XP دریافت کردی`,
      'success'
    );
    
    updateCoachMessage(`✨ عالی بود! +${gainedXP} XP گرفتی`);
  }
  
  // به‌روزرسانی UI
  updateUI();
  
  // نمایش تحلیل
  displayAnalysis();
  
  // ذخیره پیشرفت
  saveData();
  
  // تغییر وضعیت
  updateStatusBadge('تمام شد');
}

/**
 * محاسبه XP بر اساس دقت و سرعت
 * @param {number} accuracy - درصد دقت
 * @param {number} speed - سرعت (CPM)
 * @returns {number} - XP کسب شده
 */
function calculateXP(accuracy, speed) {
  let xp = 0;
  
  // XP از دقت (0-100)
  xp += accuracy;
  
  // XP از سرعت (هر 10 CPM = 5 XP)
  xp += Math.floor(speed / 10) * 5;
  
  // بونوس برای دقت بالا
  if (accuracy >= 95) {
    xp += 50;
  } else if (accuracy >= 90) {
    xp += 30;
  } else if (accuracy >= 80) {
    xp += 10;
  }
  
  // حداقل XP
  xp = Math.max(xp, 10);
  
  return Math.floor(xp);
}

/* ================= به‌روزرسانی UI ================= */

/**
 * به‌روزرسانی آمار لحظه‌ای
 */
function updateStats() {
  // زمان
  if (state.startTime) {
    const seconds = Math.floor((Date.now() - state.startTime) / 1000);
    timeValue.textContent = `${seconds}s`;
  } else {
    timeValue.textContent = '0s';
  }
  
  // دقت
  if (state.currentIndex > 0) {
    const accuracy = Math.round((state.correctChars / state.currentIndex) * 100);
    accuracyValue.textContent = `${accuracy}%`;
  } else {
    accuracyValue.textContent = '100%';
  }
  
  // سرعت
  if (state.startTime && state.currentIndex > 0) {
    const seconds = (Date.now() - state.startTime) / 1000;
    const cpm = Math.floor((state.currentIndex / seconds) * 60);
    speedValue.textContent = `${cpm} CPM`;
  } else {
    speedValue.textContent = '0 CPM';
  }
  
  // خطاها
  errorsValue.textContent = state.totalErrors;
}

/**
 * به‌روزرسانی وضعیت
 * @param {string} status - وضعیت جدید
 */
function updateStatusBadge(status) {
  statusBadge.textContent = status;
  
  // تغییر رنگ بر اساس وضعیت
  statusBadge.className = 'status-badge';
  
  if (status === 'در حال تایپ') {
    statusBadge.style.background = 'var(--info-light)';
    statusBadge.style.color = 'var(--info)';
  } else if (status === 'تمام شد') {
    statusBadge.style.background = 'var(--success-light)';
    statusBadge.style.color = 'var(--success)';
  } else {
    statusBadge.style.background = 'var(--warning-light)';
    statusBadge.style.color = 'var(--warning)';
  }
}

/**
 * به‌روزرسانی نوار پیشرفت
 * @param {number} percent - درصد پیشرفت
 */
function updateProgressBar(percent) {
  progressBar.style.width = `${percent}%`;
}

/**
 * به‌روزرسانی پیام مربی
 * @param {string} message - پیام جدید
 */
function updateCoachMessage(message) {
  const textElement = coachMessage.querySelector('.coach-text p');
  if (textElement) {
    textElement.textContent = message;
    
    // انیمیشن
    coachMessage.style.animation = 'none';
    setTimeout(() => {
      coachMessage.style.animation = 'slideIn 0.5s ease-out';
    }, 10);
  }
}

/**
 * به‌روزرسانی کامل UI
 */
function updateUI() {
  // پروفایل کاربر
  userLevel.textContent = state.user.level;
  userXP.textContent = `${state.user.xp} XP`;
  
  // نوار XP
  const xpForNextLevel = state.user.level * 200;
  const xpPercent = (state.user.xp / xpForNextLevel) * 100;
  xpBar.style.width = `${xpPercent}%`;
  
  // آمار کلی
  totalSessions.textContent = state.user.totalSessions;
  
  if (state.user.totalAccuracy.length > 0) {
    const avgAcc = state.user.totalAccuracy.reduce((a, b) => a + b, 0) / state.user.totalAccuracy.length;
    avgAccuracy.textContent = `${Math.round(avgAcc)}%`;
  } else {
    avgAccuracy.textContent = '0%';
  }
  
  bestSpeed.textContent = `${state.user.bestSpeed} CPM`;
  
  // تنظیمات
  soundToggle.checked = state.settings.sound;
  keyboardToggle.checked = state.settings.keyboard;
  backspaceToggle.checked = state.settings.allowBackspace;
  fontSizeSelect.value = state.settings.fontSize;
  
  // اعمال سایز فونت
  applyFontSize(state.settings.fontSize);
}

/**
 * نمایش تحلیل خطاها
 */
function displayAnalysis() {
  analysisList.innerHTML = '';
  
  // اگر خطایی نبود
  if (Object.keys(state.errorsByChar).length === 0) {
    const li = document.createElement('li');
    li.className = 'analysis-item';
    li.style.borderColor = 'var(--success)';
    li.innerHTML = '✅ عالی! هیچ خطایی نداشتی!';
    analysisList.appendChild(li);
    
    // پیشنهاد جدید
    updateSuggestions(['دقت عالی داشتی! حالا سطح دشواری رو بالاتر ببر']);
    return;
  }
  
  // مرتب‌سازی خطاها بر اساس تعداد
  const sortedErrors = Object.entries(state.errorsByChar)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5); // فقط ۵ خطا
  
  // نمایش هر خطا
  sortedErrors.forEach(([char, count]) => {
    const li = document.createElement('li');
    li.className = 'analysis-item';
    li.innerHTML = `روی کاراکتر <strong>"${char}"</strong> → ${count} بار اشتباه`;
    analysisList.appendChild(li);
  });
  
  // پیشنهادات بر اساس خطاها
  const suggestions = generateSuggestions(sortedErrors);
  updateSuggestions(suggestions);
}

/**
 * تولید پیشنهادات هوشمند
 * @param {Array} errors - آرایه خطاها
 * @returns {Array} - آرایه پیشنهادات
 */
function generateSuggestions(errors) {
  const suggestions = [];
  
  if (errors.length === 0) {
    suggestions.push('دقت عالی داشتی! سطح دشواری رو افزایش بده');
    suggestions.push('سعی کن سرعتت رو بیشتر کنی');
  } else {
    const topError = errors[0];
    suggestions.push(`روی کاراکتر "${topError[0]}" بیشتر تمرین کن`);
    
    if (state.totalErrors > 5) {
      suggestions.push('کمتر عجله کن و روی دقت تمرکز کن');
    }
    
    if (errors.length > 3) {
      suggestions.push('قبل از تایپ، کد رو یک بار بخون تا آشنا بشی');
    }
  }
  
  return suggestions;
}

/**
 * به‌روزرسانی پیشنهادات
 * @param {Array} suggestions - آرایه پیشنهادات
 */
function updateSuggestions(suggestions) {
  suggestionsList.innerHTML = '';
  
  suggestions.forEach(suggestion => {
    const div = document.createElement('div');
    div.className = 'suggestion-item';
    div.innerHTML = `
      <span class="suggestion-icon">💡</span>
      <p>${suggestion}</p>
    `;
    suggestionsList.appendChild(div);
  });
}

/* ================= رویدادها ================= */

/**
 * رویداد تایپ
 */
typingInput.addEventListener('input', (e) => {
  // اگر تمرین تمام شده، اجازه تایپ نده
  if (state.isFinished) {
    e.preventDefault();
    return;
  }
  
  // شروع تایمر در اولین کاراکتر
  if (!state.isActive && typingInput.value.length === 1) {
    startTimer();
    updateStatusBadge('در حال تایپ');
  }
  
  // دریافت آخرین کاراکتر
  const typedText = typingInput.value;
  const lastChar = typedText[typedText.length - 1];
  
  // بررسی کاراکتر
  if (lastChar) {
    checkCharacter(lastChar);
  }
});

/**
 * رویداد Backspace
 */
typingInput.addEventListener('keydown', (e) => {
  if (e.key === 'Backspace') {
    // بررسی تنظیمات Backspace
    if (!state.settings.allowBackspace) {
      e.preventDefault();
      showToast('محدودیت', 'Backspace غیرفعال است', 'warning');
      return;
    }
    
    // اگر تمرین تمام شده
    if (state.isFinished) {
      e.preventDefault();
      return;
    }
    
    // اگر در ابتدای کد هستیم
    if (state.currentIndex === 0) {
      e.preventDefault();
      return;
    }
    
    e.preventDefault();
    
    // یک قدم به عقب
    state.currentIndex--;
    
    const spans = referenceCode.querySelectorAll('.char');
    const currentSpan = spans[state.currentIndex];
    
    if (currentSpan) {
      // حذف استایل‌های قبلی
      currentSpan.classList.remove('correct', 'wrong');
      currentSpan.classList.add('active');
      
      // حذف active از کاراکتر بعدی
      if (spans[state.currentIndex + 1]) {
        spans[state.currentIndex + 1].classList.remove('active');
      }
      
      // پاک کردن آخرین کاراکتر از ورودی
      typingInput.value = typingInput.value.slice(0, -1);
      
      // به‌روزرسانی آمار
      updateStats();
      updateProgressBar((state.currentIndex / state.currentCode.length) * 100);
    }
  }
  
  // Enter برای شروع مجدد
  if (e.key === 'Enter' && state.isFinished) {
    e.preventDefault();
    startNewSession();
  }
});

/**
 * رویداد دکمه کد جدید
 */
newCodeBtn.addEventListener('click', () => {
  startNewSession();
});

/**
 * رویداد دکمه راهنما
 */
hintBtn.addEventListener('click', () => {
  if (state.isFinished) {
    showToast('راهنما', 'ابتدا کد جدیدی شروع کن', 'info');
    return;
  }
  
  if (state.currentIndex >= state.currentCode.length) {
    showToast('راهنما', 'کد تمام شده است', 'info');
    return;
  }
  
  // نمایش کاراکتر بعدی
  const nextChar = state.currentCode[state.currentIndex];
  
  if (Object.keys(state.errorsByChar).length > 0) {
    const topError = Object.entries(state.errorsByChar)
      .sort((a, b) => b[1] - a[1])[0];
    
    showToast(
      '💡 راهنما',
      `بیشترین خطا روی "${topError[0]}" (${topError[1]} بار)`,
      'info'
    );
  } else {
    showToast(
      '💡 راهنما',
      `کاراکتر بعدی: "${nextChar}"`,
      'info'
    );
  }
});

/**
 * رویداد دکمه ریست
 */
resetBtn.addEventListener('click', () => {
  if (confirm('آیا می‌خوای تمرین فعلی رو ریست کنی؟')) {
    startNewSession();
  }
});

/**
 * رویداد کپی کد
 */
copyCodeBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(state.currentCode)
    .then(() => {
      showToast('کپی شد', 'کد در کلیپ‌بورد کپی شد', 'success');
      
      // افکت دکمه
      copyCodeBtn.style.transform = 'scale(1.2)';
      setTimeout(() => {
        copyCodeBtn.style.transform = 'scale(1)';
      }, 200);
    })
    .catch(err => {
      console.error('خطا در کپی:', err);
      showToast('خطا', 'مشکل در کپی کد', 'error');
    });
});

/**
 * رویداد تغییر زبان یا سطح
 */
langSelect.addEventListener('change', () => {
  startNewSession();
});

difficultySelect.addEventListener('change', () => {
  startNewSession();
});

/**
 * رویداد تغییر تم
 */
themeToggle.addEventListener('click', () => {
  toggleTheme();
});

/* ================= مودال تنظیمات ================= */

/**
 * باز کردن مودال
 */
settingsBtn.addEventListener('click', () => {
  settingsModal.classList.add('active');
});

/**
 * بستن مودال
 */
closeModalBtn.addEventListener('click', () => {
  settingsModal.classList.remove('active');
});

modalOverlay.addEventListener('click', () => {
  settingsModal.classList.remove('active');
});

/**
 * رویدادهای تنظیمات
 */
soundToggle.addEventListener('change', (e) => {
  state.settings.sound = e.target.checked;
  saveData();
  
  if (state.settings.sound) {
    playSound('click');
  }
});

keyboardToggle.addEventListener('change', (e) => {
  state.settings.keyboard = e.target.checked;
  saveData();
  
  showToast(
    'تنظیمات',
    e.target.checked ? 'کیبورد فعال شد' : 'کیبورد غیرفعال شد',
    'info'
  );
});

backspaceToggle.addEventListener('change', (e) => {
  state.settings.allowBackspace = e.target.checked;
  saveData();
  
  showToast(
    'تنظیمات',
    e.target.checked ? 'Backspace فعال شد' : 'Backspace غیرفعال شد',
    'info'
  );
});

fontSizeSelect.addEventListener('change', (e) => {
  state.settings.fontSize = e.target.value;
  applyFontSize(e.target.value);
  saveData();
  
  showToast('تنظیمات', 'سایز فونت تغییر کرد', 'info');
});

/**
 * اعمال سایز فونت
 * @param {string} size - سایز فونت
 */
function applyFontSize(size) {
  const codeDisplay = referenceCode;
  const typingInputEl = typingInput;
  
  switch(size) {
    case 'small':
      codeDisplay.style.fontSize = '0.8125rem';
      typingInputEl.style.fontSize = '0.875rem';
      break;
    case 'large':
      codeDisplay.style.fontSize = '1.0625rem';
      typingInputEl.style.fontSize = '1.125rem';
      break;
    default: // medium
      codeDisplay.style.fontSize = '0.9375rem';
      typingInputEl.style.fontSize = '1rem';
  }
}

/**
 * رویداد ریست داده‌ها
 */
resetDataBtn.addEventListener('click', () => {
  resetData();
  settingsModal.classList.remove('active');
});

/* ================= سیستم توست ================= */

/**
 * نمایش توست نوتیفیکیشن
 * @param {string} title - عنوان
 * @param {string} message - پیام
 * @param {string} type - نوع (success, error, warning, info)
 */
function showToast(title, message, type = 'info') {
  // ساخت المان توست
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  // آیکون بر اساس نوع
  let icon = '💬';
  switch(type) {
    case 'success':
      icon = '✅';
      break;
    case 'error':
      icon = '❌';
      break;
    case 'warning':
      icon = '⚠️';
      break;
    case 'info':
      icon = 'ℹ️';
      break;
  }
  
  toast.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <p class="toast-message">${message}</p>
    </div>
    <button class="toast-close" aria-label="بستن">✕</button>
  `;
  
  // اضافه کردن به کانتینر
  toastContainer.appendChild(toast);
  
  // رویداد بستن
  const closeBtn = toast.querySelector('.toast-close');
  closeBtn.addEventListener('click', () => {
    removeToast(toast);
  });
  
  // حذف خودکار بعد از ۵ ثانیه
  setTimeout(() => {
    removeToast(toast);
  }, 5000);
}

/**
 * حذف توست
 * @param {HTMLElement} toast - المان توست
 */
function removeToast(toast) {
  toast.classList.add('removing');
  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 300);
}

/* ================= میانبرهای صفحه‌کلید ================= */

document.addEventListener('keydown', (e) => {
  // جلوگیری از اجرا اگر داخل ورودی هستیم
  if (document.activeElement === typingInput) {
    return;
  }
  
  // Ctrl/Cmd + N → کد جدید
  if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
    e.preventDefault();
    startNewSession();
  }
  
  // Ctrl/Cmd + H → راهنما
  if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
    e.preventDefault();
    hintBtn.click();
  }
  
  // Ctrl/Cmd + T → تغییر تم
  if ((e.ctrlKey || e.metaKey) && e.key === 't') {
    e.preventDefault();
    toggleTheme();
  }
  
  // Ctrl/Cmd + , → تنظیمات
  if ((e.ctrlKey || e.metaKey) && e.key === ',') {
    e.preventDefault();
    settingsBtn.click();
  }
  
  // Escape → بستن مودال
  if (e.key === 'Escape') {
    if (settingsModal.classList.contains('active')) {
      settingsModal.classList.remove('active');
    }
  }
});

/* ================= تشخیص تم سیستم ================= */

// گوش دادن به تغییر تم سیستم
if (window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    // فقط اگر کاربر خودش تم انتخاب نکرده
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }
  });
}

/* ================= جلوگیری از رفتارهای پیش‌فرض ================= */

// جلوگیری از Paste
typingInput.addEventListener('paste', (e) => {
  e.preventDefault();
  showToast('محدودیت', 'کپی-پیست مجاز نیست!', 'warning');
});

// جلوگیری از Cut
typingInput.addEventListener('cut', (e) => {
  e.preventDefault();
  showToast('محدودیت', 'برش متن مجاز نیست!', 'warning');
});

// جلوگیری از Drag & Drop
typingInput.addEventListener('drop', (e) => {
  e.preventDefault();
  showToast('محدودیت', 'Drag & Drop مجاز نیست!', 'warning');
});

/* ================= مدیریت فوکوس ================= */

// فوکوس خودکار روی ورودی هنگام کلیک روی کارت
document.getElementById('typingCard').addEventListener('click', () => {
  if (!state.isFinished) {
    typingInput.focus();
  }
});

// جلوگیری از از دست رفتن فوکوس
window.addEventListener('blur', () => {
  // اختیاری: می‌توانید تایمر را متوقف کنید
  // stopTimer();
});

window.addEventListener('focus', () => {
  // اختیاری: ادامه تایمر
});

/* ================= مدیریت خطا ================= */

// گرفتن خطاهای JavaScript
window.addEventListener('error', (e) => {
  console.error('خطای JavaScript:', e.error);
  showToast('خطا', 'یک مشکل پیش اومد!', 'error');
});

// گرفتن Promise های رد شده
window.addEventListener('unhandledrejection', (e) => {
  console.error('Promise رد شده:', e.reason);
  showToast('خطا', 'مشکل در عملیات', 'error');
});

/* ================= راه‌اندازی اولیه ================= */

/**
 * تابع راه‌اندازی برنامه
 */
function init() {
  console.log('🚀 برنامه در حال راه‌اندازی...');
  
  // بارگذاری داده‌ها
  loadData();
  
  // بارگذاری تم
  loadTheme();
  
  // به‌روزرسانی UI
  updateUI();
  
  // شروع تمرین اول
  startNewSession();
  
  // پیام خوش‌آمدگویی
  showToast(
    '👋 خوش اومدی!',
    'آماده‌ای مهارت تایپ کدنویسیت رو بهبود بدی؟',
    'success'
  );
  
  console.log('✅ برنامه با موفقیت راه‌اندازی شد');
}

/* ================= اجرای برنامه ================= */

// اجرا بعد از بارگذاری کامل DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

/* ================= ذخیره خودکار ================= */

// ذخیره داده‌ها هر ۳۰ ثانیه
setInterval(() => {
  saveData();
}, 30000);

// ذخیره قبل از بستن صفحه
window.addEventListener('beforeunload', () => {
  saveData();
});

/* ================= Console Art ================= */

console.log(`
╔═══════════════════════════════════════╗
║   Code Typing Trainer Ultimate        ║
║   نسخه: 1.0.0                         ║
║   ساخته شده با ❤️                     ║
╚═══════════════════════════════════════╝

میانبرهای صفحه‌کلید:
- Ctrl+N : کد جدید
- Ctrl+H : راهنما
- Ctrl+T : تغییر تم
- Ctrl+, : تنظیمات
- Enter  : شروع مجدد (بعد از پایان)
- Esc    : بستن مودال

موفق باشی! 🚀
`);

/* =====================================================
   پایان کد — ساخته شده با دقت و عشق
===================================================== */ 