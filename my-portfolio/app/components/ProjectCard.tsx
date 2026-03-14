"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectProps {
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly className?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  href, 
  className 
}: Readonly<ProjectProps>) {
  return (
    <Link href={href} className={className}>
      <motion.div
        whileHover={{ y: -10, scale: 1.02 }}
        whileTap={{ scale: 0.98 }} // Adds a nice "press" effect
        transition={{ type: "spring", stiffness: 300 }}
        className="h-full bg-(--accent-color) rounded-2xl shadow-lg p-6 flex flex-col justify-end cursor-pointer border border-transparent hover:border-(--secondary-text) transition-colors"
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-(--secondary-color) text-sm">
          {description}
        </p>
      </motion.div>
    </Link>
  );
}