document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelectorAll('.search_bar_input'),
        formInput = document.querySelectorAll('.search_bar');

    searchInput.forEach(elem => elem.addEventListener('focus', () => {
        formInput.forEach(bar => {
            bar.style.width = "50vw";
        });
    }));
    /* close by escape key */
    document.addEventListener('keyup', (event) => {
        if (event.code === 'Escape') {
            closeBarInput();
        }
    });
    /* close input by changing width to default value */
    function closeBarInput() {
        formInput.forEach(bar => bar.style.width = "");
    }
    /* close input by clicking somewhere  */
    function closeBarInputOutside(event) {
        if (!event.target.closest('.social-top')) {
            closeBarInput();
        } else if (event.target.closest('.social-top')) {
            formInput.forEach(bar => {
                bar.focus();
            });
        }
    }
    window.addEventListener('click', closeBarInputOutside);
    /* large menu here */

    let navItems = document.querySelectorAll('.nav-item'),
        dropBlock = document.querySelector('.dropdown-block'),
        nameLists = document.querySelectorAll('.name-list');
    const navbar = document.querySelector('header');
    let dataName;

    navItems.forEach(item => {
        navbar.addEventListener('mouseleave', e => {
            dropBlock.classList.add('d-none');
        });
        if (window.screen.width > 992) {
            item.addEventListener('mouseenter', manageLgMenu);
            function manageLgMenu(e) {
                removeList(dataName);
                if (item.hasAttribute('data-name')) {
                    dataName = item.getAttribute('data-name');
                    showList(dataName);
                } else {
                    dropBlock.classList.add('d-none');
                }

                function showList(dataName) {
                    nameLists.forEach(listname => {
                        if (dataName == listname.getAttribute('data-name')) {
                            dropBlock.classList.remove('d-none');
                            listname.classList.remove('d-none');
                        }
                    });

                }

                function removeList(dataName) {
                    nameLists.forEach(listname => {
                        if (dataName == listname.getAttribute('data-name')) {
                            dropBlock.classList.add('d-none');
                            listname.classList.add('d-none');
                        }
                    });

                }

            }
            item.addEventListener('keyup', (e) => {
                if (e.code === 'Enter') {
                    manageLgMenu(e);
                } else if (e.code === 'Escape') {
                    dropBlock.classList.add('d-none');
                }
            });

            nameLists.forEach(listname => {
                listname.addEventListener('mouseleave', function (e) {
                    closeList(dataName);
                    function closeList(dataName) {
                        nameLists.forEach(listname => {
                            if (dataName == listname.getAttribute('data-name')) {
                                dropBlock.classList.add('d-none');
                                listname.classList.add('d-none');
                            }
                        });
                    }
                });

            });

        } else if (window.screen.width) {
            dropBlock.classList.add('d-none');
        }
    });

    /* mobile menu here */

    const toggleMenuBtn = document.querySelector('#togglerMenu'),
        menuMobile = document.querySelector('.menu-sm');

    toggleMenuBtn.addEventListener('click', function (e) {
        if (e.target === this || e.target.dataset.action === 'mobileMenu') {
            document.querySelector('body').classList.toggle('overflow-hidden');
            this.classList.toggle('collapsed');
            menuMobile.classList.toggle('shown');
        } else {
            return;
        }
    });

    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    let prevScrollpos = window.scrollY;

    window.addEventListener('scroll', () => {
        let currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector('.main-header').style.top = "0";
        } else if (document.querySelector('body').getAttribute('class') === 'overflow-hidden' || window.screen.width < 992) {
            document.querySelector('.main-header').style.top = "0";
        } else {
            document.querySelector('.main-header').style.top = "-125px";
        }
        prevScrollpos = currentScrollPos;
        /* add position for the mobile menu dynamically */
        menuMobile.style.top = `${currentScrollPos + 112}px`;
        if (currentScrollPos === 0) {
            document.querySelector('.main-header').classList.remove('fixed-top');
        } else {
            document.querySelector('.main-header').classList.add('fixed-top');
            menuMobile.style.top = `${currentScrollPos + 112}px`;
        }
    });

    /* button scroll-to-top
    ================================================ */

    $(window).scroll(function () {

        if ($(window).scrollTop() > 300) {

            $('.scrollup').addClass('d-block');

        } else {

            $('.scrollup').removeClass('d-block');
        }
    });

    $('.scrollup').click(function () {

        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });

    /* scroll-to-top end */
    
});