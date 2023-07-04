'use client'
import exp from "constants"
import { useRouter } from "next/navigation"

export default function RefreshBtn() {
    const router = useRouter()
    return (
      <button
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          router.refresh()
        }}
      >
        Refresh current useRouter
      </button>
    )
}