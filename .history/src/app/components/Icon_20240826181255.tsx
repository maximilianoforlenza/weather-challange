import * as Icons from "@/app/icons";
import { Icon as IconType } from "@/app/lib/definitions";

export default function Icon({ icon }: { icon: IconType }) {
  const IconComponent = Icons[icon]; // Select the appropriate icon component
  return IconComponent ? <IconComponent /> : null; // Render the component or null if not found
}
