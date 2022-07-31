/*
  Hacky way to get hover states working properly on Tailwind 3.0 and string interpolation. Not the best, but it works. :)
*/
export default function TailwindCssConfig() {
  return (
    <span className="hidden hover:bg-red-400 hover:bg-red-500 hover:bg-red-600 hover:bg-rose-400 hover:bg-rose-500 hover:bg-rose-600 hover:bg-amber-400 hover:bg-amber-500 hover:bg-amber-600 hover:bg-emerald-400 hover:bg-emerald-500 hover:bg-emerald-600 hover:bg-teal-400 hover:bg-teal-500 hover:bg-teal-600 hover:bg-blue-400 hover:bg-blue-500 hover:bg-blue-600 hover:bg-violet-400 hover:bg-violet-500 hover:bg-violet-600"></span>
  )
}