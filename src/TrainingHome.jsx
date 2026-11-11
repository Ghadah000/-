import { useState } from "react";

const menu = [
  { label: "الرئيسية", href: "#home" },
  { label: "التسجيل", href: "#portals" },
  { label: "الجهات والشركاء", href: "#partners" },
  { label: "الفرص التدريبية", href: "#opportunities" },
  { label: "معلومات الخدمة", href: "#service" },
];

const roles = [
  { id: "student", label: "طالب" },
  { id: "company", label: "جهة تدريبية" },
  { id: "supervisor", label: "مشرف" },
];

const stats = [
  { value: "1,101", label: "مشرف أكاديمي" },
  { value: "1,689", label: "جهة تدريبية" },
  { value: "25,374", label: "متدرب" },
];

const portals = [
  {
    title: "للطلاب والباحثين عن التدريب",
    text: "استعرض الفرص المتاحة، وقدّم عليها، وتابع خطوات التدريب بسهولة.",
    cta: "دخول الطلاب",
  },
  {
    title: "للجهات التدريبية والشركاء",
    text: "أدر طلبات المتدربين، وانشر الفرص الجديدة، وسجّل شراكات جديدة.",
    cta: "دخول الجهات",
  },
  {
    title: "للمشرفين الأكاديميين",
    text: "تابع طلابك المتدربين، وراجع تقاريرهم، واعتمد تقييماتهم.",
    cta: "تسجيل المشرفين",
  },
];

const features = [
  {
    title: "الوصول إلى الفرصة الأنسب",
    text: "توفّر لك المنصة أدوات بحث متقدمة تُظهر الفرص التدريبية المناسبة لتخصصك ومهاراتك.",
  },
  {
    title: "متابعة شاملة لتدريبك",
    text: "تُدار مراحل التدريب كاملة عبر المنصة، مع متابعة مستمرة للساعات والتقدم والتواصل مع المشرفين.",
  },
  {
    title: "سجلك التدريبي",
    text: "تتيح المنصة حفظ سجل تدريبك وشهادتك ضمن حسابك، والرجوع إليهما في أي وقت.",
  },
];

// الصق هنا المقولة واسم صاحبها اللي كتبتهم
// image: "/hero.jpg" أو "" لإخفاء الصورة
const quote = {
  text: "الشباب هم الطاقة الحقيقية والقوة الحقيقية لتحقيق هذه الرؤية، وأهم ميزة لدينا هي أن شبابنا واعي ومثقف ومبدع ولديه قيم عالية",
  author: "صاحب السمو الملكي الأمير محمد بن سلمان بن عبدالعزيز ال سعود",
  image: "6hero.jpg",
};

const partners = [
  {
    name: "جهة حكوميه",
    location: "الرياض",
    sector: "القطاع الحكومي",
    opportunities: 12,
    trainees: 340,
    about: "نبذة مختصرة عن الجهة ومجال عملها.",
    website: "https://example.com",
    email: "info@example.com",
    phone: "9200XXXXX",
  },
  {
    name: "جهة تعليمية",
    location: "جدة",
    sector: "القطاع التعليمي",
    opportunities: 8,
    trainees: 210,
    about: "نبذة مختصرة عن الجهة ومجال عملها.",
    website: "https://example.com",
    email: "info@example.com",
    phone: "9200XXXXX",
  },
  {
    name: "جهة منشأة",
    location: "الدمام",
    sector: "القطاع المنشأة",
    opportunities: 5,
    trainees: 120,
    about: "نبذة مختصرة عن الجهة ومجال عملها.",
    website: "https://example.com",
    email: "info@example.com",
    phone: "9200XXXXX",
  },
  {
    name: "جهة حكومية",
    location: "أبها",
    sector: "القطاع الحكومي",
    opportunities: 4,
    trainees: 95,
    about: "نبذة مختصرة عن الجهة ومجال عملها.",
    website: "https://example.com",
    email: "info@example.com",
    phone: "9200XXXXX",
  },
  {
    name: "جهة تعليمية",
    location: "المدينة المنورة",
    sector: "القطاع التعليمي",
    opportunities: 9,
    trainees: 180,
    about: "نبذة مختصرة عن الجهة ومجال عملها.",
    website: "https://example.com",
    email: "info@example.com",
    phone: "9200XXXXX",
  },
];

