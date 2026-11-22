import {defineTheme} from '@astryxdesign/core/theme';
import {neutralTheme} from '@astryxdesign/theme-neutral/built';

// Tema Fiz com Celular: neutro da Astryx com a marca do curso
// (roxo-noite #0C0820/#150E33 + coral #E5560A), sempre em modo escuro.
export const fccTheme = defineTheme({
  name: 'fcc',
  extends: neutralTheme,
  tokens: {
    '--color-accent': ['#E5560A', '#E5560A'],
    '--color-on-accent': ['#FFFFFF', '#FFFFFF'],
    '--color-background-body': ['#0C0820', '#0C0820'],
    '--color-background-surface': ['#150E33', '#150E33'],
    '--color-background-card': ['#150E33', '#150E33'],
    '--color-background-muted': ['#FFFFFF0D', '#FFFFFF0D'],
    '--color-text-primary': ['#EAF1F5', '#EAF1F5'],
    '--color-text-secondary': ['#A9BECB', '#A9BECB'],
    '--color-text-accent': ['#E5560A', '#E5560A'],
    '--color-border': ['#FFFFFF22', '#FFFFFF22'],
    '--color-border-emphasized': ['#FFFFFF40', '#FFFFFF40'],
  },
  components: {
    button: {
      base: {
        borderRadius: '14px',
        fontWeight: '700',
      },
    },
  },
});
