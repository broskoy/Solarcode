function NotFound() {
  return (
    /* - flex-grow: Makes this wrapper fill all available space in <main>.
      - flex flex-col: Stacks the h2 and p tags vertically.
      - justify-center: Centers them vertically.
      - items-center: Centers them horizontally.
    */
    <div class="flex flex-col flex-grow justify-center items-center">
      {/* .title (Replaced vh margin with standard Tailwind styles) */}
      <h2 class="text-4xl font-bold text-gray-100">Not Found [404]</h2>

      {/* .text (Replaced vh margin with a simple margin-top) */}
      <p class="mt-4 text-lg text-gray-400">This page does not exist</p>
    </div>
  );
}

export default NotFound;
