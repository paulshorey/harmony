import { withBox } from '@ps/ui/components/content/Box';

export const SvgSparkle = withBox({
  as: 'svg',
  ss: `position:absolute;display:inline-block;width:0;height:0;`,
});

export const BulletNumber = withBox({
  as: 'span',
  ss: `
    background: var(--color-text);
    color: var(--color-bg);
    border-radius: 50%;
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 800;
    height: 0.85rem;
    width: 0.85rem;
    line-height: 0.85rem;
    text-align: center;
    padding:0;
    vertical-align: 1px;
    opacity: 0.85;
  `,
});
