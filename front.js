
//for the switch in the about us 
var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-content");
        function opentab(tabname) {
          for (tablink of tablinks) {
            tablink.classList.remove("active-link");
          }
          for (tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
          }
          event.currentTarget.classList.add("active-link");
          document.getElementById(tabname).classList.add("active-tab");
        }

//for the protofolio
        var links = document.getElementsByClassName("protfolio_link");
        var contents = document.getElementsByClassName("protfolio_content");
        function tab(tabname) {
          for (tablink of links) {
            tablink.classList.remove("active_link");
          }
          for (tabcontent of contents) {
            tabcontent.classList.remove("active_tab");
          }
          event.currentTarget.classList.add("active_link");
          document.getElementById(tabname).classList.add("active_tab");
        }

// for the scroll to top
        const toTop = document.querySelector(".top");
        window.addEventListener("scroll",()=>{
          if(window.pageYOffset>100){
          toTop.classList.add("active");
        }else{
          toTop.classList.remove("active");
        }
        })
