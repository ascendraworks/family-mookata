"use client";

import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";

interface BranchLink {
  name: string;
  href: string;
}

interface SocialLinksModalProps {
  isOpen: boolean;
  onClose: () => void;
  platformName: string;
  branchLinks: BranchLink[];
  platformIcon?: React.ElementType | string; // Can be a component or an SVG path
  isPlatformIconSvg?: boolean; // To differentiate
}

const SocialLinksModal: React.FC<SocialLinksModalProps> = ({
  isOpen,
  onClose,
  platformName,
  branchLinks,
  platformIcon: IconProp, // Renamed to avoid conflict if it's a string
  isPlatformIconSvg
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose} // Close on overlay click
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-[#FFF7ED] text-[#333333] p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-md relative border-2 border-orange-300"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-orange-600 transition-colors p-1 rounded-full hover:bg-orange-100"
              aria-label="Close social media links"
            >
              <X size={24} />
            </button>

            <div className="flex items-center mb-6">
              {IconProp && (
                isPlatformIconSvg && typeof IconProp === 'string' ? (
                  <img src={IconProp} alt={platformName} className="h-8 w-8 mr-3 filter brightness-0 saturate-100 invert-[50%] sepia-[92%] hue-rotate-[350deg] contrast-[100%]" />
                ) : (
                  typeof IconProp !== 'string' && <IconProp size={32} className="text-[#FF8C00] mr-3" />
                )
              )}
              <h2 className="text-2xl md:text-3xl font-bold text-[#FF8C00]">
                {platformName} Links
              </h2>
            </div>

            <div className="space-y-4">
              {branchLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-white hover:bg-orange-50 rounded-lg shadow-sm border border-orange-200 transition-all duration-200 ease-in-out group hover:shadow-md"
                >
                  <span className="font-semibold text-gray-700 group-hover:text-orange-700">
                    {link.name} Branch
                  </span>
                  <ExternalLink size={20} className="text-orange-500 group-hover:text-orange-600 transition-colors" />
                </Link>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-6 text-center">
              Clicking a link will open it in a new tab.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialLinksModal;