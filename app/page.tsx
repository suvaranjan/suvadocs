"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import bookData from "../data/books.json";
import { heroTextEn, heroTextOd } from "../data/hero-text";
import {
  MoonIcon,
  SunIcon,
  ArrowTopRightIcon,
  InfoCircledIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";
import styles from "../styles/Home.module.css"; // Ensure correct path to CSS module
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLanguageChange = (lang: string) => {
    if (lang === "en" || lang === "od") {
      setLanguage(lang as "en" | "od");
      setDropdownOpen(false);
    } else {
      console.error("Invalid language type:", lang);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <nav className="flex items-center justify-between py-4">
        <div className="text-md font-semibold">SuvaDocs</div>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <button
              className="flex items-center space-x-2"
              onClick={toggleDropdown}
            >
              <GlobeIcon style={{ width: 19, height: 19 }} />
              <span className="text-sm">{language === "en" ? "En" : "Od"}</span>
            </button>
            {dropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded shadow-lg"
              >
                <button
                  className="block w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() => handleLanguageChange("en")}
                >
                  English
                </button>
                <button
                  className="block w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() => handleLanguageChange("od")}
                >
                  ଓଡ଼ିଆ
                </button>
              </div>
            )}
          </div>
          <Link
            href="/about"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <InfoCircledIcon style={{ width: 20, height: 20 }} />
          </Link>
          {resolvedTheme === "light" ? (
            <SunIcon
              className="cursor-pointer"
              onClick={toggleTheme}
              style={{ width: 18, height: 18 }}
            />
          ) : (
            <MoonIcon
              className="cursor-pointer"
              onClick={toggleTheme}
              style={{ width: 18, height: 18 }}
            />
          )}
        </div>
      </nav>
      <header className="my-10 text-center">
        <h1 className="text-base font-medium mb-4">
          {language === "en" ? heroTextEn.header : heroTextOd.header}
        </h1>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          {language === "en" ? heroTextEn.description : heroTextOd.description}
        </p>
      </header>
      <main>
        <h2 className="text-lg font-medium mb-1">Books</h2>
        <p className="text-gray-600 text-xs mb-6 dark:text-gray-400 ">
          2 Books Added.
        </p>
        <ul className="space-y-6">
          {bookData.map((book, index) => (
            <li key={index} className={styles.bookItem}>
              <div className={styles.bookTitleContainer}>
                <Link
                  href={language === "en" ? book.englishUrl : book.odiaUrl}
                  className={styles.bookTitleLink}
                >
                  <h3 className={styles.bookTitle}>
                    {" "}
                    {language === "en" ? book.titleEn : book.titleOd}
                  </h3>
                </Link>
                <ArrowTopRightIcon className={styles.arrowIcon} />
              </div>
              <p className="text-gray-600 text-sm mt-2 dark:text-gray-400 ">
                {language === "en" ? book.descriptionEn : book.descriptionOd}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
