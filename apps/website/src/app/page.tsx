"use client";
import React, { useState } from "react";
import * as Icons from "@token-icons/react";

export default function Home() {
  const [variant, setVariant] =
    useState<Icons.IconComponentProps["variant"]>("mono");
  const [selectedIcons, setSelectedIcons] = useState<string[]>([]);

  return (
    <main className="flex h-screen flex-col items-center gap-16">
      <div className="container flex flex-col gap-16 py-16">
        <div className="flex w-full items-center justify-between">
          <h1 className="font-mono text-4xl">token icons</h1>
          <button
            onClick={() => setVariant(variant === "mono" ? "branded" : "mono")}
            className="bg-gray-700 text-white font-mono text-lg px-4 py-2 rounded-full"
          >
            variant: {variant}
          </button>
        </div>
        <div className=" grid grid-cols-6 w-full">
          {Object.entries(Icons).map(([iconName, IconComponent]) => {
            return (
              <IconCard
                key={iconName}
                iconName={iconName}
                IconComponent={IconComponent}
                variant={variant}
                size={size}
                selectedIcons={selectedIcons}
                setSelectedIcons={setSelectedIcons}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
