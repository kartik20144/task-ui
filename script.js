// // document.addEventListener('DOMContentLoaded', function () {
// //     const onlineIdInput = document.getElementById('online-id');
// //     const passwordInput = document.getElementById('password');
// //     const loginBtn = document.getElementById('login-btn');
// //     const togglePasswordSpan = document.getElementById('toggle-password');

// //     function validateForm() {
// //         const onlineIdValue = onlineIdInput.value.trim();
// //         const passwordValue = passwordInput.value.trim();

// //         // Toggle the 'active' class based on input values
// //         if (onlineIdValue && passwordValue) {
// //             loginBtn.disabled = false;
// //             loginBtn.classList.add('active');
// //         } else {
// //             loginBtn.disabled = true;
// //             loginBtn.classList.remove('active');
// //         }

// //         // Add green border if inputs are not empty
// //         if (onlineIdValue) {
// //             onlineIdInput.classList.add('input-valid');
// //         } else {
// //             onlineIdInput.classList.remove('input-valid');
// //         }

// //         if (passwordValue) {
// //             passwordInput.classList.add('input-valid');
// //         } else {
// //             passwordInput.classList.remove('input-valid');
// //         }
// //     }

// //     function togglePasswordVisibility() {
// //         if (passwordInput.type === 'password') {
// //             passwordInput.type = 'text';
// //             togglePasswordSpan.textContent = 'Hide';
// //         } else {
// //             passwordInput.type = 'password';
// //             togglePasswordSpan.textContent = 'Show';
// //         }
// //     }

// //     onlineIdInput.addEventListener('input', validateForm);
// //     passwordInput.addEventListener('input', validateForm);
// //     togglePasswordSpan.addEventListener('click', togglePasswordVisibility);
// // });
// document.addEventListener('DOMContentLoaded', function () {
//     const onlineIdInput = document.getElementById('online-id');
//     const passwordInput = document.getElementById('password');
//     const loginBtn = document.getElementById('login-btn');
//     const togglePasswordSpan = document.getElementById('toggle-password');
//     const coverImage = document.querySelector('.cover-image'); // Select the cover image

//     function validateForm() {
//         const onlineIdValue = onlineIdInput.value.trim();
//         const passwordValue = passwordInput.value.trim();

//         // Toggle the 'active' class based on input values
//         if (onlineIdValue && passwordValue) {
//             loginBtn.disabled = false;
//             loginBtn.classList.add('active');
//         } else {
//             loginBtn.disabled = true;
//             loginBtn.classList.remove('active');
//         }

//         // Add green border if inputs are not empty
//         if (onlineIdValue) {
//             onlineIdInput.classList.add('input-valid');
//         } else {
//             onlineIdInput.classList.remove('input-valid');
//         }

//         if (passwordValue) {
//             passwordInput.classList.add('input-valid');
//         } else {
//             passwordInput.classList.remove('input-valid');
//         }
//     }

//     function togglePasswordVisibility() {
//         if (passwordInput.type === 'password') {
//             passwordInput.type = 'text';
//             togglePasswordSpan.textContent = 'Hide';
//         } else {
//             passwordInput.type = 'password';
//             togglePasswordSpan.textContent = 'Show';
//         }
//     }

//     function animateImage() {
//         gsap.to(coverImage, {
//             scaleX: 0,
//             scaleY: 0,
//             transformOrigin: "center center",
//             duration: 1,
//             onComplete: function() {
//                 gsap.fromTo(coverImage,
//                     { scaleX: 0, scaleY: 0 },
//                     { scaleX: 1, scaleY: 1, duration: 1, transformOrigin: "center center" }
//                 );
//             }
//         });
//     }

//     loginBtn.addEventListener('click', function() {
//         if (!loginBtn.disabled) {
//             animateImage();
//         }
//     });

//     onlineIdInput.addEventListener('input', validateForm);
//     passwordInput.addEventListener('input', validateForm);
//     togglePasswordSpan.addEventListener('click', togglePasswordVisibility);
// });
document.addEventListener("DOMContentLoaded", function () {
  const onlineIdInput = document.getElementById("online-id");
  const passwordInput = document.getElementById("password");
  const loginBtn = document.getElementById("login-btn");
  const coverImage = document.querySelector(".cover-image");
  const leftHalf = document.querySelector(".left-half");
  const rightHalf = document.querySelector(".right-half");
  const logo = document.querySelector(".logo");
  const header = document.querySelector(".header");
  const login = document.querySelector(".login-form");

  function validateForm() {
    const onlineIdValue = onlineIdInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (onlineIdValue && passwordValue) {
      loginBtn.disabled = false;
      loginBtn.classList.add("active");
    } else {
      loginBtn.disabled = true;
      loginBtn.classList.remove("active");
    }

    if (onlineIdValue) {
      onlineIdInput.classList.add("input-valid");
    } else {
      onlineIdInput.classList.remove("input-valid");
    }

    if (passwordValue) {
      passwordInput.classList.add("input-valid");
    } else {
      passwordInput.classList.remove("input-valid");
    }
  }

    function animateLogin() {
      gsap.to(logo, {
        scale: 1.5,
        x:"50vw",
        y:"50vh",
        duration: 0,
        ease: "power1.inOut",
      });
      gsap.to(coverImage, {
        scale: 0,
        duration: 1,
        transformOrigin: "center center",
        ease: "power1.inOut",
      });
      gsap.to(leftHalf, {
        y: "100%",
        // Move left half out of view
        display: "none",
        duration: 3,
        ease: "power1.inOut",
        onComplete: () => {
          // Step 2: Expand the image to full screen
          gsap.to(rightHalf, {
            width: "100%",
            // Move left half out of view
            duration: 1,
            ease: "power1.inOut",
            onComplete: () => {

              gsap.to(coverImage, {
                scale: 1,
                duration: 2,
                transformOrigin: "center center",
                ease: "power1.inOut",
                onComplete: () => {
                  // Step 4: Return the screen to the original state
                  gsap.to(leftHalf, {
                    display: "block",
                    y: "0%", // Reset position
                    duration: 2,
                    ease: "power1.inOut",
                  });

                  gsap.to(rightHalf, {
                    width: "50%", // Assuming original width is 50%
                    duration: 2,
                    ease: "power1.inOut",
                  });

                  gsap.to(coverImage, {
                    scale: 1, // Assuming original scale is 1
                    duration: 2,
                    transformOrigin: "center center",
                    ease: "power1.inOut",
                  });
                  gsap.to(logo, {
                    scale: 1,
                    x: "0vw",
                    y: "0vh",
                    duration: 2,
                    transformOrigin: "center center",
                    ease: "power1.inOut",
                  });
                },
              });
            },
          });
        },
      });
    }

    
      
 
  

  loginBtn.addEventListener("click", animateLogin);
  onlineIdInput.addEventListener("input", validateForm);
  passwordInput.addEventListener("input", validateForm);
});
