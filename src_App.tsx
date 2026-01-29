import { useState } from "react";
import { cn } from "./utils/cn";

const sections = [
  { id: "home", label: "Trang chủ" },
  { id: "about", label: "Giới thiệu" },
  { id: "education", label: "Học vấn & Chứng chỉ" },
  { id: "research", label: "Nghiên cứu & Giảng dạy" },
  { id: "skills", label: "Kỹ năng & Công nghệ" },
  { id: "activities", label: "Hoạt động ngoại khóa" },
  { id: "contact", label: "Liên hệ" },
];

function useScrollToSection() {
  return (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 80;
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };
}

export function App() {
  const [active, setActive] = useState<string>("home");
  const scrollTo = useScrollToSection();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900" style={{ fontFamily: "Montserrat, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Background decorative elements */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-emerald-100/70 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-50/80 blur-3xl" />
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 text-white shadow-md">
              <span className="text-lg font-semibold">LT</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Lý Ngọc Phương Thi
              </div>
              <p className="text-xs text-slate-500">Cử nhân Hóa dược · Nhà giáo dục sáng tạo</p>
            </div>
          </div>

          <nav className="hidden gap-1 text-sm font-medium text-slate-600 md:flex">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setActive(s.id);
                  scrollTo(s.id);
                }}
                className={cn(
                  "rounded-full px-3.5 py-1.5 transition-colors",
                  active === s.id
                    ? "bg-gradient-to-r from-emerald-500 to-sky-500 text-white shadow-sm"
                    : "hover:bg-emerald-50 hover:text-emerald-700"
                )}
              >
                {s.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Hero / Home */}
        <section id="home" className="grid gap-10 pb-16 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Homepage</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              <span className="block">Lý Ngọc Phương Thi</span>
              <span className="mt-2 block bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
                Cử nhân Hóa dược | Nhà giáo dục Sáng tạo
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Chào mừng bạn đến với trang web của tôi. Tôi là Phương Thi, một Cử nhân Hóa dược với niềm đam mê
              mãnh liệt trong việc ứng dụng tư duy khoa học vào phương pháp giảng dạy hiện đại. Với nền tảng liên
              ngành và tinh thần không ngừng học hỏi, tôi mong muốn kiến tạo những trải nghiệm giáo dục sáng tạo và
              hiệu quả.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => {
                  setActive("about");
                  scrollTo("about");
                }}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-200 transition hover:brightness-110"
              >
                Khám phá hành trình của tôi
              </button>
              <button
                onClick={() => {
                  setActive("research");
                  scrollTo("research");
                }}
                className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm transition hover:border-emerald-400 hover:bg-emerald-50"
              >
                Xem các dự án
              </button>
              <button
                onClick={() => {
                  setActive("contact");
                  scrollTo("contact");
                }}
                className="inline-flex items-center justify-center rounded-full border border-transparent px-4 py-2.5 text-sm font-medium text-sky-700 transition hover:border-sky-200 hover:bg-sky-50"
              >
                Liên hệ
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-xs text-slate-600 sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 3v18" />
                    <path d="M5 10h4" />
                    <path d="M15 14h4" />
                    <circle cx="7" cy="10" r="2" />
                    <circle cx="17" cy="14" r="2" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-slate-800">Khoa học & Giáo dục</p>
                  <p className="text-xs text-slate-500">Kết hợp tư duy nghiên cứu với phương pháp sư phạm hiện đại.</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M4 4h16v4H4z" />
                    <path d="M6 8v8a6 6 0 0 0 12 0V8" />
                    <path d="M9 12h6" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-slate-800">Môi trường học chủ động</p>
                  <p className="text-xs text-slate-500">Khơi gợi sự tò mò và tinh thần tự học của học sinh.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Avatar / side card */}
          <aside className="relative">
            <div className="relative mx-auto max-w-xs overflow-hidden rounded-3xl bg-white/80 p-5 shadow-xl shadow-emerald-100/80 ring-1 ring-emerald-100/80">
              <div className="relative flex flex-col items-center gap-4">
                <div className="relative h-32 w-32 overflow-hidden rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-sky-50 to-white">
                  {/* Placeholder portrait illustration */}
                  <div className="absolute inset-0 flex items-center justify-center text-center text-[11px] font-medium text-emerald-700">
                    Ảnh chân dung
                    <br />
                    chuyên nghiệp
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
                    Hóa dược · Giáo dục
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">Lý Ngọc Phương Thi</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Ứng dụng tư duy khoa học để kiến tạo những trải nghiệm học tập sáng tạo, hiệu quả và nhân văn.
                  </p>
                </div>

                <div className="grid w-full grid-cols-3 gap-3 text-center text-[11px]">
                  <div className="rounded-2xl bg-emerald-50 p-2 text-emerald-800">
                    <p className="font-semibold">Hóa dược</p>
                    <p className="text-[10px] text-emerald-700/80">Nền tảng khoa học vững chắc</p>
                  </div>
                  <div className="rounded-2xl bg-sky-50 p-2 text-sky-800">
                    <p className="font-semibold">Sư phạm</p>
                    <p className="text-[10px] text-sky-700/80">Tư duy giáo dục hiện đại</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-2 text-slate-800">
                    <p className="font-semibold">EdTech</p>
                    <p className="text-[10px] text-slate-600/90">Tích hợp công nghệ linh hoạt</p>
                  </div>
                </div>

                {/* Molecular / botanical motif */}
                <div className="mt-1 flex w-full items-center justify-between border-t border-dashed border-emerald-100 pt-3">
                  <div className="flex items-center gap-2 text-[10px] text-slate-500">
                    <div className="flex -space-x-1">
                      <span className="h-3 w-3 rounded-full bg-emerald-400" />
                      <span className="h-3 w-3 rounded-full bg-sky-400" />
                      <span className="h-3 w-3 rounded-full bg-emerald-200" />
                    </div>
                    <span>Cấu trúc phân tử</span>
                  </div>
                  <span className="text-[10px] text-emerald-600">#ScienceMeetsEducation</span>
                </div>
              </div>
            </div>
          </aside>
        </section>

        {/* About Me */}
        <section id="about" className="scroll-mt-24 border-t border-slate-200/70 py-12">
          <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
                About
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                Hành Trình Từ Phòng Thí Nghiệm Đến Lớp Học
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Xuất thân từ ngành Hóa dược tại Đại học Cần Thơ, tôi được rèn luyện tư duy logic, sự chính xác và lòng
                kiên nhẫn của một nhà khoa học. Tuy nhiên, hành trình nghiên cứu đã giúp tôi nhận ra niềm đam mê lớn
                hơn: "phản ứng hóa học" tuyệt vời nhất chính là khoảnh khắc một học sinh khám phá ra tri thức mới.
                Điều này đã thôi thúc tôi theo đuổi con đường giáo dục.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Tôi tin rằng giáo dục không phải là việc truyền đạt thông tin một chiều. Thay vào đó, tôi hướng đến
                việc xây dựng một môi trường học tập tích cực (Active Learning), nơi học sinh là trung tâm, được tự do
                đặt câu hỏi, khám phá và sáng tạo. Tôi luôn tìm cách tích hợp công nghệ và các phương pháp giảng dạy
                mới để biến những kiến thức khoa học phức tạp trở nên gần gũi và thú vị.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Với mục tiêu trở thành một nhà sáng tạo nội dung giáo dục, tôi không ngừng trau dồi kỹ năng và kiến
                thức. Tôi đang nỗ lực chinh phục chứng chỉ TOEIC 650 và theo đuổi chương trình Thạc sĩ Hóa lý thuyết để
                làm giàu thêm nền tảng chuyên môn, phục vụ cho việc xây dựng các khóa học và tài liệu chất lượng cao
                trong tương lai.
              </p>
            </div>

            <div className="space-y-4 rounded-3xl bg-white/80 p-5 shadow-sm shadow-emerald-100/60 ring-1 ring-emerald-100/80">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-lg bg-emerald-50 p-2 text-emerald-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M4 20h16" />
                    <path d="M5 20a7 7 0 0 1 14 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                    Giá trị cốt lõi
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">Con người là trung tâm</p>
                  <p className="mt-1 text-xs text-slate-600">
                    Tôn trọng cá tính, nhịp độ học và hành trình phát triển riêng của từng học sinh.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-lg bg-sky-50 p-2 text-sky-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 2v20" />
                    <path d="M5 12h14" />
                    <path d="M5 7h9" />
                    <path d="M10 17h9" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
                    Định hướng
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">Học tập suốt đời</p>
                  <p className="mt-1 text-xs text-slate-600">
                    Không ngừng cập nhật kiến thức khoa học và xu hướng giáo dục để nâng cao chất lượng giảng dạy.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-lg bg-emerald-50 p-2 text-emerald-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 3v18" />
                    <path d="M4 9h16" />
                    <path d="M4 15h16" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                    Mục tiêu
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">Sáng tạo nội dung giáo dục</p>
                  <p className="mt-1 text-xs text-slate-600">
                    Xây dựng các khóa học, học liệu và trải nghiệm học tập số dành cho học sinh phổ thông.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section id="education" className="scroll-mt-24 border-t border-slate-200/70 py-12">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
                Education & Certifications
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Nền Tảng Tri Thức</h2>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-[minmax(0,2.3fr)_minmax(0,2.2fr)]">
            <div className="space-y-5 rounded-3xl bg-white/80 p-5 shadow-sm shadow-emerald-100/60 ring-1 ring-emerald-100/80">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-lg bg-emerald-50 p-2 text-emerald-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M4 5h16v14H4z" />
                    <path d="M4 9h16" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">Đại học</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">Cử nhân Hóa dược</p>
                  <p className="text-xs text-slate-600">Trường Đại học Cần Thơ</p>
                  <p className="mt-1 text-xs text-slate-500">GPA: 2.85 / 4.0</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    Chương trình đào tạo liên ngành với Đại học Y Dược Cần Thơ, cung cấp nền tảng vững chắc về cả hóa
                    học và ứng dụng y dược.
                  </p>
                </div>
              </div>

              <div className="border-t border-dashed border-emerald-100 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                  Chứng chỉ chuyên môn
                </p>
                <ul className="mt-3 space-y-2 text-xs text-slate-600">
                  <li>
                    <span className="font-semibold text-slate-800">Nghiệp vụ Sư phạm</span> – Loại Giỏi. Chứng chỉ là
                    bước ngoặt quan trọng, trang bị phương pháp luận và kỹ năng sư phạm bài bản để theo đuổi sự nghiệp
                    giáo dục.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-800">Ngoại ngữ</span>: CEFR Level B1 (tương đương IELTS
                    5.0).
                  </li>
                  <li>
                    <span className="font-semibold text-slate-800">Tin học</span>: Tin học văn phòng.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-800">Quản lý chất lượng</span>: Nhận thức chung về
                    ISO/IEC 17025:2017 – phục vụ cho công việc trong phòng thí nghiệm.
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-5 text-slate-100 shadow-lg shadow-sky-900/20">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                Mục tiêu phát triển
              </p>
              <p className="text-sm text-slate-200">
                Tôi chủ động đặt ra những cột mốc phát triển cá nhân rõ ràng để duy trì động lực học tập suốt đời và
                nâng cao năng lực chuyên môn.
              </p>
              <div className="mt-3 space-y-3 text-xs">
                <div className="rounded-2xl border border-emerald-400/40 bg-emerald-500/10 p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-white">Ngoại ngữ</p>
                    <span className="rounded-full bg-emerald-400/20 px-2 py-0.5 text-[10px] text-emerald-200">
                      Đang theo đuổi
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-200">
                    Mục tiêu đạt chứng chỉ TOEIC 650 để mở rộng cơ hội học tập và làm việc trong môi trường quốc tế.
                  </p>
                </div>
                <div className="rounded-2xl border border-sky-400/40 bg-sky-500/10 p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-white">Học vấn</p>
                    <span className="rounded-full bg-sky-400/20 px-2 py-0.5 text-[10px] text-sky-200">
                      Đang chuẩn bị
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-200">
                    Dự định theo đuổi chương trình Thạc sĩ Hóa lý thuyết và Tính toán, làm giàu nền tảng khoa học để
                    phát triển nội dung giáo dục chuyên sâu.
                  </p>
                </div>
              </div>

              <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400">
                <span>Lộ trình phát triển cá nhân</span>
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-10 rounded-full bg-emerald-400/60" />
                  <span className="h-1.5 w-6 rounded-full bg-sky-400/40" />
                  <span className="h-1.5 w-4 rounded-full bg-slate-600" />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Teaching */}
        <section id="research" className="scroll-mt-24 border-t border-slate-200/70 py-12">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
                Research & Teaching
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Kinh Nghiệm Thực Tiễn</h2>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-[minmax(0,2.2fr)_minmax(0,2.2fr)]">
            <div className="space-y-4 rounded-3xl bg-white/80 p-5 shadow-sm shadow-emerald-100/60 ring-1 ring-emerald-100/80">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                <span className="h-1.5 w-6 rounded-full bg-emerald-400" />
                <span>Nghiên cứu khoa học</span>
              </div>
              <p className="text-sm font-semibold text-slate-900">Luận văn tốt nghiệp</p>
              <p className="mt-1 text-xs text-slate-500">
                Đề tài: "Nghiên cứu thành phần hóa học và hoạt tính sinh học của loài thực vật [Tên loài thực vật] tại
                Kiên Giang." (Cập nhật chi tiết tên loài thực vật khi hoàn thiện luận văn).
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Quá trình thực hiện luận văn đã cho tôi kinh nghiệm quý báu trong việc lập kế hoạch, thực hiện thí
                nghiệm, phân tích dữ liệu và trình bày báo cáo khoa học. Đây là nền tảng cho sự tỉ mỉ và chính xác
                trong công việc sau này.
              </p>

              <div className="mt-3 grid grid-cols-2 gap-3 text-[11px] text-slate-600">
                <div className="rounded-2xl bg-emerald-50 p-2">
                  <p className="font-semibold text-emerald-800">Kỹ năng phòng thí nghiệm</p>
                  <p className="mt-1 text-[10px] text-emerald-700/80">
                    Thiết kế thí nghiệm, thao tác thiết bị, tuân thủ chuẩn an toàn và tiêu chuẩn chất lượng.
                  </p>
                </div>
                <div className="rounded-2xl bg-sky-50 p-2">
                  <p className="font-semibold text-sky-800">Phân tích & báo cáo</p>
                  <p className="mt-1 text-[10px] text-sky-700/80">
                    Xử lý số liệu, đọc tài liệu khoa học, trình bày kết quả rõ ràng và logic.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5 rounded-3xl bg-white/80 p-5 shadow-sm shadow-sky-100/60 ring-1 ring-sky-100/80">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
                <span className="h-1.5 w-6 rounded-full bg-sky-400" />
                <span>Kinh nghiệm giảng dạy</span>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">Thực tập Sư phạm</p>
                <p className="mt-1 text-xs text-slate-500">Vai trò: Giáo sinh thực tập môn Hóa học</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Trực tiếp soạn giáo án theo định hướng phát triển năng lực, tổ chức các hoạt động học tập trải nghiệm
                  và đứng lớp giảng dạy. Kinh nghiệm này giúp tôi áp dụng lý thuyết sư phạm vào thực tế và nhận được
                  phản hồi tích cực về khả năng tương tác và quản lý lớp học.
                </p>
              </div>

              <div className="border-t border-dashed border-sky-100 pt-4">
                <p className="text-sm font-semibold text-slate-900">Dạy kèm</p>
                <p className="mt-1 text-xs text-slate-500">Môn học: Khoa học Tự nhiên (Lý, Hóa, Sinh)</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Áp dụng phương pháp Active Learning, sử dụng các công cụ như Quizizz để tạo bài kiểm tra tương tác và
                  Canva để thiết kế bài giảng sinh động, giúp học sinh nắm vững kiến thức một cách chủ động và hứng
                  thú.
                </p>

                <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] text-slate-600">
                  <div className="rounded-2xl bg-slate-50 p-2">
                    <p className="font-semibold text-slate-800">Active Learning</p>
                    <p className="mt-1 text-[10px] text-slate-600/80">Học sinh tham gia, thảo luận, thực hành.</p>
                  </div>
                  <div className="rounded-2xl bg-emerald-50 p-2">
                    <p className="font-semibold text-emerald-800">Trò chơi hóa học</p>
                    <p className="mt-1 text-[10px] text-emerald-700/80">Quizizz, Kahoot! tạo động lực học.</p>
                  </div>
                  <div className="rounded-2xl bg-sky-50 p-2">
                    <p className="font-semibold text-sky-800">Bài giảng trực quan</p>
                    <p className="mt-1 text-[10px] text-sky-700/80">Slide Canva, hình ảnh, minh họa sinh động.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Technology */}
        <section id="skills" className="scroll-mt-24 border-t border-slate-200/70 py-12">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">Skills & Technology</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Bộ Công Cụ Của Tôi</h2>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-3 rounded-3xl bg-white/85 p-5 shadow-sm shadow-emerald-100/60 ring-1 ring-emerald-100/80">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">Kỹ năng sư phạm</p>
              <ul className="mt-2 space-y-2 text-xs text-slate-600">
                <li>Phương pháp học tập chủ động (Active Learning).</li>
                <li>Thiết kế giáo án hiện đại, bám sát chương trình và năng lực học sinh.</li>
                <li>Tổ chức hoạt động nhóm, thảo luận, dự án nhỏ.</li>
                <li>Giao tiếp, đặt câu hỏi gợi mở, phản hồi mang tính xây dựng.</li>
              </ul>
            </div>

            <div className="space-y-3 rounded-3xl bg-white/85 p-5 shadow-sm shadow-sky-100/60 ring-1 ring-sky-100/80">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Công nghệ giáo dục (EdTech)</p>
              <ul className="mt-2 space-y-2 text-xs text-slate-600">
                <li>
                  <span className="font-semibold">Thiết kế & Soạn giảng:</span> Canva, Microsoft PowerPoint.
                </li>
                <li>
                  <span className="font-semibold">Tương tác & Kiểm tra:</span> Quizizz, Kahoot!.
                </li>
                <li>
                  <span className="font-semibold">Quản lý lớp học:</span> Google Classroom, Google Meet.
                </li>
              </ul>
            </div>

            <div className="space-y-3 rounded-3xl bg-slate-900 text-slate-100 p-5 shadow-lg shadow-slate-900/20">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
                Văn phòng & Khoa học
              </p>
              <ul className="mt-2 space-y-2 text-xs text-slate-100/90">
                <li>
                  <span className="font-semibold">Microsoft Office:</span> Word, Excel, trình bày tài liệu và báo cáo.
                </li>
                <li>Phần mềm xử lý dữ liệu khoa học (tùy theo yêu cầu từng đề tài nghiên cứu).</li>
                <li>Kỹ năng vận hành và bảo trì cơ bản các thiết bị phòng thí nghiệm hóa học.</li>
              </ul>

              <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400">
                <span>Hệ sinh thái công cụ hỗ trợ dạy & học</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-emerald-300/60 text-emerald-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v4" />
                    <path d="M12 18v4" />
                    <path d="M4.93 4.93 7.76 7.76" />
                    <path d="M16.24 16.24 19.07 19.07" />
                    <path d="M2 12h4" />
                    <path d="M18 12h4" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Extracurricular Activities */}
        <section id="activities" className="scroll-mt-24 border-t border-slate-200/70 py-12">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
                Extracurricular
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Năng Động & Cống Hiến</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col gap-3 rounded-3xl bg-white/85 p-5 text-sm shadow-sm shadow-emerald-100/60 ring-1 ring-emerald-100/80">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M4 4h7v7H4z" />
                    <path d="M13 13h7v7h-7z" />
                    <path d="M14 4h6v6" />
                    <path d="M4 14h6v6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Tình nguyện</p>
                  <p className="text-xs text-slate-500">Chiến dịch Mùa hè xanh</p>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-slate-600">
                Tham gia chiến dịch Mùa hè xanh: cống hiến sức trẻ cho các hoạt động cộng đồng, rèn luyện tinh thần
                đồng đội và khả năng thích ứng trong nhiều môi trường khác nhau.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-3xl bg-white/85 p-5 text-sm shadow-sm shadow-sky-100/60 ring-1 ring-sky-100/80">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 2 3 7l9 5 9-5z" />
                    <path d="M3 17l9 5 9-5" />
                    <path d="M3 12l9 5 9-5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Đoàn thể</p>
                  <p className="text-xs text-slate-500">Thành tích trong công tác Đoàn</p>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-slate-600">
                Đạt thành tích nổi bật trong công tác Đoàn (cập nhật chi tiết theo hồ sơ): thể hiện vai trò tích cực,
                kỹ năng lãnh đạo và khả năng tổ chức sự kiện dành cho sinh viên.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-3xl bg-white/85 p-5 text-sm shadow-sm shadow-emerald-100/60 ring-1 ring-emerald-100/80">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M9 3v6l-2 2" />
                    <path d="M15 3v6l2 2" />
                    <path d="M5 21c1.5-1.5 3.5-2 7-2s5.5.5 7 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Văn · Thể · Mỹ</p>
                  <p className="text-xs text-slate-500">Hoạt động phong trào</p>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-slate-600">
                Tích cực tham gia các hoạt động văn nghệ và thể thao của khoa, trường; góp phần xây dựng đời sống tinh
                thần sôi nổi và rèn luyện thể chất, cân bằng giữa học tập và cuộc sống.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 border-t border-slate-200/70 py-12">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">Contact</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Kết Nối Với Tôi</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
                Nếu bạn quan tâm đến các dự án giáo dục, nội dung học tập về Hóa học hoặc cơ hội hợp tác trong lĩnh vực
                dạy học và nghiên cứu, tôi rất sẵn lòng được kết nối.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-start">
            <div className="space-y-4 rounded-3xl bg-white/85 p-5 shadow-sm shadow-emerald-100/60 ring-1 ring-emerald-100/80">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">Thông tin</p>
                <dl className="mt-3 space-y-2 text-sm text-slate-700">
                  <div className="flex gap-2 text-xs">
                    <dt className="w-16 text-slate-500">Email</dt>
                    <dd className="font-medium text-slate-800">
                      <a
                        href="mailto:phuongthi.lyngoc@email.com"
                        className="underline decoration-emerald-300 decoration-2 underline-offset-2 hover:text-emerald-700"
                      >
                        phuongthi.lyngoc@email.com
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <dt className="w-16 text-slate-500">LinkedIn</dt>
                    <dd className="font-medium text-slate-800">
                      <a
                        href="#"
                        className="underline decoration-sky-300 decoration-2 underline-offset-2 hover:text-sky-700"
                      >
                        Cập nhật hồ sơ LinkedIn chuyên nghiệp
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <dt className="w-16 text-slate-500">Khu vực</dt>
                    <dd className="font-medium text-slate-800">Cần Thơ, Việt Nam</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-emerald-500/10 to-sky-500/10 p-4 text-xs text-slate-700">
                <p className="font-semibold text-slate-900">Hợp tác mong muốn</p>
                <p className="mt-1 text-xs text-slate-600">
                  · Giảng dạy Hóa học và Khoa học Tự nhiên bậc THCS/THPT.
                  <br />· Thiết kế học liệu, bài giảng số, tài liệu ôn tập.
                  <br />· Tham gia dự án nghiên cứu giáo dục hoặc truyền thông khoa học.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-white/90 p-5 shadow-md shadow-emerald-100/80 ring-1 ring-emerald-100/80">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">Gửi tin nhắn</p>
              <form
                className="mt-3 space-y-3 text-sm"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Cảm ơn bạn đã gửi lời nhắn! Đây là bản demo nên thông tin chưa được gửi đi.");
                }}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-xs font-medium text-slate-700">
                      Họ và tên
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2 text-xs text-slate-900 shadow-sm focus:border-emerald-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-medium text-slate-700">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2 text-xs text-slate-900 shadow-sm focus:border-emerald-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="subject" className="text-xs font-medium text-slate-700">
                    Tiêu đề
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2 text-xs text-slate-900 shadow-sm focus:border-emerald-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-medium text-slate-700">
                    Nội dung tin nhắn
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2 text-xs text-slate-900 shadow-sm focus:border-emerald-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-emerald-200 transition hover:brightness-110"
                >
                  Gửi tin nhắn
                </button>
              </form>
              <p className="mt-2 text-[10px] text-slate-400">
                Thông tin của bạn sẽ được bảo mật và chỉ sử dụng cho mục đích liên hệ công việc.
              </p>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-200/70 py-6 text-center text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} · Thiết kế nội dung & giao diện bởi Lý Ngọc Phương Thi (demo). Tông màu lấy
            cảm hứng từ dược liệu thiên nhiên và khoa học hiện đại.
          </p>
        </footer>
      </main>
    </div>
  );
}
