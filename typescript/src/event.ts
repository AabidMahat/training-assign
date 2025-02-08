const btn = document.getElementById("btn")!;
const inputAction = document.getElementById("action");

const form = document.getElementById("form");
const handleEvent = (): void => {
  alert("dfdf");
};

//* btn.addEventListener("click", handleEvent);

//! btn.addEventListener("keydown", handleEvent);

// btn.addEventListener("mouseleave", handleEvent);

inputAction?.addEventListener("blur", handleEvent);

window.addEventListener("scroll", handleEvent);

// form?.addEventListener("submit", handleEvent);