const opportunities = [
  {
    title: "تدريب تعاوني في تقنية المعلومات",
    org: "اسم الجهة التدريبية",
    type: "تدريب تعاوني",
    deadline: "31/10/2026",
    location: "الرياض",
    duration: "3 أشهر",
    target: "مخصص لطلاب كلية الحاسب",
    open: true,
    image: "/hero.jpg",
  },
  {
    title: "برنامج مهارات سوق العمل",
    org: "اسم الجهة التدريبية",
    type: "تدريب عن بعد",
    deadline: "30/10/2026",
    location: "عن بعد",
    duration: "6 أسابيع",
    target: "مفتوح لجميع التخصصات",
    open: true,
    image: "/1hero.jpg",
  },
  {
    title: "تدريب في الموارد البشرية",
    org: "اسم الجهة التدريبية",
    type: "تدريب تعاوني",
    deadline: "25/10/2026",
    location: "جدة",
    duration: "4 أشهر",
    target: "مخصص لطلاب كلية الأعمال",
    open: true,
    image: "/2hero.jpg",
  },
  {
    title: "تدريب في التسويق الرقمي",
    org: "اسم الجهة التدريبية",
    type: "تدريب تعاوني",
    deadline: "22/10/2026",
    location: "الدمام",
    duration: "3 أشهر",
    target: "مخصص لطلاب كلية الإدارة",
    open: true,
    image: "/3hero.jpg",
  },
  {
    title: "تدريب في المحاسبة والمالية",
    org: "اسم الجهة التدريبية",
    type: "تدريب تعاوني",
    deadline: "19/10/2026",
    location: "أبها",
    duration: "4 أشهر",
    target: "مخصص لطلاب كلية الأعمال",
    open: false,
    image: "/4hero.jpg",
  },
];

const serviceInfo = [
  { label: "الجمهور المستهدف", value: "الطلاب والجهات التدريبية" },
  { label: "صفة المستخدم", value: "طالب / جهة / مشرف" },
  { label: "مدة الخدمة", value: "فوري" },
  { label: "قنوات تقديم الخدمة", value: "بوابة إلكترونية" },
  { label: "اللغة", value: "عربي" },
  { label: "تكلفة الخدمة", value: "مجانية" },
];

const contact = [
  { label: "الأسئلة الشائعة", value: "الاطلاع على الأسئلة الشائعة", href: "#" },
  { label: "رابط الفروع", value: "الاطلاع على رابط الفروع", href: "#" },
  { label: "أوقات العمل", value: "8 صباحًا - 5 مساءً (من الأحد إلى الخميس)" },
  { label: "الهاتف", value: "9200XXXXX", href: "tel:9200XXXXX" },
  { label: "البريد الإلكتروني", value: "info@example.com", href: "mailto:info@example.com" },
];

const registerFields = {
  student: [
    { name: "fullName", label: "الاسم الكامل" },
    { name: "universityId", label: "الرقم الجامعي" },
    { name: "email", label: "البريد الإلكتروني", type: "email" },
    { name: "phone", label: "رقم الجوال", type: "tel" },
  ],
  company: [
    { name: "orgName", label: "اسم الجهة" },
    {
      name: "orgType",
      label: "نوع الجهة",
      type: "select",
      options: [
        { value: "business", label: "منشأة" },
        { value: "educational", label: "تعليمية" },
        { value: "government", label: "حكومية" },
      ],
    },
    {
      name: "govType",
      label: "نوع الجهة الحكومية",
      type: "select",
      showIf: (form) => form.orgType === "government",
      options: [
        { value: "ministry", label: "وزارة" },
        { value: "authority", label: "هيئة" },
        { value: "public_org", label: "مؤسسة عامة" },
        { value: "municipality", label: "أمانة / بلدية" },
        { value: "emirate", label: "إمارة منطقة" },
        { value: "hospital", label: "مستشفى / مركز صحي حكومي" },
        { value: "gov_company", label: "شركة حكومية" },
      ],
    },
    {
      name: "eduType",
      label: "نوع الجهة التعليمية",
      type: "select",
      showIf: (form) => form.orgType === "educational",
      options: [
        { value: "gov_university", label: "جامعة حكومية" },
        { value: "private_university", label: "جامعة أهلية" },
        { value: "college", label: "كلية" },
        { value: "institute", label: "معهد" },
        { value: "school", label: "مدرسة" },
        { value: "training_center", label: "مركز تدريب" },
        { value: "academy", label: "أكاديمية" },
      ],
    },
    {
      name: "bizType",
      label: "نوع المنشأة",
      type: "select",
      showIf: (form) => form.orgType === "business",
      options: [
        { value: "company", label: "شركة" },
        { value: "factory", label: "مصنع" },
        { value: "bank", label: "بنك / مؤسسة مالية" },
        { value: "hospital_private", label: "مستشفى / مركز صحي خاص" },
        { value: "telecom", label: "اتصالات وتقنية" },
        { value: "contracting", label: "مقاولات وإنشاءات" },
        { value: "retail", label: "تجزئة وتجارة" },
        { value: "nonprofit", label: "جمعية / منظمة غير ربحية" },
        { value: "other", label: "أخرى" },
      ],
    },
    { name: "email", label: "البريد الإلكتروني", type: "email" },
    { name: "phone", label: "رقم الجوال", type: "tel" },
  ],
  supervisor: [
    { name: "fullName", label: "الاسم الكامل" },
    { name: "college", label: "الكلية / القسم" },
    { name: "email", label: "البريد الإلكتروني", type: "email" },
    { name: "phone", label: "رقم الجوال", type: "tel" },
  ],
};

