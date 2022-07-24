const $ = (selector) => {
  const all = document.querySelectorAll(selector)
  console.log(all.length);
  return all.length > 1 ? all : all[0] ?? null
}

export {
  $
}
