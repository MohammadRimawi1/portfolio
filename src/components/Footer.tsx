import { Link } from 'react-router-dom';
import { Github, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { contact, navLinks } from '@/data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-ink-700 mt-32">
      <div className="container-edge py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-600 font-display text-lg text-moss-400">
                R
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-200">
                Mohammad Rimawi
              </span>
            </Link>
            <p className="text-ink-300 text-sm leading-relaxed max-w-sm">
              Full-Stack Software Engineer building complete, end-to-end systems —
              from database schema to deployed container.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Pages</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="link-underline text-sm text-ink-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow mb-4">Get in touch</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-center gap-2.5 text-sm text-ink-200 hover:text-white"
                >
                  <Mail size={15} className="text-ink-400 group-hover:text-moss-400" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="group flex items-center gap-2.5 text-sm text-ink-200 hover:text-white"
                >
                  <Phone size={15} className="text-ink-400 group-hover:text-moss-400" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 text-sm text-ink-200 hover:text-white"
                >
                  <Github size={15} className="text-ink-400 group-hover:text-moss-400" />
                  {contact.github}
                  <ArrowUpRight size={13} className="text-ink-500 group-hover:text-moss-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-ink-700 pt-6">
          <p className="text-xs text-ink-400 font-mono">
            © {year} Mohammad Raed Hassan Rimawi. All rights reserved.
          </p>
          <p className="text-xs text-ink-400 font-mono">
            Ramallah, Palestine
          </p>
        </div>
      </div>
    </footer>
  );
}
