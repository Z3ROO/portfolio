import LoadingSpinner from "@/components/LoadingSpinner"

export default function Loading() {
  return  (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <LoadingSpinner />
      <div className="text-2xl p-4 text-red-200">Loading...</div>
    </div>
  )
}