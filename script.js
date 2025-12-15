/* =====================================================
   Code Typing Trainer — Educational Final Build
   این فایل مغز اصلی برنامه است
   هر بخش دقیقاً توضیح داده شده
===================================================== */

/* -----------------------------------------------------
   1️⃣ بانک کدها + توضیح عملکرد هر کد
----------------------------------------------------- */
const CODE_BANK = {
  html: [
    {
      code: "<header><h1>Hello World</h1></header>",
      description:
        "یک هدر HTML می‌سازد که داخل آن یک عنوان اصلی (h1) قرار دارد.",
    },
    {
      code: "<ul><li>One</li><li>Two</li></ul>",
      description: "یک لیست بدون شماره با دو آیتم ایجاد می‌کند.",
    },
    {
      code: "<button class='btn'>Click</button>",
      description: "یک دکمه HTML با کلاس btn برای استایل‌دهی می‌سازد.",
    },
  ],

  css: [
    {
      code: "body { margin: 0; background: black; }",
      description:
        "حاشیه پیش‌فرض صفحه را حذف کرده و رنگ پس‌زمینه را مشکی می‌کند.",
    },
    {
      code: ".card:hover { transform: scale(1.05); }",
      description: "هنگام هاور روی کارت، اندازه آن کمی بزرگ‌تر می‌شود.",
    },
  ],

  js: [
    {
      code: "let count = 0;",
      description:
        "یک متغیر قابل تغییر به نام count با مقدار اولیه صفر تعریف می‌کند.",
    },
    {
      code: "function sum(a, b) { return a + b; }",
      description: "تابعی تعریف می‌کند که مجموع دو عدد را برمی‌گرداند.",
    },
  ],
};

/* -----------------------------------------------------
   2️⃣ گرفتن المان‌های HTML
----------------------------------------------------- */

// محل نمایش کد مرجع
const referenceEl = document.getElementById("referenceCode");

// محل نمایش توضیح کد
const descriptionEl = document.getElementById("codeDescription");

// ورودی تایپ کاربر
const inputEl = document.getElementById("typingInput");

// انتخاب زبان
const langSelect = document.getElementById("languageSelect");

// دکمه‌ها
const hintBtn = document.getElementById("hintBtn");
const newCodeBtn = document.getElementById("newCodeBtn");

// آمار
const timeEl = document.getElementById("time");
const accEl = document.getElementById("accuracy");
const speedEl = document.getElementById("speed");

// مربی و تحلیل
const coachEl = document.getElementById("coachMessage");
const analysisEl = document.getElementById("analysisList");

// سطح کاربر
const levelEl = document.getElementById("level");
const xpEl = document.getElementById("xp");

/* -----------------------------------------------------
   3️⃣ وضعیت کاربر (ذخیره دائمی)
----------------------------------------------------- */

// سطح فعلی
let level = Number(localStorage.getItem("level")) || 1;

// امتیاز تجربه
let xp = Number(localStorage.getItem("xp")) || 0;

/* -----------------------------------------------------
   4️⃣ وضعیت تمرین فعلی
----------------------------------------------------- */

// کد انتخاب‌شده
let currentCode = "";

// توضیح کد
let currentDescription = "";

// موقعیت تایپ
let index = 0;

// تعداد کاراکتر صحیح
let correct = 0;

// زمان شروع
let startTime = null;

// تایمر
let timer = null;

// ثبت خطاها برای تحلیل
let errors = {};

/* -----------------------------------------------------
   5️⃣ رندر کد به‌صورت کاراکتری
----------------------------------------------------- */
function renderCode() {
  referenceEl.innerHTML = "";

  // هر کاراکتر جداگانه span می‌شود
  currentCode.split("").forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.classList.add("char");

    // اولین کاراکتر فعال است
    if (i === 0) span.classList.add("active");

    referenceEl.appendChild(span);
  });

  // نمایش توضیح کد
  descriptionEl.textContent = currentDescription;
}

/* -----------------------------------------------------
   6️⃣ شروع تمرین جدید
----------------------------------------------------- */
function start() {
  const lang = langSelect.value;

  // انتخاب تصادفی کد از بانک
  const selected =
    CODE_BANK[lang][Math.floor(Math.random() * CODE_BANK[lang].length)];

  // استخراج کد و توضیح
  currentCode = selected.code;
  currentDescription = selected.description;

  // ریست وضعیت
  index = 0;
  correct = 0;
  errors = {};
  inputEl.value = "";
  inputEl.disabled = false;

  // ثبت زمان شروع
  startTime = Date.now();

  // رندر مجدد
  renderCode();
  updateUserUI();

  coachEl.textContent = "🤖 با دقت شروع کن";

  clearInterval(timer);
  timer = setInterval(updateTime, 1000);
}

