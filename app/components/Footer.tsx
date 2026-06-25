// components/Footer.tsx
import { GITHUB_URL } from "../constants/profile";
import { GitHub } from "./ui/Icons";

const COPYRIGHT = "© 2026 Rui";

export default function Footer() {
  return (
    <footer className="px-6 py-16 border-t border-primary/10 bg-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <p className="label">{COPYRIGHT}</p>
        
         <a href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary/40 hover:text-primary transition-colors"
        >
          <GitHub />
        </a>
      </div>
    </footer>
  );
}