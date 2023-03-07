import "./../css/style.css";

const initAccordion = function () {
  const faqElement = document.querySelector(".faq");
  const faqItems = document.querySelectorAll(".faq__item");
  const faqButtons = document.querySelectorAll(".btn--faq");

  const closeFaqs = function () {
    faqItems.forEach((faqItem) => faqItem.classList.remove("active"));
    faqButtons.forEach((faqButton) =>
      faqButton.setAttribute("aria-expanded", false)
    );
  };

  const openFaq = function (target) {
    target.closest(".faq__item").classList.add("active");
    target.setAttribute("aria-expanded", true);
  };

  faqElement.addEventListener("click", (ev) => {
    const target = ev.target;
    if (target.classList.contains("btn--faq")) {
      closeFaqs();
      openFaq(target);
    }
  });
};

initAccordion();