const inputCls =
  "w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-emerald-600";

function Field({ label, children }) {
  return (
    <div>
      <label className="mb-1 block text-sm text-slate-600">{label}</label>
      {children}
    </div>
  );
}

function OpportunityCard({ o }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <img src={o.image} alt="" className="h-40 w-full object-cover" />
      <div className="flex flex-1 flex-col p-5">
        <span
          className={`w-fit rounded-md px-2 py-1 text-xs font-medium ${
            o.open ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500"
          }`}
        >
          {o.open ? "التقديم متاح" : "التقديم مغلق"}
        </span>
        <h3 className="mt-3 text-lg font-bold text-slate-800">{o.title}</h3>
        <p className="mt-1 text-sm font-medium text-emerald-700">{o.org}</p>

        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          <span className="rounded-md bg-slate-100 px-2 py-1">{o.type}</span>
          <span className="rounded-md bg-slate-100 px-2 py-1">
            ينتهي التقديم في {o.deadline}
          </span>
        </div>

        <ul className="mt-4 space-y-1 text-sm text-slate-600">
          <li>موقع التدريب: {o.location}</li>
          <li>مدة التدريب: {o.duration}</li>
          <li>{o.target}</li>
        </ul>

        <div className="mt-auto pt-5">
          <button
            disabled={!o.open}
            className="w-full rounded-lg bg-emerald-700 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            عرض التفاصيل
          </button>
        </div>
      </div>
    </article>
  );
}

function PartnerCard({ p }) {
  const [show, setShow] = useState(false);

  return (
    <div className="min-w-[85%] snap-center rounded-xl border border-slate-200 bg-white p-6 md:min-w-0">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 text-xl font-bold text-emerald-800">
        {p.name.charAt(0)}
      </div>
      <h3 className="mt-4 font-bold">{p.name}</h3>
      <p className="mt-1 text-sm text-emerald-700">{p.location}</p>
      <p className="mt-1 text-sm text-slate-500">{p.sector}</p>

      <div className="mt-4 grid grid-cols-2 gap-3 text-center">
        <div className="rounded-lg bg-slate-50 p-3">
          <div className="text-lg font-extrabold text-emerald-800">{p.opportunities}</div>
          <div className="text-xs text-slate-500">فرصة تدريبية</div>
        </div>
        <div className="rounded-lg bg-slate-50 p-3">
          <div className="text-lg font-extrabold text-emerald-800">{p.trainees}</div>
          <div className="text-xs text-slate-500">متدرب</div>
        </div>
      </div>

      {show && (
        <div className="mt-4 space-y-3 border-t border-slate-200 pt-4 text-sm">
          <p className="leading-relaxed text-slate-600">{p.about}</p>
          <p>
            <span className="text-slate-500">الموقع الإلكتروني: </span>
            <a href={p.website} target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline">
              زيارة الموقع
            </a>
          </p>
          <p>
            <span className="text-slate-500">البريد: </span>
            <a href={`mailto:${p.email}`} className="text-emerald-700 hover:underline">
              {p.email}
            </a>
          </p>
          <p>
            <span className="text-slate-500">الهاتف: </span>
            <a href={`tel:${p.phone}`} className="text-emerald-700 hover:underline">
              {p.phone}
            </a>
          </p>
        </div>
      )}

      <button
        onClick={() => setShow(!show)}
        className="mt-5 rounded-lg bg-emerald-700 px-5 py-2 text-sm font-medium text-white hover:bg-emerald-800"
      >
        {show ? "إخفاء التفاصيل" : "عرض التفاصيل"}
      </button>
    </div>
  );
}

