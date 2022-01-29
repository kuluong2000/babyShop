window.addEventListener("load", function () {
  $(".banner-content-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  });
  // $('.banner-slider').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   dots:true,
  //   arrows:false
  // });
  $(".sale-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  });
  $(".shope-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  });
  $(".about-slider").slick({
    Infinity: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode: true,
    variableWidth: true,
  });
  const header = document.querySelector(".header");
  const pageTop = document.querySelector(".scroll-top");
  pageTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
  window.addEventListener("scroll", handleScroll);
  function handleScroll() {
    let scrollTop = window.scrollY;
    if (scrollTop > 70) {
      header.classList.add("active-fixed");
      pageTop.classList.add("active");
      // document.body.style.paddingTop = `70px`;
    } else {
      header.classList.remove("active-fixed");
      pageTop.classList.remove("active");
      // document.body.style.paddingTop = `0`;
    }
  }

  const progress = document.querySelector(".progress");
  window.addEventListener("scroll", () => {
    const viewPort = document.documentElement.clientHeight;
    const screen = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset;
    let progressWidth = (scrollTop / (screen - viewPort)) * 100;
    progress.style.width = `${progressWidth}%`;
  });

  const item = document.querySelectorAll(".header-item");
  item.forEach((item) => item.addEventListener("mouseenter", handleHoverEffect));
  const line = document.createElement("div");
  line.className = "line-effect";
  document.body.appendChild(line);
  function handleHoverEffect(e) {
    const { width, top, left, height } = e.target.getBoundingClientRect();
    line.style.width = `${width}px`;
    line.style.top = `${top + height}px`;
    line.style.left = `${left}px`;
  }
  item.forEach((item) =>
    item.addEventListener("mouseleave", () => {
      line.style.width = 0;
    })
  );
  AOS.init();
});
