/**
 * Smooth scroll to a section with proper header offset
 */
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const header = document.querySelector('header');
  const headerHeight = header?.clientHeight || 0;
  const elementPosition = element.offsetTop - headerHeight - 24; // 24px buffer

  window.scrollTo({
    top: elementPosition,
    behavior: 'smooth'
  });
};

/**
 * Open external URL with security best practices
 */
export const openExternalLink = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};