function LoginModal({ open, onClose, role, setRole }) {
  const [mode, setMode] = useState("login"); // login | register
  const [form, setForm] = useState({});
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  if (!open) return null;

  const set = (name, value) => setForm((f) => ({ ...f, [name]: value }));

  const reset = () => {
    setForm({});
    setError("");
    setDone(false);
    setShowPass(false);
  };

  const close = () => {
    reset();
    setMode("login");
    onClose();
  };

  const switchMode = (m) => {
    reset();
    setMode(m);
  };

  const submitLogin = (e) => {
    e.preventDefault();
    if (!form.username?.trim() || !form.password) {
      setError("أدخل اسم المستخدم وكلمة المرور");
      return;
    }
    setError("");
    setDone(true); // مؤقتًا: لاحقًا نربطه بالخادم
  };

  const submitRegister = (e) => {
    e.preventDefault();
    const fields = registerFields[role].filter((f) => !f.showIf || f.showIf(form));

    for (const f of fields) {
      if (!form[f.name]?.trim()) {
        setError(`أدخل: ${f.label}`);
        return;
      }
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("صيغة البريد الإلكتروني غير صحيحة");
      return;
    }
    if (!form.password || form.password.length < 8) {
      setError("كلمة المرور لازم تكون 8 أحرف على الأقل");
      return;
    }
    if (form.password !== form.confirm) {
      setError("كلمة المرور وتأكيدها غير متطابقتين");
      return;
    }
    setError("");
    setDone(true); // مؤقتًا: لاحقًا نرسلها للخادم
  };

  return (
    <div
      onClick={close}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
    >
      <div
        dir="rtl"
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-xl"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-emerald-800">
            {mode === "login" ? "تسجيل الدخول" : "حساب جديد"}
          </h2>
          <button onClick={close} aria-label="إغلاق" className="rounded-lg px-2 py-1 text-xl hover:bg-slate-100">
            ✕
          </button>
        </div>

        <div className="mt-5 grid grid-cols-2 border-b border-slate-200 text-sm font-medium">
          {[
            { id: "login", label: "تسجيل الدخول" },
            { id: "register", label: "حساب جديد" },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => switchMode(t.id)}
              className={`pb-3 ${
                mode === t.id
                  ? "border-b-2 border-emerald-700 text-emerald-800"
                  : "text-slate-500"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl bg-slate-100 p-1">
          {roles.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => {
                setRole(r.id);
                setError("");
              }}
              className={`rounded-lg py-2 text-sm font-medium ${
                role === r.id ? "bg-white text-emerald-800 shadow-sm" : "text-slate-500"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        {done ? (
          <div className="mt-6 rounded-lg bg-emerald-50 p-4 text-center text-sm text-emerald-800">
            {mode === "login"
              ? "تم استلام بياناتك (نسخة تجريبية). سيتم ربطها بالخادم لاحقًا."
              : "تم استلام طلب التسجيل (نسخة تجريبية). سيتم ربطه بالخادم لاحقًا."}
          </div>
        ) : mode === "login" ? (
          <form onSubmit={submitLogin} className="mt-6 space-y-4">
            <Field label="اسم المستخدم أو البريد">
              <input
                value={form.username || ""}
                onChange={(e) => set("username", e.target.value)}
                className={inputCls}
              />
            </Field>

            <Field label="كلمة المرور">
              <div className="flex rounded-lg border border-slate-300 focus-within:border-emerald-600">
                <input
                  type={showPass ? "text" : "password"}
                  value={form.password || ""}
                  onChange={(e) => set("password", e.target.value)}
                  className="w-full rounded-lg bg-transparent px-3 py-2 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="px-3 text-sm text-emerald-700"
                >
                  {showPass ? "إخفاء" : "إظهار"}
                </button>
              </div>
            </Field>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-700 py-3 font-medium text-white hover:bg-emerald-800"
            >
              دخول
            </button>

            <p className="text-center text-sm text-slate-600">
              ما عندك حساب؟{" "}
              <button
                type="button"
                onClick={() => switchMode("register")}
                className="font-medium text-emerald-700 hover:underline"
              >
                أنشئ حساب جديد
              </button>
            </p>
          </form>
        ) : (
          <form onSubmit={submitRegister} className="mt-6 space-y-4">
            {registerFields[role]
              .filter((f) => !f.showIf || f.showIf(form))
              .map((f) => (
                <Field key={f.name} label={f.label}>
                  {f.type === "select" ? (
                    <select
                      value={form[f.name] || ""}
                      onChange={(e) => set(f.name, e.target.value)}
                      className={inputCls}
                    >
                      <option value="">اختر...</option>
                      {f.options.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={f.type || "text"}
                      value={form[f.name] || ""}
                      onChange={(e) => set(f.name, e.target.value)}
                      className={inputCls}
                    />
                  )}
                </Field>
              ))}

            <Field label="كلمة المرور (8 أحرف على الأقل)">
              <div className="flex rounded-lg border border-slate-300 focus-within:border-emerald-600">
                <input
                  type={showPass ? "text" : "password"}
                  value={form.password || ""}
                  onChange={(e) => set("password", e.target.value)}
                  className="w-full rounded-lg bg-transparent px-3 py-2 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="px-3 text-sm text-emerald-700"
                >
                  {showPass ? "إخفاء" : "إظهار"}
                </button>
              </div>
            </Field>

            <Field label="تأكيد كلمة المرور">
              <input
                type={showPass ? "text" : "password"}
                value={form.confirm || ""}
                onChange={(e) => set("confirm", e.target.value)}
                className={inputCls}
              />
            </Field>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-700 py-3 font-medium text-white hover:bg-emerald-800"
            >
              إنشاء الحساب
            </button>

            <p className="text-center text-sm text-slate-600">
              عندك حساب؟{" "}
              <button
                type="button"
                onClick={() => switchMode("login")}
                className="font-medium text-emerald-700 hover:underline"
              >
                سجّل الدخول
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default function TrainingHome() {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [role, setRole] = useState("student");

  const openLogin = (r = "student") => {
    setRole(r);
    setOpen(false);
    setLoginOpen(true);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 text-slate-800">
      {/* القائمة الجانبية */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-white shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <span className="font-bold text-emerald-800">منصة التدريب التعاوني</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="إغلاق"
            className="rounded-lg px-2 py-1 text-xl hover:bg-slate-100"
          >
            ✕
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto px-3 py-3">
          {menu.map((m) => (
            <li key={m.label}>
              <a
                href={m.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm hover:bg-emerald-50 hover:text-emerald-800"
              >
                {m.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="border-t border-slate-200 p-4">
          <button
            onClick={() => openLogin()}
            className="w-full rounded-lg bg-emerald-700 py-3 text-sm font-medium text-white hover:bg-emerald-800"
          >
            تسجيل الدخول
          </button>
        </div>
      </aside>

      {/* القسم الأول: صورة مموهة + تسجيل الدخول */}
      <section id="home" className="relative overflow-hidden bg-emerald-900 text-white">
        <img
          src="/hero.jpg"
          alt=""
          className="absolute inset-0 h-full w-full scale-110 object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-emerald-900/70" />

        <header className="relative z-10">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setOpen(true)}
                aria-label="القائمة"
                className="rounded-lg border border-white/50 px-3 py-2"
              >
                ☰
              </button>
              <span className="text-lg font-bold">منصة التدريب التعاوني</span>
            </div>
            <button
              onClick={() => openLogin()}
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-50"
            >
              تسجيل الدخول
            </button>
          </nav>
        </header>

        <div className="relative mx-auto max-w-6xl px-5 py-20 text-center md:py-32">
          <h1 className="text-3xl font-extrabold leading-snug md:text-5xl">
            منصة التدريب التعاوني
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-emerald-50 md:text-lg">
            منصتك للوصول إلى فرص التدريب المناسبة لك، والتقديم عليها بسهولة،
            ومتابعة كل خطوة في رحلتك بشفافية ووضوح.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#opportunities" className="w-full rounded-lg bg-white px-6 py-3 font-medium text-emerald-900 hover:bg-emerald-50 sm:w-auto">
              استكشف الفرص التدريبية
            </a>
            <a href="#portals" className="w-full rounded-lg border border-white/70 px-6 py-3 font-medium hover:bg-white/10 sm:w-auto">
              سجّل كجهة أو مشرف
            </a>
          </div>
        </div>
      </section>

      {/* الإحصائيات */}
      <section id="stats" className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-xl font-bold md:text-2xl">إنجازاتنا بالأرقام</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl bg-white p-6 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-emerald-800">+{s.value}</div>
              <div className="mt-1 text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* العبارة عن رؤية 2030 */}
      <section className="bg-emerald-50">
        <p className="mx-auto max-w-4xl px-5 py-10 text-center text-xl font-bold leading-relaxed text-emerald-900 md:text-2xl">
          التدريب التعاوني يخدم رؤية ٢٠٣٠ في تطوير سوق العمل وخدمة المواطنين
        </p>
      </section>

      {/* التسجيل (طلاب / جهات / مشرفين) */}
      <section id="portals" className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-xl font-bold md:text-2xl">مرحبًا بك في المنصة</h2>
          <p className="mt-2 text-slate-600">اختر نوع حسابك لتسجيل الدخول أو التسجيل.</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {portals.map((p, i) => (
              <div key={p.title} className="flex flex-col rounded-xl border border-slate-200 p-6">
                <h3 className="font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.text}</p>
                <button
                  onClick={() => openLogin(roles[i].id)}
                  className="mt-5 w-fit rounded-lg bg-emerald-700 px-5 py-2 text-sm font-medium text-white hover:bg-emerald-800"
                >
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ماذا تقدم لك المنصة */}
      <section id="features" className="bg-emerald-50">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-xl font-bold md:text-2xl">ماذا ستقدم لك منصة التدريب التعاوني</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-emerald-100 bg-white p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-600 text-emerald-700">
                  ✓
                </span>
                <h3 className="mt-5 font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* المقولة */}
      <section className="bg-emerald-50">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-5 py-14 md:flex-row">
          {quote.image && (
            <img
              src={quote.image}
              alt=""
              className="h-56 w-56 shrink-0 rounded-2xl object-cover"
            />
          )}
          <figure className="text-center md:text-right">
            <span className="text-6xl font-extrabold leading-none text-emerald-800">”</span>
            <blockquote className="mt-2 text-lg leading-relaxed text-slate-600">
              {quote.text}
            </blockquote>
            <figcaption className="mt-4 font-bold">{quote.author}</figcaption>
          </figure>
        </div>
      </section>

      {/* الجهات التدريبية والشركاء */}
      <section id="partners" className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-xl font-bold md:text-2xl">الجهات التدريبية والشركاء</h2>
        <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
          {partners.map((p) => (
            <PartnerCard key={p.name} p={p} />
          ))}
        </div>
        <button className="mt-4 w-full rounded-lg border border-slate-300 bg-white py-3 text-sm font-medium hover:bg-slate-100">
          عرض الكل
        </button>
      </section>

      {/* الفرص التدريبية */}
      <section id="opportunities" className="mx-auto max-w-6xl px-5 pb-14">
        <h2 className="text-xl font-bold md:text-2xl">فرص التدريب الطلابي</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((o) => (
            <OpportunityCard key={o.title} o={o} />
          ))}
        </div>
        <button className="mt-6 w-full rounded-lg border border-slate-300 bg-white py-3 text-sm font-medium hover:bg-slate-100">
          عرض الكل
        </button>
      </section>

      {/* معلومات الخدمة */}
      <section id="service" className="mx-auto max-w-6xl px-5 pb-14">
        <h2 className="text-xl font-bold md:text-2xl">معلومات الخدمة</h2>

        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceInfo.map((i) => (
              <div key={i.label}>
                <dt className="text-sm text-slate-500">{i.label}</dt>
                <dd className="mt-1 font-bold">{i.value}</dd>
              </div>
            ))}
          </dl>

          <hr className="my-6 border-slate-200" />

          <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contact.map((c) => (
              <div key={c.label}>
                <dt className="text-sm text-slate-500">{c.label}</dt>
                <dd className="mt-1 font-bold">
                  {c.href ? (
                    <a href={c.href} className="text-emerald-700 hover:underline">
                      {c.value}
                    </a>
                  ) : (
                    c.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href="/guide.pdf"
            download
            className="mt-8 inline-block rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
          >
            تحميل دليل المستخدم
          </a>
        </div>
      </section>

      <LoginModal
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        role={role}
        setRole={setRole}
      />

      <footer className="bg-emerald-950 py-6 text-center text-sm text-emerald-200">
        ©️ 2026 منصة التدريب التعاوني. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
}