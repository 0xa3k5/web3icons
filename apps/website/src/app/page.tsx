"use client";
import React, { useState } from "react";
import * as Icons from "@token-icons/react";

export default function Home() {
  const [variant, setVariant] = useState<"mono" | "branded">("mono");

  return (
    <main className="flex flex-col gap-16 items-center h-screen">
      <div className="container flex flex-col py-16 gap-16">
        <div className="flex justify-between items-center w-full">
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
              <div
                key={iconName}
                className="flex p-12 gap-4 flex-col items-center border border-gray-700 justify-center hover:bg-white/10 duration-150"
              >
                <IconComponent
                  key={iconName}
                  size={48}
                  className="rounded-ful"
                  variant={variant}
                />
                <span className="font-mono">
                  {iconName.replace("Icon", "")}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
