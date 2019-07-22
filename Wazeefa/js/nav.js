
window.onscroll = function() {scrollFunction()}

                function scrollFunction() {
                    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                        document.getElementById('nav').style.top= "0";
                        document.getElementById('nav').style.background= "rgba(3, 20, 49, 100)";
                        document.getElementById('hs').src="sources/123w.png";
                        document.getElementById('as1').style.color= "#ffffff";
                        document.getElementById('as2').style.color= "#ffffff";
                        document.getElementById('as3').style.color= "#ffffff";
                        document.getElementById('as4').style.color= "#000000";
                        document.getElementById('as5').style.color= "#000000";
                        document.getElementById('l1').style.backgroundColor= "rgba(250, 250, 250, 0)";
                        document.getElementById('l2').style.backgroundColor= "rgba(250, 250, 250, 0)";
                        document.getElementById('l3').style.backgroundColor= "rgba(250, 250, 250, 0)";
                        document.getElementById('l4').style.backgroundColor= "rgba(250, 250, 250, 1)";
                        document.getElementById('l5').style.backgroundColor= "rgba(250, 250, 250, 1)";
                    } 
                    else {
                        document.getElementById('nav').style.background= "rgba(3, 20, 49, 0)";
                        document.getElementById('hs').src="sources/123.png";
                        document.getElementById('as1').style.color= "#000000";
                        document.getElementById('as2').style.color= "#000000";
                        document.getElementById('as3').style.color= "#000000";
                        document.getElementById('as4').style.color= "#ffffff";
                        document.getElementById('as5').style.color= "#ffffff";
                        document.getElementById('l1').style.backgroundColor= "rgba(250, 250, 250, 0.5)";
                        document.getElementById('l2').style.backgroundColor= "rgba(250, 250, 250, 0.5)";
                        document.getElementById('l3').style.backgroundColor= "rgba(250, 250, 250, 0.5)";
                        document.getElementById('l4').style.backgroundColor= "rgba(3, 20, 49, 0.5)";
                        document.getElementById('l5').style.backgroundColor= "rgba(3, 20, 49, 0.5)";
                    }
                }
