import { useState, useEffect } from "react";
import cx from "classnames";

interface Props {
  className?: string;
  selectedIcons: string[];
  variant: string;
}

export default function CopyButton({
  className,
  selectedIcons,
  variant,
}: Props): JSX.Element {
  const [tooltip, setTooltip] = useState({ toggle: false, text: "" });
  const isDisabled = selectedIcons.length > 1;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (tooltip.toggle) {
      timer = setTimeout(() => setTooltip({ toggle: false, text: "" }), 1000);
    }
    return () => clearTimeout(timer);
  }, [tooltip]);

  const handleCopy = async () => {
    if (selectedIcons.length === 1) {
      const iconName = selectedIcons[0]!.replace("Icon", "").toUpperCase();

      const response = await fetch(
        `/api/get-svgs?name=${encodeURIComponent(iconName)}&variant=${encodeURIComponent(variant)}`,
      );
      const svgData = await response.text();
      try {
        await navigator.clipboard.writeText(svgData);
        setTooltip({ toggle: true, text: "copied!" });
      } catch (err) {
        setTooltip({ toggle: true, text: "Failed to copy" });
      }
    }
  };

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        onClick={handleCopy}
        className={cx(
          className,
          isDisabled
            ? "pointer-events-none text-opacity-20"
            : "text-opacity-60 hover:bg-gray-lightest hover:text-opacity-100",
          "relative flex gap-2 p-4 text-white duration-150",
        )}
        disabled={isDisabled}
      >
        copy svg
      </button>

      <div
        className={cx(
          tooltip.toggle
            ? "-translate-y-8 opacity-100"
            : "translate-y-0 opacity-0",
          "absolute bottom-8 left-1/2 z-20 -translate-x-1/2 rounded-md border border-gray-lightest bg-gray-darkest px-4 py-2 text-xs transition-all duration-150",
        )}
      >
        {tooltip.text}
      </div>
    </div>
  );
}
