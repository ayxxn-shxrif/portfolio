import React, { useContext } from "react";

import { DarkModeContext } from "../../contexts/DarkModeContext";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneLight,
  oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import { AnimatePresence, motion } from "framer-motion";
import BezierEasing from "bezier-easing";

import "./blog-post-markdown.scss";

const Markdown = ({ markdown }) => {
  const { theme } = useContext(DarkModeContext);
  const ease = BezierEasing(0.25, 0.1, 0.25, 1.0);

  return (
    <AnimatePresence initial={false}>
      <ReactMarkdown
        className="blog-post-markdown"
        remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <>
                <motion.div
                  key="light"
                  className="codeElementLight"
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ ease: ease, duration: 0.5, delay: 0.16 }}
                >
                  {theme === "light" && (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, "")}
                      style={oneLight}
                      language={match[1]}
                      PreTag="aside"
                      {...props}
                    />
                  )}
                </motion.div>
                <motion.div
                  key="dark"
                  className="codeElementDark"
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ ease: ease, duration: 0.5, delay: 0.16 }}
                >
                  {theme === "dark" && (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, "")}
                      style={oneDark}
                      language={match[1]}
                      PreTag="aside"
                      {...props}
                    />
                  )}
                </motion.div>
              </>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </AnimatePresence>
  );
};

export default Markdown;
