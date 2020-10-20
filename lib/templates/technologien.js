
const header = require('../components/header');
const footer= require('../components/footer');
const layoutTechnologie = require('../components/layout/layout-technologie') 
const infoTable = require('../components/info/info-tabel');
const upSlider = require('../components/info/up-slider');
const backgroundImgFixed = require('../components/layout/background-img-fixed');
const backgroundImg = require('../components/layout/background-img');


module.exports = class Technologien {
    nodejs() {
        return header() + 
        layoutTechnologie('Can Musstermann', 'Backened Enwicklerin', 'JAVA SCRIPT & PHP Experte', 'img/can.png', 'img/nodejs.png') + 
        infoTable('Ein paar Vorteile von Node.JS', 'Blitzschnelle Ausführung', 'Mit Node js kann man es schaffen Webanwendungen zu erstellen die sehr schnell in der Ausführung sind. In den meisten Fällen braucht es nicht einmal Ladezeit.',
        'Skalierbarkeit gegeben', 'Mit Node js lassen sich skalierbare Applikationen schreiben, welche eine sehr grosse Anzahl von Verbindungen/ Anfragen gleichzeitig handhaben kann (Stichwort: Non-Blocking I/O).',
        'Alles in einer Technologie', 'Mit dem MEAN Stack kann man heutzutage starke Anwendungen über alle Bereiche hinweg (Frontend, Backend, Datenbank) mit JS Technologien abdecken.') +
        backgroundImgFixed('img/nav01.jpg')  + 
        infoTable('Ein paar Vorteile von Node.JS', 'Blitzschnelle Ausführung', 'Mit Node js kann man es schaffen Webanwendungen zu erstellen die sehr schnell in der Ausführung sind. In den meisten Fällen braucht es nicht einmal Ladezeit.',
        'Skalierbarkeit gegeben', 'Mit Node js lassen sich skalierbare Applikationen schreiben, welche eine sehr grosse Anzahl von Verbindungen/ Anfragen gleichzeitig handhaben kann (Stichwort: Non-Blocking I/O).',
        'Alles in einer Technologie', 'Mit dem MEAN Stack kann man heutzutage starke Anwendungen über alle Bereiche hinweg (Frontend, Backend, Datenbank) mit JS Technologien abdecken.') +
        backgroundImg('img/nav02.jpg') +
        infoTable('Ein paar Vorteile von Node.JS', 'Blitzschnelle Ausführung', 'Mit Node js kann man es schaffen Webanwendungen zu erstellen die sehr schnell in der Ausführung sind. In den meisten Fällen braucht es nicht einmal Ladezeit.',
        'Skalierbarkeit gegeben', 'Mit Node js lassen sich skalierbare Applikationen schreiben, welche eine sehr grosse Anzahl von Verbindungen/ Anfragen gleichzeitig handhaben kann (Stichwort: Non-Blocking I/O).',
        'Alles in einer Technologie', 'Mit dem MEAN Stack kann man heutzutage starke Anwendungen über alle Bereiche hinweg (Frontend, Backend, Datenbank) mit JS Technologien abdecken.') +
        upSlider(
            'img/nav01.jpg', 'NODE JS', 'TEXT.......', 'img/nav01.jpg', 'NODE JS', 'TEXT.......', 'img/nav01.jpg', 'NODE JS', 'TEXT.......', 'img/nav01.jpg', 'NODE JS', 'TEXT.......'
        ) +
        footer();
    } 
    
    reactjs() {
        return header() + layoutTechnologie('Aylin Mayer', 'Frontend Enwicklerin', 'JAVA SCRIPT', 'img/aylin.png', 'img/reactjs.png') + footer();
    } 

    vuejs() {
        return header() + layoutTechnologie('Aylin Mayer', 'Frontend Enwicklerin', 'JAVA SCRIPT', 'img/aylin.png', 'img/vuejs.png') + footer();
    } 

    springboot() {
        return header() + layoutTechnologie('Kai Müller', 'Backend Enwicklerin', 'JAVA Experte', 'img/kai.png', 'img/springboot.png') + footer();
    } 

    docker() {
        return header() + layoutTechnologie('Can Musstermann', 'Backened Enwicklerin', 'JAVA SCRIPT & PHP Experte', 'img/can.png', 'img/docker.png') + footer();
    } 

    jakartaEe() {
        return header() + layoutTechnologie('Kai Müller', 'Backend Enwicklerin', 'JAVA Experte', 'img/kai.png', 'img/jakarta-ee.png') + footer();
    } 

    angular() {
        return header() + layoutTechnologie('Aylin Mayer', 'Frontend Enwicklerin', 'JAVA SCRIPT Expertin', 'img/aylin.png', 'img/angula.png') + footer();
    } 

    firstspirit() {
        return header() + layoutTechnologie('Aylin Mayer', 'Frontend Enwicklerin', 'JAVA SCRIPT Expertin', 'img/aylin.png', 'img/reactjs.png') + footer();
    } 
}

