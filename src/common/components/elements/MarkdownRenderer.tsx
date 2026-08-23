import { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  children: string;
}

// ponytail: renders markdown + GFM only, no JSX-in-markdown despite the .mdx
// extension. Swap in next-mdx-remote if a post ever needs real components.
// Code blocks are plain styled <pre>; add react-syntax-highlighter if
// per-language highlighting becomes worth ~1MB of bundle.
const MarkdownRenderer = ({ children }: MarkdownRendererProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: (props) => (
          <a
            className='cursor-pointer text-teal-500 hover:text-teal-400 hover:underline'
            target='_blank'
            rel='noopener noreferrer'
            {...props}
          />
        ),
        h2: (props) => (
          <h2
            className='pt-4 text-xl font-medium font-sora dark:text-neutral-200'
            {...props}
          />
        ),
        h3: (props) => (
          <h3
            className='pt-4 text-[18px] font-medium leading-snug font-sora dark:text-neutral-200'
            {...props}
          />
        ),
        ul: ({ ordered, ...props }) => (
          <ul className='list-disc space-y-3 pb-2 pl-8' {...props} />
        ),
        ol: ({ ordered, ...props }) => (
          <ol className='list-decimal space-y-3 pb-2 pl-8' {...props} />
        ),
        blockquote: (props) => (
          <blockquote
            className='rounded-br-2xl border-l-[5px] border-l-cyan-500 bg-neutral-200 py-3 pl-6 text-lg font-medium text-cyan-800 dark:bg-neutral-800 dark:text-cyan-200'
            {...props}
          />
        ),
        pre: (props) => (
          <pre
            className='overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-100 p-4 font-code text-sm leading-relaxed dark:border-neutral-800 dark:bg-neutral-900'
            {...props}
          />
        ),
        code: ({ inline, className, children: code, ...props }) =>
          inline ? (
            <code
              className='rounded bg-neutral-200 px-1.5 py-0.5 font-code text-[13px] text-teal-700 dark:bg-neutral-800 dark:text-teal-300'
              {...props}
            >
              {code}
            </code>
          ) : (
            <code className='font-code' {...props}>
              {code}
            </code>
          ),
        img: ({ alt, src }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img alt={alt ?? ''} src={src} className='rounded-xl' />
        ),
        table: ({ children }: { children?: ReactNode }) => (
          <div className='overflow-x-auto'>
            <table className='w-full'>{children}</table>
          </div>
        ),
        th: (props) => (
          <th className='border px-3 py-1 text-left dark:border-neutral-600'>
            {props.children}
          </th>
        ),
        td: (props) => (
          <td className='border px-3 py-1 dark:border-neutral-600'>
            {props.children}
          </td>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
