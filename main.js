// $(document).ready(function() {
//   $(window).scroll(scrollMoveIn);
//   $(window).scroll(NavigationFixed);
// });

// function scrollMoveIn() {
//   let scrollLocation = $(this).scrollTop();
//   console.log(scrollLocation);

//   if (scrollLocation >= 700) {
//     $('.isometric-box').css('left', 0);
//   }

// }

// function NavigationFixed() {
//   let scrollLocation = $(this).scrollTop();
//   if (scrollLocation >= 100) {
//     $('.navigation').css({
      // 'position': 'fixed',
      // 'border-bottom': '1px solid #D3D3D3',
      // 'background': 'white',
      // 'z-index': 100
//     });
//   } else {
//     $('.navigation').css({
//       'position': 'static',
//       'border-bottom': 'none',
//       'background': 'transparent',
//       'z-index': 0
//     });
//   }
// }

//position control object
const elementPosition = {
  burgerMenu: document.querySelector('.burger-menu'),
  backDrop: document.querySelector('.backdrop'),
  isometricBox: document.querySelector('.isometric-box'),
  navigation: document.querySelector('.navigation'),
  sideDrawer: document.querySelector('.sidedrawer'),
  sideDrawerItems: document.querySelectorAll('.sidedrawer-box__item'),
  scrollToTop: document.querySelector('.scroll-to-top')
};

function showSidedrawer () {
  elementPosition.sideDrawer.classList.add('sidedrawer--open');
  elementPosition.backDrop.classList.add('backdrop--open');
};

function closeSidedrawer () {
  elementPosition.sideDrawer.classList.remove('sidedrawer--open');
  elementPosition.backDrop.classList.remove('backdrop--open');
};

function scrollEffect () {
  const scrollPosition = window.scrollY;

  //navigation add fixed
  if (scrollPosition >= 100) {
    elementPosition.navigation.classList.add('navigation--fixed');
  } else {
    elementPosition.navigation.classList.remove('navigation--fixed');
  }
  //isometricBox effect
  if (scrollPosition >= 700) {
    elementPosition.isometricBox.style.left = 0;
  }

  //scroll-to-top display
  if (scrollPosition > 0) {
    elementPosition.scrollToTop.style.display = 'block';
  } else {
    elementPosition.scrollToTop.style.display = 'none';
  }
};

function scrollToTop () {
  if (window.scrollY != 0) {
    setTimeout(() => {
      window.scrollTo(0, scrollY - 30);
      //call self until scrollY equal to 0 --Recursion
      scrollToTop();
    }, 5);
  }
};

window.addEventListener('scroll', scrollEffect);
elementPosition.burgerMenu.addEventListener('click', showSidedrawer);
elementPosition.backDrop.addEventListener('click', closeSidedrawer);
//querySelectorAll return nodelist which can use forEach to loop through
elementPosition.sideDrawerItems.forEach(item => {
  item.addEventListener('click', closeSidedrawer);
});
elementPosition.scrollToTop.addEventListener('click', scrollToTop);

// window.addEventListener('scroll', function(e) {
//   console.log(this.scrollY);
//   if (this.scrollY >= 700) {
//     document.querySelectorAll('.service__item').forEach(el => {
//       console.log(el);
//       el.style.left = 0;
//       el.style.right = 0;
//     });
//   }
// });