let faqs = document.querySelectorAll(".faq");

faqs.forEach((e) => {
  e.addEventListener("click", () => {
    faqs.forEach((el) => {
      el !== e ? el.classList.remove("active") : "";
    });
    e.classList.toggle('active');
  });
});
