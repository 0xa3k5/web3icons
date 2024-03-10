"use client";
import React, { useEffect, useState } from "react";
import * as Icons from "@token-icons/react";
import { ControlBar, IconCard, ActionBar } from "../components";
import { ITokenMetadata, tokens } from "@token-icons/core";

export default function Home() {
  const [variant, setVariant] =
    useState<Icons.IconComponentProps["variant"]>("mono");
  const [size, setSize] = useState(48);
  const [selectedIcons, setSelectedIcons] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [tokenMetadata, setTokenMetadata] = useState<ITokenMetadata[]>([]);
  const [filteredIcons, setFilteredIcons] = useState<
    [
      string,
      React.ForwardRefExoticComponent<
        Icons.IconComponentProps & React.RefAttributes<SVGSVGElement>
      >,
    ][]
  >([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/get-token-metadata");
      const tokens = await response.json();
      setTokenMetadata(tokens);
    })();
  }, []);

  useEffect(() => {
    console.log(searchTerm);
    const filteredMetadata = searchTerm
      ? tokenMetadata.filter(
          (token) =>
            token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            token.symbol.toLowerCase().includes(searchTerm.toLowerCase()),
        )
      : tokenMetadata;

    setFilteredIcons(
      Object.entries(Icons).filter(([iconName]) =>
        filteredMetadata.some((token) =>
          iconName.toLowerCase().includes(token.id.toLowerCase()),
        ),
      ),
    );
  }, [searchTerm]);

  const icons =
    filteredIcons.length > 0 ? filteredIcons : Object.entries(Icons);

  return (
    <main className="flex h-screen flex-col items-center gap-16">
      <div className="container flex flex-col gap-16 py-16">
        <div className="flex w-full items-center justify-between">
          <h1 className="font-mono text-4xl">token icons</h1>
        </div>
        <ControlBar
          variant={variant}
          setVariant={setVariant}
          size={size}
          setSize={setSize}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <div className="grid w-full grid-cols-6">
          {icons.map(([iconName, IconComponent]) => {
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
        {selectedIcons.length > 0 && (
          <div className="flex w-full justify-center">
            <ActionBar
              selectedIcons={selectedIcons}
              setSelectedIcons={setSelectedIcons}
              variant={variant}
            />
          </div>
        )}
      </div>
    </main>
  );
}