/* -----------------------------------------------------
   7️⃣ تایمر و سرعت تایپ
----------------------------------------------------- */
function updateTime() {
  const seconds = Math.floor((Date.now() - startTime) / 1000);
  timeEl.textContent = `⏱ ${seconds}s`;

  // محاسبه سرعت تایپ
  const cpm = Math.floor((index / seconds) * 60 || 0);
  speedEl.textContent = `⚡ ${cpm} CPM`;
}

/* -----------------------------------------------------
   8️⃣ جلوگیری از Paste
----------------------------------------------------- */
inputEl.addEventListener("paste", (e) => e.preventDefault());

/* -----------------------------------------------------
   9️⃣ منطق Backspace کنترل‌شده
----------------------------------------------------- */
inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    e.preventDefault();

    if (index > 0) {
      index--;

      const spans = document.querySelectorAll(".char");

      // ریست استایل کاراکتر
      spans[index].className = "char active";
      if (spans[index + 1]) spans[index + 1].className = "char";

      inputEl.value = inputEl.value.slice(0, -1);
    }
  }
});

/* -----------------------------------------------------
   🔟 بررسی ورودی کاربر
----------------------------------------------------- */
inputEl.addEventListener("input", () => {
  const typedChar = inputEl.value.slice(-1);
  const expectedChar = currentCode[index];
  const spans = document.querySelectorAll(".char");

  if (!expectedChar) return;

  if (typedChar === expectedChar) {
    spans[index].classList.add("correct");
    correct++;
  } else {
    spans[index].classList.add("wrong");

    // ثبت خطا برای AI Coach
    errors[expectedChar] = (errors[expectedChar] || 0) + 1;

    coachEl.textContent = `🤖 مراقب «${expectedChar}» باش`;
  }

  spans[index].classList.remove("active");
  index++;
  if (spans[index]) spans[index].classList.add("active");

  updateStats();

  if (index === currentCode.length) finish();
});

/* -----------------------------------------------------
   1️⃣1️⃣ آمار دقت
----------------------------------------------------- */
function updateStats() {
  accEl.textContent = `🎯 ${Math.round((correct / currentCode.length) * 100)}%`;
}

/* -----------------------------------------------------
   1️⃣2️⃣ پایان تمرین
----------------------------------------------------- */
function finish() {
  clearInterval(timer);
  inputEl.disabled = true;

  const gainedXP = Math.round((correct / currentCode.length) * 100);

  xp += gainedXP;

  if (xp >= level * 150) {
    xp = 0;
    level++;
    coachEl.textContent = `🔥 Level ${level} شدی!`;
  } else {
    coachEl.textContent = `🤖 +${gainedXP} XP گرفتی`;
  }

  saveUser();
  renderAnalysis();
  updateUserUI();
}

/* -----------------------------------------------------
   1️⃣3️⃣ تحلیل خطاها
----------------------------------------------------- */
function renderAnalysis() {
  analysisEl.innerHTML = "";

  if (Object.keys(errors).length === 0) {
    analysisEl.innerHTML = "<li>👌 بدون خطا</li>";
    return;
  }

  for (const char in errors) {
    const li = document.createElement("li");
    li.textContent = `روی «${char}» ${errors[char]} بار اشتباه داشتی`;
    analysisEl.appendChild(li);
  }
}

/* -----------------------------------------------------
   1️⃣4️⃣ Hint هوشمند
----------------------------------------------------- */
hintBtn.addEventListener("click", () => {
  const commonError = Object.keys(errors).sort(
    (a, b) => errors[b] - errors[a]
  )[0];

  coachEl.textContent = commonError
    ? `🤖 بیشترین خطا روی «${commonError}»`
    : `🤖 کاراکتر بعدی: «${currentCode[index]}»`;
});

/* -----------------------------------------------------
   1️⃣5️⃣ ذخیره وضعیت کاربر
----------------------------------------------------- */
function saveUser() {
  localStorage.setItem("level", level);
  localStorage.setItem("xp", xp);
}

/* -----------------------------------------------------
   1️⃣6️⃣ بروزرسانی UI
----------------------------------------------------- */
function updateUserUI() {
  levelEl.textContent = `Level ${level}`;
  xpEl.textContent = `XP ${xp}`;
}

/* -----------------------------------------------------
   1️⃣7️⃣ رویدادها و شروع اولیه
----------------------------------------------------- */
newCodeBtn.addEventListener("click", start);
langSelect.addEventListener("change", start);

updateUserUI();
start();
