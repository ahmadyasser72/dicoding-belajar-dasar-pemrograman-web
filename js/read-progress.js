window.addEventListener("scrollend", () => {
  /** @type {HTMLElement} */
  const progressBar = document.querySelector("#read-progress-bar");

  const { scrollTop, scrollHeight, clientHeight } = document.scrollingElement;
  const progress = 100 * (scrollTop / (scrollHeight - clientHeight));

  progressBar.style.transform = `translateX(-${100 - progress}%)`;
});
