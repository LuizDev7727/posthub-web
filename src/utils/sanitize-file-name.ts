export function sanitizeFileName(videoTitle: string) {
  if (typeof videoTitle !== "string") {
    return "";
  }

  return (
    videoTitle
      // Remove caracteres de controle invisíveis (0–31)
      .replace(/[\x00-\x1F\x7F]/g, "")
      // Remove barras, backslashes, pipes, etc.
      .replace(/[/\\:*?"<>|]/g, " ")
      // Remove múltiplos espaços
      .replace(/\s+/g, " ")
      // Trim final
      .trim()
  );
}
