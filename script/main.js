const navbar_bars = document.getElementById('navbar_bars');
const navbar_container = document.getElementById('navbar_container');
const programs_right = document.querySelectorAll('.programs__program-right');
const programs_left = document.querySelectorAll('.programs__program-left');
const programs = [...programs_left, ...programs_right];

navbar_bars.addEventListener("click", ()=> {
    navbar_container.classList.toggle( 'navbar__active' );
});

const options = {
    threshold: .45
};

const callback = ( entries )=> { 
    entries.forEach( entry => {
        if( entry.isIntersecting ) {
            const entry_classlist = entry.target.classList;
            if( entry_classlist.contains('programs__program-right') ) {
                entry_classlist.add('fadeIn-right');
            }else {
                console.log(entry.target)
                entry_classlist.add('fadeIn-left');
            }
            
        }
    });
};

const observer = new IntersectionObserver( callback, options );

if( programs ) {
    programs.forEach( node => {
        observer.observe( node );
    });
}


