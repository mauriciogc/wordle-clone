import Link from 'next/link';
import LocaleSwitcherSelect from '@/components/locale-switcher-select';
import { BookAlert, RefreshCcw } from 'lucide-react';

type ToolBarProps = {
  hasGuesses: boolean;
  onRestart: () => void;
};

export default function ToolBar({
  hasGuesses = false,
  onRestart,
}: ToolBarProps) {
  return (
    <div className="flex gap-3 w-full items-center justify-end">
      <Link href="/how-to-play" className="btn-ico">
        <BookAlert />
      </Link>

      {hasGuesses ? (
        <button className="btn-ico" onClick={onRestart}>
          <RefreshCcw />
        </button>
      ) : (
        <LocaleSwitcherSelect />
      )}
    </div>
  );
}
