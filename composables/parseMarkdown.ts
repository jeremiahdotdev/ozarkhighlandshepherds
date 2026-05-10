// Function to parse the markdown content
export const parseMarkdown = (lines: string[]): string => {
  if (lines) return lines.map(line => {
    // Convert headings
    line = line.replace(/^###### (.+)/gm, '<strong>$1</strong>');
    line = line.replace(/^##### (.+)/gm, '<strong>$1</strong>');
    line = line.replace(/^#### (.+)/gm, '<strong>$1</strong>');
    line = line.replace(/^### (.+)/gm, '<strong>$1</strong>');
    line = line.replace(/^## (.+)/gm, '<strong class="block text-2xl leading-tight mb-2">$1</strong>');
    line = line.replace(/^# (.+)/gm, '<strong class="block text-4xl leading-tight mb-4">$1</strong>');

    // Convert bold and italics
    line = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'); // bold
    line = line.replace(/\*(.+?)\*/g, '<em>$1</em>'); // italics

    // Convert links
    line = line.replace(/\[(.+?)\]\((.+?)\)/g, '<a class="underline" href="$2">$1</a>'); // links

    // Replace newlines with <br> tags for non-heading lines
    line = line.replace(/\n/g, '<br>');
    return `<p>${line}</p>`; // Wrap other lines in <p> tags
  }).join(''); // Combine all paragraphs into a single string
  else return ""
};
