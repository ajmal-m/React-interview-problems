import { useState } from "react"

export const useCustomHook = () => {
    const [value, setValue] = useState(true);
    return [value, setValue]
}