import cx from "classnames";
import { IconComponentProps } from "@token-icons/react";
import DownloadButton from "./DownloadButton";

interface Props {
  className?: string;
  selectedIcons: string[];
  variant: IconComponentProps["variant"];
  setSelectedIcons: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function ActionBar({
  className,
  selectedIcons,
  setSelectedIcons,
  variant = "mono",
}: Props): JSX.Element {
  const handleClearAll = () => {
    setSelectedIcons([]);
  };

  return (
    <div
      className={cx(
        "bg-gray-dark fixed bottom-4 z-10 mx-auto flex justify-between rounded-lg border border-gray-lightest px-4 py-4",
        className,
      )}
    >
      <button
        type="button"
        onClick={handleClearAll}
        className="flex rounded-full px-4 py-2 font-mono text-sm text-white"
      >
        clear all
      </button>
      <DownloadButton selectedIcons={selectedIcons} variant={variant} />
    </div>
  );
}
