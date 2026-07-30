// ===========================
// BallTrueDay
// script.js
// ===========================

document.addEventListener("DOMContentLoaded", () => {

    console.log("BallTrueDay Loaded");

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

});

// Header Shadow

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(!header) return;

    if(window.scrollY>30){

        header.style.boxShadow="0 10px 35px rgba(0,0,0,.35)";

    }else{

        header.style.boxShadow="none";

    }

});
