import { useState } from "react";

function MenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="p-2 border border-white rounded-md"
    >
      ☰
    </button>
  );
}

export default function HeaderMobile({
  menuItems,
  }: {
    menuItems: { label: string; href: string }[];
  }) {

  const [open, setOpen] = useState(false);

  return (
    <header className="md:hidden fixed top-0 left-0 bg-[#212234] text-white px-4 py-4 w-full z-50">
      <div className="flex items-center justify-between">
        <a href="/" className="text-2xl font-bold">Agency</a>

        <MenuButton onClick={() => setOpen((current) => !current)} />
      </div>

      <nav className={`${open ? "block" : "hidden"} mt-4 flex flex-col gap-4`}>
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-white text-lg py-2"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
