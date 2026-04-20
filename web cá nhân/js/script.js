document.addEventListener("DOMContentLoaded", () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine) and (min-width: 900px)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const smallViewport = window.matchMedia("(max-width: 859px)").matches;
    const richMotion = !reducedMotion;
    let canAnimate = richMotion && Boolean(window.gsap);
    let hasScrollTrigger = canAnimate && Boolean(window.ScrollTrigger);
    document.documentElement.classList.toggle("is-rich-motion", richMotion);
    document.documentElement.classList.toggle("is-lite-motion", !richMotion);
    if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
    }
    if (!window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }

    /* ======== MOBILE / LITE-MOTION FALLBACK ======== */
    /* Ensure ALL content is visible when GSAP won't animate */
    const ensureFallbackVisibility = () => {
        if (richMotion) return;
        const selectors = [
            '.hero__eyebrow', '.hero__subtitle', '.hero__actions',
            '.hero__quicklinks', '.profile-orbit', '.hero-chip',
            '.signal-stack', '.site-header', '.scroll-cue',
            '.split-hero', '.split-hero .char', '.split-hero .word', '.split-hero .line',
            '.split-text', '.split-text .char', '.split-text .word', '.split-text .line',
            '.hero-word', '.hero__title',
            '.reveal-up', '.reveal-scale', '.reveal-line', '.image-wipe',
            '[data-animate]', '.section-heading',
            '.project-card', '.stat-card', '.education-card',
            '.timeline-item', '.workflow-step',
            '.about__copy', '.about__media', '.about-pillars',
            '.about-flow', '.about-actions', '.about-proof',
            '.contact__intro', '.contact-panel',
            '.contact-title', '.contact__title',
            '.counter'
        ];
        selectors.forEach(sel => {
            document.querySelectorAll(sel).forEach(el => {
                el.style.opacity = '1';
                el.style.visibility = 'visible';
                el.style.transform = 'none';
                el.style.clipPath = 'none';
                el.style.filter = 'none';
            });
        });
        /* Show counters with final values */
        document.querySelectorAll('.counter').forEach(c => {
            c.textContent = c.dataset.target || '0';
        });
    };

    const setupScrollTrigger = () => {
        if (!hasScrollTrigger) return;
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.config({ limitCallbacks: true, ignoreMobileResize: true });
    };

    setupScrollTrigger();

    const getHashTarget = (href) => {
        if (!href || href === "#") return null;
        try {
            return document.querySelector(href);
        } catch (error) {
            return null;
        }
    };

    const loadScript = (src) => new Promise((resolve) => {
        let settled = false;
        let timer = 0;
        const finish = () => {
            if (settled) return;
            settled = true;
            window.clearTimeout(timer);
            resolve();
        };
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
            if (existing.dataset.ready) {
                resolve();
                return;
            }
            timer = window.setTimeout(finish, 1800);
            existing.addEventListener("load", finish, { once: true });
            existing.addEventListener("error", finish, { once: true });
            return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        script.crossOrigin = "anonymous";
        script.referrerPolicy = "no-referrer";
        script.addEventListener("load", () => {
            script.dataset.ready = "true";
            finish();
        }, { once: true });
        script.addEventListener("error", finish, { once: true });
        timer = window.setTimeout(finish, 1800);
        document.head.appendChild(script);
    });

    const loadMotionLibraries = async () => {
        if (!richMotion) return;
        if (!window.gsap) {
            await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js");
        }
        await Promise.all([
            window.ScrollTrigger ? Promise.resolve() : loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"),
            window.SplitType ? Promise.resolve() : loadScript("https://cdn.jsdelivr.net/npm/split-type@0.3.4/umd/index.min.js"),
            window.Lenis ? Promise.resolve() : loadScript("https://unpkg.com/lenis@1.1.20/dist/lenis.min.js")
        ]);
        canAnimate = richMotion && Boolean(window.gsap);
        hasScrollTrigger = canAnimate && Boolean(window.ScrollTrigger);
        setupScrollTrigger();
    };

    const runLoader = () => {
        const loader = document.querySelector(".loader");
        const mark = document.querySelector(".loader__mark");
        const pulse = document.querySelector(".loader__pulse");
        const line = document.querySelector(".loader__line span");

        if (!loader) return Promise.resolve();
        document.body.classList.add("is-locked");

        if (!canAnimate) {
            loader.remove();
            document.body.classList.remove("is-locked");
            ensureFallbackVisibility();
            return Promise.resolve();
        }

        return new Promise((resolve) => {
            gsap.timeline({
                defaults: { ease: "power3.out" },
                onComplete: () => {
                    loader.remove();
                    document.body.classList.remove("is-locked");
                    resolve();
                }
            })
                .fromTo(mark, { scale: 0.82, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.45 })
                .fromTo(pulse, { scale: 0.7, autoAlpha: 0 }, { scale: 1.25, autoAlpha: 1, duration: 0.7 }, 0.05)
                .to(line, { scaleX: 1, duration: 1.05, ease: "power2.inOut" }, 0.18)
                .to(mark, { scale: 1.08, autoAlpha: 0, duration: 0.35 }, 1.12)
                .to(pulse, { scale: 1.8, autoAlpha: 0, duration: 0.45 }, 1.1)
                .to(loader, { yPercent: -100, duration: 0.55, ease: "power3.inOut" }, 1.2);
        });
    };

    const splitText = () => {
        if (!canAnimate || !window.SplitType) return;
        document.querySelectorAll(".split-hero, .split-text").forEach((element) => {
            if (element.dataset.splitReady) return;
            const splitTypes = element.classList.contains('split-hero') ? "words, chars" : "lines, words, chars";
            new SplitType(element, { types: splitTypes, tagName: "span" });
            element.dataset.splitReady = "true";
        });
    };

    const animateHero = () => {
        if (!canAnimate) return;
        const words = document.querySelectorAll(".hero__title .hero-word");
        gsap.timeline({ defaults: { ease: "expo.out" } })
            .from(".site-header", { y: -28, autoAlpha: 0, duration: 0.6 })
            .from(".hero__eyebrow", { clipPath: "inset(0 100% 0 0)", duration: 0.65 }, "-=0.25")
            .from(words, { yPercent: 108, rotateX: -40, autoAlpha: 0, duration: 0.85, stagger: { amount: 0.45, from: "start" }, clearProps: "all" }, "-=0.2")
            .from(".hero__subtitle, .hero__actions", { y: 30, autoAlpha: 0, duration: 0.72, stagger: 0.08 }, "-=0.45")
            .from(".profile-orbit", { y: 54, scale: 0.92, autoAlpha: 0, duration: 0.95 }, "-=0.72")
            .from(".hero-chip, .signal-stack", { y: 22, autoAlpha: 0, duration: 0.62, stagger: 0.08 }, "-=0.42");
    };

    const revealOnScroll = () => {
        if (!hasScrollTrigger) {
            document.querySelectorAll(".counter").forEach((counter) => { counter.textContent = counter.dataset.target || "0"; });
            return;
        }

        const nonHeroRevealUp = gsap.utils.toArray(".reveal-up").filter((element) => !element.closest(".hero"));
        const nonHeroRevealScale = gsap.utils.toArray(".reveal-scale").filter((element) => !element.closest(".hero"));

        ScrollTrigger.batch(nonHeroRevealUp, {
            interval: 0.08,
            batchMax: 6,
            start: "top 88%",
            once: true,
            onEnter: (items) => gsap.from(items, { y: 38, autoAlpha: 0, duration: 0.7, ease: "power3.out", stagger: 0.08, lazy: true })
        });

        ScrollTrigger.batch(nonHeroRevealScale, {
            interval: 0.08,
            batchMax: 4,
            start: "top 88%",
            once: true,
            onEnter: (items) => gsap.from(items, { scale: 0.94, y: 22, autoAlpha: 0, duration: 0.72, ease: "power3.out", stagger: 0.08, lazy: true })
        });

        document.querySelectorAll(".reveal-line:not(.hero__eyebrow)").forEach((element) => {
            gsap.from(element, {
                clipPath: "inset(0 100% 0 0)",
                duration: 0.7,
                ease: "power3.out",
                lazy: true,
                scrollTrigger: { trigger: element, start: "top 90%", once: true }
            });
        });

        document.querySelectorAll(".split-text").forEach((element) => {
            const chars = element.querySelectorAll(".char");
            gsap.from(chars, {
                yPercent: 112,
                rotateX: -38,
                filter: "blur(10px)",
                autoAlpha: 0,
                duration: 0.86,
                ease: "expo.out",
                stagger: { each: 0.018, from: "start" },
                lazy: true,
                scrollTrigger: {
                    trigger: element,
                    start: "top 88%",
                    once: true,
                    onEnter: () => element.classList.add("is-revealed")
                }
            });
        });

        document.querySelectorAll(".image-wipe").forEach((element) => {
            gsap.from(element, {
                clipPath: "inset(0 0 100% 0)",
                duration: 0.9,
                ease: "power4.out",
                scrollTrigger: { trigger: element, start: "top 86%", once: true }
            });
        });

        document.querySelectorAll("[data-animate]").forEach((element) => {
            gsap.from(element, {
                y: 28,
                autoAlpha: 0,
                duration: 0.78,
                ease: "power3.out",
                scrollTrigger: { trigger: element, start: "top 88%", once: true }
            });
        });

        document.querySelectorAll(".counter").forEach((counter) => {
            const target = Number.parseFloat(counter.dataset.target || "0") || 0;
            const statCard = counter.closest(".stat-card") || counter;
            const state = { value: 0 };
            gsap.set(counter, { textContent: 0 });
            gsap.timeline({
                scrollTrigger: {
                    trigger: statCard,
                    start: "top 82%",
                    once: true,
                    onEnter: () => statCard.classList.add("is-counting")
                }
            })
                .fromTo(statCard, { scale: 0.96, filter: "brightness(0.82)" }, { scale: 1, filter: "brightness(1)", duration: 0.52, ease: "back.out(1.8)" })
                .to(state, {
                    value: target,
                    duration: 1.8,
                    ease: "power4.out",
                    snap: { value: 1 },
                    onUpdate: () => {
                        counter.textContent = Math.round(state.value).toLocaleString("en-US");
                    }
                }, 0.04);
        });
    };

    const headerState = () => {
        const header = document.querySelector("[data-header]");
        if (!header) return;
        const update = () => header.classList.toggle("is-scrolled", window.scrollY > Math.max(80, window.innerHeight * 0.22));
        update();
        window.addEventListener("scroll", update, { passive: true });
    };

    const activeNavigation = () => {
        if (!hasScrollTrigger) return;
        const links = Array.from(document.querySelectorAll(".desktop-nav a"));
        links.forEach((link) => {
            const section = getHashTarget(link.getAttribute("href"));
            if (!section) return;
            ScrollTrigger.create({
                trigger: section,
                start: "top center",
                end: "bottom center",
                onToggle: (self) => link.classList.toggle("is-active", self.isActive)
            });
        });
    };

    const parallax = () => {
        if (!hasScrollTrigger) return;
        document.querySelectorAll(".parallax-item").forEach((element) => {
            if (element.closest(".hero")) return;
            const speed = Number(element.dataset.speed || 0.08);
            gsap.to(element, {
                yPercent: speed * 100,
                ease: "none",
                scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub: true }
            });
        });
    };

    const projectImageParallax = () => {
        if (!hasScrollTrigger) return;
        document.querySelectorAll(".project-card__media img").forEach((image) => {
            gsap.fromTo(image,
                { yPercent: -7, scale: 1.12 },
                {
                    yPercent: 9,
                    scale: 1.18,
                    ease: "none",
                    scrollTrigger: {
                        trigger: image.closest(".project-card"),
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 0.55
                    }
                }
            );
        });
    };

    const sectionTransitions = () => {
        if (!hasScrollTrigger) return;
        document.querySelectorAll(".section:not(.hero)").forEach((section) => {
            gsap.fromTo(section,
                { "--section-progress": "0%" },
                {
                    "--section-progress": "100%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );
        });
    };

    const mobileMenu = () => {
        const toggle = document.querySelector(".menu-toggle");
        const menu = document.querySelector(".mobile-menu");
        if (!toggle || !menu) return;

        const setOpen = (open) => {
            toggle.classList.toggle("is-open", open);
            menu.classList.toggle("is-open", open);
            toggle.setAttribute("aria-expanded", String(open));
            toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
            menu.setAttribute("aria-hidden", String(!open));
            document.body.classList.toggle("is-locked", open);
        };

        toggle.addEventListener("click", () => setOpen(!menu.classList.contains("is-open")));
        menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setOpen(false)));
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") setOpen(false);
        });
    };

    let lenis;
    const initLenis = () => {
        if (!richMotion || !window.Lenis) return;
        lenis = new Lenis({
            autoRaf: false,
            lerp: 0.055,
            smoothWheel: true,
            syncTouch: true
        });

        if (hasScrollTrigger && window.gsap) {
            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time) => {
                lenis.raf(time * 1000);
            });
            gsap.ticker.lagSmoothing(0);
        }
    };

    const smoothAnchors = () => {
        const getAnchorOffset = () => {
            const header = document.querySelector("[data-header]");
            const height = header ? header.getBoundingClientRect().height : 72;
            return Math.max(84, Math.round(height + 24));
        };

        const scrollToTarget = (target, behavior = reducedMotion ? "auto" : "smooth") => {
            if (lenis && target) {
                lenis.scrollTo(target, { offset: -getAnchorOffset() });
            } else {
                const top = target.getBoundingClientRect().top + window.scrollY - getAnchorOffset();
                window.scrollTo({ top: Math.max(0, top), left: 0, behavior });
            }
        };

        document.querySelectorAll('a[href^="#"]').forEach((link) => {
            link.addEventListener("click", (event) => {
                const href = link.getAttribute("href");
                const target = getHashTarget(href);
                if (!target) return;
                event.preventDefault();
                scrollToTarget(target);
                if (href && href !== window.location.hash) {
                    window.history.pushState(null, "", href);
                }
            });
        });

        if (window.location.hash) {
            const target = getHashTarget(window.location.hash);
            if (target) {
                window.setTimeout(() => scrollToTarget(target, "auto"), 80);
            }
        }
    };

    const tilt = () => {
        if (!finePointer || !canAnimate) return;
        const cards = new Set([
            ...document.querySelectorAll("[data-tilt]"),
            ...document.querySelectorAll(".stat-card")
        ]);
        cards.forEach((card) => {
            const isProject = card.classList.contains("project-card");
            const isStat = card.classList.contains("stat-card");
            const rotateStrength = isProject ? 10 : isStat ? 7 : 5;
            const lift = isProject ? -8 : isStat ? -6 : -4;

            card.addEventListener("mousemove", (event) => {
                const rect = card.getBoundingClientRect();
                const x = (event.clientX - rect.left) / rect.width - 0.5;
                const y = (event.clientY - rect.top) / rect.height - 0.5;
                gsap.to(card, {
                    rotateX: y * -rotateStrength,
                    rotateY: x * rotateStrength,
                    z: isProject ? 20 : 10,
                    y: lift,
                    duration: 0.42,
                    ease: "power3.out",
                    transformPerspective: 1000,
                    overwrite: "auto"
                });
            });
            card.addEventListener("mouseenter", () => card.classList.add("is-card-hot"));
            card.addEventListener("mouseleave", () => {
                card.classList.remove("is-card-hot");
                gsap.to(card, { rotateX: 0, rotateY: 0, z: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.34)", overwrite: "auto" });
            });
        });
    };

    const magnetic = () => {
        if (!finePointer || !canAnimate) return;
        const magneticTargets = new Set([
            ...document.querySelectorAll(".magnetic"),
            ...document.querySelectorAll("button, .button, .copy-email, .contact__email, .project-card")
        ]);

        magneticTargets.forEach((element) => {
            const isCard = element.classList.contains("project-card");
            const pull = isCard ? 0.08 : 0.2;
            const maxOffset = isCard ? 18 : 24;

            element.addEventListener("mousemove", (event) => {
                const rect = element.getBoundingClientRect();
                const rawX = (event.clientX - rect.left - rect.width / 2) * pull;
                const rawY = (event.clientY - rect.top - rect.height / 2) * pull;
                const x = gsap.utils.clamp(-maxOffset, maxOffset, rawX);
                const y = gsap.utils.clamp(-maxOffset, maxOffset, rawY);
                gsap.to(element, { x, y, duration: isCard ? 0.42 : 0.28, ease: "power3.out", overwrite: "auto" });
            });
            element.addEventListener("mouseleave", () => gsap.to(element, { x: 0, y: 0, duration: 0.65, ease: "elastic.out(1, 0.35)", overwrite: "auto" }));
            if (!isCard) {
                element.addEventListener("mousedown", () => gsap.to(element, { scale: 0.96, duration: 0.12, overwrite: "auto" }));
                element.addEventListener("mouseup", () => gsap.to(element, { scale: 1, duration: 0.28, ease: "elastic.out(1, 0.45)", overwrite: "auto" }));
            }
        });
    };

    const spotlightCards = () => {
        if (!finePointer || reducedMotion) return;
        document.querySelectorAll(".project-card, .stat-card, .education-card").forEach((card) => {
            card.addEventListener("pointermove", (event) => {
                const rect = card.getBoundingClientRect();
                const x = ((event.clientX - rect.left) / rect.width) * 100;
                const y = ((event.clientY - rect.top) / rect.height) * 100;
                card.style.setProperty("--mx", `${x}%`);
                card.style.setProperty("--my", `${y}%`);
            }, { passive: true });
        });
    };

    const cursor = () => {
        if (!finePointer || reducedMotion) return;
        const dot = document.querySelector(".cursor-dot");
        const ring = document.querySelector(".cursor-ring");
        if (!dot || !ring) return;

        const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const ringPosition = { x: pointer.x, y: pointer.y };
        let visible = false;
        let rafId = 0;

        const render = () => {
            ringPosition.x += (pointer.x - ringPosition.x) * 0.16;
            ringPosition.y += (pointer.y - ringPosition.y) * 0.16;
            dot.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0) translate(-50%, -50%)`;
            ring.style.transform = `translate3d(${ringPosition.x}px, ${ringPosition.y}px, 0) translate(-50%, -50%)`;
            rafId = window.requestAnimationFrame(render);
        };

        window.addEventListener("pointermove", (event) => {
            pointer.x = event.clientX;
            pointer.y = event.clientY;
            if (!visible) {
                visible = true;
                dot.style.opacity = "1";
                ring.style.opacity = "1";
                rafId = window.requestAnimationFrame(render);
            }
        }, { passive: true });

        window.addEventListener("pointerleave", () => {
            visible = false;
            dot.style.opacity = "0";
            ring.style.opacity = "0";
            window.cancelAnimationFrame(rafId);
        });

        document.querySelectorAll("a, button, img, .project-card, .stat-card, [data-tilt]").forEach((item) => {
            item.addEventListener("mouseenter", () => ring.classList.add("is-hot"));
            item.addEventListener("mouseleave", () => ring.classList.remove("is-hot"));
        });
    };

    const copyEmail = () => {
        const button = document.querySelector(".copy-email");
        if (!button) return;
        const original = button.textContent;
        button.addEventListener("click", async () => {
            try {
                await navigator.clipboard.writeText(button.dataset.copy || "");
                button.textContent = "Copied";
            } catch (error) {
                button.textContent = button.dataset.copy || original;
            }
            window.setTimeout(() => { button.textContent = original; }, 1600);
        });
    };

    const universalInteractions = () => {
        const selector = [
            "a",
            "button",
            ".button",
            ".surface-link",
            ".contact-route",
            ".copy-email",
            ".project-card a",
            ".tech-tags span",
            ".skill-pill",
            ".about-flow span"
        ].join(",");

        document.querySelectorAll(selector).forEach((element) => {
            element.classList.add("interactive-surface");

            element.addEventListener("pointerdown", (event) => {
                element.classList.add("is-pressing");
                if (reducedMotion) return;

                const rect = element.getBoundingClientRect();
                element.style.setProperty("--tap-x", `${event.clientX - rect.left}px`);
                element.style.setProperty("--tap-y", `${event.clientY - rect.top}px`);
                element.querySelectorAll(":scope > .tap-ripple").forEach((ripple) => ripple.remove());
                const ripple = document.createElement("span");
                ripple.className = "tap-ripple";
                ripple.setAttribute("aria-hidden", "true");
                ripple.style.left = `${event.clientX - rect.left}px`;
                ripple.style.top = `${event.clientY - rect.top}px`;
                element.appendChild(ripple);
                element.classList.remove("is-rippling");
                void element.offsetWidth;
                element.classList.add("is-rippling");
            }, { passive: true });

            ["pointerup", "pointercancel", "pointerleave", "blur"].forEach((type) => {
                element.addEventListener(type, () => element.classList.remove("is-pressing"), { passive: true });
            });

            element.addEventListener("animationend", (event) => {
                if (event.animationName === "tap-ripple") {
                    element.classList.remove("is-rippling");
                    event.target.remove();
                }
            });
        });
    };

    const waitForFonts = async () => {
        if (!document.fonts || !document.fonts.ready) return;
        await Promise.race([
            document.fonts.ready,
            new Promise((resolve) => window.setTimeout(resolve, 900))
        ]);
    };

    const init = async () => {
        /* Immediately show content for non-rich-motion devices */
        ensureFallbackVisibility();
        await loadMotionLibraries();
        if (richMotion) await waitForFonts();
        initLenis();
        splitText();
        smoothAnchors();
        mobileMenu();
        copyEmail();
        universalInteractions();
        headerState();
        activeNavigation();
        await runLoader();
        animateHero();
        revealOnScroll();
        parallax();
        projectImageParallax();
        sectionTransitions();
        tilt();
        magnetic();
        spotlightCards();
        cursor();
        if (hasScrollTrigger) {
            window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
            ScrollTrigger.refresh();
        }
        /* Final safety: ensure everything shows after all setup */
        if (!richMotion) {
            requestAnimationFrame(ensureFallbackVisibility);
        }
    };

    init();
});
