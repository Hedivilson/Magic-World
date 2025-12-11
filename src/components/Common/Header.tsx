import HeaderMobile from "./HeaderMobile";

function getMenuItems() {
  return [
    { label: "About", href: "/" },
    { label: "Services", href: "/" },
    { label: "Pricing", href: "/" },
    { label: "Blog", href: "/" },
  ];
}

function MenuItems() { 
    const items = getMenuItems(); 
    
    return (
        <> 
        {items.map((item) => ( 
            <a key={item.href} href={item.href} > 
                {item.label} 
            </a> ))} 
        </> );
     }

export default function Header() {
  const menuItems = getMenuItems();

  return (
    <>
    <header className="w-full fixed top-0 hidden md:flex left-0"> 
        <div className="mx-auto px-5 py-5 flex items-center justify-between"> 
            <a href="/">
              <img src="/assets/agency.svg" alt="" className="text-2xl font-bold mr-36"/>
            </a>
            <nav className="justify-between space-x-36"> 
                <MenuItems /> 
            </nav> 
        </div>
    </header>

      <HeaderMobile menuItems={menuItems} />
    </>
  );
}