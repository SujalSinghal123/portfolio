/** Renders trusted, static markup bundled in this repo (never user input). */
export default function Html({ html, className }: { html: string; className?: string }) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
