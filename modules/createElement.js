export const createElement = (tag, className) => {
  const $tag = document.createElement(tag);
  $tag.classList.add(className);
  return $tag;
};
