import * as Icons from "@/app/icons";
import { ReactElement } from "react";

export default function Icon({ icon }: { icon: string }): ReactElement {
  return Icons[icon];
}
