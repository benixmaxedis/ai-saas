export const MAX_FREE_COUNTS = 5;

import {
  ArrowRight,
  ImageIcon,
  Music,
  VideoIcon,
  MessageSquare,
  Code,
} from 'lucide-react';

export const tools = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    href: '/conversation',
  },
  {
    label: 'Music Generation',
    icon: Music,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    href: '/music',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    bgColor: 'bg-pink-700/10',
    color: 'text-pink-700',
    href: '/image',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    bgColor: 'bg-orange-700/10',
    color: 'text-orange-700',
    href: '/video',
  },
  {
    label: 'Code Generation',
    icon: Code,
    bgColor: 'bg-green-700/10',
    color: 'text-green-700',
    href: '/code',
  },
];
