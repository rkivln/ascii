export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  role: string;
  year: string;
  links: {
    github?: string;
    demo?: string;
  };
  asciiKey: "campus" | "digital" | "arduino";
}

export interface TerminalLine {
  text: string;
  type: "input" | "output" | "error" | "success" | "system";
  timestamp: string;
}
