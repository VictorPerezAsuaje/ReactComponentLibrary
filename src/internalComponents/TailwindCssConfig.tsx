/*
  Hacky way to get hover states working properly on Tailwind 3.0 and string interpolation. Not the best, but it works. :)
*/
export default function TailwindCssConfig() {
  return (
    <span className="hidden hover:border-2 hover:bg-red-400 hover:bg-red-500 hover:bg-red-600 hover:bg-rose-400 hover:bg-rose-500 hover:bg-rose-600 hover:bg-amber-400 hover:bg-amber-500 hover:bg-amber-600 hover:bg-emerald-400 hover:bg-emerald-500 hover:bg-emerald-600 hover:bg-teal-400 hover:bg-teal-500 hover:bg-teal-600 hover:bg-blue-400 hover:bg-blue-500 hover:bg-blue-600 hover:bg-violet-400 hover:bg-violet-500 hover:bg-violet-600 top-0 right-0 left-0 bottom-0 -top-2 -right-2 -left-2 -bottom-2 -top-4 -right-4 -left-4 -bottom-4 "></span>
  )
}