import { useColorModeValue } from "@chakra-ui/react";

export function useC(light: string, dark: string): string {
    const color = useColorModeValue(light, dark);
    return color;
}