"use client";

import * as Icons from "@/app/icons";

export default function Icon({ icon }: { icon: string }) {
  return <>{Icons[icon]}</>;
}
