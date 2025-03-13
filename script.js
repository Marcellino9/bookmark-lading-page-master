let currentTab = null;

function openTab(evt, tabName) {
  const tabcontent = document.getElementsByClassName("tabcontent");
  const tablinks = document.getElementsByClassName("tablinks");

  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].classList.remove("slide-right", "slide-left");
  }

  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  const activeTab = document.getElementById(tabName);
  activeTab.style.display = "block";

  if (currentTab) {
    const currentIndex = Array.from(tabcontent).indexOf(currentTab);
    const newIndex = Array.from(tabcontent).indexOf(activeTab);

    if (newIndex > currentIndex) {
      activeTab.classList.add("slide-right");
    } else {
      activeTab.classList.add("slide-left");
    }
  } else {
    activeTab.classList.add("slide-right");
  }

  currentTab = activeTab;
  evt.currentTarget.className += " active";
}

document.getElementById("Tab1").style.display = "block";
document.getElementById("Tab2").style.display = "none";
document.getElementById("Tab3").style.display = "none";
document.getElementsByClassName("tablinks")[0].className += " active";
currentTab = document.getElementById("Tab1");

const faq_head = document.querySelectorAll(".faq_head");
const response = document.querySelectorAll(".response");
const icon_row = document.querySelectorAll(".icon_row");

faq_head.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (
      response[index].style.maxHeight === "0px" ||
      !response[index].style.maxHeight
    ) {
      response[index].style.maxHeight = response[index].scrollHeight + "px";
      response[index].style.opacity = 1;
      response[index].style.marginTop = "7%";
      response[index].style.marginBottom = "7%";
      item.getElementsByTagName("p")[0].style.color = "hsl(0, 94%, 66%)";
    } else {
      response[index].style.maxHeight = "0px";
      response[index].style.opacity = 0;
      response[index].style.marginTop = "0";
      response[index].style.marginBottom = "0";
      item.getElementsByTagName("p")[0].style.color = " hsl(229, 31%, 21%)";
    }

    icon_row[index].classList.toggle("rotate");
  });
});

const handlechange = () => {
  let email = document.querySelector(".email");
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  regex.test(document.getElementById("my-input").value)
    ? email.classList.remove("error")
    : email.classList.add("error");
};

const nav_header = document.querySelector(".nav_header");
const ancre = document.querySelectorAll(".nav_header ul li a");

const handle_show_nav = () => {
  nav_header.style.display = "block";
};

const close_button = () => {
  nav_header.style.display = "none";
};

ancre.forEach((item, index) => {
  item.addEventListener("click", close_button);
});
