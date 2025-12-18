import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

interface SubMenuItem {
  label: string;
  submenu?: SubMenuItem[];
}

interface MenuItem {
  label: string;
  href?: string;
  submenu?: SubMenuItem[];
}

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeSubSubmenu, setActiveSubSubmenu] = useState<string | null>(null);
  const [activeSubSubSubmenu, setActiveSubSubSubmenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState<string | null>(null);
  const [mobileActiveSubSubmenu, setMobileActiveSubSubmenu] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const menuItems: MenuItem[] = [
    { label: "Home", href: "/" },
    {
      label: "Service",
      submenu: [
        {
          label: "Server",
          submenu: [
            { label: "Linux" },
            { label: "Windows" },
          ],
        },
        {
          label: "Automation",
          submenu: [
            { label: "Batch Scripting" },
            { label: "Power Shell" },
            { label: "Bash" },
            {
              label: "Cloud automation",
              submenu: [
                { label: "Cloud Formation" },
                { label: "Terraform" },
              ],
            },
          ],
        },
        {
          label: "ADs-on",
          submenu: [
           {label:"Website Development",
            submenu:[
               { label: "MERN Stack" },
            { label: ".Net"},
            { label: "PHP" },
            ]
           },
           {label: " App Development",
            submenu:[
              {label:"React Native"},
              {label:"Flutter"}
            ]
           }
          ],
        },
        { label: "SOP" },
      ],
    },
    // { label: "Expertise", href: "/expertise" },
    {
      label: "Support",
      submenu: [
        {
          label: "Server",
          submenu: [
            {
              label: "Window Server Setup",
            },
            {
              label: "Linux Server Setup"
            }
          ],
        },
       { label:"Development",
        submenu:[
          {label:"SEO"},
          {label:"Web Development"},
          {label:"App Development"}
        ]
       },{
        label:"Cloud Setup",
        submenu:[
          {label:"AWS"},
          {label:"Azure"}
        ]
       },
       {label:"Maintenance"}
      ],
    },
    { label: "Jobs", href: "/jobs" },
    { label: "Contact Us", href: "/contact" },
  ];

  const handleMenuEnter = (label: string, hasSubmenu: boolean) => {
    if (hasSubmenu) {
      setActiveMenu(label);
    } else {
      setActiveMenu(null);
    }
    setActiveSubmenu(null);
    setActiveSubSubmenu(null);
    setActiveSubSubSubmenu(null);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
    setActiveSubmenu(null);
    setActiveSubSubmenu(null);
    setActiveSubSubSubmenu(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setMobileActiveMenu(null);
      setMobileActiveSubmenu(null);
      setMobileActiveSubSubmenu(null);
    }
  };

  const toggleMobileSubmenu = (label: string, level: number = 1) => {
    if (level === 1) {
      setMobileActiveMenu(mobileActiveMenu === label ? null : label);
      setMobileActiveSubmenu(null);
      setMobileActiveSubSubmenu(null);
    } else if (level === 2) {
      setMobileActiveSubmenu(mobileActiveSubmenu === label ? null : label);
      setMobileActiveSubSubmenu(null);
    } else if (level === 3) {
      setMobileActiveSubSubmenu(mobileActiveSubSubmenu === label ? null : label);
    }
  };

  const renderSubmenuItems = (
    items: SubMenuItem[],
    level: number = 1
  ) => {
    return items.map((item, index) => {
      const hasSubmenu = item.submenu && item.submenu.length > 0;
      const isActiveSubmenu =
        level === 1
          ? activeSubmenu === item.label
          : level === 2
          ? activeSubSubmenu === item.label
          : activeSubSubSubmenu === item.label;

      return (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => {
            if (level === 1) setActiveSubmenu(item.label);
            else if (level === 2) setActiveSubSubmenu(item.label);
            else if (level === 3) setActiveSubSubSubmenu(item.label);
          }}
          onMouseLeave={() => {
            if (level === 1) setActiveSubmenu(null);
            else if (level === 2) setActiveSubSubmenu(null);
            else if (level === 3) setActiveSubSubmenu(null);
          }}
        >
          <div className="dropdown-item group">
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              {item.label}
            </span>
            {hasSubmenu && (
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
            )}
          </div>
          {hasSubmenu && isActiveSubmenu && (
            <div className="absolute left-full top-0 min-w-[200px] bg-card shadow-mega border border-border rounded-md animate-fade-in">
              {renderSubmenuItems(item.submenu!, level + 1)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-nav shadow-sm transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      onMouseLeave={handleMenuLeave}
    >
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-1">
              <div className="w-15 h-15 rounded-lg flex items-center justify-center">
                {/* <span className="text-primary-foreground font-bold text-xl">P</span>
                 */}
                 <img src="../../public/tlogo.png" className="h-15 w-20"/>
              </div>
              <span className="text-xl font-bold text-primary tracking-tight ">
                True Infra<span className="text-accent"></span>Labs
              </span>
            </a>
          </div>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMenuEnter(item.label, !!item.submenu)}
              >
                {item.href ? (
                  <a href={item.href} className="nav-link flex items-center gap-1">
                    {item.label}
                  </a>
                ) : (
                  <button className="nav-link flex items-center gap-1">
                    {item.label}
                    {item.submenu && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeMenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a href="/contact">
              <button className="px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg shadow-primary/20">
                Get Started
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="container mx-auto px-6 py-4 space-y-2">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-border last:border-0 pb-2 last:pb-0">
                {item.href ? (
                  <a
                    href={item.href}
                    className="block py-3 px-4 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <>
                    <button
                      className="w-full flex items-center justify-between py-3 px-4 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors font-medium"
                      onClick={() => toggleMobileSubmenu(item.label, 1)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          mobileActiveMenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileActiveMenu === item.label && item.submenu && (
                      <div className="ml-4 mt-2 space-y-1 animate-fade-in">
                        {item.submenu.map((subItem, subIndex) => (
                          <div key={subIndex}>
                            {subItem.submenu ? (
                              <>
                                <button
                                  className="w-full flex items-center justify-between py-2 px-3 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors text-sm"
                                  onClick={() => toggleMobileSubmenu(subItem.label, 2)}
                                >
                                  <span>{subItem.label}</span>
                                  <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-200 ${
                                      mobileActiveSubmenu === subItem.label ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>
                                {mobileActiveSubmenu === subItem.label && (
                                  <div className="ml-4 mt-1 space-y-1 animate-fade-in">
                                    {subItem.submenu.map((subSubItem, subSubIndex) => (
                                      <div key={subSubIndex}>
                                        {subSubItem.submenu ? (
                                          <>
                                            <button
                                              className="w-full flex items-center justify-between py-2 px-3 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors text-sm"
                                              onClick={() => toggleMobileSubmenu(subSubItem.label, 3)}
                                            >
                                              <span>{subSubItem.label}</span>
                                              <ChevronDown
                                                className={`w-4 h-4 transition-transform duration-200 ${
                                                  mobileActiveSubSubmenu === subSubItem.label ? "rotate-180" : ""
                                                }`}
                                              />
                                            </button>
                                            {mobileActiveSubSubmenu === subSubItem.label && (
                                              <div className="ml-4 mt-1 space-y-1 animate-fade-in">
                                                {subSubItem.submenu.map((deepItem, deepIndex) => (
                                                  <button
                                                    key={deepIndex}
                                                    className="w-full text-left py-2 px-3 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors text-sm"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                  >
                                                    {deepItem.label}
                                                  </button>
                                                ))}
                                              </div>
                                            )}
                                          </>
                                        ) : (
                                          <button
                                            className="w-full text-left py-2 px-3 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors text-sm"
                                            onClick={() => setMobileMenuOpen(false)}
                                          >
                                            {subSubItem.label}
                                          </button>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </>
                            ) : (
                              <button
                                className="w-full text-left py-2 px-3 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors text-sm"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.label}
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="pt-4">
              <a href="/contact" className="block">
                <button className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg shadow-primary/20">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Mega Dropdown */}
      {menuItems.map((item, index) => {
        if (!item.submenu) return null;
        const isActive = activeMenu === item.label;

        return (
          <div
            key={index}
            className={`mega-dropdown ${isActive ? "active" : ""}`}
            onMouseEnter={() => handleMenuEnter(item.label, true)}
          >
            <div className="container mx-auto px-6 py-8">
              <div className="grid grid-cols-4 gap-8">
                {/* Main submenu column */}
                <div className="col-span-1">
                  <h3 className="dropdown-title">{item.label}</h3>
                  <div className="space-y-1">
                    {item.submenu.map((subItem, subIndex) => {
                      const hasSubmenu = subItem.submenu && subItem.submenu.length > 0;
                      const isActiveSubItem = activeSubmenu === subItem.label;

                      return (
                        <div
                          key={subIndex}
                          className="relative"
                          onMouseEnter={() => setActiveSubmenu(subItem.label)}
                        >
                          <div className="dropdown-item group rounded-md">
                            <span className="group-hover:translate-x-1 transition-transform duration-200">
                              {subItem.label}
                            </span>
                            {hasSubmenu && (
                              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Nested submenu columns */}
                {item.submenu.map((subItem, subIndex) => {
                  if (!subItem.submenu || activeSubmenu !== subItem.label) return null;

                  return (
                    <div key={subIndex} className="col-span-1 animate-fade-in">
                      <h3 className="dropdown-title">{subItem.label}</h3>
                      <div className="space-y-1">
                        {subItem.submenu.map((subSubItem, subSubIndex) => {
                          const hasDeepSubmenu = subSubItem.submenu && subSubItem.submenu.length > 0;
                          const isActiveDeepItem = activeSubSubmenu === subSubItem.label;

                          return (
                            <div
                              key={subSubIndex}
                              className="relative"
                              onMouseEnter={() => setActiveSubSubmenu(subSubItem.label)}
                            >
                              <div className="dropdown-item group rounded-md">
                                <span className="group-hover:translate-x-1 transition-transform duration-200">
                                  {subSubItem.label}
                                </span>
                                {hasDeepSubmenu && (
                                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}

                {/* Deep nested submenu columns */}
                {item.submenu.map((subItem) => {
                  if (!subItem.submenu || activeSubmenu !== subItem.label) return null;

                  return subItem.submenu.map((subSubItem, subSubIndex) => {
                    if (!subSubItem.submenu || activeSubSubmenu !== subSubItem.label) return null;

                    return (
                      <div key={subSubIndex} className="col-span-1 animate-fade-in">
                        <h3 className="dropdown-title">{subSubItem.label}</h3>
                        <div className="space-y-1">
                          {subSubItem.submenu.map((deepItem, deepIndex) => (
                            <div key={deepIndex} className="dropdown-item group rounded-md">
                              <span className="group-hover:translate-x-1 transition-transform duration-200">
                                {deepItem.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  });
                })}

                {/* Decorative/Info Column */}
                <div className="col-span-1 bg-secondary/50 rounded-xl p-6 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center">
                      <span className="text-primary-foreground text-xl">✨</span>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">
                      Need Help?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Our team is ready to assist you with any questions about our {item.label.toLowerCase()} offerings.
                    </p>
                    <a href="/contact" className="text-accent font-medium text-sm hover:underline inline-block">
                      Contact Support →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </nav>
  );
};

export default Navbar;
