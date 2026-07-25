/* ==========================================
   Lite Music JavaScript
   Author: ChatGPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");
    const themeBtn = document.getElementById("themeBtn");

    /* ===========================
       Mobile Menu
    =========================== */

    if(menuBtn){

        menuBtn.addEventListener("click",()=>{

            nav.classList.toggle("active");

        });

    }

    /* ===========================
       Close Mobile Menu
    =========================== */

    document.querySelectorAll("#nav a").forEach(link=>{

        link.addEventListener("click",()=>{

            nav.classList.remove("active");

        });

    });

    /* ===========================
       Dark Mode
    =========================== */

    if(localStorage.getItem("theme")=="dark"){

        document.body.classList.add("dark");

        if(themeBtn){

            themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

        }

    }

    if(themeBtn){

        themeBtn.addEventListener("click",()=>{

            document.body.classList.toggle("dark");

            if(document.body.classList.contains("dark")){

                localStorage.setItem("theme","dark");

                themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

            }else{

                localStorage.setItem("theme","light");

                themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

            }

        });

    }

    /* ===========================
       Search Music Cards
    =========================== */

    const searchInput=document.querySelector(".hero-search input");
    const cards=document.querySelectorAll(".music-card");

    if(searchInput){

        searchInput.addEventListener("keyup",()=>{

            const value=searchInput.value.toLowerCase();

            cards.forEach(card=>{

                const text=card.innerText.toLowerCase();

                if(text.includes(value)){

                    card.style.display="block";

                }else{

                    card.style.display="none";

                }

            });

        });

    }

    /* ===========================
       Play Demo
    =========================== */

    document.querySelectorAll(".buttons button:first-child").forEach(btn=>{

        btn.addEventListener("click",()=>{

            alert("Demo Player\n\nConnect this button to your MP3 player.");

        });

    });

    /* ===========================
       Download Demo
    =========================== */

    document.querySelectorAll(".buttons button:last-child").forEach(btn=>{

        btn.addEventListener("click",()=>{

            alert("Download feature coming soon.");

        });

    });

    /* ===========================
       Newsletter
    =========================== */

    const form=document.querySelector(".newsletter form");

    if(form){

        form.addEventListener("submit",(e)=>{

            e.preventDefault();

            const email=form.querySelector("input").value;

            if(email===""){

                alert("Please enter your email.");

                return;

            }

            alert("Thanks for subscribing!");

            form.reset();

        });

    }

    /* ===========================
       Smooth Scroll
    =========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    /* ===========================
       Reveal Animation
    =========================== */

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{
        threshold:0.2
    });

    document.querySelectorAll(
        ".music-card,.artist,.news,.latest article"
    ).forEach(item=>{

        item.classList.add("hidden");

        observer.observe(item);

    });

});

/* ==========================================
   Digital Clock
========================================== */

function updateClock(){

    const now=new Date();

    const options={
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric'
    };

    const time=now.toLocaleTimeString();

    const date=now.toLocaleDateString(undefined,options);

    const clock=document.getElementById("clock");

    if(clock){

        clock.innerHTML=`${date}<br>${time}`;

    }

}

setInterval(updateClock,1000);

updateClock();

/* ==========================================
   Back To Top Button
========================================== */

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="20px";
topBtn.style.bottom="20px";
topBtn.style.width="45px";
topBtn.style.height="45px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#ff3c00";
topBtn.style.color="#fff";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.fontSize="20px";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
