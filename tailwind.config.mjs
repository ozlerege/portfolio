/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'accent-primary': 'var(--accent-primary)',
        'accent-secondary': 'var(--accent-secondary)',
        'card-bg': 'var(--card-bg)',
        'card-border': 'var(--card-border)',
        'about-primary': 'var(--about-primary)',
        'about-secondary': 'var(--about-secondary)',
        'projects-primary': 'var(--projects-primary)',
        'projects-secondary': 'var(--projects-secondary)',
        'experience-primary': 'var(--experience-primary)',
        'experience-secondary': 'var(--experience-secondary)',
        'education-primary': 'var(--education-primary)',
        'education-secondary': 'var(--education-secondary)',
        'contact-primary': 'var(--contact-primary)',
        'contact-secondary': 'var(--contact-secondary)',
        'blog-primary': 'var(--blog-primary)',
        'blog-secondary': 'var(--blog-secondary)',
      },
      fontFamily: {
        'mono': ['var(--font-ibm-mono)', 'IBM Plex Mono', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'pulse-subtle': 'pulse 2s ease-in-out infinite',
      },
      boxShadow: {
        'professional': 'var(--shadow-md)',
        'professional-hover': 'var(--shadow-lg)',
        'professional-lg': 'var(--shadow-xl)',
      },
      borderRadius: {
        'professional': 'var(--border-radius)',
        'professional-lg': 'var(--border-radius-lg)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [
    typography,
  ],
};
