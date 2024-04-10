import { IconBrandCSharp, IconBrandCpp, IconBrandGolang, IconBrandJavascript, IconBrandPhp, IconBrandPython, IconBrandSwift } from "@tabler/icons-react";

export type Language = (typeof languages)[number];

const languages = [
  {
    name: "Python",
    description: "A general-purpose, interpreted language known for its readability and beginner-friendliness.",
    icon: IconBrandPython
  },
  {
    name: "JavaScript",
    description: "A high-level, interpreted language essential for web development and increasingly used for server-side programming.",
    icon: IconBrandJavascript
  },
  {
    name: "C#",
    description: "A general-purpose, object-oriented language popular for enterprise applications and Android development.",
    icon: IconBrandCSharp
  },
  {
    name: "C++",
    description: "A powerful, compiled language offering high performance and memory management, used for system programming and game development.",
    icon: IconBrandCpp
  },
  {
    name: "Php",
    description: "A foundational language for system programming, providing low-level control and hardware interaction.",
    icon: IconBrandPhp
  },
  {
    name: "Go",
    description: "A modern, compiled language by Google, known for its simplicity, concurrency features, and growing popularity.",
    icon: IconBrandGolang
  },
  {
    name: `Swift`,
    description: "A modern, object-oriented language developed by Apple for iOS, iPadOS, macOS, watchOS, and other Apple platforms.",
    icon: IconBrandSwift
  },
] as const;

export default languages;
