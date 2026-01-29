import { useState } from "react";
import { cn } from "./utils/cn";

const NAV_ITEMS = [
  { id: "home", label: "Trang chủ" },
  { id: "about", label: "Giới thiệu" },
  { id: "education", label: "Học vấn" },
  { id: "experience", label: "Nghiên cứu & Giảng dạy" },
  { id: "skills", label: "Kỹ năng" },
  { id: "activities", label: "Hoạt động" },
  { id: "contact", label: "Liên hệ" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export function App() {
  const [activeNav, setActiveNav] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-sky-50 to-slate-50 text-slate-900" style={{ fontFamily: "Montserrat, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Top navigation */}
      <header className="sticky top-0 z-40 border-b border-emerald-100/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-sky-500 text-white shadow-lg shadow-emerald-200/70">
              <span className="text-lg font-semibold">PT</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide text-emerald-700 uppercase">Lý Ngọc Phương Thi</div>
              <div className="text-xs text-slate-500">Cử nhân Hóa dược · Nhà giáo dục sáng tạo</div>
            </div>
          </div>
          <nav className="hidden gap-4 text-sm font-medium text-slate-600 md:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveNav(item.id);
                  scrollToSection(item.id);
                }}
                className={cn(
                  "rounded-full px-3 py-1 transition-colors",
                  activeNav === item.id
                    ? "bg-gradient-to-r from-emerald-500 to-sky-500 text-white shadow-sm"
                    : "hover:bg-emerald-50 hover:text-emerald-700"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:pt-14">
        {/* Hero / Homepage */}
        <section id="home" className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-100">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Kết hợp Khoa học & Giáo dục
            </div>
            <div>
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Lý Ngọc Phương Thi
              </h1>
              <p className="mt-3 text-lg font-medium text-emerald-700 sm:text-xl">
                Cử nhân Hóa dược | Nhà giáo dục Sáng tạo
              </p>
              <p className="mt-2 max-w-xl text-sm text-slate-600 sm:text-base">
                Kết hợp tư duy khoa học với phương pháp sư phạm hiện đại để khơi nguồn cảm hứng học tập và kiến tạo trải nghiệm giáo dục chủ động cho thế hệ học sinh mới.
              </p>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-[0.95rem]">
              Chào mừng bạn đến với trang web của tôi. Tôi là Phương Thi, một Cử nhân Hóa dược với niềm đam mê mãnh liệt trong việc ứng dụng tư duy khoa học vào phương pháp giảng dạy hiện đại. Với nền tảng liên ngành và tinh thần không ngừng học hỏi, tôi mong muốn kiến tạo những trải nghiệm giáo dục sáng tạo và hiệu quả.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollToSection("about")}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-200 transition hover:shadow-lg hover:brightness-105"
              >
                Khám phá hành trình của tôi
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white px-4 py-2.5 text-sm font-medium text-emerald-700 shadow-sm transition hover:bg-emerald-50"
              >
                Xem các dự án & trải nghiệm
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center rounded-full border border-transparent px-4 py-2.5 text-sm font-medium text-sky-700 hover:border-sky-100 hover:bg-sky-50"
              >
                Liên hệ
              </button>
            </div>
            <dl className="mt-2 grid max-w-xl grid-cols-2 gap-4 text-xs text-slate-600 sm:text-sm">
              <div>
                <dt className="font-semibold text-emerald-700">Lĩnh vực chuyên môn</dt>
                <dd>Hóa dược · Giáo dục Hóa học · Phương pháp dạy học tích cực</dd>
              </div>
              <div>
                <dt className="font-semibold text-sky-700">Khu vực làm việc</dt>
                <dd>Cần Thơ, Việt Nam (sẵn sàng cộng tác online)</dd>
              </div>
            </dl>
          </div>

          {/* Portrait / visual side */}
          <div className="relative mx-auto flex max-w-sm items-center justify-center">
            <div className="relative h-72 w-72 rounded-[2.5rem] bg-gradient-to-br from-emerald-500 via-sky-500 to-slate-900 p-[2px] shadow-xl shadow-emerald-200/80 sm:h-80 sm:w-80">
              <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[2.3rem] bg-slate-950/95">
                {/* Placeholder avatar area */}
                <div className="relative flex flex-1 items-center justify-center bg-gradient-to-br from-emerald-900/80 via-slate-950 to-sky-900/70">
                  {/* Botanical and molecular accents */}
                  <div className="pointer-events-none absolute inset-0 opacity-40">
                    <div className="absolute -left-10 top-6 h-32 w-32 rounded-full border border-emerald-400/40" />
                    <div className="absolute -right-6 bottom-4 h-24 w-24 rounded-full border border-sky-400/40" />
                    <div className="absolute left-8 bottom-10 h-20 w-20 rounded-full border border-emerald-300/40" />
                  </div>
                  <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-slate-900/80 ring-2 ring-emerald-400/60 ring-offset-4 ring-offset-emerald-500/40">
                    <span className="max-w-[7.5rem] text-center text-xs font-medium leading-snug text-emerald-50">
                      Ảnh chân dung chuyên nghiệp
                      <span className="block text-[0.65rem] font-normal text-emerald-200/90">
                        (Thay thế bằng hình thật khi triển khai)
                      </span>
                    </span>
                  </div>
                </div>
                {/* Label strip */}
                <div className="border-t border-emerald-500/20 bg-slate-900/80 px-4 py-3 text-xs text-emerald-50">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="font-semibold text-emerald-100">Lý Ngọc Phương Thi</div>
                      <div className="text-[0.7rem] text-emerald-200/90">Cử nhân Hóa dược · Nhà giáo dục sáng tạo</div>
                    </div>
                    <div className="rounded-full bg-emerald-500/10 px-2 py-1 text-[0.65rem] font-medium text-emerald-200 ring-1 ring-emerald-400/40">
                      Ready to collaborate
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -left-4 -top-3 hidden h-14 w-14 -rotate-6 items-center justify-center rounded-2xl border border-emerald-200/70 bg-white/80 text-[0.65rem] font-semibold uppercase tracking-wide text-emerald-700 shadow-md shadow-emerald-100/70 sm:flex">
              Hóa dược
              <span className="block text-[0.6rem] font-normal text-emerald-500">& Giáo dục</span>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-16 scroll-m-24 border-y border-emerald-100/60 bg-white/70 py-10 backdrop-blur-sm sm:rounded-3xl sm:border sm:px-8 sm:py-12">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:items-start">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                Hành Trình Từ Phòng Thí Nghiệm Đến Lớp Học
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-[0.95rem]">
                <p>
                  Xuất thân từ ngành Hóa dược tại Đại học Cần Thơ, tôi được rèn luyện tư duy logic, sự chính xác và lòng kiên nhẫn của một nhà khoa học. Tuy nhiên, hành trình nghiên cứu đã giúp tôi nhận ra niềm đam mê lớn hơn: "phản ứng hóa học" tuyệt vời nhất chính là khoảnh khắc một học sinh khám phá ra tri thức mới. Điều này đã thôi thúc tôi theo đuổi con đường giáo dục.
                </p>
                <p>
                  Tôi tin rằng giáo dục không phải là việc truyền đạt thông tin một chiều. Thay vào đó, tôi hướng đến việc xây dựng một môi trường học tập tích cực (Active Learning), nơi học sinh là trung tâm, được tự do đặt câu hỏi, khám phá và sáng tạo. Tôi luôn tìm cách tích hợp công nghệ và các phương pháp giảng dạy mới để biến những kiến thức khoa học phức tạp trở nên gần gũi và thú vị.
                </p>
                <p>
                  Với mục tiêu trở thành một nhà sáng tạo nội dung giáo dục, tôi không ngừng trau dồi kỹ năng và kiến thức. Tôi đang nỗ lực chinh phục chứng chỉ TOEIC 650 và theo đuổi chương trình Thạc sĩ Hóa lý thuyết để làm giàu thêm nền tảng chuyên môn, phục vụ cho việc xây dựng các khóa học và tài liệu chất lượng cao trong tương lai.
                </p>
              </div>
            </div>
            <div className="space-y-4 rounded-2xl bg-gradient-to-br from-emerald-50 via-sky-50 to-white p-5 text-xs text-slate-700 shadow-sm ring-1 ring-emerald-100/80">
              <h3 className="text-sm font-semibold text-emerald-900">Chân dung chuyên môn</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="mt-0.5 h-5 w-5 flex-none rounded-full bg-emerald-500/10 text-center text-[0.7rem] leading-5 text-emerald-600">
                    1
                  </span>
                  <p>
                    <span className="font-semibold text-emerald-800">Nền tảng Hóa dược vững chắc:</span> am hiểu cấu trúc, tính chất và ứng dụng của dược chất, gắn lý thuyết với thực tiễn chăm sóc sức khỏe.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 h-5 w-5 flex-none rounded-full bg-sky-500/10 text-center text-[0.7rem] leading-5 text-sky-700">
                    2
                  </span>
                  <p>
                    <span className="font-semibold text-sky-800">Tư duy sư phạm hiện đại:</span> ưu tiên trải nghiệm học tập đa chiều, khuyến khích học sinh tự khám phá và phản biện.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 h-5 w-5 flex-none rounded-full bg-emerald-500/10 text-center text-[0.7rem] leading-5 text-emerald-700">
                    3
                  </span>
                  <p>
                    <span className="font-semibold text-emerald-800">Định hướng dài hạn:</span> kiên trì theo đuổi học tập suốt đời, kết nối nghiên cứu Hóa lý thuyết với thiết kế nội dung giáo dục số.
                  </p>
                </li>
              </ul>
              <div className="mt-2 rounded-xl bg-white/80 p-3 text-[0.75rem] text-emerald-800 ring-1 ring-emerald-100">
                "Tôi mong muốn trở thành cầu nối giữa tri thức khoa học và trải nghiệm học tập gần gũi, nhân văn dành cho người học."
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mt-16 scroll-m-24">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Nền Tảng Tri Thức
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)]">
            <div className="space-y-5 rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-emerald-100">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Đại học
              </h3>
              <div className="space-y-1 text-sm">
                <div className="font-semibold text-slate-900">Cử nhân Hóa dược</div>
                <div className="text-[0.9rem] text-slate-600">Trường Đại học Cần Thơ</div>
                <div className="text-[0.8rem] font-medium text-emerald-700">GPA: 2.85 / 4.0</div>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-slate-700">
                  Chương trình đào tạo liên ngành với Đại học Y Dược Cần Thơ, cung cấp nền tảng vững chắc về cả hóa học cơ bản lẫn ứng dụng trong lĩnh vực y dược. Đây là tiền đề quan trọng giúp tôi hiểu sâu về cơ chế tác dụng của thuốc và các vấn đề liên quan đến sức khỏe cộng đồng.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-sky-100">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-700">
                  Chứng chỉ Chuyên môn
                </h3>
                <ul className="mt-3 space-y-3 text-sm text-slate-700">
                  <li>
                    <div className="font-semibold text-slate-900">Chứng chỉ Nghiệp vụ Sư phạm · Loại Giỏi</div>
                    <p className="mt-1 text-[0.9rem]">
                      Chứng chỉ này là bước ngoặt quan trọng, trang bị cho tôi phương pháp luận và kỹ năng sư phạm bài bản để tự tin theo đuổi sự nghiệp giáo dục, đặc biệt trong giảng dạy các môn khoa học tự nhiên.
                    </p>
                  </li>
                  <li>
                    <div className="font-semibold text-slate-900">Ngoại ngữ: CEFR Level B1 (tương đương IELTS 5.0)</div>
                    <p className="mt-1 text-[0.9rem]">
                      Khả năng đọc hiểu tài liệu chuyên ngành tiếng Anh, giao tiếp ở mức độc lập và sẵn sàng nâng cao để tham gia các chương trình học thuật quốc tế.
                    </p>
                  </li>
                  <li>
                    <div className="font-semibold text-slate-900">Tin học: Tin học văn phòng</div>
                    <p className="mt-1 text-[0.9rem]">
                      Sử dụng thành thạo các công cụ văn phòng (Word, Excel, PowerPoint) trong soạn thảo tài liệu, xử lý số liệu và thiết kế bài giảng.
                    </p>
                  </li>
                  <li>
                    <div className="font-semibold text-slate-900">Quản lý chất lượng phòng thí nghiệm</div>
                    <p className="mt-1 text-[0.9rem]">
                      Nhận thức chung về ISO/IEC 17025:2017, hỗ trợ công việc trong phòng thí nghiệm với tư duy hệ thống, chuẩn hóa quy trình và đảm bảo độ tin cậy của kết quả phân tích.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-emerald-500/95 via-emerald-600 to-sky-600 p-[1px] shadow-md shadow-emerald-200/80">
                <div className="flex h-full flex-col justify-between rounded-[1rem] bg-slate-950/95 px-4 py-4 text-xs text-emerald-50 sm:px-5 sm:py-5">
                  <div>
                    <h3 className="text-[0.8rem] font-semibold uppercase tracking-wide text-emerald-100">
                      Mục tiêu phát triển
                    </h3>
                    <p className="mt-2 text-[0.8rem] leading-relaxed text-emerald-50/90">
                      Tôi xem học tập suốt đời là kim chỉ nam trong sự nghiệp, đặc biệt trong bối cảnh khoa học và công nghệ luôn đổi mới.
                    </p>
                  </div>
                  <dl className="mt-3 grid gap-3 text-[0.8rem] sm:grid-cols-2">
                    <div className="rounded-lg bg-emerald-900/60 p-3 ring-1 ring-emerald-500/40">
                      <dt className="font-semibold text-emerald-50">Ngoại ngữ</dt>
                      <dd className="mt-1 text-emerald-100/90">Chinh phục chứng chỉ TOEIC 650 để mở rộng cơ hội học thuật và hợp tác quốc tế.</dd>
                    </div>
                    <div className="rounded-lg bg-sky-900/50 p-3 ring-1 ring-sky-500/40">
                      <dt className="font-semibold text-emerald-50">Học vấn</dt>
                      <dd className="mt-1 text-emerald-100/90">Hoàn thành chương trình Thạc sĩ Hóa lý thuyết và Tính toán, làm giàu nền tảng chuyên môn phục vụ giảng dạy và nghiên cứu.</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Teaching */}
        <section id="experience" className="mt-16 scroll-m-24">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Kinh Nghiệm Thực Tiễn
          </h2>
          <div className="mt-6 grid gap-7 md:grid-cols-2">
            {/* Research */}
            <div className="space-y-4 rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-emerald-100">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                  Nghiên cứu khoa học
                </h3>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-[0.7rem] font-medium text-emerald-700 ring-1 ring-emerald-100">
                  Luận văn tốt nghiệp
                </span>
              </div>
              <div className="space-y-2 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">
                  Nghiên cứu thành phần hóa học và hoạt tính sinh học của loài thực vật [Tên loài thực vật] tại Kiên Giang
                </p>
                <p className="text-[0.9rem] leading-relaxed">
                  Quá trình thực hiện luận văn đã cho tôi kinh nghiệm quý báu trong việc lập kế hoạch, thực hiện thí nghiệm, phân tích dữ liệu và trình bày báo cáo khoa học. Tôi được rèn luyện tác phong làm việc tỉ mỉ, tuân thủ quy trình và luôn đặt độ tin cậy của kết quả lên hàng đầu.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-[0.9rem]">
                  <li>Thiết kế quy trình chiết tách và phân lập các hợp chất từ nguồn dược liệu.</li>
                  <li>Ứng dụng các phương pháp phân tích hiện đại để xác định cấu trúc và đánh giá hoạt tính sinh học.</li>
                  <li>Viết báo cáo, trình bày kết quả trước hội đồng với lập luận rõ ràng, có cơ sở khoa học.</li>
                </ul>
              </div>
            </div>

            {/* Teaching */}
            <div className="space-y-5 rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-sky-100">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-700">
                Kinh nghiệm giảng dạy
              </h3>
              <div className="space-y-4 text-sm text-slate-700">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-semibold text-slate-900">Thực tập sư phạm · Giáo sinh môn Hóa học</p>
                    <span className="rounded-full bg-sky-50 px-2.5 py-0.5 text-[0.7rem] font-medium text-sky-700 ring-1 ring-sky-100">
                      Trải nghiệm lớp học thật
                    </span>
                  </div>
                  <p className="mt-2 text-[0.9rem] leading-relaxed">
                    Trực tiếp soạn giáo án theo định hướng phát triển năng lực, tổ chức các hoạt động học tập trải nghiệm và đứng lớp giảng dạy. Kinh nghiệm này giúp tôi áp dụng lý thuyết sư phạm vào thực tế, quản lý lớp học hiệu quả và nhận được phản hồi tích cực về khả năng truyền đạt, sự gần gũi với học sinh.
                  </p>
                </div>
                <div className="border-t border-dashed border-sky-100 pt-3">
                  <p className="font-semibold text-slate-900">Dạy kèm · Khoa học Tự nhiên (Lý, Hóa, Sinh)</p>
                  <p className="mt-2 text-[0.9rem] leading-relaxed">
                    Tôi áp dụng phương pháp học tập chủ động (Active Learning), kết hợp câu hỏi gợi mở, bài tập tình huống và các công cụ số để giúp học sinh hiểu bản chất hiện tượng thay vì chỉ ghi nhớ máy móc.
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-[0.9rem]">
                    <li>
                      Sử dụng <span className="font-medium text-sky-700">Quizizz</span> để tạo bài kiểm tra tương tác, giúp ôn tập kiến thức một cách nhẹ nhàng nhưng hiệu quả.
                    </li>
                    <li>
                      Thiết kế slide sinh động bằng <span className="font-medium text-emerald-700">Canva</span> và PowerPoint để trực quan hóa các khái niệm trừu tượng.
                    </li>
                    <li>Tùy biến cách tiếp cận theo năng lực từng học sinh, tạo động lực học tập bằng phản hồi tích cực.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-16 scroll-m-24">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Bộ Công Cụ Của Tôi
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Kết hợp kỹ năng sư phạm, công nghệ giáo dục và kiến thức khoa học để thiết kế trải nghiệm học tập toàn diện, thân thiện và hiệu quả.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="space-y-3 rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-emerald-100">
              <h3 className="text-sm font-semibold text-emerald-800">Kỹ năng Sư phạm</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Phương pháp học tập chủ động (Active Learning)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Thiết kế giáo án hiện đại, bám sát chương trình và định hướng phát triển năng lực
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Tổ chức hoạt động nhóm, thảo luận và thuyết trình
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Giao tiếp, đặt câu hỏi gợi mở và khuyến khích học sinh tự tin chia sẻ
                </li>
              </ul>
            </div>

            <div className="space-y-3 rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-sky-100">
              <h3 className="text-sm font-semibold text-sky-800">Công nghệ Giáo dục (EdTech)</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                  Thiết kế & soạn giảng: Canva, Microsoft PowerPoint
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                  Tương tác & kiểm tra: Quizizz, Kahoot!
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                  Quản lý lớp học & học trực tuyến: Google Classroom, Google Meet
                </li>
              </ul>
            </div>

            <div className="space-y-3 rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-slate-100">
              <h3 className="text-sm font-semibold text-slate-800">Kỹ năng Văn phòng & Khoa học</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  Microsoft Office (Word, Excel, PowerPoint)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  Xử lý số liệu và trình bày dữ liệu khoa học (các công cụ phân tích cơ bản)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  Kỹ năng vận hành và bảo quản thiết bị phòng thí nghiệm
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  Tuân thủ an toàn hóa chất và quy trình thao tác chuẩn
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Activities */}
        <section id="activities" className="mt-16 scroll-m-24">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Năng Động & Cống Hiến
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Không chỉ tập trung vào chuyên môn, tôi chủ động tham gia các hoạt động cộng đồng và phong trào để hoàn thiện kỹ năng mềm, tinh thần trách nhiệm và khả năng thích ứng.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="flex flex-col gap-3 rounded-2xl bg-white/80 p-5 text-sm text-slate-700 shadow-sm ring-1 ring-emerald-100">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                <span className="text-lg">✦</span>
              </div>
              <div className="font-semibold text-slate-900">Tình nguyện</div>
              <p className="text-[0.9rem] leading-relaxed">
                Tham gia chiến dịch Mùa hè xanh: cống hiến sức trẻ cho các hoạt động cộng đồng, hỗ trợ người dân địa phương và tham gia các chương trình giáo dục, tuyên truyền. Hoạt động giúp tôi rèn luyện tinh thần đồng đội, khả năng thích ứng và sự thấu hiểu với cộng đồng.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl bg-white/80 p-5 text-sm text-slate-700 shadow-sm ring-1 ring-sky-100">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                <span className="text-lg">☼</span>
              </div>
              <div className="font-semibold text-slate-900">Đoàn thể</div>
              <p className="text-[0.9rem] leading-relaxed">
                Đạt thành tích [Tên thành tích] trong công tác Đoàn: thể hiện vai trò tích cực trong phong trào thanh niên, tham gia tổ chức sự kiện, truyền thông và hoạt động tập thể. Đây là môi trường tốt để tôi rèn luyện kỹ năng lãnh đạo và quản lý thời gian.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl bg-white/80 p-5 text-sm text-slate-700 shadow-sm ring-1 ring-slate-100">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-slate-700 ring-1 ring-slate-100">
                <span className="text-lg">♪</span>
              </div>
              <div className="font-semibold text-slate-900">Văn · Thể · Mỹ</div>
              <p className="text-[0.9rem] leading-relaxed">
                Tích cực tham gia các hoạt động văn nghệ và thể thao của khoa, trường: góp phần xây dựng đời sống tinh thần sôi nổi, nâng cao sức khỏe thể chất và tạo môi trường gắn kết giữa sinh viên. Tôi tin rằng một nhà giáo dục tốt trước hết phải là một người có đời sống cân bằng, tích cực.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-16 scroll-m-24">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] md:items-start">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                Kết Nối Với Tôi
              </h2>
              <p className="mt-2 max-w-md text-sm text-slate-600">
                Tôi luôn sẵn sàng cho các cơ hội cộng tác trong lĩnh vực giảng dạy, xây dựng nội dung giáo dục và các dự án liên quan đến Hóa dược, Khoa học tự nhiên.
              </p>
              <dl className="mt-5 space-y-3 text-sm text-slate-700">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                    Email
                  </dt>
                  <dd className="mt-0.5">phuongthi2012653@gmail.com</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                    Điện thoại
                  </dt>
                  <dd className="mt-0.5">0 774 826 198</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                    Khu vực
                  </dt>
                  <dd className="mt-0.5">Cần Thơ, Việt Nam</dd>
                </div>
              </dl>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-emerald-500/90 via-emerald-600 to-sky-600 p-[1px] shadow-md shadow-emerald-200/80">
                <div className="rounded-[1rem] bg-slate-950/95 p-4 text-[0.8rem] text-emerald-50 sm:p-5">
                  <p className="font-medium text-emerald-100">
                    Hướng đến vai trò Nhà sáng tạo nội dung giáo dục
                  </p>
                  <p className="mt-1.5 text-emerald-50/90">
                    Tôi mong muốn đồng hành cùng các tổ chức giáo dục, trung tâm luyện thi, trường phổ thông và các dự án EdTech để tạo ra tài liệu, bài giảng và hoạt động học tập chất lượng, dễ tiếp cận cho học sinh.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-emerald-100 sm:p-6">
              <h3 className="text-sm font-semibold text-slate-900">Biểu mẫu liên hệ</h3>
              <p className="mt-1 text-xs text-slate-500">
                Vui lòng để lại lời nhắn, tôi sẽ phản hồi trong thời gian sớm nhất.
              </p>
              <form
                className="mt-4 space-y-4 text-sm"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Cảm ơn bạn đã liên hệ! Biểu mẫu demo chưa được kết nối hệ thống email.");
                }}
              >
                <div className="space-y-1">
                  <label htmlFor="name" className="text-[0.8rem] font-medium text-slate-700">
                    Họ và tên
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-emerald-100 bg-slate-50/60 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-emerald-500/0 transition focus:border-emerald-300 focus:bg-white focus:ring-2 focus:ring-emerald-200"
                    placeholder="Nhập họ và tên của bạn"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-[0.8rem] font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-emerald-100 bg-slate-50/60 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-emerald-500/0 transition focus:border-emerald-300 focus:bg-white focus:ring-2 focus:ring-emerald-200"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="subject" className="text-[0.8rem] font-medium text-slate-700">
                    Tiêu đề
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    className="w-full rounded-xl border border-emerald-100 bg-slate-50/60 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-emerald-500/0 transition focus:border-emerald-300 focus:bg-white focus:ring-2 focus:ring-emerald-200"
                    placeholder="Ví dụ: Hợp tác giảng dạy / Mời tham gia dự án"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="message" className="text-[0.8rem] font-medium text-slate-700">
                    Nội dung tin nhắn
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full rounded-xl border border-emerald-100 bg-slate-50/60 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-emerald-500/0 transition focus:border-emerald-300 focus:bg-white focus:ring-2 focus:ring-emerald-200"
                    placeholder="Giới thiệu ngắn gọn về bạn và nội dung trao đổi mong muốn..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-200 transition hover:shadow-lg hover:brightness-105"
                >
                  Gửi tin nhắn
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="mt-16 border-t border-emerald-100 pt-6 pb-4 text-center text-[0.7rem] text-slate-500">
          <p>
            © {new Date().getFullYear()} Lý Ngọc Phương Thi. Thiết kế nội dung & giao diện bởi chính chủ, lấy cảm hứng từ hành trình Hóa dược và Giáo dục.
          </p>
        </footer>
      </main>
    </div>
  );
}
