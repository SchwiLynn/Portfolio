export const COLORS = {
  primary: {
    DEFAULT: '#4d6ad2',
    dark: '#4a5cd3',
    light: '#3d4ba1ff',
  },
  secondary: {
    DEFAULT: '#fcf3ee',
    dark: '#f7d305',
    light: '#e6d98eff',
  },
  background: {
    primary: '#020617',
    secondary: '#0f172a',
    tertiary: '#1e293b',
  },
  text: {
    primary: '#ffffff',
    secondary: '#cbd5e1',
    muted: '#94a3b8',
  },
};

export const ANIMATIONS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  },
  slideUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};