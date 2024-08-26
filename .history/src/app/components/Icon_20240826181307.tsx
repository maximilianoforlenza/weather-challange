import * as Icons from "@/app/icons";
import { Icon as IconType } from "@/app/lib/definitions";

export default function Icon({ icon }: { icon: IconType }) {
  const IconComponent = Icons[icon]; 
  return IconComponent ? <IconComponent /> : null; 
}