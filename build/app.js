const menuBtns = document.querySelectorAll('[data-menu]');
const responsiveNav = document.querySelector('#responsive-nav');
const bgBlur = document.querySelector('#bg-blur')

const openBtn = document.querySelector("[data-menu='open']")
const closeBtn = document.querySelector("[data-menu='close']")
const navLinks = document.querySelectorAll('.nav-li');

let classes = ["absolute", "top-0", "right-0", "bg-white", "w-6/12", "h-screen", "py-32", "px-5", "z-30"]
let blurClases = ['bg-gray-500/50', 'z-10']

menuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.dataset.menu == 'open') {
            responsiveNav.classList.add(...classes); responsiveNav.classList.remove('hidden')
            bgBlur.classList.remove('-z-10'); bgBlur.classList.add(...blurClases);
            
            document.body.classList.add('overflow-y-hidden');
            closeBtn.classList.remove('hidden');
            navLinks.forEach(li => li.classList.add('mb-6'))
        } else {
            responsiveNav.classList.remove(...classes); responsiveNav.classList.add('hidden');
            bgBlur.classList.remove(...blurClases); bgBlur.classList.add('-z-10');

            document.body.classList.remove('overflow-y-hidden');
            closeBtn.classList.add('hidden');
            navLinks.forEach(li => li.classList.add('mb-6'));
        }
    })
})

// check the layout and fix the errors :)