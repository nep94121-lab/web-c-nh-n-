document.addEventListener("DOMContentLoaded", () => {
    // 1. Register Plugins
    gsap.registerPlugin(ScrollTrigger);

    // 2. Lenis Strict Smooth
    const lenis = new Lenis({
        duration: 1.5, // slightly slower, very smooth
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    // 3. Brutal Custom Cursor Update
    const cursor = document.querySelector('.cursor');
    const xTo = gsap.quickTo(cursor, "x", {duration: 0.1, ease: "power3"});
    const yTo = gsap.quickTo(cursor, "y", {duration: 0.1, ease: "power3"});
    
    window.addEventListener("mousemove", e => {
        xTo(e.clientX);
        yTo(e.clientY);
    });

    // Cursor States
    document.querySelectorAll('.projects-list .project-item').forEach(item => {
        item.addEventListener('mouseenter', () => cursor.classList.add('project-hover'));
        item.addEventListener('mouseleave', () => cursor.classList.remove('project-hover'));
    });
    document.querySelectorAll('a, .f-link').forEach(item => {
        item.addEventListener('mouseenter', () => cursor.classList.add('link-hover'));
        item.addEventListener('mouseleave', () => cursor.classList.remove('link-hover'));
    });

    // 4. Heavy Text Reveal (Expo.out brutalism)
    const splitRuns = document.querySelectorAll('.split-run');
    splitRuns.forEach(el => {
        // Splitting into lines & chars
        const textToSplit = new SplitType(el, { types: 'lines, words, chars' });
        
        // Hide lines overflow explicitly with GSAP (more reliable than css sometimes)
        gsap.set(textToSplit.lines, { overflow: 'hidden' });

        // The animation
        gsap.from(textToSplit.chars, {
            scrollTrigger: {
                trigger: el,
                start: "top 95%", // Trigger right before it appears
                toggleActions: "play none none none"
            },
            y: "150%",
            rotationZ: 10,
            opacity: 0,
            stagger: 0.015,
            duration: 1.2,
            ease: "expo.out"
        });
    });

    // 4b. Sub-items fade up
    gsap.utils.toArray('.fade-up').forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 95%",
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        });
    });

    // 5. Magnetics with more snap
    const magnetics = document.querySelectorAll('.magnetic');
    magnetics.forEach((el) => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const strength = el.dataset.strength || 20;
            const bgX = (e.clientX - rect.left - rect.width / 2) * (strength/100);
            const bgY = (e.clientY - rect.top - rect.height / 2) * (strength/100);

            gsap.to(el, { x: bgX, y: bgY, duration: 0.4, ease: "power3.out" });
        });
        el.addEventListener('mouseleave', () => {
            gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
        });
    });

    // 6. Brutal Wipe Projects & Inner Parallax
    if(window.innerWidth > 900) {
        const wipeImages = document.querySelectorAll('.wipe-image');
        const projectItems = document.querySelectorAll('.project-item');
        
        // Sticky wrapper
        ScrollTrigger.create({
            trigger: ".projects-section",
            start: "top top",
            end: "bottom bottom",
            pin: ".projects-images-wrapper",
            scrub: true
        });

        // Set up interactions
        projectItems.forEach((item, index) => {
            // Scroll Sync
            ScrollTrigger.create({
                trigger: item,
                start: "top center",
                end: "bottom center",
                onEnter: () => setActiveWipe(index),
                onEnterBack: () => setActiveWipe(index),
            });

            // Hover Sync
            item.addEventListener("mouseenter", () => setActiveWipe(index));
        });

        function setActiveWipe(index) {
            projectItems.forEach(i => i.classList.remove('active'));
            
            // For wipe effect, we use CSS transition on clip-path. Unset active for old, set for new.
            // But we don't want them all to disappear, typically we just bring current to front and clip it open
            wipeImages.forEach((img, i) => {
                if(i === index) {
                    img.style.zIndex = 2;
                    img.classList.add('active'); // CSS will handle clip-path expansion
                } else {
                    img.style.zIndex = 1;
                    img.classList.remove('active'); // Shrink it back implicitly
                }
            });
            
            projectItems[index].classList.add('active');
        }

        // Inner Image Parallax logic
        gsap.utils.toArray('.parallax-img').forEach(img => {
            gsap.to(img, {
                scrollTrigger: {
                    trigger: img.parentElement.parentElement, // Container
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
                y: "15%", // Move opposite to scroll
                ease: "none"
            });
        });
    }

});
