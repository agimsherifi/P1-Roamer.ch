var coll = document.getElementsByClassName("collapsible");
                  var i;
                  
                  for (i = 0; i < coll.length; i++) {
                    coll[i].addEventListener("click", function() {
                      this.classList.toggle("active");
                      var contenti = this.nextElementSibling;
                      if (contenti.style.display === "block") {
                        contenti.style.display = "none";
                      } else {
                        contenti.style.display = "block";
                      }
                    });
                    // Hide content by default
          var content = coll[i].nextElementSibling;
          content.style.display = "none";
        
                  }