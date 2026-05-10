// Function to parse the markdown content
export const parseMarkdown = (lines: string[]): string => {
  if (lines) return lines.map(line => {
    // Convert headings
    line = line.replace(/^###### (.+)/gm, '<strong class="font-bold text-stone-900 dark:text-neutral-100">$1</strong>');
    line = line.replace(/^##### (.+)/gm, '<strong class="font-bold text-stone-900 dark:text-neutral-100">$1</strong>');
    line = line.replace(/^#### (.+)/gm, '<strong class="font-bold text-stone-900 dark:text-neutral-100">$1</strong>');
    line = line.replace(/^### (.+)/gm, '<strong class="font-bold text-stone-900 dark:text-neutral-100">$1</strong>');
    line = line.replace(/^## (.+)/gm, '<strong class="mb-2 block text-2xl font-bold leading-tight text-stone-900 dark:text-neutral-100">$1</strong>');
    line = line.replace(/^# (.+)/gm, '<strong class="mb-4 block text-4xl font-bold leading-tight text-stone-900 dark:text-neutral-100">$1</strong>');

    // Convert bold and italics
    line = line.replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-stone-900 dark:text-neutral-100">$1</strong>'); // bold
    line = line.replace(/\*(.+?)\*/g, '<em>$1</em>'); // italics

    // Convert links
    line = line.replace(/\[(.+?)\]\((.+?)\)/g, '<a class="font-semibold text-emerald-700 underline decoration-2 underline-offset-4 hover:text-emerald-800 dark:text-emerald-300 dark:hover:text-emerald-200" href="$2">$1</a>'); // links

    // Replace newlines with <br> tags for non-heading lines
    line = line.replace(/\n/g, '<br>');
    return `<p class="m-0">${line}</p>`; // Wrap other lines in <p> tags
  }).join(''); // Combine all paragraphs into a single string
  else return ""
};
