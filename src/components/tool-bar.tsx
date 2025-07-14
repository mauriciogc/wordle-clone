import Link from 'next/link';
import LocaleSwitcherSelect from '@/components/locale-switcher-select';
import { BookAlert, RefreshCcw, FolderGit2 } from 'lucide-react';

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
      <a
        href="https://github.com/mauriciogc/wordle-clone"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ico"
      >
        <FolderGit2 />
      </a>
    </div>
  );
}
