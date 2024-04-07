import Logo from '@components/Logo';
import config from '@config/config.json';
import { fetchBlogs } from '@lib/utils/fetchBlog';
import axios from 'axios';
import { ca } from 'date-fns/locale';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const Header = ({ categories }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [blogData, setBlogData] = useState(null);
  const [categoriesData, setCategoriesData] = useState(null);

  useEffect(() => {
    fetchBlogs().then((res) => {
      setCategoriesData(res.data);
    });
  }, []);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      setIsSubMenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setIsSubMenuOpen(false);
    }
  };

  const { logo } = config.site;

  const menuData = [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'Program',
      link: '#',
      subMenu: [
        {
          label: 'Service q',
          link: '/services/service11122',
        },
        {
          label: 'Service 2',
          link: '/services/service2',
        },
      ],
    },
    {
      label: 'Contact',
      link: '/contact',
    },
  ];

  return categoriesData ? (
    <header className="header">
      <nav className="navbar container block items-center justify-between md:flex">
        {/* Logo */}

        <div className="flex justify-between">
          <div className="order-0">
            <Logo src={logo} />
          </div>

          {/* Navbar toggler */}
          <button
            id="show-button"
            className="order-2 flex cursor-pointer items-center md:order-1 md:hidden"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? (
              <svg className="h-6 fill-current" viewBox="0 0 20 20">
                <title>Menu Open</title>
                <polygon
                  points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                  transform="rotate(45 10 10)"
                />
              </svg>
            ) : (
              <svg className="h-6 fill-current" viewBox="0 0 20 20">
                <title>Menu Close</title>
                <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
              </svg>
            )}
          </button>
        </div>
        {/* Menu */}
        <ul
          className={`order-3 md:order-1 md:flex md:space-x-6 ${
            navOpen ? 'block' : 'hidden md:block'
          }`}
        >
          {menuData.map((menu, i) => (
            <React.Fragment key={`menu-${i}`}>
              {menu.subMenu ? (
                <li className="relative" onMouseEnter={handleMouseEnter} onClick={toggleSubMenu}>
                  <div className="flex justify-center  px-6">
                    <span className="inline-flex items-center">
                      {menu.label}
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </div>
                  {isSubMenuOpen && (
                    <ul
                      onMouseLeave={handleMouseLeave}
                      className="nav-dropdown-list left-0 top-full block rounded  px-6   md:absolute md:bg-slate-50 md:shadow-lg "
                    >
                      {categoriesData.map((category, i) => {
                        return (
                          <li className="nav-dropdown-item md:py-2">
                            <Link
                              href={'/categories/' + category.attributes.slug}
                              legacyBehavior
                              className="flex justify-center"
                            >
                              <a className="nav-dropdown-link block text-center  text-sm hover:text-black">
                                {category.attributes.category_name}
                              </a>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ) : (
                <li className="flex justify-center px-6">
                  <Link href={menu.link} legacyBehavior>
                    <a className="text-center hover:text-gray-300">{menu.label}</a>
                  </Link>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>

        {/* Menu */}
      </nav>
    </header>
  ) : (
    <></>
  );
};

export default Header;
