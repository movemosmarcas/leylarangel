import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

// Registrar plugins solo en el cliente
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * Inicializa animaciones GSAP de manera segura para SSR
 */
export function initGSAP() {
    if (typeof window === 'undefined') return;

    // Configuración global de GSAP
    gsap.defaults({
        ease: 'power2.out',
        duration: 1,
    });

    // Configuración de ScrollTrigger
    ScrollTrigger.defaults({
        toggleActions: 'play none none reverse',
        markers: false,
    });
}

/**
 * Anima texto con efecto de aparición por caracteres/palabras/líneas
 */
export function animateText(
    selector: string | Element,
    options: {
        type?: 'chars' | 'words' | 'lines';
        stagger?: number;
        duration?: number;
        delay?: number;
        scrollTrigger?: boolean;
    } = {}
) {
    if (typeof window === 'undefined') return;

    const {
        type = 'chars',
        stagger = 0.03,
        duration = 0.8,
        delay = 0,
        scrollTrigger = true,
    } = options;

    const elements = typeof selector === 'string'
        ? document.querySelectorAll(selector)
        : [selector];

    elements.forEach((element) => {
        if (!element) return;

        const split = new SplitType(element as HTMLElement, { types: type });
        const targets = type === 'chars' ? split.chars : type === 'words' ? split.words : split.lines;

        if (!targets) return;

        gsap.set(targets, {
            opacity: 0,
            y: 20,
        });

        const animation = gsap.to(targets, {
            opacity: 1,
            y: 0,
            duration,
            stagger,
            delay,
            ease: 'power3.out',
        });

        if (scrollTrigger) {
            ScrollTrigger.create({
                trigger: element,
                start: 'top 80%',
                animation,
                once: true,
            });
        }
    });
}

/**
 * Anima elementos con fade in desde abajo
 */
export function fadeInUp(
    selector: string | Element | NodeListOf<Element>,
    options: {
        stagger?: number;
        duration?: number;
        delay?: number;
        y?: number;
        scrollTrigger?: boolean;
    } = {}
) {
    if (typeof window === 'undefined') return;

    const {
        stagger = 0.15,
        duration = 0.8,
        delay = 0,
        y = 60,
        scrollTrigger = true,
    } = options;

    const elements = typeof selector === 'string'
        ? document.querySelectorAll(selector)
        : selector instanceof NodeList
            ? selector
            : [selector];

    if (!elements || elements.length === 0) return;

    gsap.set(elements, {
        opacity: 0,
        y,
    });

    const animation = gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        delay,
        ease: 'power3.out',
    });

    if (scrollTrigger) {
        ScrollTrigger.create({
            trigger: elements[0],
            start: 'top 85%',
            animation,
            once: true,
        });
    }
}

/**
 * Anima elementos con fade in desde la izquierda
 */
export function fadeInLeft(
    selector: string | Element | NodeListOf<Element>,
    options: {
        stagger?: number;
        duration?: number;
        delay?: number;
        x?: number;
        scrollTrigger?: boolean;
    } = {}
) {
    if (typeof window === 'undefined') return;

    const {
        stagger = 0.15,
        duration = 0.8,
        delay = 0,
        x = -60,
        scrollTrigger = true,
    } = options;

    const elements = typeof selector === 'string'
        ? document.querySelectorAll(selector)
        : selector instanceof NodeList
            ? selector
            : [selector];

    if (!elements || elements.length === 0) return;

    gsap.set(elements, {
        opacity: 0,
        x,
    });

    const animation = gsap.to(elements, {
        opacity: 1,
        x: 0,
        duration,
        stagger,
        delay,
        ease: 'power3.out',
    });

    if (scrollTrigger) {
        ScrollTrigger.create({
            trigger: elements[0],
            start: 'top 85%',
            animation,
            once: true,
        });
    }
}

/**
 * Anima elementos con fade in desde la derecha
 */
export function fadeInRight(
    selector: string | Element | NodeListOf<Element>,
    options: {
        stagger?: number;
        duration?: number;
        delay?: number;
        x?: number;
        scrollTrigger?: boolean;
    } = {}
) {
    if (typeof window === 'undefined') return;

    const {
        stagger = 0.15,
        duration = 0.8,
        delay = 0,
        x = 60,
        scrollTrigger = true,
    } = options;

    const elements = typeof selector === 'string'
        ? document.querySelectorAll(selector)
        : selector instanceof NodeList
            ? selector
            : [selector];

    if (!elements || elements.length === 0) return;

    gsap.set(elements, {
        opacity: 0,
        x,
    });

    const animation = gsap.to(elements, {
        opacity: 1,
        x: 0,
        duration,
        stagger,
        delay,
        ease: 'power3.out',
    });

    if (scrollTrigger) {
        ScrollTrigger.create({
            trigger: elements[0],
            start: 'top 85%',
            animation,
            once: true,
        });
    }
}

/**
 * Anima elementos con escala
 */
export function scaleIn(
    selector: string | Element | NodeListOf<Element>,
    options: {
        stagger?: number;
        duration?: number;
        delay?: number;
        scale?: number;
        scrollTrigger?: boolean;
    } = {}
) {
    if (typeof window === 'undefined') return;

    const {
        stagger = 0.15,
        duration = 0.8,
        delay = 0,
        scale = 0.8,
        scrollTrigger = true,
    } = options;

    const elements = typeof selector === 'string'
        ? document.querySelectorAll(selector)
        : selector instanceof NodeList
            ? selector
            : [selector];

    if (!elements || elements.length === 0) return;

    gsap.set(elements, {
        opacity: 0,
        scale,
    });

    const animation = gsap.to(elements, {
        opacity: 1,
        scale: 1,
        duration,
        stagger,
        delay,
        ease: 'back.out(1.4)',
    });

    if (scrollTrigger) {
        ScrollTrigger.create({
            trigger: elements[0],
            start: 'top 85%',
            animation,
            once: true,
        });
    }
}

/**
 * Anima imágenes con efecto parallax
 */
export function parallaxImage(selector: string | Element) {
    if (typeof window === 'undefined') return;

    const elements = typeof selector === 'string'
        ? document.querySelectorAll(selector)
        : [selector];

    elements.forEach((element) => {
        if (!element) return;

        gsap.to(element, {
            y: -100,
            ease: 'none',
            scrollTrigger: {
                trigger: element,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
        });
    });
}

/**
 * Limpia todas las instancias de ScrollTrigger
 */
export function cleanupScrollTriggers() {
    if (typeof window === 'undefined') return;
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

/**
 * Refresca ScrollTrigger después de cambios en el DOM
 */
export function refreshScrollTrigger() {
    if (typeof window === 'undefined') return;
    ScrollTrigger.refresh();
}
