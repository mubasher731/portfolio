const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-ink-900/40">
      <div className="container-x py-16">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          {/* Name */}
          <h3 className="font-display text-2xl font-extrabold italic tracking-tight text-white sm:text-3xl">
            Mubasher Manzoor
          </h3>

          {/* Role */}
          <p className="text-[14px] text-slate-400 sm:text-[15px]">
            Mobile Application Developer &amp; AI & ML Enthusiast
          </p>

          {/* Copyright */}
          <p className="mt-2 text-[13px] text-slate-500">
            © {new Date().getFullYear()} Mubasher Manzoor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;